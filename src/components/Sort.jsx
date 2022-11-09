import SortIcon from '@mui/icons-material/Sort';

import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../redux/reduxSlices/categorySlice' 
import { setOpenSort } from '../redux/reduxSlices/commonSlice' 
import { useEffect, useRef } from 'react';

function Sort () {
   const {isOpenSort} = useSelector((state) => state.commondata);
   const sortList = ["mostViews", "favorite", "mostLikes", "New"];

   const dispatch = useDispatch();
   const OpenSortRef = useRef();



   useEffect(() => {
      const clickOutside = (event) => {
         if (!event.path.includes(OpenSortRef.current)) {
            console.log(isOpenSort);
            dispatch(setOpenSort(false));
         }
      };
      isOpenSort && document.body.addEventListener("click", clickOutside);
      !isOpenSort && document.body.removeEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, [isOpenSort]);

   return ( 
      <div className="sort" ref={OpenSortRef}>
         <div className="sort_container">
            <div className="sort_close">
            <div className="sort_close_container" onClick={() => {dispatch(setOpenSort(!isOpenSort))}}>
               <div className="sort_close_img"><SortIcon fontSize="inherit" color="inherit" /></div>
               <div className="sort_close_text">
                  <div className="sort_close_text_content">sort</div>
               </div>
            </div>
            </div>
            {isOpenSort ?
               <div className="sort_open">   
                  <ul className="sort_list">
                     {sortList.map((sortName, i) =>
                     <li className="sort_list_element" key={i} onClick={() => {dispatch(setSort(i))}}>
                        <div className="element_text">{sortList[i]}</div>
                     </li>
                     )}
                  </ul>
               </div>
            : null}
         </div>
      </div>
   );
}

export default Sort ;