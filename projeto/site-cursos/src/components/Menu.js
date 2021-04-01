import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

const URL = "http://localhost:3200/api/cursos";

export const Menu = props => {
    const [cursos, setCursos] = useState([]);
    const getCursos = async () => {
        try {
            const response = await axios.get(URL);
            if (response && response.data) {
                setCursos(response.data);
            }
        } catch (e) {
            console.log(e);
            swal("Erro!", "Não foi possível listar cursos, tente novamente mais tarde!", "error");
        }
    }

    useEffect(() =>{
        getCursos();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Cursos Impacta
            </Link>

            <button className="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cursos">Cursos{cursos ? `(${cursos.length})` : ''}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}