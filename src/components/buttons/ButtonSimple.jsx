import { CButton } from "@coreui/react"
import { useState } from "react";

export const ButtonSimple = (props) => {
  const  [Check,setCheck] = useState(false);

    const handleCheck = (e) => {
        setCheck(e.target.value)
    }
  return(
    <CButton style={{backgroundColor: "#2085c7"}} href={props.href} className=" border border-0 rounded-pill text-white">{props.label}</CButton>
  )
}