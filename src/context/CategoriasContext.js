import React, {createContext, useState} from "react";

/*Crear el Context*/
export const CategoriasContext = createContext();

/*Provider es donde se encuentran las funciones y el state*/
const CategoriasProvider = (props) => {
    
    /*Crear State del Context*/
    const [hola, saveHola] = useState('');

    return(
        <CategoriasProvider
            value={{ hola, saveHola}}
        >
            {props.children}
        </CategoriasProvider>
    );
}

export default CategoriasProvider;
