import { CButton } from "@coreui/react"
import { useState } from "react";



export const ButtonCheck = (props) => {
  const  [Check,setCheck] = useState(false);

    const handleCheck = (e) => {
        setCheck(e.target.value)
    }
  return(
    <CButton style={{backgroundColor: "#2085c7"}} href={props.href} className=" border border-0 rounded-pill text-white">{props.label}<input className="form-check-input " type="checkbox" value={Check} title={Check ? 'Item realizado' : 'Item a realizar'} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
  )
}