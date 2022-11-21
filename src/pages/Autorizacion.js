import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";

const Autorizacion = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [buscar, setBuscar] = useState({
        rut: "",
        fecha: ""
    });

    const [horaExtra, setHoraExtra] = useState({
        id: null,
        rutEmpleado: "",
        mes: "",
        anio: "",
        cantidadHorasExtras: "",
        autorizado: "",
    });

    const handleChange = (e) => {
        setBuscar({
            ...buscar,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeHoraExtra = (e) => {
        setHoraExtra({
            ...horaExtra,
            [e.target.name]: e.target.value
        });
    };

    const buscarHoraExtras = async () => {
        try {
            let fechaSeparada = buscar.fecha.split("-");
            let url = "http://localhost:8080/horaExtra/" + buscar.rut + "/" + fechaSeparada[1] + "/" + fechaSeparada[0];
            const response = await axios.get(url);
            if (response.status === 200) {
                setHoraExtra(response.data);
                console.log(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const actualizarHoraExtra = async () => {
        try {
            let url = "http://localhost:8080/horaExtra";
            const response = await axios.post(url, horaExtra);
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
                                <Form.Control type="text" placeholder="Ingrese rut" name="rut" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBuscar">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="month" placeholder="Ingrese la fecha" name="fecha" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={buscarHoraExtras}>Buscar</Button>
                        </Col>
                    </Row>
                </Form>
                <Card style={{ marginTop: '70px' }}>
                    <Card.Header>Informacion de hora extra</Card.Header>
                    <Card.Body>
                        <Card.Text><strong>ID: </strong>{horaExtra.id}</Card.Text>
                        <Card.Text><strong>Rut: </strong>{horaExtra.rutEmpleado}</Card.Text>
                        <Card.Text><strong>Mes: </strong>{horaExtra.mes}</Card.Text>
                        <Card.Text><strong>Año: </strong>{horaExtra.anio}</Card.Text>
                        <Card.Text><strong>Cantidad de horas extras: </strong>{horaExtra.cantidadHorasExtras}</Card.Text>
                        <Card.Text><strong>Autorizado: </strong>{horaExtra.autorizado}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" onClick={handleShow}>Autorizar</Button>
                    </Card.Footer>
                </Card>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Autorizar hora extra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formAutorizar">
                            <Form.Label>¿Desea autorizar la hora extra?</Form.Label>
                            <Form.Select defaultValue={horaExtra.autorizado} name="autorizado" onChange={handleChangeHoraExtra}>
                                <option value="1">Si</option>
                                <option value="0">No</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" onClick={actualizarHoraExtra}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Autorizacion;