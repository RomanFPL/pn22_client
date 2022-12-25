import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {registration, login} from "../../http/userAPI"


export const getUserData = createAsyncThunk("auth/dataAuthStatus", async(params, {dispatch}) => {
   const {email, password, isReg} = params;
   try {
      let data;
      if (isReg) {
         data = await login(email, password);
      } else {
         data = await registration(email, password); 
         dispatch(setIsReg(true));
      }
      dispatch(setIsLogin(true));
      return data
   } catch (e) {
      alert(e.response.data.message)
   }
})

const initialState = {
   isLogin: false,
   isReg: false,
   email: "",
   password: "",
   user: [],
   status: "Loading",
};

const userDataSlice = createSlice({
   name: "userdata",
   initialState,

   reducers: {
      setEmail: (state, action) => {
         state.email = action.payload;
      },
      setPassword: (state, action) => {
         state.password = action.payload;
      },
      setIsReg: (state, action) => {
         state.isReg = action.payload;
         let authStatus = JSON.stringify(state.isReg);
         localStorage.setItem("authStatus", authStatus);
      },
      setUser: (state, action) => {
         state.user = action.payload;
      },
      setIsLogin: (state, action) => {
         state.isLogin = action.payload;
         let loginStatus = JSON.stringify(state.isLogin);
         localStorage.setItem("loginStatus", loginStatus);
      },
   },
   extraReducers: {
   [getUserData.pending]: (state) => {
      state.user = [];
      state.status = "Loading";
   },
   [getUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Success";
      let setDataUserLS = JSON.stringify(state.user);
      localStorage.setItem("dataUserLS", setDataUserLS);
   },
   [getUserData.rejected]: (state) => {
      state.user = [];
      state.status = "Error";
   },
   }
});

export const { setEmail, setPassword, setIsReg, setUser, setIsLogin } = userDataSlice.actions;

export default userDataSlice.reducer;