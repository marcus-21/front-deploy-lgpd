import React, { useState } from 'react';
import {CRow, CCardBody, CCardHeader, CCard, CDropdownMenu, CDropdownItem, CCol, CDropdown, CDropdownToggle, CCardTitle, CCardText, CFormCheck, CButtonGroup, CButton,} from '@coreui/react';

export default () => {
    const [planA, setPlanA] = useState(true);
    const [planB, setPlanB] = useState(false);
    const [planC, setPlanC] = useState(false);

    const handleStatePlanA = () =>{
        setPlanA(true);
        setPlanB(false)
        setPlanC(false)
    }
    const handleStatePlanB = () => {
        setPlanB(true);
        setPlanA(false);
        setPlanC(false);
    }
    const handleStatePlanC = () => {
        setPlanC(true)
        setPlanA(false)
        setPlanB(false)

    }
    
    return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Ajuda</h2>

                    <CCard textColor='dark'>
                        <CCardHeader >
                            <CButtonGroup size="sm" role="group" aria-label="Default button group">
                                <CButton color="primary"  onClick={handleStatePlanA}>Plano A</CButton>
                                <CButton color="primary"  onClick={handleStatePlanB}>Plano B</CButton>
                                <CButton color="primary"  onClick={handleStatePlanC}>Plano C</CButton>
                            </CButtonGroup>
                        </CCardHeader>
                        {planA == true &&
                            <CCardBody >
                                <CCardTitle>Quiz LGPD</CCardTitle>
                                <CCardText>
                                    O Quiz LGPD serve para medir o nível atual de adequação da empresa com a Lei Geral de Proteção de Dados Pessoais (LPGP), Lei n° 13.709/2018.
                                    <br></br>
                                    OBS: É Recomendado fazer o Quiz LPGD no início e no final do processo de adequação.
                                </CCardText>

                                <CCardTitle>Encarregado dos Dados Pessoais (DPO)</CCardTitle>
                                <CCardText>
                                    O Encarregado (DPO) é a pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD (Autoridade Nacional de Proteção de Dados)
                                    O DPO pode ser pessoa física, jurídica, ou um comitê de pessoas.
                                </CCardText>

                                <CCardTitle>Setores da sua empresa</CCardTitle>
                                <CCardText>
                                    Neste módulo deve ser cadastrado todos os setores existentes na sua empresa.
                                </CCardText>

                                <CCardTitle>Inventário de Dados Pessoais</CCardTitle>
                                <CCardText>
                                    Neste módulo deve ser cadastrado a catalogação dos dados pessoais, fluxo, hipótese de tratamento e etc.
                                </CCardText>
                            </CCardBody>
                        }
                        {planB == true &&
                            <CCardBody >
                                <CCardTitle>Política de Privacidade</CCardTitle>
                                <CCardText>
                                    Neste módulo é gerado um documento que tem como objetivo informar aos titulares dos dados como a empresa realiza o tratamento desses dados, quais dados são coletados, para que finalidades, quem tem acesso a eles, como são protegidos, entre outras informações relevantes.
                                    <br></br>
                                </CCardText>
                                <CCardTitle>Termo de Uso</CCardTitle>
                                <CCardText>
                                    Neste módulo é gerado um documento que tem como objetivo estabelece as condições e limitações de uso dos dados pessoais coletados por uma empresa, organização ou site. 
                                    <br></br>
                                </CCardText>
                                <CCardTitle>Política de Cookies</CCardTitle>
                                <CCardText>
                                    Neste módulo é gerado um documento que tem como objetivo estabelece como os cookies são utilizados por um site, em conformidade com a Lei Geral de Proteção de Dados (LGPD) no Brasil.
                                    <br></br>
                                </CCardText>

                                <CCardTitle>Checklist de TI</CCardTitle>
                                <CCardText>
                                    Neste módulo auxilia as empresas e organizações a verificarem se estão em conformidade com as exigências da Lei Geral de Proteção de Dados (LGPD) no âmbito de Tecnologia da Informação (TI).
                                </CCardText>
                            </CCardBody>
                        }
                        {planC == true &&
                            <CCardBody >
                                <CCardTitle>Quiz LGPD 3</CCardTitle>
                                <CCardText>
                                    O Quiz LGPD serve para medir o nível atual de adequação da empresa com a Lei Geral de Proteção de Dados Pessoais (LPGP), Lei n° 13.709/2018.
                                    <br></br>
                                    OBS: É Recomendado fazer o Quiz LPGD no início e no final do processo de adequação.
                                </CCardText>

                                <CCardTitle>Encarregado dos Dados Pessoais (DPO)</CCardTitle>
                                <CCardText>
                                    O Encarregado (DPO) é a pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD (Autoridade Nacional de Proteção de Dados)
                                    O DPO pode ser pessoa física, jurídica, ou um comitê de pessoas.
                                </CCardText>

                                <CCardTitle>Setores da sua empresa</CCardTitle>
                                <CCardText>
                                    Neste módulo deve ser cadastrado todos os setores existentes na sua empresa.
                                </CCardText>

                                <CCardTitle>Inventário de Dados Pessoais</CCardTitle>
                                <CCardText>
                                    Neste módulo deve ser cadastrado a catalogação dos dados pessoais, fluxo, hipótese de tratamento e etc.
                                </CCardText>
                            </CCardBody>
                        }
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
    );
}