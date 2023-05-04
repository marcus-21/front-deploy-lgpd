import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilLockLocked,
  cilUserPlus,
  cilOpacity,
  cilPenAlt,
  cilCursor,
  cilChart,
  cilLayers,
  cilPencil,
  cilMemory,
  cilListRich,
  cilShortText,
  cilCheckCircle,
  cilInfo,
  cilPlus,
  cilUser,
  cilChartPie,
  cilBullhorn,
  cilSpeak,
  cilShieldAlt,
  cilMobile,
  cilCloud,
  cilHttps,
  cilPuzzle,
  cilListNumbered
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Painel Geral',
  },
  {
    component: CNavItem,
    name: 'LGPDFull',
    to: '/lgpdfull',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ajuda',
    to: '/lgpdfull/ajuda',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
  },
  //FASE A
  {
    component: CNavGroup,
    name: 'A - Fase de Mapeamento',
    items: [
      {
        component: CNavGroup,
        name: 'Quiz LGPD',
        to: '/lgpdfull/quiz',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Feitos',
            to: '/lgpdfull/quiz',
            icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Fazer',
            to: '/lgpdfull/quiz/novo',
            icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'DPO',
        to: '/lgpdfull/dpo',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Todos',
            to: '/lgpdfull/dpo',
            icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Criar',
            to: '/lgpdfull/dpo/criar',
            icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
          }
        ],
      },
      {
        component: CNavGroup,
        name: 'Setor',
        to: '/lgpdfull/setor',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Todos',
            to: '/lgpdfull/setor',
            icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Criar',
            to: '/lgpdfull/setor/criar',
            icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
          }
        ],
      },
      {
        component: CNavGroup,
        name: 'Inventário',
        to: '/lgpdfull/inventario',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Todos',
            to: '/lgpdfull/inventario',
            icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Criar',
            to: '/lgpdfull/inventario/criar',
            icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
          }
        ],
      },
    ]
  },
  //FASE B
  {
    component: CNavGroup,
    name: 'B - Fase de Implementação',
    items: [
      {
        component: CNavGroup,
        name: 'Documentos',
        icon: <CIcon icon={ cilDescription } customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Política de privacidade',
            to: '/lgpdfull/politica-de-privacidade',
            icon: <CIcon icon={ cilLockLocked } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Contrato de colaborador',
            to: '/lgpdfull/quiz/novo',
            icon: <CIcon icon={ cilUserPlus } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Termos de uso',
            to: '/lgpdfull/termos-de-uso',
            icon: <CIcon icon={ cilPenAlt } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Política de Cookies',
            to: '/lgpdfull/politica-de-cookies',
            icon: <CIcon icon={ cilOpacity } customClassName="nav-icon" />
          },
        ]
      },
      {
        component: CNavGroup,
        name: 'Checklist de TI',
        icon: <CIcon icon={ cilListNumbered } customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Controle de Acesso',
            to: '/lgpdfull/checklist/controle-de-acesso',
            icon: <CIcon icon={ cilLockLocked } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Dados Armazenados',
            to: '/lgpdfull/checklist/dados-armazenados',
            icon: <CIcon icon={ cilUserPlus } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Segurança nas Comunicações',
            to: '/lgpdfull/checklist/seguranca-nas-comunicacoes',
            icon: <CIcon icon={ cilSpeak } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Gerenciamento de Vulnerabilidade',
            to: '/lgpdfull/checklist/gerenciamento-de-vulnerabilidade',
            icon: <CIcon icon={ cilShieldAlt } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Dispositivos Móveis',
            to: '/lgpdfull/checklist/dispositivos-moveis',
            icon: <CIcon icon={ cilMobile } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Serviços em Nuvem',
            to: '/lgpdfull/checklist/servicos-em-nuvem',
            icon: <CIcon icon={ cilCloud } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Cookies',
            to: '/lgpdfull/checklist/cookies',
            icon: <CIcon icon={ cilOpacity } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Política de Segurança da Informação',
            to: '/lgpdfull/checklist/politica-de-seguranca-da-informacao',
            icon: <CIcon icon={ cilHttps } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Conscientização e Treinamento',
            to: '/lgpdfull/checklist/conscientizacao-e-treinamento',
            icon: <CIcon icon={ cilPuzzle } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Contratos',
            to: '/lgpdfull/checklist/contratos',
            icon: <CIcon icon={ cilDescription } customClassName="nav-icon" />
          },
        ]
      }
/*       {
        component: CNavGroup,
        name: 'Ajustes de TI',
        to: '/lgpdfull/quiz',
        icon: <CIcon icon={ cilMemory } customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Checklist de TI',
            to: '/lgpdfull/quiz',
            icon: <CIcon icon={ cilListRich } customClassName="nav-icon" />
          },
          {
            component: CNavItem,
            name: 'Evidências',
            to: '/lgpdfull/quiz',
            icon: <CIcon icon={ cilShortText } customClassName="nav-icon"/>
          },
        ]
      },
      {
        component: CNavItem,
        name: 'RIPD',
        to: '/lgpdfull/quiz',
        icon: <CIcon icon={ cilInfo } customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'LIA',
        to: '/lgpdfull/quiz',
        icon: <CIcon icon={ cilCheckCircle } customClassName="nav-icon" />,
      } */
    ]
  },
  //FASE C
]

export default _nav
