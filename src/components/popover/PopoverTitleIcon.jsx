import { cilLightbulb } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CPopover } from "@coreui/react";

export const PopoverTitleIcon = (props) => {
    return(
        <CPopover title={props.title} trigger="focus" content={props.content} placement="right">
            <CButton color='text-black' style={{alignItems:'baseline',display:'flex'}} className='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><h2 className='text-black'>{props.label}</h2><CIcon icon={cilLightbulb}  height={15}/></CButton>
        </CPopover>
    );
}