import img from "../assets/img/img.jpg"
import SimilarArticles from "../components/SimilarArticles"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { useEffect} from 'react';
import {setArticlesFromLS, getArticles} from "../redux/reduxSlices/categorySlice"



function Article () {
   let { ArticleId } = useParams();
   const dispatch = useDispatch();

   const {articles, articlesFromLS} = useSelector((state) => state.categoryData);
   const {category, paginationNumber, sort, searchQuery} = useSelector((state) => state.categoryData);
   const articlePage = useSelector((state) => state.categoryData.articles.find((articles) => articles.id === Number(ArticleId)));
   console.log(articlePage);
   console.log(!articlesFromLS);

   // useEffect(() => {
   //    const getArticleLS = () => {
   //    const data = localStorage.getItem("articlesLS");
   //    const articleLS = data ? JSON.parse(data).find((article) => article.id === Number(ArticleId)) : [];
   //    return dispatch(setArticlesFromLS(articleLS));
   //    };
   //    getArticleLS();
   // }, [articles]);

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
      <div className="article" data-testid="article">
         {articlePage ?
         <div className="article_container">
            <img className="article_img" src={articlePage.img} alt="img"></img>
            <div className="article_container_content">
               <h1 className="article_title_h1">{articlePage.title}</h1>
               <h2 className="article_title_h2">{articlePage.h1}</h2>
               <div className="article_description">{articlePage.text1}</div>
               <h2 className="article_title_h2">{articlePage.h2}</h2>
               <div className="article_description">{articlePage.text2}</div>
               <h2 className="article_title_h2">{articlePage.h3}</h2>
               <div className="article_description">{articlePage.text3}</div>
               <h2 className="article_title_h2">{articlePage.h4}</h2>
               <div className="article_description">{articlePage.text4}</div>
               <div className="article_info_container">
                  <div className="article_info_views"><RemoveRedEyeIcon fontSize="inherit" color="inherit" /></div>
                  <div className="article_info_likes"><ThumbUpOffAltIcon fontSize="inherit" color="inherit" /></div>
                  <div className="article_info_favorites"><FavoriteBorderIcon fontSize="inherit" color="inherit" /></div>
               </div>
            </div>
         </div>
         : "Loading"}
         <SimilarArticles />
      </div>
   );
}

export default Article ;