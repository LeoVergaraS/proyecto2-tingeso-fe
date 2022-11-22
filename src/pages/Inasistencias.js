import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";

const Inasistencias = () => {
    const [inasistencias, setInasistencias] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nuevaInasistencia, setNuevaInasistencia] = useState({
        id: null,
        rutEmpleado: "",
        mes: "",
        anio: "",
        cantidadDias: "",
        diasJustificados: "",
    });

    const handleChange = (e) => {
        setNuevaInasistencia({
            ...nuevaInasistencia,
            [e.target.name]: e.target.value
        });
    };

    const crearInasistencia = async () => {
        try {
            let url = "http://localhost:8080/inasistencia";
            const response = await axios.post(url, nuevaInasistencia);
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const getInasistencias = async () => {
        try {
            let url = "http://localhost:8080/inasistencia";
            const response = await axios.get(url);
            if (response.status === 200) {
                setInasistencias(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getInasistencias();
    }, []);

    return (
        <>
            <Container style={{ marginTop: '70px' }}>
                <Row>
                    <Col><h1>Lista de inasistencias</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={handleShow}>
                            Crear
                        </Button>
                        <Button style={{ marginLeft: '5px' }} variant="danger" href="/">Volver</Button>
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
                                    <th>Cantidad de dias</th>
                                    <th>Dias jutificados</th>
                                    <th>Rut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inasistencias.map((inasistencia) => (
                                    <tr key={inasistencia.id}>
                                        <td>{inasistencia.id}</td>
                                        <td>{inasistencia.mes}</td>
                                        <td>{inasistencia.anio}</td>
                                        <td>{inasistencia.cantidadDias}</td>
                                        <td>{inasistencia.diasJustificados}</td>
                                        <td>{inasistencia.rutEmpleado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear inasistencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInasistencia">
                            <Form.Label>Mes</Form.Label>
                            <Form.Control type="number" placeholder="Mes" name="mes" onChange={handleChange} min="1" max="12" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInasistencia">
                            <Form.Label>Año</Form.Label>
                            <Form.Control type="number" placeholder="Año" name="anio" onChange={handleChange} min="1900" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInasistencia">
                            <Form.Label>Cantidad de dias</Form.Label>
                            <Form.Control type="number" placeholder="Cantidad de dias" name="cantidadDias" onChange={handleChange} min="0" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInasistencia">
                            <Form.Label>Dias justificados</Form.Label>
                            <Form.Control type="number" placeholder="Dias justificados" name="diasJustificados" onChange={handleChange} min="0" max={nuevaInasistencia.cantidadDias} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInasistencia">
                            <Form.Label>Rut</Form.Label>
                            <Form.Control type="text" placeholder="12.345.678-9" name="rutEmpleado" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" onClick={crearInasistencia}>Crear</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Inasistencias;