import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import store from '../src/store/store'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
