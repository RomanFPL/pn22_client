import Sort from "../category/sort/Sort"
import HelmetComponent from "../../../commonComponents/helmet/HelmetComponent"

import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from '../../../redux/reduxSlices/categorySlice' 
import {dataForSEO} from  "../../../assets/dataForSEO/dataForSEO"

function Category () {
   const dispatch = useDispatch();
   const {category} = useSelector((state) => state.categoryData);
   const categoryList = ["All", "WORK", "LIFE", "RELATIONS"];
   const dataForHelmet = [dataForSEO.categoryAll, dataForSEO.HomePageWork, dataForSEO.HomePageLife, dataForSEO.HomePageRelations]

   return ( 
      <>
         <HelmetComponent title={dataForHelmet[category].title} description={dataForHelmet[category].description} keywords={dataForHelmet[category].keywords} />
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
      </>
   );
}
export default Category;