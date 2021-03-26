import React from 'react';
import { Cabecalho } from '../components/Cabecalho';

export class ContatoScreen extends React.Component {
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="mande suas dúvidas para nós"/>
            </div>
        )
    }
}