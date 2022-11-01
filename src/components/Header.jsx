import Menu from "./Menu"

function Header () {
   return ( 
      <header className="header">
         <div className="heder_container">
            <div className="logo">
               <div className="logo_img"></div>
            </div>
            <div className="right_block_container">
               <div className="auth">
                  <div className="auth_img"></div>
               </div>
               <div className="menu">
                  <div className="menu_img"></div>
               </div>
            </div>
         </div>
         {/* <Menu /> */}
      </header>
   );
}

export default Header;