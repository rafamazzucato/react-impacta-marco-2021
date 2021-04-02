import axios from "axios";
import swal from "sweetalert";

export const TYPE_CURSOS_GET_LISTA = 'TYPE_CURSOS_GET_LISTA';
export const TYPE_CURSOS_SET_CODIGO = 'TYPE_CURSOS_SET_CODIGO';
export const TYPE_CURSOS_SET_DESCRICAO = 'TYPE_CURSOS_SET_DESCRICAO';
export const TYPE_CURSOS_SET_CARGA_HORARIA = 'TYPE_CURSOS_SET_CARGA_HORARIA';
export const TYPE_CURSOS_SET_PRECO = 'TYPE_CURSOS_SET_PRECO';
export const TYPE_CURSOS_SET_CATEGORIA = 'TYPE_CURSOS_SET_CATEGORIA';
export const TYPE_CURSOS_LIMPAR_FORM = 'TYPE_CURSOS_LIMPAR_FORM';
export const TYPE_CURSOS_SELECIONAR_FORM = 'TYPE_CURSOS_SELECIONAR_FORM';

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

export const setCursoDescricao = e => {
    const value = e?.target?.value;

    let isValido = true;
    if (!value || value.length < 2) {
        isValido = false;
    } 

    return {
        type: TYPE_CURSOS_SET_DESCRICAO,
        value: value,
        isValido : isValido
    }
}

export const setCursoCargaHoraria = e => {
    const value = e?.target?.value;

    let isValido = true;
    if (!value || parseInt(value) < 4) {
        isValido = false;
    } 

    return {
        type: TYPE_CURSOS_SET_CARGA_HORARIA,
        value: value,
        isValido : isValido
    }
}

export const setCursoPreco = e => {
    const value = e?.target?.value;

    let isValido = true;
    if (!value || parseInt(value) < 0) {
        isValido = false;
    } 

    return {
        type: TYPE_CURSOS_SET_PRECO,
        value: value,
        isValido : isValido
    }
}

export const setCursoCategoria = e => {
    const value = e?.target?.value;

    let isValido = true;
    if (!value || value.length < 3) {
        isValido = false;
    } 

    return {
        type: TYPE_CURSOS_SET_CATEGORIA,
        value: value,
        isValido : isValido
    }
}

export const limparFormularioCurso = () => {
    return {
        type: TYPE_CURSOS_LIMPAR_FORM
    }
}

export const selecionarCursoToForm = curso => {
    return {
        type : TYPE_CURSOS_SELECIONAR_FORM,
        value : curso
    }
}

export const salvarCurso = (evento, formulario) => {
    return async dispatch => {
        try {
            const {isCodigoValido,
                isDescricaoValido,
                isCargaHorariaValido,
                isPrecoValido,
                isCategoriaValido,
                _id,
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            } = formulario;

            if (evento) {
                evento.preventDefault();
            }

            if (!(isCodigoValido && isDescricaoValido && isCargaHorariaValido
                && isPrecoValido && isCategoriaValido
                && codigo && descricao && cargaHoraria
                && categoria)) {
                swal("Ops!", "favor preencher todos os campos", "error");
                return;
            }

            const body = {
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            };

            if (_id) {
                await axios.put(URL + '/' + _id, body);
            } else {
                await axios.post(URL, body);
            }

            dispatch(getCursos());
            dispatch(limparFormularioCurso());
            swal("Parabéns!", `Curso ${_id ? 'atualizado' : 'salvo'} com sucesso!`, "success");
        } catch (e) {
            console.log(e)
            swal("Erro!", "Não foi possível salvar curso, tente novamente mais tarde!", "error");
        }
    }
}