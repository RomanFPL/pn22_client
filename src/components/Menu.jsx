
import { Link } from "react-router-dom";




function Menu () {





   return ( 
      <menu className="menu_list">
         <div className="menu_list_conteiner">
            <Link to="/login"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">login</div>
               </div>
            </Link>
            <Link to="/registration"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">registration</div>
               </div>
            </Link>  
            <Link to="/contacts"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">contacts</div>
               </div>
            </Link>
            <Link to="/support"> 
               <div className="menu_list_element">
                  <div className="menu_list_element_text">supports</div>
               </div>
            </Link>
         </div>
      </menu>
   );
}

export default Menu ;