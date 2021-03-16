export const getProduct = () => {
    return {
      payload: [
        {
            productId : 1,
            productDesc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis ", 
            productPrice : 20,
        },
        {
            productId : 2,
            productDesc : "Casual olor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis",
            productPrice : 21,
        
        },
        {
            productId : 3,
            productDesc : "Jeansssss olor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis",
            productPrice : 22,
        
        }
      ]
    }
  }

export const getProducts = () => {
    const request = axios.get('http://localhost:8000/products')

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'GET_PRODUCTS',
          payload: response.data.data
        })
      )
  }

export const getProductsById = (id) => {
    const request = axios.get('http://localhost:8000/products/${id}')

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'GET_PRODUCTS_BY_ID',
          payload: response.data.data
        })
      )
  }

export const getProductsById = (id) => {
    const request = axios.get('http://localhost:8000/products/${id}')

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'GET_PRODUCTS_BY_ID',
          payload: response.data.data
        })
      )
  }

export const addProducts = (products) => {
    const request = axios.post('http://localhost:8000/products', products,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'ADD_PRODUCTS',
          payload: response.data.data
        })
      ).catch(error => {
        alert('you must re-login')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('token')
      })
  }

export const updateProducts = (products) => {
    const request = axios.patch('http://localhost:8000/products', products,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'UPDATE_PRODUCTS',
          payload: response.data.data
        })
      ).catch(error => {
        alert('you must re-login')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('token')
      })
  }

  export const deleteProducts = (id) => {
    const request = axios.post('http://localhost:8000/products/${id}',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return (dispatch) => 
      request.then(response =>
        dispatch({
          type: 'DELETE_PRODUCTS',
          payload: {id}
        })
      ).catch(error => {
        alert('you must re-login')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('token')
      })
  }