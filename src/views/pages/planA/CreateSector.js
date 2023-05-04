import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CRow,CForm,CFormLabel,CFormInput,} from '@coreui/react';
import useAPI from '../../../services/api';

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    const [ tagName, setTagName ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handlePostSector = async () => {

        setLoading(true);
        const result = await api.postSector(tagName);
        setLoading(false);

        if(result.error === undefined){
            navigate('/lgpdfull/setor');
            alert("Setor Criado");
        }else{
            alert(result.message);
        }
    }

    return (
        <>
            <CRow>
                <h2 className='text-black'>Cadastrar Novo Setor</h2>
            </CRow>

                <CForm className='text-black'>
                        <CFormLabel>Nome</CFormLabel>
                        <CFormInput type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                        <br></br>
                </CForm>
            <br></br>
            <CButton color='success' disabled={loading} onClick={handlePostSector}>{loading ? 'Carregando' : 'Criar'}</CButton>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
