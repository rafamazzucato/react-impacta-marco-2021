import moment from 'moment';

import { 
    CONTATO_TYPE_SET_DATA,
    CONTATO_TYPE_SET_NOME,
    CONTATO_TYPE_SET_EMAIL,
    CONTATO_TYPE_SET_ASSUNTO,
    CONTATO_TYPE_LIMPAR,
    CONTATO_TYPE_SET_MSG_ERRO,
    CONTATO_TYPE_SET_MSG_SUCESSO
} from '../actions/contato'

const INITIAL_STATE = {
    data : moment().format('yyyy-MM-DD'),
    nome : '',
    email: '',
    assunto: '',
    msgSucesso : '',
    msgErro: ''
}

export const contatoReducer = function(state = INITIAL_STATE, action){
    switch(action.type){
        case CONTATO_TYPE_SET_DATA: return {...state, data : action.value};
        case CONTATO_TYPE_SET_NOME: return {...state, nome : action.value};
        case CONTATO_TYPE_SET_EMAIL: return {...state, email : action.value};
        case CONTATO_TYPE_SET_ASSUNTO: return {...state, assunto : action.value};
        case CONTATO_TYPE_SET_MSG_SUCESSO: return {...state, msgSucesso : action.value};
        case CONTATO_TYPE_SET_MSG_ERRO: return {...state, msgErro : action.value};
        case CONTATO_TYPE_LIMPAR: return INITIAL_STATE;
        default: return state;
    }
}