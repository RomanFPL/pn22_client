import Menu from "./Menu"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMenu } from '../redux/reduxSlices/commonSlice'
import { useEffect, useRef } from 'react';


function Header () {
   const dispatch = useDispatch();
   const OpenMenuRef = useRef();

   const {isOpenMenu} = useSelector((state) => state.commondata);



   useEffect(() => {
      const clickOutside = (event) => {
         if (!event.path.includes(OpenMenuRef.current)) {
            dispatch(setOpenMenu(false));
         }
      };
      document.body.addEventListener("click", clickOutside);
      return () => {document.body.removeEventListener("click", clickOutside);}
   }, []);
   // useEffect(() => {
   // const menuBlock = document.querySelector(".menu")
   // document.body.addEventListener("click", (e) => {
   // const click = e.composedPath().includes(menuBlock)
   // if (!click) {dispatch(setOpenMenu(false));}
   // });
   // }, []);


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