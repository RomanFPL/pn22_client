import CloseIcon from '@mui/icons-material/Close';
import {setWelcomModalIsOpen} from "../../../redux/reduxSlices/modalsSlice"

import {useDispatch} from 'react-redux'

function WelcomPopUp () {
   const dispatch = useDispatch();

   return (
         <div className="welcomModal">
            <div className="welcomModal_container">
               <div className="welcomModal_title">
                  <div className="welcomModal_title_text">Hi. Good to see you! My name is Igor. Welcome to my workroom.</div>
                  <div className="welcomModal_close" onClick={() => dispatch(setWelcomModalIsOpen(false))}>
                     <CloseIcon sx={{fontSize: "3em"}} />
                  </div>
               </div>
               <div className="welcomModal_img_container">
                  <img className="welcomModal_img_element"></img>
               </div>
               <div className="welcomModal_description">
                  <div className="welcomModal_description_text">It should have a fun text written on it. But I haven't thought of one yet. So just smile😋</div>
               </div>
            </div>
         </div>
   );
}

export default WelcomPopUp;