import React from 'react';
import logo from './logo.svg';
import './App.css';
import { View } from './components/View';
import { CounterProvider } from 'counter/hooks/useCounter';

function App() {

    return (
        <CounterProvider>
            <div className="App">
                <View />
            </div>
        </CounterProvider>
    );
}

export default App;
