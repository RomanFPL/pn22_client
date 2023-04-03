import img from "../assets/img/img.jpg"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {useSelector} from 'react-redux'

function SimilarArticles ({articlePage}) {

   const {articles} = useSelector((state) => state.categoryData);

   let similarArticles = articles.filter((el) => articlePage.category[1] === el.category[1])
   return (  
      <div className="similarArticles">
         <div className="similarArticles_container">
            <div className="similarArticles_nav_left"><ChevronLeftIcon fontSize="inherit" color="inherit" /></div>
            <div className="similarArticles_articles_wrap">
               {similarArticles.map((article) => 
               <div className="similarArticles_article" key={article.id}>
                  <img className="article_img" src={article.img} alt="img"></img>
                  <div className="similarArticles_article_title">{article.title}</div>
               </div>
               )}
            </div>
            <div className="similarArticles_nav_right"><ChevronRightIcon fontSize="inherit" color="inherit" /></div>
         </div>
      </div>
   );
}

export default SimilarArticles ;