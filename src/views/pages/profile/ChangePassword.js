import useAPI from '../../../services/api';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {CButton,CCol,CForm,CFormInput,CFormLabel,CRow,CAlert} from '@coreui/react'

const Trocarsenha = () => {
  const api = useAPI();
  const navigate = useNavigate();

  const validatePassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*[$*&@#.]).{6,}$");

  const [loading, setLoading] = useState(false);
  const [ actualPassword, setActualPassword ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ color, setColor ] = useState('primary');
  
  const validar = async () =>{
    if(actualPassword.length === 0 || newPassword.length === 0 || repeatPassword.length === 0){
      setVisible(true);
      setMessage('Todos os campos são necessários.');
      setColor('danger');
    }else{
      if (actualPassword != newPassword) {
        if (newPassword === repeatPassword ) {
          if(!validatePassword.test(newPassword)){
            setVisible(true);
            setMessage('A senha é fraca. Deve conter, uma letra maiúscula, uma letra minúscula, um número, um caracter especial ("$*&@#.") e deve ter mais de 6 dígitos.');
            setColor('danger');
            throw Error("ERROR");
          }else{
              
            const dataRaw = {
              actualPass: actualPassword,
              newPass: newPassword
            }

            setLoading(true);
            const result = await api.userUpdatePass(dataRaw);
            setLoading(false);

            if(result.error === undefined){
              setVisible(true);
              setMessage('Senha atualizada.');
              setColor('success');
              setTimeout(() => {
                navigate('/lgpdfull')  
             }, 900);
            }else{
              setVisible(true);
              setMessage(result.message);
              setColor('danger');
            }
          }
        } else{
          
          setVisible(true);
          setMessage('A nova senha e o repetir senha não são iguais.');
          setColor('danger'); 
        }
      } else {
        setVisible(true);
        setMessage('A nova senha não pode ser igual a atual.');
        setColor('danger'); 
      }
    }
  } 

  return (
    <div className=" bg-transparent">
      <br></br>
      <CAlert color={color} dismissible visible={visible} onClose={() => setVisible(false)}>
          {message}
      </CAlert>

      <CForm name='formularioTrocarSenha' action="#" method="POST" className="text-black">
        <CRow className="mb-3 mt-2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Senha Atual</CFormLabel>
          <CCol sm={10} >
            <CFormInput required type="password" id="inputPassword3" value={actualPassword} onChange={(e) => setActualPassword(e.target.value)}/>
          </CCol>
        </CRow>

        <CRow className="mb-3 name1">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput required minLength={4} maxLength={20} name='novaSenha' type="password" id="inputsenha" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
          </CCol>
        </CRow>

        <CRow className="mb-3 name2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-6 col-form-label">Repetir Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput required minLength={4} maxLength={20} name='repSenha' type="password" id="inputsenharep" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
          </CCol>
        </CRow>

        <CButton style={{backgroundColor: "#2085c7"}} color='text-white' onClick={ validar }>{loading ? 'Carregando' : 'Atualizar'}</CButton>
      </CForm>
      <br></br>
    </div>
  )
}

export default Trocarsenha
