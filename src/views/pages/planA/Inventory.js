import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CRow,CTable,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormLabel,CFormInput,CFormTextarea,CFormCheck, CFormSelect,} from '@coreui/react';
import {cilCheck,cilX,cilPen, cilDataTransferDown} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../../services/api';
import { PopoverTitleIcon } from 'src/components/popover/PopoverTitleIcon';

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [sectorsList, setSectorsList] = useState('');

    const [tagName, setTagName] = useState('');
    const [colletedData, setColletedData] = useState('');
    const [sourceData, setSourceData] = useState('');
    const [reasonData, setReasonData] = useState('');
    const [howStorage, setHowStorage] = useState('');
    const [securityData, setSecurityData] = useState('');
    const [deadlineData, setDeadlineData] = useState('');
    const [justification, setJustification] = useState('');
    const [underAgeData, setUnderAgeData] = useState(false);
    const [sensitiveData, setSensitiveData] = useState(false);
    const [controller, setController] = useState('');

    const popovercontent = 'Registro de todas as informações pessoais que uma organização coleta, processa e armazena sobre seus clientes, fornecedores, funcionários e outras partes interessadas.'

    useEffect(() => {
        getList();
        getSectorsList();
    }, []);

    const getSectorsList = async () => {
        const listResult = new Array()
        const result = await api.sectorFindAll();
        listResult.push('Escolha o setor do inventário');
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){
                let options = {
                    label: result[i].tagName,
                    value: result[i].id
                }

                listResult.push(options);
            }
            setSectorsList(listResult)
        }else{
            alert(result.message);
        }
    }

    const getList = async () => {
        setLoading(true);
        const result = await api.mappingFindAll();
        setLoading(false);
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){

                let createdAt = new Date(result[i].createdAt);
                createdAt = createdAt.toLocaleDateString();

                let updatedAt = new Date(result[i].updatedAt);
                updatedAt = updatedAt.toLocaleDateString();

                result[i] = {
                    "id": result[i].id,
                    "dpoId": result[i].dpoId,
                    "userId": result[i].userId,
                    "tagName": result[i].tagName,
                    createdAt,
                    updatedAt,
                    "CButtonDownload": <CButton onClick={() => {handleEditButton(result[i].id)}} color='success' ><CIcon  icon={cilDataTransferDown}></CIcon></CButton>,
                    "CButtonEdit": <CButton onClick={() => {handleEditButton(result[i].id)}}><CIcon icon={cilPen}></CIcon></CButton>,
                    "CButtonRemove": <CButton onClick={() => {handleDeleteModal(result[i].id)}} color="danger"><CIcon icon={cilX}></CIcon></CButton>
                }
            }
            setList(result)
        }else{
            alert(result.message);
        }
    }

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
        sessionStorage.removeItem('inventoryId');
    }

    const handleEditButton = async (id) => {
        sessionStorage.setItem('inventoryId', id);
        setShowEditModal(true);
        const result = await api.mappingFindOne(id);
        if(result.error === undefined){
            setTagName(result.tagName);
            setColletedData(result.colletedData);
            setSourceData(result.sourceData);
            setReasonData(result.reasonData);
            setHowStorage(result.howStorage);
            setSecurityData(result.securityData);
            setDeadlineData(result.deadlineData);
            setJustification(result.justification);
            setUnderAgeData(result.underAgeData);
            setSensitiveData(result.sensitiveData);
            setController(result.controller);
        }
        else{
            alert(result.message);
        }
    }

    const handleUpdateButton = async () => {
        const id = sessionStorage.getItem('inventoryId');

        let underAge = false;
        let sensitive = false;

        if(underAgeData === 'true'){
            underAge = true;
        }

        if(sensitiveData === 'true'){
            sensitive = true
        }

        const dataRaw = {
            sourceData,
            colletedData,
            reasonData,
            howStorage,
            securityData,
            deadlineData,
            justification,
            underAgeData: underAge,
            sensitiveData: sensitive,
            controller
        }

        setLoading(true);
        const result  = await api.mappingUpdate(id, dataRaw);
        setLoading(false);

        if(result.error === undefined){
            sessionStorage.removeItem('inventoryId');
            window.location.reload();
        }else{
            alert(result.message);
        }
    }

    const handleDeleteModal = (id) => {
        setShowDeleteModal(true);
        sessionStorage.setItem('inventoryId', id);
    }

    const handleDeleteButton = async () => {
        const id = sessionStorage.getItem('inventoryId');
        const result  = await api.mappingDelete(id);
        if(result.error === undefined){
            sessionStorage.removeItem('inventoryId');
            window.location.reload();
        }
        else{
            alert(result.message);
        }
    }

    const fields = [
        {label: 'Identificação', key: 'tagName'},
        {label: 'Data de Criação', key: 'createdAt' },
        {label: 'Data de Atualização', key: 'updatedAt' },
        {label: 'Download', key: 'CButtonDownload' },
        {label: 'Editar', key: 'CButtonEdit'},
        {label: 'Deletar', key: 'CButtonRemove'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <PopoverTitleIcon label='Inventário de Dados Pessoais' title='Inventário de Dados Pessoais' content={popovercontent}/>
                    <h2 className='text-black'></h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" onClick={() => navigate('/lgpdfull/inventario/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Novo Inventário
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
                <CModalHeader closeButton>Editar Inventário</CModalHeader>
                <CModalBody>
                    <CForm>
                        <CFormInput label='Identificação' disabled type='text' value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormTextarea label='Dados pessoais coletados' rows={3} value={colletedData} onChange={(e) => setColletedData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormSelect label='Hipótese de tratamento' required value={reasonData} onChange={(e) => setReasonData(e.target.value)}>
                        <option>Selecione...</option>
                        <option key={11} value="11">Consentimento - Mendiante consetimento do titular</option>
                        <option key={10} value="10">Regulatório - Para cumprimento de obrigação legal ou regulatória pelo controlador</option>
                        <option key={9} value="9">Governo - Pela administração pública, para tratamento de dados necessários a política pública</option>
                        <option key={8} value="8">Pesquisa - Para realização de estudos por órgão de pesquisa, sendo garantida a anonimização dos dados</option>
                        <option key={7} value="7">Contratos - Quando necessário para a execução de contrato</option>
                        <option key={6} value="5">Judicial - Exercício regular de direitos, inclusive em contrato e em processo judicial,administrativo e arbitral</option>
                        <option key={5} value="6">Vida - Para a proteção da vida ou incolumidade física do títular ou terceiros</option>
                        <option key={4} value="4">Saúde - Para a tutela da saúde, com procedimento realizado por profissionais da área da saúde ou por entidades sanitárias</option>
                        <option key={3} value="3">Legítimo interesse - Interesses legítimos do controlador ou de terceiro</option>
                        <option key={2} value="2">Crédito - Para proteção do crédito</option>
                        <option key={1} value="1">Dados sensíveis - Para garantia da prevenção à fraude e á segurança do títular</option>
                        </CFormSelect>
                        <br></br>
                        <CFormTextarea label='Como é armazenado?' rows={2} value={howStorage} onChange={(e) => setHowStorage(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormTextarea label='Fonte dos dados' rows={2} value={sourceData} onChange={(e) => setSourceData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormTextarea label='Segurança dos dados pessoais' rows={2} value={securityData} onChange={(e) => setSecurityData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormTextarea label='Prazo de retenção dos dados pessoais' rows={2} value={deadlineData} onChange={(e) => setDeadlineData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormTextarea label='Justificativa do uso' rows={3} value={justification} onChange={(e) => setJustification(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Uso de dados pessoais de menores de idade</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox1" value={true} label="Sim" defaultChecked={!underAgeData} onChange={(e) => setUnderAgeData(e.target.value)}/>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox2" value={false} label="Não" defaultChecked={underAgeData} onChange={(e) => setUnderAgeData(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormLabel>Trata dados sensíveis?</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox1" value={true} label="Sim" defaultChecked={!sensitiveData} onChange={(e) => setSensitiveData(e.target.value)}/>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox2" value={false} label="Não" defaultChecked={sensitiveData}  onChange={(e) => setSensitiveData(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormInput label='Nome do Controlador' type='text' value={controller} onChange={(e) => setController(e.target.value)}></CFormInput>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton onClick={handleUpdateButton}>Atualizar</CButton>
                    <CButton onClick={handleCloseModal} color='danger'>Cancelar</CButton>
                </CModalFooter>
            </CModal>
            <CModal fullscreen='sm' visible={showDeleteModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Excluir Inventário Inventário</CModalHeader>
                <CModalBody >
                        Deseja mesmo excluir este inventário?
                </CModalBody>
                <CModalFooter>
                        <CButton className='m-2 btn btn-primary' style={{backgroundColor: "red"}} color='danger' onClick={handleDeleteButton}>Deletar</CButton>
                        <CButton className='m-2 btn btn-primary' color='warning' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}
