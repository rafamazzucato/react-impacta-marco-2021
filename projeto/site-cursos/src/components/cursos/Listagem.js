import React from 'react';

export const ListagemCursos = props => {

    const { excluir, selecionar, isPublic } = props;

    const exibirLinhas = () => {
        //retorna a lista de props se existir
        const cursos = props.cursos || [];
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
                        <button className="btn btn-success ml-2" onClick={e => selecionar(curso._id)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={e => excluir(curso._id)}>
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