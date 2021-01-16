export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//actions
export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user:user
});

const initialState = {
  user: undefined
};
//reducers
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    //case GET_USER:
      //tackle with rootSaga.js -> watcherSaga()
    default:
      return state;
  }
};
export default userReducer;



