import { CButton, CButtonGroup } from '@coreui/react'
import {ButtonSimple } from '../../../../components/buttons/ButtonSimple'
// import styles from '../../../../css/teste.css'

const PenelChecklist = () => {
    return (
        <div>
            <h2 className="d-flex justify-content-center mb-5 text-black">Painel Checklist</h2>
            <div className="d-flex justify-content-center">
                <CButtonGroup className="position-relative gap-2 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <ButtonSimple href="#" label='Introdução'/>
                    <ButtonSimple href="/lgpdfull/checklist/controle-de-acesso" label='Controle de Acesso'/>
                    <ButtonSimple href="/lgpdfull/checklist/dados-armazenados"label='Dados Armazenados'/>
                    <ButtonSimple href="/lgpdfull/checklist/seguranca-nas-comunicacoes" label='Segurança nas Comunicações'/>
                    <ButtonSimple href="/lgpdfull/checklist/gerenciamento-de-vulnerabilidade" label='Gerenciamento de Vulnerabilidade'/>
                    <ButtonSimple href="/lgpdfull/checklist/dispositivos-moveis" label='Dispositivos Móveis'/>
                </CButtonGroup>
                <CButtonGroup className="position-relative gap-2 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <ButtonSimple href="/lgpdfull/checklist/servicos-em-nuvem"label='Serviços em Nuvem'/>
                    <ButtonSimple href="/lgpdfull/checklist/cookies" label='Cookies'/>
                    <ButtonSimple href="/lgpdfull/checklist/politica-de-seguranca-da-informacao" label='Política de Segurança da Informação'/>
                    <ButtonSimple href="/lgpdfull/checklist/conscientizacao-e-treinamento" label='Conscientização e Treinamento'/>
                    <ButtonSimple href="/lgpdfull/checklist/contratos" label='Contratos'/>
                </CButtonGroup>
            </div>
        </div>
    )
}

export default PenelChecklist;