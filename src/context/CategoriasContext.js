import React, {createContext, useState, useEffect} from "react";
import Axios from "axios";

/*Crear el Context - esto es solo la referencia al context*/
export const CategoriasContext = createContext();

/*Provider: es donde se encuentran las funciones y el state*/
const CategoriasProvider = (props) => {
    
    /*Crear State del Context*/
    const [categorias, saveCategorias] = useState([]);

    /*Ejecutar el llamado a la API*/
    useEffect( () => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await Axios.get(url);
            saveCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    } ,[]);

    /*Dentro del return van todos los datos y todo lo que estará disponible
    *                                          para los distintos componentes*/
    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
