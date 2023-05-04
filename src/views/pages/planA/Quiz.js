import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CRow,CTable} from '@coreui/react';
import {cilCheck} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../../services/api';
import {PopoverTitleIcon} from '../../../components/popover/PopoverTitleIcon'

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const popovercontent = 'Resultado < 2.99: Iniciante; 3.00 >= Resultado <= 4.99: Básico; 5.00 >= Resultado <= 6.99: Intermediário; 7.00 >= Resultado <= 8.99: Intermediário Superior; Resultado >= 9.00: Avançado';

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        setLoading(true);
        const result = await api.quizFindAll();
        setLoading(false);
        if(result.error === undefined){
            for(let i = 0; i < result.length; i++){
                let createdAt = new Date(result[i].createdAt);
                createdAt = createdAt.toLocaleDateString();

                result[i] = {
                    quizId: `Quiz - ${i+1}`,
                    result: result[i].result,
                    createdAt
                }
            }
            setList(result)
        }else{
            alert(result.message);
        }
    }

    const fields = [
        {label: 'Identificação' , key:'quizId'},
        {label: 'Resultado', key: 'result'},
        {label: 'Feito em', key: 'createdAt'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <PopoverTitleIcon title='Quiz LGPD' content={popovercontent} label='Quiz LGPD'/>
                    <h2 className='text-black'></h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}}
                            className=" border border-0 rounded-pill text-white"
                            onClick={() => navigate('/lgpdfull/quiz/novo')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Responder Quiz LGPD
                            </CButton>
                        </CCardHeader>
                        <CCardBody>
                            <CTable
                                loading={loading.toString()}
                                items={list}
                                columns={fields}
                                hover
                            >
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
}
