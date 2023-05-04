import { useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow } from '@coreui/react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { politicaDeCookies } from 'src/utils/templates/pdf/politicaDeCookies';


export default () => {
  const [loading, setLoading] = useState(false);
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const [email, setEmail] = useState('');
  const [cookiesWeb, setCookiesWeb] = useState('');

  const handleCookiesPolicyPdf = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));

    const cookiesUL = cookiesWeb.trim().split(",");

    const content = politicaDeCookies(
        user.companyName,
        cookiesUL,
        email,
    );

    pdfMake.createPdf(content).download();
  }

  return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Política de Cookies</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>Preencha os campos abaixo para gerar sua termos de uso:</CCardHeader>
                        <CCardBody>
                          <CForm className='text-black'>
                            <CFormInput label="Cookies usados no website" placeholder='Ex: Cookies de funcionalidade, Cookies de publicidade, Cookies de terceiros...' trigger="focus" type='text' required value={cookiesWeb} onChange={(e) => setCookiesWeb(e.target.value)}></CFormInput>
                            <CFormInput label="E-mail para contato" trigger="focus" type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                          </CForm>
                          <br></br>
                          <CButton color='success' onClick={handleCookiesPolicyPdf} disabled={loading}>{loading ? 'Carregando' : 'Gerar'}</CButton>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
  );
}