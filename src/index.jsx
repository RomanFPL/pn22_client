import App from './App';
import reportWebVitals from './reportWebVitals';

import {store} from './redux/store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}> 
      <BrowserRouter>  
         <App />
      </BrowserRouter>
   </Provider> 
);
reportWebVitals();
