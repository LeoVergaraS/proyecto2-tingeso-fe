import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from './Layout';
import Empleados from './pages/Empleados';
import Inasistencias from './pages/Inasistencias';
import HorasExtras from './pages/HorasExtras';
import Atrasos from './pages/Atrasos';
import IngresosSalidas from './pages/IngresosSalidas';
import Acordion from './components/Accordion';
import Upload from './pages/UploadFile';
import Justificativo from './pages/Justificativo';
import Autorizar from './pages/Autorizacion';
import Sueldo from './pages/Sueldo';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Acordion />} />
          <Route path="/inasistencias" element={<Inasistencias />} exact />
          <Route path="/empleados" element={<Empleados />} exact />
          <Route path="/horas_extras" element={<HorasExtras />} exact />
          <Route path="/atrasos" element={<Atrasos />} exact />
          <Route path="/ingresos_salidas" element={<IngresosSalidas />} exact />
          <Route path="/archivo" element={<Upload/>} exact />
          <Route path="/justificar" element={<Justificativo/>} />
          <Route path="/autorizar" element={<Autorizar/>} />
          <Route path="/sueldo" element={<Sueldo/>} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
