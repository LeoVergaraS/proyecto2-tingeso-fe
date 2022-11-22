import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const HorasExtras = () => {
    const [horasExtras, setHorasExtras] = useState([]);

    const getHorasExtras = async () => {
        try {
            let url = "http://localhost:8080/horaExtra";
            const response = await axios.get(url);
            if(response.status === 200){
                setHorasExtras(response.data);
            }
        }catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHorasExtras();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}> 
            <Row>
                <Col><h1>Lista de horas extras</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="danger" href="/">Volver</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped className="mt-4" hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Mes</th>
                                <th>Año</th>
                                <th>Horas extras</th>
                                <th>Autorizado</th>
                                <th>Rut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {horasExtras.map((he) => (
                                <tr key={he.id}>
                                    <td>{he.id}</td>
                                    <td>{he.mes}</td>
                                    <td>{he.anio}</td>
                                    <td>{he.cantidadHorasExtras}</td>
                                    <td>{(() => {
                                        if(he.autorizado){
                                            return "Si";
                                        }else{
                                            return "No";
                                        }
                                    })()}</td>
                                    <td>{he.rutEmpleado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default HorasExtras;