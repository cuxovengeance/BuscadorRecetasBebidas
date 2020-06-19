import React, {createContext, useState, useEffect} from "react";
import Axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, saveRecetas] = useState([]);
    const [busqueda , buscarRecetas] = useState({
        nombre:'',
        categoria:''
    });

    const [consultar, saveConsultar] = useState(false);

    const {nombre, categoria} = busqueda;

    useEffect(() => {
        if(consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await Axios.get(url);

                saveRecetas(resultado.data.drinks);
            }
            obtenerRecetas();
        }

    },[busqueda])

    return (
        /*desde aqui fluyen los datos*/
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                saveConsultar,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;

/*Esta es la base de casi todos los Context que se crean*/
