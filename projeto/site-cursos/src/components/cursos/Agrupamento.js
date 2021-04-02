import React from 'react';
import { FormularioCursos } from './Formulario';
import { ListagemCursos } from './Listagem';

export class AgrupamentoCurso extends React.Component {
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