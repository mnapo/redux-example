import React from 'react';
import App from './App';
import {createStore} from 'redux';
import counterReducer from './reducers/counter';
import {Provider} from 'react-redux';
import {registerRootComponent} from 'expo';

const store = createStore(counterReducer);

const Index = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
};
export default registerRootComponent(Index);