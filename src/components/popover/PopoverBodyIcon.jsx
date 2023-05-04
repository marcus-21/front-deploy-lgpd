import { cilLightbulb } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CPopover, CButton, CFormInput, CFormLabel } from '@coreui/react'


export const PopoverBodyIcon = (props) => {
    
    return (
        <div>
            <CPopover title={props.title} trigger="focus" content={props.content} placement="right">
                <CButton data-coreui-toggle="popover"  style={{alignItems:'baseline',display:'flex'}}   className='text-black d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>{props.label}</CFormLabel><CIcon icon={cilLightbulb}  height={15}/></CButton>
            </CPopover>
            <CFormInput trigger="focus" type='text'></CFormInput>
        </div>
    );
}