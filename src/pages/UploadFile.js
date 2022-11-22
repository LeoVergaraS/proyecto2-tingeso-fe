import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import { Form } from "react-bootstrap";

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleUploadAtrasos = (e) => {
        e.preventDefault();

        let url = "http://localhost:8080/atrasos/file";
        axios.post(url)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleUploadHorasExtras = (e) => {
        e.preventDefault();

        let url = "http://localhost:8080/horaExtra/file";
        axios.post(url)
            .then(response => {
                handleUploadAtrasos(e);
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleUploadInasistencias = (e) => {
        e.preventDefault();

        let url = "http://localhost:8080/inasistencia/file";
        axios.post(url)
            .then(response => {
                handleUploadHorasExtras(e);
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleUpload = (e) => {
        e.preventDefault();

        let url = "http://localhost:8080/file/upload";
        let formData = new FormData();
        formData.append("file", selectedFile);
        axios.post(url, formData)
            .then((response) => {
                handleUploadInasistencias(e);
                console.log(response.data);
            }).catch((err) => {
                alert(err);
            });
    };

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
            <Row className="mt-5">
                <Col >
                    <Form onSubmit={handleUpload}>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Subir archivo</Form.Label>
                            <Form.Control type="file" size="lg" required onChange={(e) => setSelectedFile(e.target.files[0])} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Subir</Button>
                        <Button style={{marginLeft: '5px'}} variant="danger" href="/">Volver</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Upload;