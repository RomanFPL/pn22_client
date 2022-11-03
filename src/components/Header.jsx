import Menu from "./Menu"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from "react-router-dom";

function Header () {
   return ( 
      <header className="header">
         <div className="heder_container">
            <Link to="/"> 
               <div className="logo">
                  <div className="logo_img"></div>
               </div>
            </Link>   
            <div className="right_block_container">
               <div className="auth">
               <Link to="/login"> 
                  <div className="auth_img"><LoginIcon fontSize="inherit" color="inherit" /></div>
               </Link>
               <Link to="/account"> 
                  <div className="auth_account_img"><PermIdentityIcon fontSize="inherit" color="inherit" /></div>
               </Link>
               </div>
               <div className="menu">
                  <div className="menu_img"><MenuOpenIcon fontSize="inherit" color="inherit" /></div>
               </div>
            </div>
         </div>
         {/* <Menu /> */}
      </header>
   );
}

export default Header;