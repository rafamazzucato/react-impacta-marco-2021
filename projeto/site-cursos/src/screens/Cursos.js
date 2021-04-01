import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { AgrupamentoCurso } from '../components/cursos/Agrupamento';

export class CursoScreen extends React.Component {

    state={
        descricao : ''
    }

    callbackDescricao(descricao){
        this.setState({descricao});
    }

    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo={"gestão de cursos - " + this.state.descricao}/>
                <AgrupamentoCurso callbackDescricao={this.callbackDescricao.bind(this)}/>
            </div>
        )
    }
}