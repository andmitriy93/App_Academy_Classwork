import { Route, HashRouter } from 'react-router-dom';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'

const App = () => {
    <Route path="/" component={PokemonIndexContainer} />
}

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;