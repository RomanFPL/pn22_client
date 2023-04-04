import './scss/MainLayout.scss';


import Home from './pages/home/Home';
import ArticlePage from './pages/articlePage/ArticlePage';
import Contacts from './pages/contacts/Contacts';
import Support from './pages/support/Support';
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import Header from './commonComponents/header/Header';
import Footer from './commonComponents/footer/Footer';
import Registration from './pages/registration/Registration';
import ServerDontResponse from './commonComponents/errorPages/serverDontResponse/serverDontResponse';
import Portal from "./commonComponents/modals/Portal"

import {Routes, Route} from 'react-router-dom';

function App() {

return (
   <div className="App">
      <div className="wrapper">
         <div className="content">
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/articlepage" element={<ArticlePage />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/support" element={<Support />} />
               <Route path="/login" element={<Login />} />
               <Route path="/registration" element={<Registration />} />
               <Route path="/articlepage/:ArticleId" element={<ArticlePage />} />
               <Route path="/account" element={<Account />} />
               <Route path="/error" element={<ServerDontResponse />} />
            </Routes>
            <Footer />
            <Portal />
         </div>
      </div>
   </div>
);
}

export default App;
