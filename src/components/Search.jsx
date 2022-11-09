import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useCallback } from 'react';

import { setSearchQuery, setSearchValue } from '../redux/reduxSlices/categorySlice'
import { setSearchOpen } from '../redux/reduxSlices/commonSlice'

function Search () {
   const {searchValue} = useSelector((state) => state.categoryData);
   const {isSearchOpen} = useSelector((state) => state.commondata);
   
   const OpenSearchRef = useRef();
   const dispatch = useDispatch();

   const onChange = (event) => {
      dispatch(setSearchValue(event.target.value));
      debounceSearch(event.target.value);
   };

   const debounceSearch = useCallback(
      debounce((searchValue) => {
      dispatch(setSearchQuery(searchValue));
      }, 1000), []);

   useEffect(() => {
      const clickOutside = (event) => {
         if (!event.path.includes(OpenSearchRef.current)) {
            dispatch(setSearchOpen(false));
         }
      };
      isSearchOpen && document.body.addEventListener("click", clickOutside);
      !isSearchOpen && document.body.removeEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, [isSearchOpen]);

   return ( 
      <div className="search" ref={OpenSearchRef}>
         <div className="search_container">
            {isSearchOpen &&
            <div className="search_input_container">
               <input className="search_input"
                  placeholder='Search' 
                  type="search"
                  value={searchValue}
                  onChange={onChange}
               ></input>
            </div>}
            <div className="search_button_container" onClick={(e) => {dispatch(setSearchOpen(!isSearchOpen)); e.stopPropagation();}}>
               <button className="search_button"></button>
            </div>
         </div> 
      </div>
   );
}

export default Search ;