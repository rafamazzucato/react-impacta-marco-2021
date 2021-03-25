import React from 'react';
import { Lista } from './Lista';

export class Componente1 extends React.Component {

    constructor(props){
        super(props);

        this.setText = this.setText.bind(this);
    }


    state = {
        nome: '',
        cursos: []
    }

    componentDidMount(){
        //console.log('Componente 1 - Depois do componente montar');
        setTimeout(() =>{
            this.setState({cursos: ['React', 'Angular', 'Vue.js', 'Kotlin']});
        }, 3000);
    }

    componentDidUpdate(){
        //console.log('Componente 1 - Depois do componente atualizar');
    }

    componentWillUnmount(){
        //console.log('Componente 1 - Componente desmontou');
    }

    setText(evento){
        this.setState({nome: evento.target.value});
    }

    render() {
        console.log('Componente 1 - Render executando:', this.state);
        var estilos = {
            fontSize: 50,
            marginLeft: 10,
            color: '#FF0000'
        }

        const { nome, cursos } = this.state
        return (
            <div>
                <h1 style={estilos}>Meu primeiro componente das {nome}</h1>
                <input type="text" value={nome} onChange={this.setText}/>
                <button type="button" onClick={e => this.setState({nome: ''})}>Limpar</button>
                {cursos.map((curso, i) => (
                    <Lista key={i} blablabla={curso}/>
                ))}
            </div>
        );
    }
}