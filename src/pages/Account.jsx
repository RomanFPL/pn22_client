function Account () {
   return ( 
      <div className="account">
         <div className="account_container">
            <div className="account_title">
               <div className="account_title_text">Account</div>
            </div>
            <div className="account_userdata">
               <div className="account_userdata_login">login: IgorK</div>
               <div className="account_userdata_email">email: test@gmail.com</div>
            </div>
            <div className="account_setting">
               <div className="account_setting_element">
                  <input type="checkbox" value="check1" className="account_setting_check1"></input>
                  <label htmlFor="account_setting_check1">sdsds dsd s ds ssss ssssss ssssssss ssss</label>
               </div>
               <div className="account_setting_element">
                  <input type="checkbox" value="check2" className="account_setting_check2"></input>
                  <label htmlFor="account_setting_check1">sdsds sdsds dsd s ds sssss ssssssss sssssssssss sssssss</label>
               </div>
               <div className="account_setting_element">
                  <input type="checkbox" value="check3" className="account_setting_check3"></input>
                  <label htmlFor="account_setting_check3">sdsds sdsds dsd s ds sssssssssss ssssssssss ssssssssss ssssssss</label>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Account;