import React, { useState } from 'react';
import { CRow, CCardBody, CCardHeader, CCard, CCol, CForm, CFormInput, CButton, CFormLabel, CFormCheck, CPopover } from '@coreui/react';
import { politicaDePrivacidade } from 'src/utils/templates/pdf/politicaPrivacidade';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import CIcon from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function PrivacyPolicy() {
  const [loading, setLoading] = useState(false);
  const [infoYesOrNo, setInfoYesOrNo] = useState(false);
  const [inputInfo, setInputInfo] = useState('');
  const [dataNot, setDataNot] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');

  const handlePrivacyPolicyPdf = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const emailPDF = email
    const dataArray = data.trim().split(',');
    const dataArrayNot = dataNot.trim().split(',');
    let info = [];

    if (infoYesOrNo === true) {
      info = [inputInfo];
    } else {
      info = ['Não divulgamos informações pessoais a terceiros, exceto quando exigido por lei.'];
    }

    const content = politicaDePrivacidade(
      user.companyName,
      dataArray,
      dataArrayNot,
      info,
      emailPDF
    );

    console.log(dataArray);
    console.log(dataArrayNot);
    console.log(emailPDF);
    console.log(info);

    pdfMake.createPdf(content).download();
  };

  const PopoverContent = [
    'Obs: O padrão de formatação segue sendo o mesmo do exemplo (e se caso não usar escrever não utilizamos esse recurso) - Ex: CPF, RG, etc...',
    'Obs: O padrão de formatação segue sendo o mesmo do exemplo (e se caso não usar escrever não utilizamos esse recurso) - Ex: Tipo de navegador, Tipo de dispositivo, Páginas visitadas, Endereço IP ',
    'Informação do encarregado dos dados pessoais'
  ];

  return (
    <>
      <CRow>
        <CCol>
          <h2 className='text-black'>Política de privacidade</h2>

          <CCard textColor='dark'>
            <CCardHeader>Preencha os campos abaixo para gerar sua política de privacidade</CCardHeader>
            <CCardBody>
              <CForm className='text-black'>

                <CPopover title='Informações pessoais:' trigger="focus" content={PopoverContent[0]} placement="right">
                  <CButton data-coreui-toggle="popover"  style={{alignItems:'baseline',display:'flex'}}   className='text-black d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Coletamos as seguintes informações pessoais:</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                </CPopover>
                <CFormInput value={data} onChange={(e)=> {setData(e.target.value)}}/>
                <CPopover title='Informações não pessoais:' trigger="focus" content={PopoverContent[1]} placement="right">
                  <CButton data-coreui-toggle="popover"  style={{alignItems:'baseline',display:'flex'}}   className='text-black d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Informações não pessoais:</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                </CPopover>
                <CFormInput value={dataNot} onChange={(e)=> {setDataNot(e.target.value)}}/>
                <CPopover title='E-mail' trigger="focus"  content={PopoverContent[2]} placement="right">
                  <CButton data-coreui-toggle="popover"  style={{alignItems:'baseline',display:'flex'}}   className='text-black d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>E-mail para contato:</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                </CPopover>
                <CFormInput type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <CFormLabel>Divulgação das informações?</CFormLabel>
                  <CFormCheck id='Check1' type='radio' name='inforCheck' label='Sim' onChange={(e) => setInfoYesOrNo(true)} value={true} />
                  <CFormCheck id='Check2' type='radio' name='inforCheck' label='Não' onChange={(e) => setInfoYesOrNo(false)} value={false} defaultChecked />
                    {infoYesOrNo &&
                      <CFormInput type='text' name="inforCheck" value={inputInfo} onChange={(e)=> {setInputInfo(e.target.value)}}></CFormInput>
                    }
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
