import { Accordion, Container, Button } from "react-bootstrap";

const Acordion = () => {
    return (
        <Container style={{marginTop: '150px'}}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Importar macas del reloj</Accordion.Header>
                    <Accordion.Body>
                        Debe ingresar un archivo con el nombre <strong>data</strong> y extension <strong>.txt</strong>
                        <Button variant="primary" href="/archivo" className="mt-3">Ir</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Ingresar justificativo de atrasos</Accordion.Header>
                    <Accordion.Body><Button variant="primary" href="/justificar" className="mt-3">Ir</Button></Accordion.Body>
                    
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Ingresar autorización de horas extras</Accordion.Header>
                    <Accordion.Body><Button variant="primary" href="/autorizar" className="mt-3">Ir</Button></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Calcular y mostrar sueldos</Accordion.Header>
                    <Accordion.Body><Button variant="primary" href="/sueldo" className="mt-3">Ir</Button></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Acordion;