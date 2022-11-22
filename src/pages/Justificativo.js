import axios from "axios";
import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Modal } from "react-bootstrap"

const Justificativo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inasistencia, setInasistencia] = useState({
        id: null,
        rutEmpleado: "",
        mes: "",
        anio: "",
        cantidadDias: "",
        diasJustificados: "",
    });

    const [buscar, setBuscar] = useState({
        rut: "",
        fecha: ""
    });

    const handleChange = (e) => {
        setBuscar({
            ...buscar,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeInasistencia = (e) => {
        setInasistencia({
            ...inasistencia,
            [e.target.name]: e.target.value
        });
    };

    const buscarInasistencia = async () => {
        try {
            let fechaSeparada = buscar.fecha.split("-");
            let url = "http://localhost:8080/inasistencia/" + buscar.rut + "/" + fechaSeparada[1] + "/" + fechaSeparada[0];
            const response = await axios.get(url);
            if (response.status === 200) {
                setInasistencia(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const actualizarInasistencia = async () => {
        try {
            let url = "http://localhost:8080/inasistencia/";
            const response = await axios.post(url, inasistencia);
            if (response.status === 200) {
                window.location.reload();
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
                            <Form.Group controlId="formBuscar">
                                <Form.Label>Rut</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el rut" name="rut" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBuscar">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="month" placeholder="Ingrese una fecha" name="fecha" min="1950-01" defaultValue={"2022-01"} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="m-10">
                            <Button style={{marginTop: '30px'}} variant="primary" onClick={buscarInasistencia}>Buscar</Button>
                            <Button style={{marginLeft: '5px', marginTop: '30px'}} variant="danger" href="/">Volver</Button>
                        </Col>
                    </Row>
                </Form>
                <Card style={{ marginTop: '70px' }}>
                    <Card.Header>Información de inasistencia</Card.Header>
                    <Card.Body>
                        <Card.Text><strong>ID: </strong>{inasistencia.id}</Card.Text>
                        <Card.Text><strong>Rut: </strong>{inasistencia.rutEmpleado}</Card.Text>
                        <Card.Text><strong>Mes: </strong>{inasistencia.mes}</Card.Text>
                        <Card.Text><strong>Año: </strong>{inasistencia.anio}</Card.Text>
                        <Card.Text><strong>Cantidad de días: </strong>{inasistencia.cantidadDias}</Card.Text>
                        <Card.Text><strong>Días justificados: </strong>{inasistencia.diasJustificados}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" onClick={handleShow}>Justificar</Button>
                        
                    </Card.Footer>
                </Card>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Justificar inasistencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formJustificar">
                            <Form.Label>Dias a justificar</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Ingrese la cantidad de días a justificar" 
                                name="diasJustificados" 
                                min="0" 
                                max={inasistencia.cantidadDias} 
                                defaultValue={inasistencia.diasJustificados} 
                                onChange={handleChangeInasistencia} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" onClick={actualizarInasistencia}>Justificar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Justificativo;