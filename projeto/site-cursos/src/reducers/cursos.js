import {    
    TYPE_CURSOS_GET_LISTA,
    TYPE_CURSOS_SET_CODIGO
} from '../actions/cursos';

const INITIAL_STATE = {
    lista: [],
    _id: 'teste',
    codigo: 0,
    isCodigoValido: true,
    descricao: 'Teste',
    isDescricaoValido: true,
    cargaHoraria: 50,
    isCargaHorariaValido: true,
    preco: 100,
    isPrecoValido: true,
    categoria: 'ADMINISTRACAO',
    isCategoriaValido: true
}

export const cursosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPE_CURSOS_GET_LISTA : return {...state, lista : action.value};
        case TYPE_CURSOS_SET_CODIGO : return {...state, codigo : action.value, isCodigoValido : action.isValido};
        default: return state;
    }
}