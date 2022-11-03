import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-router-dom";


function Contacts () {
   return ( 
      <div className="contacts">
         <div className="contacts_container">
               <div className="contacts_title">
                  <div className="contacts_title_text">Contacts</div>
               </div>
               <div className="contacts_body">
                  <div className="contacts_sections_text">
                     <div className="contacts_description_section1">email: test@gmail.com</div>
                     <div className="contacts_description_section2">telegram: @sdssdsd</div>
                  </div>
               </div>
               <div className="contacts_form">
                  <div className="contacts_form_title">
                     <div className="contacts_form_title_text">Send me a massage</div>
                  </div>
                  <div className="contact_form_body">
                     <input type="text" className="contact_form_input_email" placeholder="entry your email"></input>
                     <textarea type="text" className="contact_form_input_text" placeholder="entry your massage"></textarea>
                     <div className="contact_form_button">
                        <div className="contact_form_button_text">send</div>
                     </div>
                  </div>
               </div>
               <div className="contacts_social">
               <a href="https://facebook.com/igor.krotov89" target="_blank">
                  <div className="contacts_social_img_fb"><FacebookIcon fontSize="inherit" color="inherit" /></div>
               </a>
               <a href="https://t.me/@kamrad911" target="_blank">
                  <div className="contacts_social_img_telegram"><TelegramIcon fontSize="inherit" color="inherit" /></div>
               </a>
               <a href="https://www.linkedin.com/in/igor-krotov-76b02a144/" target="_blank">
                  <div className="contacts_social_img_linkedin"><LinkedInIcon fontSize="inherit" color="inherit" /></div>
               </a>
               </div>
         </div>
      </div>
   );
}

export default Contacts ;