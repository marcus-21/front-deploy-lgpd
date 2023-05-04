import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CRow,CForm,CFormInput,CFormLabel,CFormCheck,CPopover, CAlert,} from '@coreui/react';
import useAPI from '../../../services/api';
import CIcon from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false);
    const [ firstName, setFirstName ] = useState('');
    const [ socialName, setSocialName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ naturalPerson, setNaturalPerson ] = useState(true);
    const [visible, setVisible] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ phone , setPhone ] = useState();
    const [ textPhone , setTextPhone ] = useState('inválido');
    const isValidPhoneRegex = '\(([1-9]{2})\)([9]{1})([0-9]{4})\-([0-9]{4})';

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

    const handlePostDpo = async () => {
        const convertPerson = Boolean(naturalPerson);

        const dataRaw = {
            name: firstName,
            naturalPerson: convertPerson,
            socialName,
            email,
        }
        setLoading(true);
        const result = await api.postDPO(dataRaw);
        setLoading(false);

        if(result.error === undefined){
            setVisible(true);
            setMessage(`Resistro criado com sucesso`)
            setTimeout(() => {
               navigate('/lgpdfull/dpo')
            }, 900);

        }else{
            setVisible(true)
            setMessage(result.message)

        }

    }

    return (
        <>
            <CAlert color="primary" dismissible  visible={visible} onClose={() => setVisible(false)}>
                {message}
            </CAlert>

            <CRow>
                <h2 className='text-black'>Registro de Encarregado de Dados Pessoais</h2>
            </CRow>

                <CForm className='text-black'>

                        <CFormInput label='Nome Completo ou Nome do Comitê' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <br></br>
                        <CPopover trigger="focus" content="Nome Social = Como você quer ser chamado. Comitê = Todas as pessoas que são integrantes do comitê responsável pela LGPD na empresa. Ex.:Fulano, Ciclano, etc.  "placement="right">
                            <CButton data-coreui-toggle="popover"  style={{alignItems:'baseline',display:'flex'}}   className='text-black d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Nome Social ou Nomes das pessoas do Comitê</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                        </CPopover>
                        <CFormInput type='text' required value={socialName} onChange={(e) => setSocialName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>Tipo</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="naturalPerson" id="inlineCheckbox1" value={true} label="Pessoa Física" defaultChecked onChange={(e) => setNaturalPerson(e.target.value)}/>
                            <CFormCheck inline type="radio" name="naturalPerson" id="inlineCheckbox2" value={false} label="Pessoa Jurídica"  onChange={(e) => setNaturalPerson(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormInput label='E-mail' type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormInput label='Celular' type='text' required placeholder='Padrão:(xx)9xxxx-xxxx' value={phone} onChange={validatePhone}></CFormInput>
                        {textPhone}
                        <br></br>
                </CForm>
            <br></br>
            <CButton color='success' disabled={loading} onClick={handlePostDpo} >{loading ? 'Carregando' : 'Criar'}</CButton>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
