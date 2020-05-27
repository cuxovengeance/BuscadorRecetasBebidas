import React, {Fragment} from 'react';
import Header from "./components/estructure/header/Header";
import Formulario from "./components/content/formulario/Formulario";
import CategoriasProvider from "./context/CategoriasContext";

function App() {
  return (
      <CategoriasProvider>
        <Header/>

        <div className="container mt-5">
            <div className="row">
                {/*Formulario*/}
                <Formulario/>
            </div>
        </div>
      </CategoriasProvider>
  );
}

export default App;
