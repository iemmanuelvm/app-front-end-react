const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    // console.log('paciente');
    // console.log({setPaciente});
    // console.log(paciente);
    const handleEliminar = () => {
        const respuesta = confirm('Desear eliminar este paciente');
        if(respuesta){
            eliminarPaciente(paciente.id);
        }
    }
    return (
        <div>
            <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">
                        {paciente.nombre}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">
                        {paciente.propietario}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">
                        {paciente.email}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha alta: {''}
                    <span className="font-normal normal-case">
                        {paciente.fecha}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">
                        {paciente.sintomas}
                    </span>
                </p>
                <div className="flex justify-between mt-10">
                    <button 
                        type="button"
                        className="py-2 px-10 bg-indigo-500 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
                        onClick={()=>{setPaciente(paciente)}}
                    >
                        Editar
                    </button>

                    <button 
                        type="button"
                        className="py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                        // onClick={()=>{eliminarPaciente(paciente.id)}}
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Paciente