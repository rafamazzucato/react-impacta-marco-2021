import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    setCursoCodigo
} from '../../actions/cursos';

const FormularioCursos = props => {

    const {
        _id,
        codigo,
        descricao,
        cargaHoraria,
        preco,
        categoria,

        isCodigoValido,
        isDescricaoValido,
        isCargaHorariaValido,
        isPrecoValido,
        isCategoriaValido,

        isFormValido,
        
        setCursoCodigo,
        setDescricao,
        setCargaHoraria,
        setPreco,
        setCategoria,

        salvar,
        limpar
    } = props;


    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className={`form-group ${(!isCodigoValido ? 'errorInput' : '')} row `}>
                    <label htmlFor="codigo"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9">
                        <input type="number"
                            className={`form-control`} id="codigo"
                            value={codigo}
                            onChange={setCursoCodigo} />
                    </div>
                </div>
                <div className={"form-group row " + (!isDescricaoValido ? 'errorInput' : '')}>
                    <label htmlFor="descrição"
                        className="col-sm-3 col-form-label">
                        Descrição:
                    </label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="descricao"
                            value={descricao}
                            onChange={setDescricao} />
                    </div>
                </div>
                <div className={"form-group row " + (!isCargaHorariaValido ? 'errorInput' : '')}>
                    <label htmlFor="cargaHoraria"
                        className="col-sm-3 col-form-label">
                        Carga Horária:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            className="form-control" id="cargaHoraria"
                            value={cargaHoraria}
                            onChange={setCargaHoraria} />
                    </div>
                </div>

                <div className={"form-group row " + (!isPrecoValido ? 'errorInput' : '')}>
                    <label htmlFor="preco"
                        className="col-sm-3 col-form-label">
                        Preço:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            className="form-control" id="preco"
                            value={preco}
                            onChange={setPreco}/>
                    </div>
                </div>

                <div className={"form-group row " + (!isCategoriaValido ? 'errorInput' : '')}>
                    <label htmlFor="categoria"
                        className="col-sm-3 col-form-label">Categoria:</label>
                    <div className="col-sm-9">
                        <select className="form-control" id="categoria"
                            value={categoria} 
                            onChange={setCategoria}>
                            <option>INFORMATICA</option>
                            <option>ENGENHARIA</option>
                            <option>ADMINISTRACAO</option>
                            <option>REDES</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <button
                        className="btn btn-primary ml-3 mb-3" disabled={!isFormValido}
                        onClick={salvar}>
                        {_id ? 'Atualizar' : 'Adicionar'}
                    </button>
                    <button
                        className="btn btn-secondary ml-3 mb-3"
                        type="button" onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStoreToProps = store => ({
    _id: store.cursos._id,
    codigo: store.cursos.codigo,
    isCodigoValido: store.cursos.isCodigoValido,
    descricao: store.cursos.descricao,
    isDescricaoValido: store.cursos.isDescricaoValido,
    cargaHoraria: store.cursos.cargaHoraria,
    isCargaHorariaValido: store.cursos.isCargaHorariaValido,
    preco: store.cursos.preco,
    isPrecoValido: store.cursos.isPrecoValido,
    categoria: store.cursos.categoria,
    isCategoriaValido: store.cursos.isCategoriaValido
});

const mapActionToProps = dispatch => bindActionCreators({
    setCursoCodigo
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionToProps)(FormularioCursos);

export {conectado as FormularioCursos}