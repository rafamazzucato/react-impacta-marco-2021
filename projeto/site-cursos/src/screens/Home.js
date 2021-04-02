import React, {useEffect} from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { ListagemCursos } from '../components/cursos/Listagem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    limparContato
} from '../actions/contato';


const HomeScreen = props => {
    
    const {limparContato} = props;

    useEffect(() =>{
        limparContato();
    }, [limparContato]);

    return (
        <div className="container">
            <Cabecalho titulo="Cursos Impacta" subtitulo="bem vindo a nossa plataforma de ensino" />
            <ListagemCursos isPublic={true}/>
        </div>
    )
}

const mapActionsToProps = dispatch => bindActionCreators({
    limparContato
}, dispatch);

const conectado = connect(null, mapActionsToProps)(HomeScreen);

export { conectado as HomeScreen}