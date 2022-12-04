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
import {setArticlesFromLS} from "../redux/reduxSlices/categorySlice"


function Article () {
   let { ArticleId } = useParams();
   const dispatch = useDispatch();

   const {articles, articlesFromLS} = useSelector((state) => state.categoryData);
   const articlePage = useSelector((state) => state.categoryData.articles.find((articles) => articles.id === Number(ArticleId)));

   useEffect(() => {
      const getArticleLS = () => {
      const data = localStorage.getItem("articlesLS");
      const articleLS = data ? JSON.parse(data).find((article) => article.id === Number(ArticleId)) : [];
      return dispatch(setArticlesFromLS(articleLS));
      };
      getArticleLS();
   }, [articles]);



   return ( 
      <div className="article" data-testid="article">
         <div className="article_container">
            <img className="article_img" src={articlesFromLS.img} alt="img"></img>
            <div className="article_container_content">
               <h1 className="article_title_h1">{articlesFromLS.title}</h1>
               <h2 className="article_title_h2">{articlesFromLS.h1}</h2>
               <div className="article_description">{articlesFromLS.text1}</div>
               <h2 className="article_title_h2">{articlesFromLS.h2}</h2>
               <div className="article_description">{articlesFromLS.text2}</div>
               <h2 className="article_title_h2">{articlesFromLS.h3}</h2>
               <div className="article_description">{articlesFromLS.text3}</div>
               <h2 className="article_title_h2">{articlesFromLS.h4}</h2>
               <div className="article_description">{articlesFromLS.text4}</div>
               <div className="article_info_container">
                  <div className="article_info_views"><RemoveRedEyeIcon fontSize="inherit" color="inherit" /></div>
                  <div className="article_info_likes"><ThumbUpOffAltIcon fontSize="inherit" color="inherit" /></div>
                  <div className="article_info_favorites"><FavoriteBorderIcon fontSize="inherit" color="inherit" /></div>
               </div>
            </div>
         </div>
         <SimilarArticles />
      </div>
   );
}

export default Article ;