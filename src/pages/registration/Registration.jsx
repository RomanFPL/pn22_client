import FormReg from "./formReg/FormReg";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {useNavigate} from "react-router-dom";

function Registration () {
   let navigate = useNavigate();
   
   return ( 
      <>
         <FormReg />
         <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
         onClick={() => navigate(-1)} />
      </>
   );
}

export default Registration;