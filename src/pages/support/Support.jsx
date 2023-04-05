import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HelmetComponent from "../../commonComponents/helmet/HelmetComponent"

import {useNavigate} from "react-router-dom";

function Support () {
   let navigate = useNavigate();
   
   return ( 
      <>
         <HelmetComponent title="Support" />
         <div className="support" data-testid="page support">
            <div className="support_container">
                  <div className="support_description">
                     <div className="support_description_title">If you want to help</div>
                     <div className="support_description_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam modi illo aspernatur quis pariatur tempore dolorem, corrupti saepe alias voluptatem ratione blanditiis atque nesciunt enim, vero illum! Vero, accusamus consequatur?</div>
                  </div>
                  <div className="support_title">
                     <div className="support_title_text">contacts</div>
                  </div>
                  <div className="support_body">
                     <div className="support_sections_text">
                        <div className="support_description_section1">email: test@gmail.com</div>
                        <div className="support_description_section2">telegram: @sdssdsd</div>
                     </div>
                  </div>
                  <div className="support_form">
                     <div className="support_form_title">
                        <div className="support_form_title_text">Send me a massage</div>
                     </div>
                     <div className="contact_form_body">
                        <input type="text" className="contact_form_input_email" placeholder="entry your email"></input>
                        <textarea type="text" className="contact_form_input_text" placeholder="entry your massage"></textarea>
                        <div className="contact_form_button">
                           <div className="contact_form_button_text">send</div>
                        </div>
                     </div>
                  </div>
            </div>
            <KeyboardReturnIcon sx={{ position: 'fixed', bottom: "70px", right: "25px", backgroundColor: "#209CEE", borderRadius: "5px", fontSize: "40px", color: "white", cursor: "pointer" }}
            onClick={() => navigate(-1)} />
         </div>
      </>
   );
}

export default Support ;