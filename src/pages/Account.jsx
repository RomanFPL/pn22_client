import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom";

function Account () {
   let navigate = useNavigate();
   
   const {user} = useSelector((state) => state.userdata);

   return ( 
      <div className="account">
         <div className="account_container">
            <div className="account_title">
               <div className="account_title_text">Account</div>
            </div>
            <div className="account_userdata">
               <div className="account_userdata_login">Name: {user ? user.name : null}</div>
               <div className="account_userdata_email">email: {user ? user.email : null}</div>
            </div>
            <div className="account_setting">
               <div className="account_setting_element">
                  <input type="checkbox" value="check1" className="account_setting_check1"></input>
                  <label htmlFor="account_setting_check1">features 1</label>
               </div>
               <div className="account_setting_element">
                  <input type="checkbox" value="check2" className="account_setting_check2"></input>
                  <label htmlFor="account_setting_check1">features 2</label>
               </div>
               <div className="account_setting_element">
                  <input type="checkbox" value="check3" className="account_setting_check3"></input>
                  <label htmlFor="account_setting_check3">features 3</label>
               </div>
            </div>
         </div>
         <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
         onClick={() => navigate(-1)} />
      </div>
   );
}

export default Account;