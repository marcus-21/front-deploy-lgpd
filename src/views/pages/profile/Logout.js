import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from "../../../services/api";

export default () => {
    const api = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = () => {
            api.logout();
            navigate("/lgpdfull/acesso");
        }
        doLogout();
    }, []);

    return null;
}
