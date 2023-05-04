import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CRow,CTable,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormLabel,CFormInput,CBadge} from '@coreui/react';
import {cilCheck,cilPen} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../../services/api';
import { PopoverTitleIcon } from 'src/components/popover/PopoverTitleIcon';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [ list, setList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ firstName, setFirstName ] = useState('');
    const [ socialName, setSocialName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ phone , setPhone ] = useState();
    const [ textPhone , setTextPhone ] = useState('inválido');
    const isValidPhoneRegex = '\(([1-9]{2})\)([9]{1})([0-9]{4})\-([0-9]{4})';

    const popovercontent = 'Responsável por orientar a empresa em relação às melhores práticas para a proteção de dados pessoais'

    useEffect(() => {
        getList();
    }, []);

    const validatePhone = (e) => {
        if (isValidPhoneRegex.test(e)) {
          setPhone(e.target.value);
          setTextPhone('Válido');
          console.log('valido')
        } else {
          setPhone(0);
          setTextPhone('Inválido');
          console.log('invalido')
        }
      };

    const handleCloseModal = () => {
        setShowEditModal(false);
    }

    const handleEditButton =  async (id) => {
        sessionStorage.setItem('dpoId', id);
        setShowEditModal(true);
        const result = await api.actualDpo();
        if(result.error === undefined){
            setSocialName(result.socialName);
            setEmail(result.email);
            setFirstName(result.name);
        }
        else{
            alert(result.message);
        }
    }

    const handleUpdateButton =  async () => {
        const id = sessionStorage.getItem('dpoId');

        const dataRaw = {
            name: firstName,
            socialName,
            email
        }

        setLoading(true);
        const result = await api.dpoUpdateEmail(id ,dataRaw);
        setLoading(false);

        if(result.error === undefined){
            sessionStorage.removeItem('dpoId');
            window.location.reload();
        }else{
            alert(result.message);
        }
    }

    const getList = async () => {
        setLoading(true);
        const result = await api.dpoFindAll();
        setLoading(false);
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){

                let naturalPerson = 'Pessoa Jurídica'
                if(result[i].naturalPerson === true){
                    naturalPerson = 'Pessoa Física';
                }

                let statusComponent = <></>;
                let statusDpo = '';
                if(result[i].actual === true){
                    statusDpo = 'Atual'
                    statusComponent = <CBadge color='success'>{statusDpo}</CBadge>
                }
                else{
                    statusDpo = 'Inativo'
                    statusComponent = <CBadge color='danger'>{statusDpo}</CBadge>
                }

                if(result[i].actual === true){
                    result[i] = {
                        "id": `Dpo ID: ${i}`,
                        naturalPerson,
                        socialName: result[i].socialName,
                        "CBadge": statusComponent,
                        "CButtonEdit": <CButton onClick={() => handleEditButton(result[i].id)}><CIcon icon={cilPen}></CIcon></CButton>,
                    }
                }else{
                    result[i] = {
                        "id": `Dpo ID: ${i}`,
                        naturalPerson,
                        socialName: result[i].socialName,
                        "CBadge": statusComponent,
                        "CButtonEdit": <CButton disabled><CIcon icon={cilPen}></CIcon></CButton>,
                    }
                }
            }
            setList(result);
        }else{
            alert(result.message);
        }
    }

    const fields = [
        {label:'Identificação' , key:'id'},
        {label: 'Nome Social/Nome dos Integrantes do Comitê', key: 'socialName'},
        {label: 'Tipo', key: 'naturalPerson' },
        {label: 'Status', key: 'CBadge' },
        {label: 'Editar', key: 'CButtonEdit'},
    ];

    return (
        <>
            <CRow>

                <CCol>
                    <PopoverTitleIcon title='DPO' content={popovercontent} label='Encarregado dos Dados Pessoais'/>
                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" onClick={() => navigate('/lgpdfull/dpo/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Cadastrar Novo Encarregado
                            </CButton>
                        </CCardHeader>
                        <CCardBody>
                            <CTable
                                loading={loading.toString()}
                                items={list}
                                columns={fields}
                                hover
                            >
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CModal fullscreen visible={showEditModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Editar DPO</CModalHeader>
                <CModalBody>
                    <CForm>
                        <CFormInput label='Nome' type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormInput label='Nome Social ou Nome dos Integrantes do Comitê' type='text' required value={socialName} onChange={(e) => setSocialName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormInput label='E-mail' type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormInput label='Celular' type='text' required value={phone} onChange={validatePhone}></CFormInput>
                        {textPhone}
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton onClick={handleUpdateButton}>Atualizar</CButton>
                    <CButton color='danger' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>

        </>
    );
}
