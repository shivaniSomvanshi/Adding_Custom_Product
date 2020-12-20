let fetchedData = JSON.parse(localStorage.getItem("productList"));
console.log(fetchedData);
let initialState = {
  postedData : fetchedData
}
// let initialState = localStorage.getItem("productList");
// if (initialState === null || initialState === undefined) {
  if(fetchedData === null || fetchedData === undefined){
  initialState = {
    // postedData : dummyData
    postedData: [
      {
        id: "1",
        productImage:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10038499/2020/11/13/cf48b047-5a2f-4b14-8de1-22f44089813e1605264227625LevisMenWhitePrintedRoundNeckT-shirt1.jpg",
        productName: "Tshirt",
        productPrice: 700,
        productDescription: "This is the Myntra's most brought product!",
        productStock: 3
      },
    ],
  };
}

const Product_Reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_PRODUCT":
      let newState = [ ...state.postedData,action.productData];
      localStorage.setItem('productList',JSON.stringify(newState));
      return {
        postedData: [...state.postedData, action.productData],
      };

    case "CLEAR_STORE":
      return {
        postedData: [
          {
            id: "1",
            productImage:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10038499/2020/11/13/cf48b047-5a2f-4b14-8de1-22f44089813e1605264227625LevisMenWhitePrintedRoundNeckT-shirt1.jpg",
            productName: "Tshirt",
            productPrice: 700,
            productDescription: "This is the Myntra's best product!",
            productStock: 3
          },
        ],
      };

  }
  return state;
};

export default Product_Reducer;
