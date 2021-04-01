import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { ContatoScreen } from './screens/Contato';
import { CursoScreen } from './screens/Cursos';
import { HomeScreen } from './screens/Home';

export class App extends React.Component {

    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route path="/cursos" component={CursoScreen} />
                    <Route path="/contato" component={ContatoScreen} />
                    <Route path="/" component={HomeScreen} />
                </Switch>
            </div>
        );
    }
}