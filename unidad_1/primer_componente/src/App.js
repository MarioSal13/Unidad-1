import logo from './logo.svg';
import './App.css';
import CustomInput from "./CustomInput";
import CustomInputAlte from "./Custominputalte";
import CustomInputButton from './Custominputbutton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1> 
        Nuevo usuario
      </h1>
        <CustomInput label={"Usuario"} tipo={"text"} disabled={false} />
        <CustomInput label={"correo"} tipo={"email"} disabled={false} />
        <CustomInput label={"Contraseña"} tipo={"password"} disabled={false} />

        <CustomInputAlte label={"Acepto terminos y condiciones"} tipo={"checkbox"} disabled={false} />

        <header>
          
          <CustomInputButton disabled={false} text={"Cancelar"} className="boton"/>
          <CustomInputButton disabled={false} text={"Aceptar"}/>
          
        </header>
        
      </header>
    </div>
  );
}

export default App;
