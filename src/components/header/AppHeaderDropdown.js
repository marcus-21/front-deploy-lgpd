import React from 'react'
import {CBadge,CButton,CDropdown,CDropdownDivider,CDropdownHeader,CDropdownItem,CDropdownMenu,CDropdownToggle,} from '@coreui/react'
import {cilUser,cilExitToApp,cilLockLocked} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CButton type="button" color=' fw-semibold rounded-pill border border-0 btn btn-ghost-primary text-white 'style={{backgroundColor: "#2085c7" ,fontFamily:'inherit' }} className="position-relative ">Solus
          <CBadge color="success" className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-2" position="top-end" shape="rounded-circle" > <span className="visually-hidden">New alerts</span></CBadge>
        </CButton>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Configurações</CDropdownHeader>
        <CDropdownItem href="/lgpdfull/Perfil">
          <CIcon icon={cilUser} className="me-2" />
            Alterar e-mail
        </CDropdownItem>
          <CDropdownItem href='/lgpdfull/trocarsenha'>
            <CIcon icon={cilLockLocked} className="me-2" />
            Alterar senha
          </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/lgpdfull/logout">
          <CIcon icon={cilExitToApp} className="me-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
