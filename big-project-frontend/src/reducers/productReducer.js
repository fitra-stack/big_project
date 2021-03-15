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
    if (action.type === 'ADD_ITEM') 
    {
      let allItems = JSON.parse(localStorage.getItem('items'))
      console.log(state.basket, "allitemss")
      //console.log("action", action.product.productId)
      let addedItem = state.products.find(item=> item.productId === action.product.productId)
      let existed_item= allItems.find(item => item.productId === action.product.productId) 

      if(existed_item)
         {
           console.log("ada")
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.productPrice,
                  }
        }
         else{
           console.log("g ada item")
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.productPrice 
            
            return{
                ...state,
                basket: [...state.basket, addedItem],
                total : newTotal,
            }
            
        }
      // return {
      //     ...state,
      //     basket: [ ...state.basket, action.product
      //     ]
      // }
    }
    if (action.type === 'DEL_ITEM') 
    {
        let allItems = JSON.parse(localStorage.getItem('items'))
        let totalItems = JSON.parse(localStorage.getItem('totalItems'))
        let itemToRemove= allItems.find(item=> action.productId === item.productId)
        let newItems = allItems.filter(item=> action.productId !== item.productId)

        let updateItems = localStorage.setItem('items', JSON.stringify(newItems)) ;

        let newTotal = totalItems - (itemToRemove.productPrice * itemToRemove.quantity )
        let updateTotal = localStorage.setItem('totalItems', JSON.stringify(newTotal)) ;
        
        return{
          ...state,
          basket: newItems,
          total: newTotal
      }
    }
    if(action.type === 'ADD_QUANTITY')
    { 
        let allItems = JSON.parse(localStorage.getItem('items'))
        let totalItems = JSON.parse(localStorage.getItem('totalItems'))
        let addedItem = allItems.find(item=> item.productId === action.productId)
          addedItem.quantity += 1 

        let qtyUpdate = Array(addedItem)
        let updateItems = allItems.map(obj => qtyUpdate.find(o => o.productId === obj.productId) || obj); 
        let localstorageItems = localStorage.setItem('items', JSON.stringify(updateItems)) ;
          
        let newTotal = totalItems + addedItem.productPrice
        let updateTotal = localStorage.setItem('totalItems', JSON.stringify(newTotal)) ;
          
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== 'SUB_QUANTITY'){  
      let allItems = JSON.parse(localStorage.getItem('items'))
      let addedItem = allItems.find(item=> item.productId === action.productId)

      let totalItems = JSON.parse(localStorage.getItem('totalItems'))
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let newItems = allItems.filter(item=>item.productId !== action.productId)
          let updateItems = localStorage.setItem('items', JSON.stringify(newItems)) ;
          

          let newTotal = totalItems - addedItem.productPrice
          let updateTotal = localStorage.setItem('totalItems', JSON.stringify(newTotal)) ;
          return{
              ...state,
              addedItems: newItems,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = totalItems - addedItem.productPrice
          let updateTotal = localStorage.setItem('totalItems', JSON.stringify(newTotal)) ;

          let qtyUpdate = Array(addedItem)
          let updateItems = allItems.map(obj => qtyUpdate.find(o => o.productId === obj.productId) || obj); 
          let localstorageItems = localStorage.setItem('items', JSON.stringify(updateItems)) ;

          return{
              ...state,
              total: newTotal
          }
      }
      
  }
    return state;
}
  
export default productReducer;