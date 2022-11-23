import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BiLogIn, BiLogOut } from "react-icons/bi";

const Menu = () => {
    const [token, setToken] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
    };

    useEffect(() => {
        
        if (localStorage.getItem("token") !== undefined) {
            setToken(localStorage.getItem("token"));
        }
    }, []);

    if(token === "") {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">MueblesStgo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/empleados">Empleados</Nav.Link>
                            <Nav.Link href="/inasistencias">Inasistencias</Nav.Link>
                            <Nav.Link href="/horas_extras">Horas Extras</Nav.Link>
                            <Nav.Link href="/atrasos">Atrasos</Nav.Link>
                            <Nav.Link href="/ingresos_salidas">Ingresos Salidas</Nav.Link>   
                            <Nav.Link href="/login"><BiLogIn/></Nav.Link>                     
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }else{
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">MueblesStgo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/empleados">Empleados</Nav.Link>
                            <Nav.Link href="/inasistencias">Inasistencias</Nav.Link>
                            <Nav.Link href="/horas_extras">Horas Extras</Nav.Link>
                            <Nav.Link href="/atrasos">Atrasos</Nav.Link>
                            <Nav.Link href="/ingresos_salidas">Ingresos Salidas</Nav.Link>   
                            <Nav.Link onClick={handleLogout}><BiLogOut/></Nav.Link>                     
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    
};

export default Menu;