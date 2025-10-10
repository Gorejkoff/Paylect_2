import React from "react";
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Components/Global-Components/GlobalStyle';
import { Provider } from 'react-redux';
import storeRedux from './StoreRedux/index';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <Provider store={storeRedux}>
        <GlobalStyle />
        <HashRouter >
          <App />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  </>
)
