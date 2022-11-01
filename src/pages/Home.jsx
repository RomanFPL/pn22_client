import Articles from "../components/Articles";
import Category from "../components/Category";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

function Home () {
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