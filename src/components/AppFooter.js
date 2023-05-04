import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        LGPDFull
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://solus-it.com.br/" target="_blank" rel="noopener noreferrer">
          Solus-IT
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
