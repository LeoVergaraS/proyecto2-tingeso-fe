import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">MueblesStgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar"/>
                <Navbar.Collapse id="responsive-navbar"> 
                    <Nav className="me-auto">
                        <Nav.Link href="/empleados">Empleados</Nav.Link>
                        <Nav.Link href="/inasistencias">Inasistencias</Nav.Link>
                        <Nav.Link href="/horas_extras">Horas Extras</Nav.Link>
                        <Nav.Link href="/atrasos">Atrasos</Nav.Link>
                        <Nav.Link href="/ingresos_salidas">Ingresos Salidas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;