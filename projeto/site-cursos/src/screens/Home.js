import React, {useState, useEffect} from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { ListagemCursos } from '../components/cursos/Listagem';
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    limparContato
} from '../actions/contato';

const URL = "http://localhost:3200/api/cursos";

const HomeScreen = props => {
    
    const {limparContato} = props;
    const [cursos, setCursos] = useState([]);

    const getCursos = async () => {
        try {
            const response = await axios.get(URL);
            if (response && response.data) {
                setCursos(response.data);
            }
        } catch (e) {
            console.log(e);
            swal("Erro!", "Não foi possível listar cursos, tente novamente mais tarde!", "error");
        }
    }

    useEffect(() =>{
        limparContato();
        getCursos();
    }, [limparContato]);

    return (
        <div className="container">
            <Cabecalho titulo="Cursos Impacta" subtitulo="bem vindo a nossa plataforma de ensino" />
            <ListagemCursos cursos={cursos} isPublic={true}/>
        </div>
    )
}

const mapActionsToProps = dispatch => bindActionCreators({
    limparContato
}, dispatch);

const conectado = connect(null, mapActionsToProps)(HomeScreen);

export { conectado as HomeScreen}