import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      // console.log(pacientesLS);
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(()=>{
    localStorage.setItem('paciente', JSON.stringify(pacientes))
  }, [pacientes]);


  const eliminarPaciente = (id) => {
    // console.log('Eliminando paciente: ', id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;