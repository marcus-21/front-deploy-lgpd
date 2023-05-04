import {CButtonGroup} from "@coreui/react"
import {ButtonCheck} from '../../components/buttons/ButtonCheck'
const Lgpdfull = () => {

    const handleCheck = (e) => {
        setCheck(e.target.value)
    }
    
    return (
        <div className='position-relative  d-flex justify-content-evenly'>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column d-flex'>A</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE MAPEAMENTO</h5>
                <ButtonCheck href='/lgpdfull/quiz' label='Quiz LGPD' />
                <ButtonCheck href='/lgpdfull/dpo' label='DPO' />
                <ButtonCheck href='/lgpdfull/setor' label='Setor' />
                <ButtonCheck href='/lgpdfull/inventario' label='Inventário' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </CButtonGroup>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className=' justify-content-start flex-column d-flex'>B</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='position-relative p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO</h5>
                <ButtonCheck href="/lgpdfull/politica-de-privacidade" label='Política de Priv.' />
                <ButtonCheck href="#" label='Ajustes de Contratos' disabled/>
                <ButtonCheck href="/lgpdfull/termos-de-uso" label='Termos de Uso'/>
                <ButtonCheck href="/lgpdfull/checklist" label='Checklist de TI'/>
                <ButtonCheck href= "/lgpdfull/politica-de-cookies" label='Cookies'/>
                <ButtonCheck href="#" label='RIPD' disabled/>
                <ButtonCheck href='/lgpdfull/lia' label='LIA'/>
            </CButtonGroup>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column h1 d-flex'>C</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className=" gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO AVANÇADA E MANUTENÇÃO</h5>
                <ButtonCheck href="#" label='Comunicação c/ o Titular' disabled/>
                <ButtonCheck href="#" label='Política de Segurança' disabled/>
                <ButtonCheck href="#" label='Privacy by Design' disabled/>
                <ButtonCheck href="#" label='Treinamentos' disabled/>
                <ButtonCheck href="#" label='Incidentes' disabled/>
                <ButtonCheck href="#" label='Quiz LGPD Final' disabled/>
            </CButtonGroup>
        </div>

    )
}

export default Lgpdfull
