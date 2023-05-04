import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {CAlert,CButton,CCard,CCardBody,CCardGroup,CCol,CContainer,CForm,CFormInput,CInputGroup,CInputGroupText,CModal,CModalBody,CModalFooter,CModalHeader,CModalTitle,CRow,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser,cilEnvelopeClosed } from '@coreui/icons'
import useAPI from '../../../services/api';

const Login = () => {
  const api = useAPI();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ visible, setVisible ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ visibleAlert , setVisibleAlert ] = useState(false);
  const [ color, setColor ] = useState('primary');

  const handleLoginButton = async () => {
    if(email && password){
      setLoading(true);
      const result = await api.login(email, password);
      setLoading(false);
      if(result.error === undefined){
        sessionStorage.setItem('token', result.acessToken);
        sessionStorage.setItem('user', JSON.stringify(result));
        navigate('/')
      }else{
        setError(result.message);
      }
    }
    else{
      alert("Digite as credenciais de acesso!")
    }
  }

  const handleSavePass = async () => {

    setLoading(true);
    const result = await api.userSavePass(email);
    setLoading(false);

    if(result.error === undefined){
      setVisibleAlert(true);
      setMessage('Sucesso!');
      setColor('success');
      setTimeout(() => {
        location.reload()
     }, 900);
    }else{
      setVisibleAlert(true);
      setMessage('E-mail Inválido');
      setColor('danger');
    }
  }

  return (
    <div style={{background:'linear-gradient(to bottom, #2085c7 26%, #5f6568 100%)'}} className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup style={{boxShadow: '1px 2px 9px #000000'}}>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    {error != '' &&
                      <CAlert color="danger">{error}</CAlert>
                    }
                    <p className="text-medium-emphasis">Digite suas credenciais de acesso</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="E-mail" 
                        value={email.trim()} 
                        disabled={loading}
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        disabled={loading}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={10} className="text-right pb-2">
                      <CButton color="link" onClick={() => setVisible(!visible)}>Esqueceu sua Senha?</CButton>
                      <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                          <CModalTitle>Redefinir Senha</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Entraremos em contato com você no e-mail que foi cadastrado no sistema.</CModalBody>
                        <CModalBody>
                          <CAlert visible={visibleAlert} color={color}>{message}</CAlert>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilEnvelopeClosed} />
                            </CInputGroupText>
                            <CFormInput 
                              placeholder="E-mail" 
                              value={email} 
                              disabled={loading}
                              onChange={(e) => setEmail(e.target.value)} 
                            />
                          </CInputGroup>
                        </CModalBody> 
                        <CModalFooter>
                          <CButton className="btn btn-primary rounded-pill border border-0" style={{backgroundColor: "#2085c7"}} onClick={() => setVisible(false)}>
                            Cancelar
                          </CButton>
                          <CButton className="btn btn-primary rounded-pill border border-0" style={{backgroundColor: "#2085c7"}} onClick={handleSavePass}>Redefinir</CButton>
                        </CModalFooter>
                      </CModal>
                      </CCol>
                      <CCol xs={6}>
                        <CButton
                          style={{backgroundColor: "#2085c7"}} 
                          className="btn btn-primary rounded-pill border border-0 "
                          onClick={handleLoginButton}
                          disabled={loading}
                        >
                          {loading ? 'Carregando' : 'Acessar'}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="border border-0  text-white py-5 min-vh-60 d-flex flex-row align-items-center" style={{backgroundColor: "#2085c7"}}>
                <CCardBody className="text-center" >
                  <div>
                    <img className='mb-2 w-100' src='https://media.discordapp.net/attachments/1052661296945971232/1059673126478290975/teste.png?width=1025&height=279'/>

                      <p className='mt-5 mb-3'>
                        O Sistema Solus LGPDFull foi criado para ajudar as empresas na implementação e manutenção da Lei Geral de Proteção de Dados Pessoais.
                      </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
