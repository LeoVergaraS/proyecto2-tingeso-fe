import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";

const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nuevoEmpleado, setNuevoEmpleado] = useState({
        id: null,
        rut: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        fechaIngreso: "",
        categoria: ""
    });

    const handleChange = (e) => {
        setNuevoEmpleado({
            ...nuevoEmpleado,
            [e.target.name]: e.target.value
        });
    };

    const getEmpleados = async () => {
        try {
            let url = "http://localhost:8080/empleados";
            const response = await axios.get(url);
            if (response.status === 200) {
                setEmpleados(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const crearEmpleado = async () => {
        try {
            let url = "http://localhost:8080/empleados";
            const response = await axios.post(url, nuevoEmpleado);
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEmpleados();
    }, []);

    return (
        <>
            <Container style={{ marginTop: '70px' }}>
                <Row>
                    <Col><h1>Lista de empleados</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={handleShow}>
                            Crear
                        </Button>
                        <Button style={{marginLeft: '5px'}} variant="danger" href="/">Volver</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped className="mt-4" hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Rut</th>
                                    <th>Fecha Nacimiento</th>
                                    <th>Fecha Ingreso</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleados.map((empleado) => (
                                    <tr key={empleado.id}>
                                        <td>{empleado.id}</td>
                                        <td>{empleado.nombre}</td>
                                        <td>{empleado.apellido}</td>
                                        <td>{empleado.rut}</td>
                                        <td>{empleado.fechaNacimiento}</td>
                                        <td>{empleado.fechaIngreso}</td>
                                        <td>{empleado.categoria}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear empleado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="nombre" type="text" placeholder="Ingrese nombre" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control name="apellido" type="text" placeholder="Ingrese apellido" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Rut</Form.Label>
                            <Form.Control name="rut" type="text" placeholder="12.345.678-9" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <Form.Control name="fechaNacimiento" type="date" placeholder="Ingrese fecha nacimiento" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Fecha Ingreso</Form.Label>
                            <Form.Control name="fechaIngreso" type="date" placeholder="Ingrese fecha ingreso" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmpleado">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select name="categoria" onChange={handleChange}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" onClick={crearEmpleado}>Crear</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Empleados;