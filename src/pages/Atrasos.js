import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const Atrasos = () => {
    const [atrasos, setAtrasos] = useState([]);

    const getAtrasos= async () => {
        try {
            let url = "http://localhost:8080/atrasos";
            const response = await axios.get(url);
            if(response.status === 200){
                setAtrasos(response.data);
                console.log(response.data)
            }
        }catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAtrasos();
    }, []);

    return (
        <Container style={{marginTop: '70px'}}> 
            <Row>
                <Col><h1>Lista de inasistencias</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Table striped className="mt-4" hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Mes</th>
                                <th>Año</th>
                                <th>10 minutos</th>
                                <th>25 minutos</th>
                                <th>45 minutos</th>
                                <th>Rut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atrasos.map((a) => (
                                <tr key={a.id}>
                                    <td>{a.id}</td>
                                    <td>{a.mes}</td>
                                    <td>{a.anio}</td>
                                    <td>{a.atraso10min}</td>
                                    <td>{a.atraso25min}</td>
                                    <td>{a.atraso45min}</td>
                                    <td>{a.rutEmpleado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Atrasos;