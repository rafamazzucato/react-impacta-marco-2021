import { combineReducers } from 'redux';

import {contatoReducer} from './contato';
import {cursosReducer} from './cursos';

export default combineReducers({
    contato: contatoReducer,
    cursos: cursosReducer
});