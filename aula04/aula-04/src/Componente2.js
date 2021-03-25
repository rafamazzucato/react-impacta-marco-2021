import React, { useState, useEffect } from "react";
import { Lista } from "./Lista";


export const Componente2 = () => {
    //console.log('Componente 2 - Render executando');
    const [teste, setTeste] = useState('Teste');
    const [cursos, setCursos] = useState([]);

    const executa = ()=> {
        setTimeout(() =>{
            setCursos(['.Net', 'Angular', 'Swift', 'Python']);
        },3000);
    }

    useEffect(() =>{
        console.log('Componente 2 - Effect foi disparado');
        const resultado = executa();
        return () => {
            console.log('Componente 2 - Effect desmontado');
            return resultado;
        }
    }, []);

    return (
        <div>
            <h1>Meu Segundo Componente do {teste}</h1>
            <input type="text" value={teste} onChange={evento => setTeste(evento.target.value)}/>
            <button type="button" onClick={e => setTeste('')}>Limpar</button>
            {cursos.map((curso, i) => (
                <Lista key={i} blablabla={curso} />
            ))}
        </div>
    );
};