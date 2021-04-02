import axios from "axios";
import swal from "sweetalert";

export const TYPE_CURSOS_GET_LISTA = 'TYPE_CURSOS_GET_LISTA';
export const TYPE_CURSOS_SET_CODIGO = 'TYPE_CURSOS_SET_CODIGO';

const URL = 'http://localhost:3200/api/cursos';

export const getCursos = () => {
    return async dispatch => {
        try{
            const response = await axios.get(URL);
            if(response && response.data){
                dispatch({
                    type: TYPE_CURSOS_GET_LISTA,
                    value: response.data
                });
            }
        }catch(e){
            console.log(e);
        }
    };
}

export const excluirCurso = id => {
    return async dispatch => {
        try {

            if(!id){
                swal("Erro!", "Identificação do curso não informada!", "error"); 
                return;
            }

            const result = await swal({
                title: "Tem certeza?",
                text: "Após deletado, o curso não poderá ser restaurado",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
    
            if (result) {
                await axios.delete(URL + '/' + id);
                dispatch(getCursos());
                swal("Parabéns!", "Curso deletado com sucesso", "success");
            }
        } catch (e) {
            console.log(e);
            swal("Erro!", "Não foi possível excluir curso, tente novamente mais tarde!", "error");
        }
    }
}

export const setCursoCodigo = e => {
    const value = e?.target?.value;

    let isValido = true;
    if (!value || parseInt(value) < 99) {
        isValido = false;
    } 

    return {
        type: TYPE_CURSOS_SET_CODIGO,
        value: value,
        isValido : isValido
    }
}