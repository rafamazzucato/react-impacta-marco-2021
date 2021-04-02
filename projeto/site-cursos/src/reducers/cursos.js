import {    
    TYPE_CURSOS_GET_LISTA,
    TYPE_CURSOS_SET_CODIGO,
    TYPE_CURSOS_SET_DESCRICAO,
    TYPE_CURSOS_SET_CARGA_HORARIA,
    TYPE_CURSOS_SET_PRECO,
    TYPE_CURSOS_SET_CATEGORIA,
    TYPE_CURSOS_LIMPAR_FORM,
    TYPE_CURSOS_SELECIONAR_FORM
} from '../actions/cursos';

const INITIAL_STATE = {
    lista: [],
    _id: null,
    codigo: 0,
    isCodigoValido: true,
    descricao: '',
    isDescricaoValido: true,
    cargaHoraria: 0,
    isCargaHorariaValido: true,
    preco: 0,
    isPrecoValido: true,
    categoria: 'INFORMATICA',
    isCategoriaValido: true
}

export const cursosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_CURSOS_GET_LISTA : return {...state, lista : action.value};
        case TYPE_CURSOS_SET_CODIGO : return {...state, codigo : action.value, isCodigoValido : action.isValido};
        case TYPE_CURSOS_SET_DESCRICAO : return {...state, descricao : action.value, isDescricaoValido : action.isValido};
        case TYPE_CURSOS_SET_CARGA_HORARIA : return {...state, cargaHoraria : action.value, isCargaHorariaValido : action.isValido};
        case TYPE_CURSOS_SET_PRECO : return {...state, preco : action.value, isPrecoValido : action.isValido};
        case TYPE_CURSOS_SET_CATEGORIA : return {...state, categoria : action.value, isCategoriaValido : action.isValido};
        case TYPE_CURSOS_LIMPAR_FORM : return {...INITIAL_STATE, lista : state.lista};
        case TYPE_CURSOS_SELECIONAR_FORM : return {...state, 
                _id : action.value._id,
                codigo : action.value.codigo,
                isCodigoValido : parseInt(action.value.codigo) > 99,
                descricao : action.value.descricao,
                isDescricaoValido : action.value.descricao.length > 2,
                cargaHoraria : action.value.cargaHoraria,
                isCargaHorariaValido : parseInt(action.value.cargaHoraria) > 4,
                preco : action.value.preco,
                isPrecoValido : parseInt(action.value.preco) >= 0,
                categoria : action.value.categoria,
                isCategoriaValido : action.value.categoria.length > 2
        };
        
        default: return state;
    }
}