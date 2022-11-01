import img from "../assets/img/img.jpg"

function SimilarArticles () {
   return (  
      <div className="similarArticles">
         <div className="similarArticles_container">
            <div className="similarArticles_nav_left"></div>
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
            <div className="similarArticles_nav_right"></div>
         </div>
      </div>
   );
}

export default SimilarArticles ;