import Menu from "./Menu"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMenu } from '../redux/reduxSlices/commonSlice'
import { setIsLogin, setIsReg } from '../redux/reduxSlices/userSlice'
import { useEffect, useRef } from 'react';


function Header () {
   const dispatch = useDispatch();
   const OpenMenuRef = useRef();
   let navigate = useNavigate();

   const {isOpenMenu} = useSelector((state) => state.commondata);
   const {isLogin} = useSelector((state) => state.userdata);


   useEffect(() => {
      const clickOutside = (event) => {
         if (!event.path.includes(OpenMenuRef.current)) {
            dispatch(setOpenMenu(false));
         }
      };
      isOpenMenu && document.body.addEventListener("click", clickOutside);
      !isOpenMenu && document.body.removeEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, [isOpenMenu]);

   const logOut = () => {
      dispatch(setIsLogin(false));
      navigate("/");
   }

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
               {isLogin ?
               <Link to="/login"> 
                  <div className="auth_img" onClick={logOut}><LogoutIcon fontSize="inherit" color="inherit" /></div>
               </Link> :
               <Link to="/login"> 
                  <div className="auth_img"><LoginIcon fontSize="inherit" color="inherit" /></div>
               </Link>}
               {isLogin ?
               <Link to="/account"> 
                  <div className="auth_account_img"><PermIdentityIcon fontSize="inherit" color="inherit" /></div>
               </Link>
               : null}
               </div>
               <div className="menu" ref={OpenMenuRef} onClick={(e) => {dispatch(setOpenMenu(!isOpenMenu)); e.stopPropagation();}}>
                  <div className="menu_img"><MenuOpenIcon fontSize="inherit" color="inherit" /></div>
               </div>
            </div>
         </div>
         {isOpenMenu ? <Menu /> : null}
      </header>
   );
}

export default Header;