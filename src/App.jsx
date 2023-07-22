import "./App.css";
import Boton from "./componentes/Boton";
import Screen from "./componentes/Screen";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import {evaluate} from "mathjs";

function App() {
  
  const [input, setInput] = useState("");

  // funcion que muestra valores en el screen
  const agregarInput = valor => {
    setInput(input + valor)
  };

  // funcion que calcula el resultado en el screen
  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert("Aun no ha ingresado un valor, por favor ingrese un valor para realizar los calculos.")
    }
    
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/pexels.jpg')] bg-cover w-full  h-screen">
        
            <header className="flex justify-center items-center mb-5">
              <h1 className=" text-5xl text-white font-bold decoration-8 underline-offset-8">Calculadora React
              </h1>
              
              <img 
                className="animate-pulse"
                src="/react-2.svg"
                width={95}
                alt="logo react"
              />
            </header>

            {/* Container Calculator */}
            <div className="flex justify-center items-center border-2 h-[600px] w-[400px] p-3 bg-black opacity-75 rounded-lg">
              
              <div className="flex-1">
                <Screen
                  input={input}
                />    
                <div className="flex">
                  <Boton manejarClick={agregarInput}>7</Boton>
                  <Boton manejarClick={agregarInput}>8</Boton>
                  <Boton manejarClick={agregarInput}>9</Boton>
                  <Boton manejarClick={agregarInput}>/</Boton>
                </div>
                <div className="flex">
                  <Boton manejarClick={agregarInput}>4</Boton>
                  <Boton manejarClick={agregarInput}>5</Boton>
                  <Boton manejarClick={agregarInput}>6</Boton>
                  <Boton manejarClick={agregarInput}>*</Boton>
                </div>
                <div className="flex">
                  <Boton manejarClick={agregarInput}>1</Boton>
                  <Boton manejarClick={agregarInput}>2</Boton>
                  <Boton manejarClick={agregarInput}>3</Boton>
                  <Boton manejarClick={agregarInput}>-</Boton>
                </div>
                <div className="flex">
                  <Boton manejarClick={agregarInput}>.</Boton>
                  <Boton manejarClick={agregarInput}>0</Boton>
                  <Boton manejarClick={calculateResult}>=</Boton>
                  <Boton manejarClick={agregarInput}>+</Boton>
                 
                </div>
                <div className="flex">
                  <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
                </div>

              </div>
              
            </div>
    </div>
  )
}

export default App;
