function Sort () {
   return ( 
      <div className="sort">
         <div className="sort_container">
            <div className="sort_close">
            <div className="sort_close_container">
               <div className="sort_close_img"></div>
               <div className="sort_close_text">
                  <div className="sort_close_text_content">sort</div>
               </div>
            </div>
            </div>
            <div className="sort_open">   
               <ul className="sort_list">
                  <li className="sort_list_element">
                     <div className="element_text">Sort1</div>
                  </li>
                  <li className="sort_list_element">
                     <div className="element_text">Sort2</div>
                  </li>
                  <li className="sort_list_element">
                     <div className="element_text">Sort3</div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Sort ;