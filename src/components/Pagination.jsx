
import { useSelector, useDispatch } from 'react-redux'
import { setlistPagination, setPaginationNumber } from '../redux/reduxSlices/categorySlice'
import {useEffect} from "react"

function Pagination () {
   const {listPagination, paginationNumber} = useSelector((state) => state.categoryData);

   const dispatch = useDispatch();

   const leftPagination = () => {dispatch(setPaginationNumber(paginationNumber >= 1 ? (paginationNumber - 1) : paginationNumber))};
   const rightPagination = () => {dispatch(setPaginationNumber(paginationNumber < (listPagination.length - 1) ? (paginationNumber + 1) : paginationNumber))};

   return ( 
      <div className="pagination">
         {listPagination.length ?
         <div className="pagination_container">
            <div className="pagination_arrow_left" onClick={leftPagination}>
               <div className="pagination_arrow_left_img"></div>
            </div>
            {listPagination.map((paginationNumber, i) =>
               <div className="pagination_element" key={i} onClick={() => dispatch(setPaginationNumber(i))}>
                  <div className="pagination_element_text">{listPagination[i]}</div>
               </div>
            )}
            <div className="pagination_arrow_right" onClick={rightPagination}>
               <div className="pagination_arrow_right_img"></div>
            </div>
         </div>
         : null}
      </div>
   );
}

export default Pagination ;