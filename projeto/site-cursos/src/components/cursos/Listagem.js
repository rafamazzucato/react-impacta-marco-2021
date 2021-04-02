import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    getCursos,
    excluirCurso,
    selecionarCursoToForm
} from '../../actions/cursos';

const ListagemCursos = props => {
    const { listaCursos, getCursos, excluirCurso, selecionarCursoToForm, isPublic } = props;

    useEffect(()=> {
        getCursos();   
    }, [getCursos]);

    const exibirLinhas = () => {
        const cursos = listaCursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>

                {isPublic ?
                    <>
                        <td>{curso.cargaHoraria}</td>
                        <td>{curso.preco}</td>
                        <td>{curso.categoria}</td>
                    </>

                    :

                    <td >
                        <button className="btn btn-success ml-2" onClick={_ => selecionarCursoToForm(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={_ => excluirCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>}


            </tr>
        ))
    }

    return (
        <div className="border-right pl-3 pr-3">
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>

                        {isPublic ?
                            <>
                                <th>Carga Horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                            :
                            <th>Ações</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}

const mapStoreToProps = store => ({
    listaCursos : store.cursos.lista
});

const mapActionToProps = dispatch => bindActionCreators({
    getCursos,
    excluirCurso,
    selecionarCursoToForm
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionToProps)(ListagemCursos);

export {conectado as ListagemCursos}