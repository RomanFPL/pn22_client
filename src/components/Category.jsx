import Sort from "./Sort"

function Category () {
   return ( 
      <nav className="navigate">
         <div className="navigate_container">   
            <ul className="category_list">
               <li className="category_list_element">
                  <div className="element_text">categody1</div>
               </li>
               <li className="category_list_element">
                  <div className="element_text">categody2</div>
               </li>
               <li className="category_list_element">
                  <div className="element_text">categody3</div>
               </li>
               <li className="category_list_element">
                  <div className="element_text">categody4</div>
               </li>
            </ul>
            <Sort />
         </div>
      </nav>
   );
}

export default Category;