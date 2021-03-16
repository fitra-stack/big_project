import productLists from "../pages/data"

const initialState = {
    products: productLists,
    product:[{
        productId : 0,
        productDesc : "",
        productPrice : "",
        productName : "",
        productMaterial : "",
    }],
    basket:[],
    total : 0,
    quantity : 0,
  }

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_PRODUCTS_BY_ID') 
    {
      // let allItems = JSON.parse(localStorage.getItem('items'))
      // console.log(state.basket, "allitemss")
      // //console.log("action", action.product.productId)
      // let addedItem = state.products.find(item=> item.productId === action.product.productId)
      // let existed_item= allItems.find(item => item.productId === action.product.productId) 

      // if(existed_item)
      //    {
      //      console.log("ada")
      //       addedItem.quantity += 1 
      //        return{
      //           ...state,
      //            total: state.total + addedItem.productPrice,
      //             }
      //   }
      //    else{
      //      console.log("g ada item")
      //       addedItem.quantity = 1;
      //       //calculating the total
      //       let newTotal = state.total + addedItem.productPrice 
            
      //       return{
      //           ...state,
      //           basket: [...state.basket, addedItem],
      //           total : newTotal,
      //       }
            
      //   }
      return {
          ...state,
          basket: action.product
      }
    
  }
    return state;
}
  
export default productReducer;