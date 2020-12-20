
// let initialState = localStorage.getItem("productList");
// if (initialState === null || initialState === undefined) {

let initialState = {
    userName : 'User'
}

const User_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        userName : action.userFirstName
      };
    
  }
  return state;
};

export default User_Reducer;
