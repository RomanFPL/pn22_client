import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import {useDispatch, useSelector} from 'react-redux';
import debounce from 'lodash.debounce';
import {useEffect, useRef, useCallback} from 'react';
import {setSearchQuery, setSearchValue} from '../../../redux/reduxSlices/categorySlice'
import {setSearchOpen} from '../../../redux/reduxSlices/commonSlice'


function Search () {
   // Було б не погано стоворити на рівні редюсерів файл з селесторами де прописати щось на зразок export const getСategoryData = (state) => state.categoryData;
   const {searchValue} = useSelector(getСategoryData);
   const {isSearchOpen} = useSelector((state) => state.commondata);
   
   const OpenSearchRef = useRef();
   const OpenSearchInput = useRef();
   const dispatch = useDispatch();

   const onChange = (event) => {
      dispatch(setSearchValue(event.target.value));
      debounceSearch(event.target.value);
   };

   const debounceSearch = useCallback(
      debounce((searchValue) => {
      dispatch(setSearchQuery(searchValue));
      }, 1000), []);

   const handleClickOutside = (event) => {
      const isClickInsideBlock = OpenSearchRef.current && OpenSearchInput.current.contains(event.target);
      if (!isClickInsideBlock) {
         dispatch(setSearchOpen(false))
      }
   };

   useEffect(() => {
      if(isSearchOpen) {document.addEventListener('click', handleClickOutside)} 
      return () => {
         document.removeEventListener('click', handleClickOutside);
      };
   }, [isSearchOpen]);

   return (
      <div className="search">
         <div className="search_container">
            {isSearchOpen &&
            <div className="search_input_container" data-testid="search area">
               <input className="search_input"
                  placeholder='Search article' 
                  type="search"
                  value={searchValue}
                  onChange={onChange}
                  data-testid="search area input"
                  ref={OpenSearchInput}
               ></input>
            </div>}
            <div className="search_button_container" onClick={(e) => {dispatch(setSearchOpen(!isSearchOpen)); e.stopPropagation();}}>
               <button className="search_button" data-testid="search button" ref={OpenSearchRef}>
                  <ManageSearchIcon sx={{ fontSize: "2.5em", backgroundColor: "#209CEE", color: "white" }} />
               </button>
            </div>
         </div> 
      </div>
   );
}

export default Search;




   // useEffect(() => {
   //    if(isSearchOpen) {handleClickOutside(OpenSearchRef, 'click', dispatch, setSearchOpen(false))}
   //       return () => {
   //          // handleClickOutside(OpenSearchRef, 'click', dispatch, setSearchOpen(false), OpenSearchArea)
   //          document.removeEventListener('click', handleClickOutside);
   //    };
   // }, [isSearchOpen]);
