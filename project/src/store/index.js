// import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { identity } from 'lodash';
import reducers from 'reducers';
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

const isProduction = process.env.NODE_ENV === 'production'; // eslint-disable-line no-undef
// const middleWares = [thunk, routerMiddleware(browserHistory)];

const middleWares = [thunk];

if (!isProduction) {
    middleWares.push(createLogger());
}

const Store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleWares
        ),
        // devTools || identity
        identity
    )
);

export default Store;

