import { useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow } from '@coreui/react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { termosDeUso } from 'src/utils/templates/pdf/termosDeUso';


export default () => {
  const [loading, setLoading] = useState(false);
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleUseTermsPdf = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));

    const content = termosDeUso(
      description,
      email,
      user.companyName,
    );

    pdfMake.createPdf(content).download();
  }

  return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Termos de Uso</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>Preencha os campos abaixo para gerar sua termos de uso:</CCardHeader>
                        <CCardBody>
                          <CForm className='text-black'>
                            <CFormInput label="E-mail para contato" trigger="focus" type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                            <CFormInput label="Descrição do seu Serviço" placeholder='Os seus serviços permintem que o usuário faça...' trigger="focus" type='text' required value={description} onChange={(e) => setDescription(e.target.value)}></CFormInput>
                          </CForm>
                          <br></br>
                          <CButton color='success' onClick={handleUseTermsPdf} disabled={loading}>{loading ? 'Carregando' : 'Gerar'}</CButton>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
  );
}