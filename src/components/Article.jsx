import img from "../assets/img/img.jpg"
import SimilarArticles from "../components/SimilarArticles"

function Article () {
   return ( 
      <div className="article">
         <div className="article_container">
            <img className="article_img" src={img} alt="img"></img>
            <div className="article_container_content">
               <h1 className="article_title_h1">Name Article</h1>
               <h2 className="article_title_h2">problem</h2>
               <div className="article_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi unde, sequi vel doloremque, accusantium porro temporibus, recusandae maxime ducimus asperiores corporis tempore et accusamus consequatur? Minus ea consequatur maxime?</div>
               <h2 className="article_title_h2">reason</h2>
               <div className="article_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quos, quam optio perferendis, dolores esse et accusamus nihil deleniti magnam amet rerum dolorum, quo ullam! Nam libero esse dolore architecto.</div>
               <h2 className="article_title_h2">resolve</h2>
               <div className="article_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit ex velit quasi quidem maxime natus reiciendis ducimus. Illum est ipsa odit neque porro rerum numquam, saepe officia delectus eius.</div>
               <h2 className="article_title_h2">conclusion</h2>
               <div className="article_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam ipsum iste, illum sit consectetur tempora dolores voluptatibus suscipit sint officia similique facere minus, expedita aperiam, doloribus autem. Quia, facilis.</div>
               <div className="article_info_container">
                  <div className="article_info_views"></div>
                  <div className="article_info_likes"></div>
                  <div className="article_info_favorites"></div>
               </div>
            </div>
         </div>
         <SimilarArticles />
      </div>
   );
}

export default Article ;