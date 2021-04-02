import React from 'react';
import { FormularioCursos } from './Formulario';
import { ListagemCursos } from './Listagem';
import axios from 'axios';
import swal from 'sweetalert';


const URL = "http://localhost:3200/api/cursos";

export class AgrupamentoCurso extends React.Component {

    initialState = {
        _id: null,
        codigo: 0,
        isCodigoValido: true,
        descricao: '',
        isDescricaoValido: true,
        cargaHoraria: 0,
        isCargaHorariaValido: true,
        preco: 0,
        isPrecoValido: true,
        categoria: 'REDES',
        isCategoriaValido: true
    }

    state = {
        ...this.initialState
    }

    

    setDescricao(evento) {
        const value = evento?.target?.value;
        if (!value || value.length < 3) {
            this.setState({ isDescricaoValido: false });
        } else {
            this.setState({ isDescricaoValido: true });
        }

        this.setState({ descricao: value });
        this.props?.callbackDescricao(value);
    }

    setCargaHoraria(evento) {
        const value = evento?.target?.value;
        if (!value || parseInt(value) < 4) {
            this.setState({ isCargaHorariaValido: false });
        } else {
            this.setState({ isCargaHorariaValido: true });
        }
        this.setState({ cargaHoraria: value });
    }

    setPreco(evento) {
        const value = evento?.target?.value;
        if (!value || parseInt(value) < 0) {
            this.setState({ isPrecoValido: false });
        } else {
            this.setState({ isPrecoValido: true });
        }
        this.setState({ preco: value });
    }

    setCategoria(evento) {
        const value = evento?.target?.value;
        if (!value || value.length < 3) {
            this.setState({ isCategoriaValido: false });
        } else {
            this.setState({ isCategoriaValido: true });
        }
        this.setState({ categoria: value });
    }

    isFormValido() {
        const {
            codigo,
            isCodigoValido,
            descricao,
            isDescricaoValido,
            cargaHoraria,
            isCargaHorariaValido,
            isPrecoValido,
            categoria,
            isCategoriaValido
        } = this.state;

        return (isCodigoValido && isDescricaoValido && isCargaHorariaValido
            && isPrecoValido && isCategoriaValido
            && codigo && descricao && cargaHoraria
            && categoria);
    }

    async salvar(evento) {
        try {
            if (evento) {
                evento.preventDefault();
            }

            if (!this.isFormValido()) {
                swal("Ops!", "favor preencher todos os campos", "error");
                return;
            }

            const {
                _id,
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            } = this.state;

            const body = {
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            };

            if (_id) {
                await axios.put(URL + '/' + _id, body);
            } else {
                await axios.post(URL, body);
            }

            this.limpar();
            await this.getCursos();
            swal("Parabéns!", `Curso ${_id ? 'atualizado' : 'salvo'} com sucesso!`, "success");
        } catch (e) {
            console.log(e)
            swal("Erro!", "Não foi possível salvar curso, tente novamente mais tarde!", "error");
        }
    }

    limpar() {
        this.setState(this.initialState);
    }

    

    async selecionar(id) {
        try {
            const response = await axios.get(URL + '/' + id);
            if (response && response.data) {
                const curso = response.data;
                this.setState({
                    _id: curso?._id,
                    codigo: curso?.codigo,
                    descricao: curso?.descricao,
                    cargaHoraria: curso?.cargaHoraria,
                    preco: curso?.preco,
                    categoria: curso?.categoria,
                })
                return;
            }
        } catch (e) {
            console.log(e);
            swal("Erro!", "Não foi possível selecionar curso, tente novamente mais tarde!", "error");
        }

        await this.getCursos();
        this.limpar();
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCursos/>
                </div>
                <div className="col-md-6">
                    <ListagemCursos />
                </div>
            </div>
        );
    }
}