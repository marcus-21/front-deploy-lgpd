import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CRow,CForm,CFormInput,CFormLabel,CFormTextarea,CFormCheck,CFormSelect,CPopover} from '@coreui/react';
import useAPI from '../../../services/api';
import {cilLightbulb} from '@coreui/icons';
import CIcon from '@coreui/icons-react';

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [sectorsList, setSectorsList] = useState([]);
    const [tagName, setTagName] = useState('');
    const [sector, setSector] = useState('');
    const [colletedData, setColletedData] = useState('');
    const [sourceData, setSourceData] = useState('');
    const [reasonData, setReasonData] = useState('Legítimo interesse - Interesses legítimos do controlador ou de terceiro');
    const [howStorage, setHowStorage] = useState('');
    const [securityData, setSecurityData] = useState('');
    const [deadlineData, setDeadlineData] = useState('');
    const [justification, setJustification] = useState('');
    const [underAgeData, setUnderAgeData] = useState(false);
    const [sensitiveData, setSensitiveData] = useState(false);
    const [controller, setController] = useState('');

    useEffect(() => {
        getSectorsList();
    }, []);

    const getSectorsList = async () => {
        const listResult = new Array()
        const result = await api.sectorFindAll();
        listResult.push('Escolha o setor do inventário');
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){
                let options = {
                    label: result[i].tagName,
                    value: result[i].id
                }

                listResult.push(options);
            }
            setSectorsList(listResult)
        }else{
            alert(result.message);
        }
    }

    const handlePostInventory = async () => {
        setLoading(true);
        const dpo =  await api.actualDpo();
        const convertAgeData = Boolean(underAgeData)
        const convertSensitiveData = Boolean(sensitiveData)

        const dataRaw = {
            dpoId: dpo.id,
            sectorId: sector,
            tagName,
            sourceData,
            colletedData,
            reasonData,
            howStorage,
            securityData,
            deadlineData,
            justification,
            underAgeData: convertAgeData,
            sensitiveData: convertSensitiveData,
            controller
        }

        const result = await api.postMapping(dataRaw);
        setLoading(false);

        if(result.error === undefined){
            navigate('/lgpdfull/inventario')
        }else{
            alert(result.message);
        }
    }

    return (
        <div>
            <CRow>
                <h2 className='text-black'>Criação do Inventário de Dados Pessoais</h2>
            </CRow>

                <CForm className='text-black'>

                    <CPopover title='Identificação' trigger="focus" content="Colocar o número de referência para a identificação do inventário. Padrão:(Inventário - SiglaDoSetor 'TI' - Número.) Ex.:Inventário-TI-01"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Identificação</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormInput title='' trigger="focus" type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                    <br></br>
                    <CPopover title='Setor da empresa' trigger="focus" content="Colocar o nome do setor a qual se refere o inventário. Ex.:TI,RH,ADM"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Setor da empresa</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormSelect options={sectorsList} required value={sector} onChange={(e) => setSector(e.target.value)}></CFormSelect>
                    <br></br>
                   
                    {/* <div className="mb-3 text-black">
                        <CFormInput type="file" id="formFile" label="Imagem para comprovação" />
                    </div> */}
                    
                    <CPopover title='Dados pessoais coletados' trigger="focus" content="Descrever  como (de que forma) os dados  pessoais são coletados.  *MAIÚSCULO e separado por vírgula* Ex.:NOME,CPF,RG,...  "placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Dados pessoais coletados</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={3} required value={colletedData} onChange={(e) => setColletedData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover title='Hipótese de tratamento' trigger="focus" content="Selecione a razão ou motivo pela qual se deseja tratar os dados pessoais."placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Hipótese de tratamento</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormSelect  required value={reasonData} onChange={(e) => setReasonData(e.target.value)}>
                        <option>Selecione...</option>
                        <option key={11} value="11">Consentimento - Mendiante consetimento do titular</option>
                        <option key={10} value="10">Regulatório - Para cumprimento de obrigação legal ou regulatória pelo controlador</option>
                        <option key={9} value="9">Governo - Pela administração pública, para tratamento de dados necessários a política pública</option>
                        <option key={8} value="8">Pesquisa - Para realização de estudos por órgão de pesquisa, sendo garantida a anonimização dos dados</option>
                        <option key={7} value="7">Contratos - Quando necessário para a execução de contrato</option>
                        <option key={6} value="5">Judicial - Exercício regular de direitos, inclusive em contrato e em processo judicial,administrativo e arbitral</option>
                        <option key={5} value="6">Vida - Para a proteção da vida ou incolumidade física do títular ou terceiros</option>
                        <option key={4} value="4">Saúde - Para a tutela da saúde, com procedimento realizado por profissionais da área da saúde ou por entidades sanitárias</option>
                        <option key={3} value="3">Legítimo interesse - Interesses legítimos do controlador ou de terceiro</option>
                        <option key={2} value="2">Crédito - Para proteção do crédito</option>
                        <option key={1} value="1">Dados sensíveis - Para garantia da prevenção à fraude e á segurança do títular</option>
                    </CFormSelect>
                    <br></br>
                    <CPopover title='Como é armazenado?' trigger="focus" content="Descrever onde seus dados ficam armazenados. *MAIÚSCULO e separado por vírgula*  Ex.: BANCO DE DADOS, PASTAS FISICAS E EXCEL,... "placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Como é armazenado?</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={howStorage} onChange={(e) => setHowStorage(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover title='Fonte dos dados' trigger="focus" content="Origem dos dados. *MAIÚSCULO e separado por vírgula* Ex.: TITULAR DOS DADOS, FORNECIDO POR TERCEIROS,..."placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Fonte dos dados</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={sourceData} onChange={(e) => setSourceData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover title='Segurança dos dados pessoais' trigger="focus" content=" Descreva as medidas de segurança usadas para garantir a privacidade dos titulares dos dados. *MAIÚSCULO e separado por vírgula*"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Segurança dos dados pessoais</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={securityData} onChange={(e) => setSecurityData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover title='Prazo de retenção dos dados pessoais' trigger="focus" content="Tempo até o descarte dos dados pessoais. *MAIÚSCULO*"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Prazo de retenção dos dados pessoais</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={deadlineData} onChange={(e) => setDeadlineData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover title='Justificativa do uso' trigger="focus" content="Razão ou motivo pela qual se deseja tratar os dados pessoais.*MAIÚSCULO*"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Justificativa do uso</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormTextarea rows={3} required value={justification} onChange={(e) => setJustification(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CFormLabel>Uso de dados pessoais de menores de idade?</CFormLabel>
                    <br></br>
                        <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox1" value={true} label="Sim" onChange={(e) => setUnderAgeData(e.target.value)}/>
                        <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox2" value={false} label="Não" defaultChecked onChange={(e) => setUnderAgeData(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <CFormLabel>Trata dados sensíveis?</CFormLabel>
                    <br></br>
                        <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox1" value={true} label="Sim"  onChange={(e) => setSensitiveData(e.target.value)}/>
                        <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox2" value={false} label="Não" defaultChecked  onChange={(e) => setSensitiveData(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <CPopover title='Nome do Controlador' trigger="focus" content="A quem competem as decisões referentes ao tratamento de dados pessoais. *MAIÚSCULO*"placement="right">
                        <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Nome do Controlador</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
                    </CPopover>
                    <CFormInput type='text' required value={controller} onChange={(e) => setController(e.target.value)}></CFormInput>
                </CForm>
                <br></br>
                <CButton color='success' disabled={loading} onClick={handlePostInventory}>{loading ? 'Carregando' : 'Criar'}</CButton>
                <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
