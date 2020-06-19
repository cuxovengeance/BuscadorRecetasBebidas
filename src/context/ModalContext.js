import React, {createContext, useState, useEffect} from "react";
import Axios from "axios";

/*1. crear Context*/
export const ModalContext = createContext();

/*2. SIEMPRE pasarle props*/
const ModalProvider = (props) => {
    /*State del provider - para guardar el id de la receta que el usuario clickee*/
    const [idReceta , saveIdReceta] = useState(null)
    const [infoReceta, saveReceta] = useState({});

    /*useEffect para llamar a la API una vez que tenemos una receta*/
    useEffect(() => {
            const consultarAPI = async () => {
                if(!idReceta) return;
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
                const respuesta = await Axios.get(url);
                saveReceta(respuesta.data.drinks[0])
            }
            consultarAPI();

    }, [idReceta])

    return(
        /*3. llamar al context y agregar .Provider */
        <ModalContext.Provider
            value={{
                /*aqui coloco todo lo que voy a retornar*/
                infoReceta,
                saveIdReceta,
                saveReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
