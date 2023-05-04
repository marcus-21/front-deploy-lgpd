import React, { useEffect, useState } from 'react'
import { useNavigate } from  'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import useAPI from '../services/api'

const DefaultLayout = () => {
  const api = useAPI()
  const navigate = useNavigate();

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
     const checkLogin = async () => {
       if(api.gettoken()){
         setLoading(false);
       } else{
         navigate('/lgpdfull/acesso');
       }
      }
      checkLogin();
  }, [])

  return (
    <div>
      {!loading &&
        <>
          <AppSidebar />
          <div style={{backgroundSize: 'cover', backgroundImage: `url("https://media.discordapp.net/attachments/1052661296945971232/1067881926066720828/Rectangle_1_1.png?width=759&height=427")`}} className="wrapper d-flex flex-column min-vh-100 bg-dark text-white">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
            <AppFooter />
          </div>
        </>
      }
    </div>
  )
}

export default DefaultLayout
