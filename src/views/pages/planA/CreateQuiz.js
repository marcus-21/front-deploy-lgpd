import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CRow, CForm, CFormLabel, CCardBody, CCardTitle, CFormCheck, CButton, CCard, CCardHeader} from '@coreui/react';
import useAPI from '../../../services/api';
import { conformity, government, topics, transparency, traceability, adequacy, security, violations } from '../../../utils/quizQuestions';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    let answers = new Array(24).fill("0");
    const handleQuiz = async () => {
        let maturityResult = 0;
        for(let i in answers){
            if ( i < 6 ){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.25;
                    break;
                    case '2':
                        maturityResult += 0.5*0.25;
                    break;
                    case '3':
                        maturityResult += 1*0.25;
                    break;

                }
            }else if (i >= 6 && i >=11 ){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.25;
                    break;
                    case '2':
                        maturityResult += 0.5*0.25;
                    break;
                    case '3':
                        maturityResult += 1*0.25;
                    break;
                }
            }else if (i == 12 && i == 13 ){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.1;
                    break;
                    case '2':
                        maturityResult += 0.5*0.1;
                    break;
                    case '3':
                        maturityResult += 1*0.1;
                    break;
                }
            }else if (i >= 14 && i >= 16 ){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.05;
                    break;
                    case '2':
                        maturityResult += 0.5*0.05;
                    break;
                    case '3':
                        maturityResult += 1*0.05;
                    break;
                }
            }else if (answers == 17){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.05;
                    break;
                    case '2':
                        maturityResult += 0.5*0.05;
                    break;
                    case '3':
                        maturityResult += 1*0.05;
                    break;
                }
            }else if (i >= 18 && i >= 20){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.15;
                    break;
                    case '2':
                        maturityResult += 0.5*0.15;
                    break;
                    case '3':
                        maturityResult += 1*0.15;
                    break;
                }
            }else if (i >= 21 && i >= 23){
                switch(answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.15;
                    break;
                    case '2':
                        maturityResult += 0.5*0.15;
                    break;
                    case '3':
                        maturityResult += 1*0.15;
                    break;
                }
            }
        }
        maturityResult = maturityResult * 10;
        if (maturityResult < 2.99) {
            const textResult = 'Iniciante';
            const raw = {
                answers: answers.toString(),
                result: textResult
            };

            const result = await api.postQuiz(raw);

            if(result.error === undefined){
                navigate('/lgpdfull/quiz');
            }else{
                alert(result.message);
            }

        }
        else if ((maturityResult >= 3.00) && (maturityResult <= 4.99)){
            const textResult = 'Básico';
            const raw = {
                answers: answers.toString(),
                result: textResult
            };

            const result = await api.postQuiz(raw);

            if(result.error === undefined){
                navigate('/lgpdfull/quiz');
            }else{
                alert(result.message);
            }
        }
        else if ((maturityResult >= 5.00) && (maturityResult <= 6.99)){
            const textResult = 'Intermediário';
            const raw = {
                answers: answers.toString(),
                result: textResult
            };

            const result = await api.postQuiz(raw);

            if(result.error === undefined){
                navigate('/lgpdfull/quiz');
            }else{
                alert(result.message);
            }
        }
        else if ((maturityResult >= 7.00) && (maturityResult <= 8.99)){
            const textResult = 'Intermediário Superior';
            const raw = {
                answers: answers.toString(),
                result: textResult
            };

            const result = await api.postQuiz(raw);

            if(result.error === undefined){
                navigate('/lgpdfull/quiz');
            }else{
                alert(result.message);
            }
        }
        else if (maturityResult >= 9.00){
            const textResult = 'Avançado';
            const raw = {
                answers: answers.toString(),
                result: textResult
            };

            const result = await api.postQuiz(raw);

            if(result.error === undefined){
                navigate('/lgpdfull/quiz');
            }else{
                alert(result.message);
            }
        }
    }

    return (
        <>
            <CRow>
                <h2 className='text-black'>Quiz LGPD</h2>
            </CRow>
            <br></br>
            <br></br>

            <CForm className='text-black'>

                {/* 1 */}
                <CCard /* hidden={teste[0]} */ >
                    <CCardBody key={1}>
                        <CCardHeader>
                            <CCardTitle>{topics[0]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {government.map(( item , index) =>
                            <>
                                <CFormLabel >{ index + 1 } - { item }</CFormLabel>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index] = e.target.value} />
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index] = e.target.value}/>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index] =e.target.value}/>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 2 */}
                <CCard>
                    <CCardBody key={2}>
                        <CCardHeader>
                            <CCardTitle>{topics[1]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {conformity.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+6] = e.target.value} />
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+6] = e.target.value}/>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+6] =e.target.value}/>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+6] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 3 */}
                <CCard>
                    <CCardBody key={3}>
                        <CCardHeader>
                            <CCardTitle>{topics[2]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {transparency.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+12] = e.target.value} />
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+12] = e.target.value}/>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+12] =e.target.value}/>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+12] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 4 */}
                <CCard>
                    <CCardBody key={4}>
                        <CCardHeader>
                            <CCardTitle>{topics[3]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {traceability.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+14] = e.target.value} />
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+14] = e.target.value}/>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+14] =e.target.value}/>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+14] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 5 */}
                <CCard>
                    <CCardBody key={5}>
                        <CCardHeader>
                            <CCardTitle>{topics[4]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {adequacy.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+17] = e.target.value} />
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+17] = e.target.value}/>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+17] =e.target.value}/>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+17] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 6 */}
                <CCard>
                    <CCardBody key={6}>
                        <CCardHeader>
                            <CCardTitle>{topics[5]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {security.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+18] = e.target.value} />
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+18] = e.target.value}/>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+18] =e.target.value}/>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+18] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 7 */}
                <CCard>
                    <CCardBody key={7}>
                        <CCardHeader>
                            <CCardTitle>{topics[6]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {violations.map((item, index) =>
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+21] = e.target.value} />
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+21] = e.target.value}/>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+21] =e.target.value}/>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+21] = e.target.value}/>
                                <br></br>
                            </>
                        )}
                        <br></br>
                        <CButton onClick={handleQuiz}>Enviar</CButton>
                    </CCardBody>
                </CCard>

                <br></br>
                <br></br>
            </CForm>
        </>
    );
}
