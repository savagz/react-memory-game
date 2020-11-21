import React from 'react'
import { Board } from './components/app/Board'

import { Provider } from 'react-redux';
import store from './store/store'

export const MemoryApp = () => {
    return (
        <Provider store={store}>
            <Board />
        </Provider>
    )
}
