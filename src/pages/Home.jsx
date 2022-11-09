import Articles from "../components/Articles";
import Category from "../components/Category";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../redux/reduxSlices/categorySlice'
import { setIsLogin, setIsReg, setUser } from '../redux/reduxSlices/userSlice'

function Home () {
   const dispatch = useDispatch();
   const {category, paginationNumber, sort, searchQuery} = useSelector((state) => state.categoryData);
   const {isLogin, isReg, user} = useSelector((state) => state.userdata);

   useEffect(() => {
      const data = localStorage.getItem("loginStatus");
      const statusLogin = data ? JSON.parse(data) : false;
      dispatch(setIsLogin(statusLogin));
   }, [isLogin]);

   useEffect(() => {
      const data = localStorage.getItem("authStatus");
      const statusAuth = data ? JSON.parse(data) : false;
      dispatch(setIsReg(statusAuth));
   }, [isReg, isLogin]);

   useEffect(() => {
      const data = localStorage.getItem("dataUserLS");
      const dataUserFromLS = data ? JSON.parse(data) : [];
      dispatch(setUser(dataUserFromLS));
   }, []);

   useEffect(() => {
      async function fetchArticlesData () {
         dispatch(getArticles({
            paginationNumber,
            category,
            sort,
            searchQuery,
         }));
      };
      fetchArticlesData();
   }, [category, paginationNumber, searchQuery, sort])

   return ( 
      <>
         <Category />
         <Articles />
         <Pagination />
         <Search />
      </>
   );
}

export default Home ;