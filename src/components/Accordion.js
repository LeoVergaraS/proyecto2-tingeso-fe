import { Accordion, Container, Button, Row, Col } from "react-bootstrap";

const Acordion = () => {
    return (
        <Container style={{ marginTop: '150px' }}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Importar macas del reloj</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                Debe ingresar un archivo con el nombre <strong>data</strong> y extension <strong>.txt</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" href="/archivo" className="mt-3">Ir</Button>
                            </Col>
                        </Row>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Ingresar justificativo de atrasos</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                Ingrese con el boton <strong>ir</strong> para justificar un atraso ingresando el rut del empleado y la fecha de la inasistencia.
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" href="/justificar" className="mt-3">Ir</Button>
                            </Col>
                        </Row>
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Ingresar autorización de horas extras</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                Ingrese con el boton <strong>ir</strong> para autorizad las horas extras ingresando el rut del empleado y la fecha.
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" href="/autorizar" className="mt-3">Ir</Button>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Calcular y mostrar sueldos</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                Ingrese con el boton <strong>ir</strong> para calcular los sueldos de los empleados ingresando la fecha para calcular.
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" href="/sueldo" className="mt-3">Ir</Button>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Acordion;