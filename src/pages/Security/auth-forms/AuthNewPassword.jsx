import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Alerta from 'components/Alerta';
import clienteAxios from 'config/clienteAxios';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [tokenValido, setTokenValido] = useState(false);
    const [alerta, setAlerta] = useState({});
	const [passwordMidificado, setPasswordMidificado] = useState(false)

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                // TODO: Mover hacia un cliente axios
                await clienteAxios.get(`/${token}`);
                setTokenValido(true);
            } catch (error) {
                Alerta({
                    msg: error.response.msg,
                    error: true
                });
            }
        };

        comprobarToken();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await clienteAxios.post('', { password });
            setAlerta({
                msg: data.message,
                error: false
            });

			setPasswordMidificado(true);
        } catch (error) {
            setAlerta({
                msg: error.response.message,
                error: true
            });
        }
    };

    const { msg } = alerta;

    return (
	<>
		{tokenValido && (
		<div>

		</div>
		)}

		{passwordMidificado && (
			<div>

			</div>
		)}
	</>
	);
};

export default NewPassword;
