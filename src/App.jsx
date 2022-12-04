import './scss/main/MainLayout.scss';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ArticlePage from './pages/ArticlePage';
import Contacts from './pages/Contacts';
import Support from './pages/Support';
import Login from './pages/Login';
import Account from './pages/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './pages/Registration';

import {Routes, Route} from 'react-router-dom';


function App() {


return (
   <div className="App">
      <div className="wrapper">
         <div className="content">
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               {/* <Route path="/categories" element={<Categories />} /> */}
               <Route path="/articlepage" element={<ArticlePage />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/support" element={<Support />} />
               <Route path="/login" element={<Login />} />
               <Route path="/registration" element={<Registration />} />
               <Route path="/articlepage/:ArticleId" element={<ArticlePage />} />
               <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
         </div>
      </div>
   </div>
);
}

export default App;
