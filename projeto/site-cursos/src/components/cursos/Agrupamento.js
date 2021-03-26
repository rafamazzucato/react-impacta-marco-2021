import React from 'react';
import { FormularioCursos } from './Formulario';
import { ListagemCursos } from './Listagem';
import axios from 'axios';

const URL = "http://localhost:3200/api/cursos";

export class AgrupamentoCurso extends React.Component {

    state = {
        cursos: [],
        codigo: 0,
        isCodigoValido: true,
        descricao: '',
        isDescricaoValido: true,
        cargaHoraria: 0,
        isCargaHorariaValido: true,
        preco: 0,
        isPrecoValido: true,
        categoria: 'REDES',
        isCategoriaValido: true,
    }

    async componentDidMount(){
        try{
            const response = await axios.get(URL);
            if(response && response.data){
                this.setState({cursos: response.data});
            }
        }catch(e){
            console.log(e);
        }
    }

    setCodigo(evento){
        const value =  evento?.target?.value;
        if(!value || parseInt(value) < 99){
            this.setState({isCodigoValido: false});
        }else{
            this.setState({isCodigoValido: true});
        }

        this.setState({codigo:value});
    }

    setDescricao(evento){
        const value =  evento?.target?.value;
        if(!value || value.length <3){
            this.setState({isDescricaoValido: false});
        }else{
            this.setState({isDescricaoValido: true});
        }

        this.setState({descricao: value});
    }

    setCargaHoraria(evento){
        const value =  evento?.target?.value;
        if(!value || parseInt(value) < 4){
            this.setState({isCargaHorariaValido: false});
        }else{
            this.setState({isCargaHorariaValido: true});
        }
        this.setState({cargaHoraria: value});
    }

    setPreco(evento){
        const value =  evento?.target?.value;
        if(!value || parseInt(value) < 0){
            this.setState({isPrecoValido: false});
        }else{
            this.setState({isPrecoValido: true});
        }
        this.setState({preco: value});
    }

    setCategoria(evento){
        const value =  evento?.target?.value;
        if(!value || value.length <3){
            this.setState({isCategoriaValido: false});
        }else{
            this.setState({isCategoriaValido: true});
        }
        this.setState({categoria: value});
    }

    render() {

        const {
            cursos,
        
            codigo,
            isCodigoValido,
            descricao,
            isDescricaoValido,
            cargaHoraria,
            isCargaHorariaValido,
            preco,
            isPrecoValido,
            categoria,
            isCategoriaValido
        } = this.state;

        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCursos 
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}

                        isCodigoValido={isCodigoValido}
                        isDescricaoValido={isDescricaoValido}
                        isCargaHorariaValido={isCargaHorariaValido}
                        isPrecoValido={isPrecoValido}
                        isCategoriaValido={isCategoriaValido}

                        setCodigo={this.setCodigo.bind(this)}
                        setDescricao={this.setDescricao.bind(this)}
                        setCargaHoraria={this.setCargaHoraria.bind(this)}
                        setPreco={this.setPreco.bind(this)}
                        setCategoria={this.setCategoria.bind(this)}
                    />
                </div>
                <div className="col-md-6">
                    <ListagemCursos cursos={cursos} />
                </div>
            </div>
        );
    }
}