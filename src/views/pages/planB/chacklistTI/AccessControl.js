import { CButton, CCard, CCardBody, CForm, CFormCheck, CFormInput, CFormLabel, CFormTextarea, CRow } from "@coreui/react"
import {control} from '../../../../utils/checklistQuestions'
import React, { useState } from 'react';

const Access = () => {
  const [checklist, setChecklist] = useState(new Array(7).fill(false));

  const handleCheck = (index) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index] = !updatedChecklist[index];
    setChecklist(updatedChecklist);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checklist);
  };

  return (
    <CForm style={{marginBottom:'30px'}}>
      <CRow>
        <h2 className="text-black">CHECKLIST – Controle de Acesso </h2>
      </CRow>
        <CCard>
          <CCardBody className="text-black">
            {control.map((question, index) => (
                <div key={index}>
                <CFormLabel>{question}</CFormLabel>
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
                {checklist[index] && (
                    <div>
                    <CFormInput type="file" id={`formFile_${index}`} label="Coloque as evidências" />
                    </div>
                )}
                {checklist[index] == false && (
                    <div>
                        <CFormTextarea
                            id={`textArea${index}`}
                            label="Descreva o motivo "
                            rows={3}
                        ></CFormTextarea>
                    </div>
                )}
                </div>
            ))}
            <CButton style={{marginTop:'20px'}} onClick={handleSubmit}>Enviar</CButton>
          </CCardBody>
        </CCard>
    </CForm>
  );
};

export default Access;
