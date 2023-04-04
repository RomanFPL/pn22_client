import Sort from "../category/sort/Sort"

import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from '../../../redux/reduxSlices/categorySlice' 

function Category () {
   const dispatch = useDispatch();
   const {category} = useSelector((state) => state.categoryData);
   const categoryList = ["All", "WORK", "LIFE", "RELATIONS"];
   
   return ( 
      <nav className="navigate">
         <div className="navigate_container">   
            <ul className="category_list">
               {categoryList.map((categoryName, i) =>
               <li className={category == i ? "category_list_element show_active_category" : "category_list_element"} key={i} onClick={() => {dispatch(setCategory(i))}}>
                  <div className="element_text">{categoryList[i]}</div>
               </li>
               )}
            </ul>
            <Sort />
         </div>
      </nav>
   );
}
export default Category;