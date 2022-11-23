import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

const Sueldo = () => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.jwtToken}` }
    };    

    const [sueldos, setSueldos] = useState([]);

    const [buscar, setBuscar] = useState({
        fecha: ""
    });

    const handleChange = (e) => {
        setBuscar({
            ...buscar,
            [e.target.name]: e.target.value
        });
    };

    const getSueldos = async () => {
        try {
            let url = "http://localhost:8080/sueldo/planilla";
            const response = await axios.get(url);
            if (response.status === 200) {
                setSueldos(response.data);
                console.log(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    };


    const calcularSueldos = async () => {
        try {
            let fechaSeparada = buscar.fecha.split("-");
            let url = "http://localhost:8080/sueldo/calcular/" + fechaSeparada[1] + "/" + fechaSeparada[0];
            const response = await axios.get(url, config);
            if (response.status === 200) {
                getSueldos();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <Container style={{ marginTop: '90px' }}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBuscar">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="month" name="fecha" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={calcularSueldos} className="mt-4">Calcular</Button>
                            <Button style={{marginLeft: '5px'}} className="mt-4" variant="danger" href="/">Volver</Button>
                        </Col>
                    </Row>
                </Form>
                <Table striped className="mt-4" hover>
                    <thead>
                        <tr>
                            <th>Rut</th>
                            <th>Nombre completo</th>
                            <th>Categoria</th>
                            <th>Años servicio</th>
                            <th>Sueldo mensual</th>
                            <th>Tiempo servicio</th>
                            <th>Horas extras</th>
                            <th>Atrasos</th>
                            <th>Sueldo bruto</th>
                            <th>Previsional</th>
                            <th>Salud</th>
                            <th>Sueldo final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sueldos.map((s) => (
                            <tr key={s.id}>
                                <td>{s.rut}</td>
                                <td>{s.nombre_completo}</td>
                                <td>{s.categoria}</td>
                                <td>{s.anios_servicio}</td>
                                <td>{s.sueldo_fijo_mensual}</td>
                                <td>{s.bonificacion_tiempo_servicio}</td>
                                <td>{s.pago_horas_extras}</td>
                                <td>{s.descuentos_atrasos}</td>
                                <td>{s.sueldo_bruto}</td>
                                <td>{s.descuentos_previsional}</td>
                                <td>{s.descuentos_salud}</td>
                                <td>{s.sueldo_final}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Sueldo;