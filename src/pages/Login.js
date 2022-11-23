import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
    const [login, setLogin] = useState({
        usuario: "",
        password: "",
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        try {
            let url = "http://localhost:8080/autenticar";
            const response = await axios.post(url, login);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.jwtToken);
                console.log("token: " + response.data.jwtToken);
            }
            
        } catch (err) {
            alert("Credenciales incorrectas");
            console.error(err.message);
        }
    };

    return (
        <Container style={{ marginTop: '90px', borderInline: "10px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formLogin">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control name="usuario" required type="text" placeholder="Ingrese su usuario" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" required type="password" placeholder="Ingrese su contraseña" onChange={handleChange}/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleLogin} style={{ marginRight: '10px' }}>
                Ingresar
            </Button>
            <Button variant="danger" href="/">
                Cancelar
            </Button>
        </Container>

    );

};

export default Login;