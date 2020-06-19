import React, {useContext, useState} from "react";
import {CategoriasContext} from "../../../context/CategoriasContext";
import {RecetasContext} from "../../../context/RecetasContext";

const Formulario = () => {

    const [busqueda, saveBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    /*Asi se consume el useContext - aqui hago destructuring de los value
    del context dependiendo de lo que requiera*/
    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, saveConsultar} = useContext(RecetasContext);

    /*Función para leer los contenidos*/
    const obtenerDatosParaReceta = e => {
        saveBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda)
                saveConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas Por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosParaReceta}
                    />
                </div>
                
                <div className="col-md-4">
                    <select 
                        className="form-control" 
                        name="categoria"
                        onChange={obtenerDatosParaReceta}
                    >
                        <option value="">--Selecciona Categoria--</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                
                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas"/>
                </div>
            </div>
        </form>
    );
};

export default Formulario;
