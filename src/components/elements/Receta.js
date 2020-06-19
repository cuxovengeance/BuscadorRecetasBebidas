import React, {useContext, useState} from "react";
import {ModalContext} from "../../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    /*Posicionamiento*/
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    /*Apariencia*/
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    /*Configuracion del modal de Material-UI*/
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*Extraer los valores del context*/
    const {infoReceta, saveIdReceta, saveReceta} = useContext(ModalContext);

    /*Muestra y formatea los ingredientes*/
    const mostrarIngredientes = (infoReceta) => {
        let ingredientes = [];
        /*vamos ir iterando e ir poniendo cada elemento en un arreglo*/
        for(let i = 1; i < 16 ; i++){
            /*Si existe y no es null va a ir agregando los ingredientes al arreglo*/
            if(infoReceta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{infoReceta[`strIngredient${i}`]} {infoReceta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    > Ver Receta </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose()
                            saveIdReceta(null)
                            saveReceta({})
                        }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{infoReceta.strDrink}</h2>
                            <h3 className="mt-4">Intrucciones</h3>
                            <p>{infoReceta.strInstructions}</p>
                            <img className="img-fluid my-4" src={infoReceta.strDrinkThumb} alt=""/>
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(infoReceta)}
                            </ul>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default Receta;
