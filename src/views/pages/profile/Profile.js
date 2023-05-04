import React, { useState } from 'react';
import {CButton,CForm,CFormInput,CFormLabel,CAlert  } from '@coreui/react'
import useAPI from '../../../services/api';
import { useNavigate } from 'react-router-dom';

export default () => {
  const api = useAPI();
  const navigate = useNavigate();

  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ color, setColor ] = useState('primary');

  const handleUpdateButton = async () => {

    setLoading(true);
    const result = await api.userUpdate(email);
    setLoading(false);

    if(result.error === undefined){
      navigate('/lgpdfull')
    }else{
      setVisible(true);
      setMessage('Email Inválido');
      setColor('danger');
    }
  }

  return (
    <>
        <div className=" bg-transparent text-black">
          <br></br>
          <CAlert color={color} dismissible visible={visible} onClose={() => setVisible(false)}>
            {message}
          </CAlert>
          <CForm className='mb-3 '>
            <CFormLabel htmlFor="exampleFormControlInput1">E-mail</CFormLabel>
            <CFormInput required type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" value={email} onChange={(e) => setEmail(e.target.value)} />
          </CForm>
          <CButton  onClick={handleUpdateButton} style={{backgroundColor: "#2085c7"}} color=' text-white' disabled={loading}>{loading ? 'Carregando' : 'Atualizar'}</CButton>
      </div>
    </>
  );
}
