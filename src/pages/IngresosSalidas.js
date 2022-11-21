import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const IngresosSalidas = () => {
    const [ingresosSalidas, setIngresosSalidas] = useState([]);

    const getIngresosSalidas = async () => {
        try {
            let url = "http://localhost:8080/ingresosSalidas";
            const response = await axios.get(url);
            if(response.status === 200){
                setIngresosSalidas(response.data);
            }
        }catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getIngresosSalidas();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}> 
            <Row>
                <Col><h1>Lista de ingresos y salidas</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Table striped className="mt-4" hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>fecha</th>
                                <th>Hora</th>
                                <th>Rut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingresosSalidas.map((is) => (
                                <tr key={is.id}>
                                    <td>{is.id}</td>
                                    <td>{is.fecha}</td>
                                    <td>{is.hora}</td>
                                    <td>{is.rutEmpleado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default IngresosSalidas;