import img from "../assets/img/img.jpg"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SimilarArticles () {
   return (  
      <div className="similarArticles">
         <div className="similarArticles_container">
            <div className="similarArticles_nav_left"><ChevronLeftIcon fontSize="inherit" color="inherit" /></div>
            <div className="similarArticles_articles">
               <div className="similarArticles_article">
                  <img className="article_img" src={img} alt="img"></img>
                  <div className="similarArticles_article_title">Name article</div>
               </div>
               <div className="similarArticles_article">
                  <img className="article_img" src={img} alt="img"></img>
                  <div className="similarArticles_article_title">Name article</div>
               </div>
               <div className="similarArticles_article">
                  <img className="article_img" src={img} alt="img"></img>
                  <div className="similarArticles_article_title">Name article</div>
               </div>
            </div>
            <div className="similarArticles_nav_right"><ChevronRightIcon fontSize="inherit" color="inherit" /></div>
         </div>
      </div>
   );
}

export default SimilarArticles ;