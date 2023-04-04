import FormLogin from "./formLogin/FormLogin";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {useNavigate} from "react-router-dom";

function Login () {
   let navigate = useNavigate();
   
   return ( 
      <>
         <FormLogin />
         <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
         onClick={() => navigate(-1)} />
      </>
   );
}

export default Login ;