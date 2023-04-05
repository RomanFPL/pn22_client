import SimilarArticles from "../similarArticles/SimilarArticles"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HelmetComponent from "../../../commonComponents/helmet/HelmetComponent";

import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import {getArticles} from "../../../redux/reduxSlices/categorySlice"
import {setIsFavorite, setIsLike} from "../../../redux/reduxSlices/articleSlice"


function Article () {
   let {ArticleId} = useParams();
   const dispatch = useDispatch();
   let navigate = useNavigate();

   const {islike, isfavorite} = useSelector((state) => state.articleData);
   const {category, paginationNumber, sort, searchQuery} = useSelector((state) => state.categoryData);
   const articlePage = useSelector((state) => state.categoryData.articles.find((articles) => articles.id === Number(ArticleId)));

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
         {articlePage ? <HelmetComponent title={articlePage.title} description={articlePage.description} keywords={articlePage.keywords} /> : null}
         {articlePage ?
         <>
            <div className="article_container">
               <img className="article_img" src={articlePage.img} alt="img"></img>
               <div className="article_container_content">
                  <h1 className="article_title_h1">{articlePage.title}</h1>
                  <h2 className="article_title_h2_first">{articlePage.h1}</h2>
                  <div className="article_description">{articlePage.text1}</div>
                  <h2 className="article_title_h2">{articlePage.h2}</h2>
                  <div className="article_description">{articlePage.text2}</div>
                  <h2 className="article_title_h2">{articlePage.h3}</h2>
                  <div className="article_description">{articlePage["text3.1"]}</div>
                  <div className="article_description">{articlePage["text3.2"]}</div>
                  <div className="article_description">{articlePage["text3.3"]}</div>
                  <div className="article_description">{articlePage["text3.4"]}</div>
                  <div className="article_description">{articlePage["text3.5"]}</div>
                  <div className="article_description">{articlePage["text3.6"]}</div>
                  <div className="article_description">{articlePage["text3.7"]}</div>
                  <div className="article_description">{articlePage["text3.8"]}</div>
                  <h2 className="article_title_h2">{articlePage.h4}</h2>
                  <div className="article_description">{articlePage["text4.1"]}</div>
                  <div className="article_description">{articlePage["text4.2"]}</div>
                  <div className="article_description">{articlePage["text4.3"]}</div>
                  <div className="article_description">{articlePage["text4.4"]}</div>
                  <div className="article_description">{articlePage["text4.5"]}</div>
                  <div className="article_info_container">
                     <div className="article_info_views"><RemoveRedEyeIcon fontSize="inherit" color="inherit" /></div>
                     <div className="article_info_likes" onClick={() => dispatch(setIsLike(!islike))}>{islike ? <ThumbUpAltIcon fontSize="inherit" color="inherit" /> : <ThumbUpOffAltIcon fontSize="inherit" color="inherit" />}</div>
                     <div className="article_info_favorites" onClick={() => dispatch(setIsFavorite(!isfavorite))}>{isfavorite ? <FavoriteIcon fontSize="inherit" color="inherit" /> : <FavoriteBorderIcon fontSize="inherit" color="inherit" />}</div>
                  </div>
               </div>
            </div>
            <SimilarArticles articlePage={articlePage} />
         </>
         : <CircularProgress sx={{ color: "white", marginTop: "30px", marginRight: "45%", marginLeft: "45%", marginBottom: "30px"}} />}
         
         <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
         onClick={() => navigate(-1)} />
      </div>
   );
}

export default Article ;


   // useEffect(() => {
   //    const getArticleLS = () => {
   //    const data = localStorage.getItem("articlesLS");
   //    const articleLS = data ? JSON.parse(data).find((article) => article.id === Number(ArticleId)) : [];
   //    return dispatch(setArticlesFromLS(articleLS));
   //    };
   //    getArticleLS();
   // }, [articles]);