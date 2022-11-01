function Pagination () {
   return ( 
      <div className="pagination">
         <div className="pagination_container">
            <div className="pagination_arrow_left">
               <div className="pagination_arrow_left_img"></div>
            </div>
            <div className="pagination_element">
               <div className="pagination_element_text">1</div>
            </div>
            <div className="pagination_element">
               <div className="pagination_element_text">2</div>
            </div>
            <div className="pagination_element">
               <div className="pagination_element_text">3</div>
            </div>
            <div className="pagination_arrow_right">
               <div className="pagination_arrow_right_img"></div>
            </div>
         </div>
      </div>
   );
}

export default Pagination ;