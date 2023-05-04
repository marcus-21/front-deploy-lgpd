import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/pages/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/profile/ChangePassword'))
const Logout = React.lazy(() => import('./views/pages/profile/Logout'))
const Perfil = React.lazy(() => import('./views/pages/profile/Profile'))

//FASE A
const Inventario = React.lazy(() => import('./views/pages/planA/Inventory'));
const InventarioCriar = React.lazy(() => import('./views/pages/planA/CreateInventory'));
const Dpo = React.lazy(() => import('./views/pages/planA/Dpo'));
const DpoCriar = React.lazy(() => import('./views/pages/planA/CreateDpo'));
const Setor = React.lazy(() => import('./views/pages/planA/Sector'));
const SetorCriar = React.lazy(() => import('./views/pages/planA/CreateSector'));
const Quiz  = React.lazy(() => import('./views/pages/planA/Quiz'));
const QuizCriar = React.lazy(() => import('./views/pages/planA/CreateQuiz'));
const Ajuda = React.lazy(() => import('./views/pages/profile/Help'));

//FASE B
const PoliticaDePrivacidade = React.lazy(() => import('./views/pages/planB/PrivacyPolicy'));
const TermosDeUso = React.lazy(() => import('./views/pages/planB/UseTerms'));
const PoliticaDeCookies = React.lazy(() => import('./views/pages/planB/CookiesPolicy'));
const PenelChecklist = React.lazy(() => import('./views/pages/planB/chacklistTI/PanelChecklist'));
const ControlDeAcesso = React.lazy(() => import('./views/pages/planB/chacklistTI/AccessControl'));
const DadosArmazenados = React.lazy(() => import('./views/pages/planB/chacklistTI/StoredData'));
const SecurityInCommunications = React.lazy(() => import('./views/pages/planB/chacklistTI/SecurityCommunications'));
const VulnerabilityManagement = React.lazy(() => import('./views/pages/planB/chacklistTI/VulnerabilityManagement'));
const MobileDevices = React.lazy(() => import('./views/pages/planB/chacklistTI/MobileDevices'));
const CloudServices = React.lazy(() => import('./views/pages/planB/chacklistTI/CloudServices'));
const Cookies = React.lazy(() => import('./views/pages/planB/chacklistTI/Cookies'));
const InformationSecurityPolicy = React.lazy(() => import('./views/pages/planB/chacklistTI/InformationSecurityPolicy'));
const AwarenessandTraining = React.lazy(() => import('./views/pages/planB/chacklistTI/AwarenessTraining'));
const Contracts = React.lazy(() => import('./views/pages/planB/chacklistTI/Contracts'));
const LegitimateInterests = React.lazy(() => import('./views/pages/planB/LIA'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/ajuda', name: 'Ajuda', element: Ajuda },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/lgpdfull/logout', name: 'Logout', element: Logout },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil },
  //Fase A
  { path: '/lgpdfull/inventario', name: 'Inventario', element: Inventario },
  { path: '/lgpdfull/inventario/criar', name: 'Criar', element: InventarioCriar },
  { path: '/lgpdfull/dpo', name: 'DPO', element: Dpo },
  { path: '/lgpdfull/dpo/criar', name: 'Criar', element: DpoCriar },
  { path: '/lgpdfull/setor', name: 'Setor', element: Setor },
  { path: '/lgpdfull/setor/criar', name: 'Criar', element: SetorCriar },
  { path: '/lgpdfull/quiz', name: 'Quiz', element: Quiz },
  { path: '/lgpdfull/quiz/novo', name: 'Quiz', element: QuizCriar },
  //Fase B
  { path: '/lgpdfull/politica-de-privacidade', name: 'Política De Privacidade', element: PoliticaDePrivacidade },
  { path: '/lgpdfull/termos-de-uso', name: 'Termos De Uso', element: TermosDeUso },
  { path: '/lgpdfull/politica-de-cookies', name: 'Politica de Cookies', element: PoliticaDeCookies },
  { path: '/lgpdfull/checklist', name: 'Painel do Checklist', element: PenelChecklist },
  { path: '/lgpdfull/checklist/controle-de-acesso', name: 'Controle de Acesso', element: ControlDeAcesso },
  { path: '/lgpdfull/checklist/dados-armazenados', name: 'Dados Armazenados', element: DadosArmazenados },
  { path: '/lgpdfull/checklist/seguranca-nas-comunicacoes', name: 'Segurança Nas Comunicações', element: SecurityInCommunications },
  { path: '/lgpdfull/checklist/gerenciamento-de-vulnerabilidade', name: 'Gerenciamento de Vulnerabilidade', element: VulnerabilityManagement },
  { path: '/lgpdfull/checklist/dispositivos-moveis', name: 'Dispositivos Móveis', element: MobileDevices },
  { path: '/lgpdfull/checklist/servicos-em-nuvem', name: 'Serviços em Nuvem', element: CloudServices },
  { path: '/lgpdfull/checklist/cookies', name: 'Cookies', element: Cookies },
  { path: '/lgpdfull/checklist/politica-de-seguranca-da-informacao', name: 'Política de Segurança da Informação', element: InformationSecurityPolicy },
  { path: '/lgpdfull/checklist/conscientizacao-e-treinamento', name: 'Conscientização e Treinamento', element: AwarenessandTraining },
  { path: '/lgpdfull/checklist/contratos', name: 'Contratos', element: Contracts },
  { path: '/lgpdfull/lia', name: 'LIA', element: LegitimateInterests }

]

export default routes
