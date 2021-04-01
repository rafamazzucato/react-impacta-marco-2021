import { combineReducers } from 'redux';

import {contatoReducer} from './contato';

export default combineReducers({
    contato: contatoReducer
});