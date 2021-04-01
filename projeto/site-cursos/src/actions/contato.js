import axios from 'axios';

const URL = 'http://localhost:3200/api/contatos';

export const CONTATO_TYPE_SET_DATA = 'CONTATO_TYPE_SET_DATA';
export const CONTATO_TYPE_SET_NOME = 'CONTATO_TYPE_SET_NOME';
export const CONTATO_TYPE_SET_EMAIL = 'CONTATO_TYPE_SET_EMAIL';
export const CONTATO_TYPE_SET_ASSUNTO = 'CONTATO_TYPE_SET_ASSUNTO';
export const CONTATO_TYPE_SET_MSG_SUCESSO = 'CONTATO_TYPE_SET_MSG_SUCESSO';
export const CONTATO_TYPE_SET_MSG_ERRO = 'CONTATO_TYPE_SET_MSG_ERRO';
export const CONTATO_TYPE_LIMPAR = 'CONTATO_TYPE_LIMPAR';

export const setContatoData = e => ({
    type: CONTATO_TYPE_SET_DATA,
    value: e.target.value
});

export const setContatoNome = e => ({
    type: CONTATO_TYPE_SET_NOME,
    value: e.target.value
});

export const setContatoEmail = e => {
    return dispatch => {
        const email = e.target.value;

        if (!email || email.length < 4
            || !email.includes('@') || !email.includes('.')) {
            dispatch(setContatoMsgErro("Favor preencher o campo email com um email válido."));
        }else{
            dispatch(setContatoMsgErro(""));
        }

        dispatch({
            type: CONTATO_TYPE_SET_EMAIL,
            value: e.target.value
        });
    }
};

export const setContatoAssunto = e => ({
    type: CONTATO_TYPE_SET_ASSUNTO,
    value: e.target.value
});

export const limparContato = () => ({
    type: CONTATO_TYPE_LIMPAR
});

export const setContatoMsgSucesso =  msg => ({
    type: CONTATO_TYPE_SET_MSG_SUCESSO,
    value: msg
});

export const setContatoMsgErro =  msg => ({
    type: CONTATO_TYPE_SET_MSG_ERRO,
    value: msg
});

export const adicionarContato = (e, data, nome, email, assunto) => {
    return async dispatch => {
        try {
            e.preventDefault();

            let erros = '';

            if (!nome || nome.length < 2) {
                erros+= "Favor preencher o campo nome com pelo menos dois caracteres.";
            }

            if (!email || email.length < 4
                || !email.includes('@') || !email.includes('.')) {
                erros+= "Favor preencher o campo email com um email válido.";
            }

            if (!assunto || assunto.length < 5) {
                erros+= "Favor preencher o campo assunto com pelo menos cinco caracteres.";
            }

            if(erros){
                dispatch(setContatoMsgErro(erros));
                return;
            }

            const body = {
                data,
                nome,
                email,
                assunto
            }

            await axios.post(URL, body);
            dispatch(limparContato());
            dispatch(setContatoMsgSucesso(`Contato enviado com sucesso!`));
        } catch (e) {
            dispatch(setContatoMsgErro("Não foi possível enviar contato, tente novamente!"));
            console.log(e);
        }
    }
}