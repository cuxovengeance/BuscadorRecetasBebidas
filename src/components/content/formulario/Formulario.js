import React from "react";

const Formulario = () => {
    return(
        <form className="col-12">
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
                    />
                </div>
                
                <div className="col-md-4">
                    <select 
                        className="form-control" 
                        name="categoria"
                    >
                        <option value="">--Selecciona Categoria--</option>
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