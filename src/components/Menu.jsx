import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'


function Menu () {
   const {isLogin} = useSelector((state) => state.userdata);

   return ( 
      <menu className="menu_list" data-testid="menu list">
         <div className="menu_list_container">
            {!isLogin ?
            <>
               <Link to="/login" data-testid="menu login"> 
                  <div className="menu_list_element">
                     <div className="menu_list_element_text">LOGIN</div>
                  </div>
               </Link>
               <Link to="/registration"  data-testid="menu registration"> 
                  <div className="menu_list_element">
                     <div className="menu_list_element_text">REGISTRATION</div>
                  </div>
               </Link> 
            </> 
            : null}
            <Link to="/contacts" data-testid="menu contacts"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">CONTACTS</div>
               </div>
            </Link>
            <Link to="/support" data-testid="menu support"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">SUPPORT</div>
               </div>
            </Link>
         </div>
      </menu>
   );
}

export default Menu ;