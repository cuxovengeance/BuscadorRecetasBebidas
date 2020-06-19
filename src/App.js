import React from 'react';
import Header from "./components/estructure/header/Header";
import Formulario from "./components/content/formulario/Formulario";
import ListaRecetas from "./components/elements/ListaRecetas";

/*useContext*/
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
      <CategoriasProvider>
          <RecetasProvider>
              <ModalProvider>
                <Header/>

                <div className="container mt-5">
                    <div className="row">
                        {/*Formulario*/}
                        <Formulario/>
                    </div>

                    <ListaRecetas/>
                </div>
              </ModalProvider>
          </RecetasProvider>
      </CategoriasProvider>
  );
}

export default App;
