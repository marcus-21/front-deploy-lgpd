import { useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow } from '@coreui/react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'


export default () => {
  const [loading, setLoading] = useState(false);
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const [data, setData] = useState('');
  const [email, setEmail] = useState('');

  const handlePrivacyPolicyPdf = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));

    const dataArray = data.trim().split(",");

    const content = politicaDePrivacidade(
      user.companyName,
      email,
      dataArray
    );

    pdfMake.createPdf(content).download();
  }

  return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Política de privacidade</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>Preencha os campos abaixo para gerar sua política de privacidade:</CCardHeader>
                        <CCardBody>
                          <CForm className='text-black'>
                            <CFormInput label="Dados usados no website" trigger="focus" type='text' required value={data} onChange={(e) => setData(e.target.value)}></CFormInput>
                            <CFormInput label="E-mail para contato" trigger="focus" type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                          </CForm>
                          <br></br>
                          <CButton color='success' onClick={handlePrivacyPolicyPdf} disabled={loading}>{loading ? 'Carregando' : 'Gerar'}</CButton>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
  );
}