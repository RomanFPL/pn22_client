import {useEffect, useMemo} from "react"
import {createPortal} from "react-dom"
import {useSelector, useDispatch} from 'react-redux'

import {setWelcomModalIsOpen} from "../../redux/reduxSlices/modalsSlice"
import WelcomPopUp from "./welcomPopUp/WelcomPopUp"


const modalRootElement = document.querySelector("#modal");

function Portal () {
   const {welcomModalIsOpen} = useSelector((state) => state.modalsData);

   const dispatch = useDispatch();

   useEffect(() => {
      const data = localStorage.getItem("welcomModalIsOpenLS");
      const welcomModalIsOpenLS = data ? JSON.parse(data) : [];
      dispatch(setWelcomModalIsOpen(welcomModalIsOpenLS));
   }, []);
   
   const element = useMemo(() => {
      const element = document.createElement("div");
      return element
   })

      useEffect(() => {
         modalRootElement.appendChild(element);

         return () => {
            modalRootElement.removeChild(element);
         }
      })

   return createPortal( 
      welcomModalIsOpen && 
         <WelcomPopUp />, 
         element
   );
}

export default Portal;