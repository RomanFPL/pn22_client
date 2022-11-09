
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'



function Menu () {

   const {isLogin, isReg} = useSelector((state) => state.userdata);

   return ( 
      <menu className="menu_list">
         <div className="menu_list_conteiner">
            {!isLogin ?
            <>
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
            </> 
            : null}
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