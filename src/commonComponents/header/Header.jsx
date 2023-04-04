import Menu from "./menu/Menu"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setOpenMenu} from '../../redux/reduxSlices/commonSlice'
import {setIsLogin} from '../../redux/reduxSlices/userSlice'
import {useEffect, useRef} from 'react'
import {handleClickOutside} from "../../utils/handleClickOutside"


function Header () {
   const dispatch = useDispatch();
   const OpenMenuRef = useRef();
   let navigate = useNavigate();
   
   const {isOpenMenu} = useSelector((state) => state.commondata);
   const {isLogin, isReg} = useSelector((state) => state.userdata);

   const logOut = () => {
      dispatch(setIsLogin(false));
      navigate("/");
   }
   
   useEffect(() => {
      handleClickOutside(OpenMenuRef, 'click', dispatch, setOpenMenu(false))
      return () => {
         handleClickOutside(OpenMenuRef, 'click', dispatch, setOpenMenu(false))
      };
   }, [isOpenMenu]);

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
               <Link to={isReg ? "/login" : "/registration"}> 
                  <div className="auth_img" data-testid="auth login"><LoginIcon fontSize="inherit" color="inherit" /></div>
               </Link>}
               {isLogin ?
               <Link to="/account"> 
                  <div className="auth_account_img"><PermIdentityIcon fontSize="inherit" color="inherit" /></div>
               </Link>
               : null}
               </div>
               <div className="menu" ref={OpenMenuRef} data-testid="button menu" onClick={(e) => {dispatch(setOpenMenu(!isOpenMenu)); e.stopPropagation();}}>
                  <div className="menu_img"><MenuOpenIcon fontSize="inherit" color="inherit" /></div>
               </div>
            </div>
         </div>
         {isOpenMenu ? <Menu /> : null}
      </header>
   );
}

export default Header;









  // const handleClickOutside = (event) => {
   //    const isClickInsideBlock = OpenMenuRef.current && OpenMenuRef.current.contains(event.target);
   //    if (!isClickInsideBlock) {
   //       dispatch(setOpenMenu(false))
   //    }
   // };

   // useEffect(() => {
   //    document.addEventListener('click', handleClickOutside);
   //    return () => {
   //       document.removeEventListener('click', handleClickOutside);
   //    };
   // }, [isOpenMenu]);
