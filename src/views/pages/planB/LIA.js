import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CRow } from "@coreui/react";
import { useState } from "react"

export default () => {
    
    const [loading ,setLoading] = useState(false);
    const [onceTextLabel,setOnceTextLabel] = useState('');

    const [checklist, setChecklist] = useState(new Array(13).fill(false));
    
    const handleCheck = (index) => {
      const updatedChecklist = [...checklist];
      updatedChecklist[index] = !updatedChecklist[index];
      setChecklist(updatedChecklist);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(checklist);
      console.log(onceTextLabel);
    };
    const labels = [

        'Há terceiros beneficiados pelo tratamento?',
        'Quais são os impactos da não realização dos tratamentos?',
        'No que diz respeito a este processo de negócio, o controlador segue a legistação de proteção de dados pessoais?',
        'O tratamento envolve dados sensíveis?',
        'O controlador segue as leis aplicáveis a esta atividade?',
        'O tratamento auxiliará o controlador a atingir seus objetivos?',
        'O tratamento é proporcional aos objetivos pretendidos?',
        'É possível atingir os mesmos objetivos sem o tratamento?',
        'É possível atingir os mesmos objetivos utilizando menos dados ou tratando dados de uma forma intrusiva?',
        'Há possíveis impactos do tratamento aos titulares',
        'Há probabilidade e severidade de um eventual impacto negativo?',
        'Há informações sobre o controle dos titulares sobre seus dados?',
        'É provável que os titulares se oponham ao tratamento ou que acham-no intruso?',
        'Há medidas de segurança adotadas para proteger os dados pessoais'

    ]
  
    
    return(
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>LIA</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>Preencha os campos abaixo:</CCardHeader>
                        <CCardBody>
                            <CForm className='text-black'>
                                <CFormInput label='1 - Motivos do tratamento?' type="text" value={onceTextLabel} onChange={(e) => setOnceTextLabel(e.target.value)} ></CFormInput>
                                {labels.map((question, index) => (
                                    <div key={index}>
                                        <CFormLabel>{index + 2} - {question}</CFormLabel>
                                        <CFormCheck
                                        type="radio"
                                        id={`radios1_${index}`}
                                        name={`radios_${index}`}
                                        value={true}
                                        checked={checklist[index]}
                                        onChange={() => handleCheck(index)}
                                        label="Sim"
                                        />
                                        <CFormCheck
                                            type="radio"
                                            id={`radios2_${index}`}
                                            name={`radios_${index}`}
                                            value={false}
                                            checked={!checklist[index]}
                                            onChange={() => handleCheck(index)}
                                            label="Não"
                                        />
                                    </div>
                                ))}
                            </CForm>
                          <br></br>
                          <CButton color='success' onClick={handleSubmit} disabled={loading}>{loading ? 'Carregando' : 'Gerar'}</CButton>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
    )
}
