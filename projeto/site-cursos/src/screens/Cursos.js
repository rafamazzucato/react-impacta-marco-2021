import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { AgrupamentoCurso } from '../components/cursos/Agrupamento';

export class CursoScreen extends React.Component {
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="gestão de cursos"/>
                <AgrupamentoCurso />
            </div>
        )
    }
}