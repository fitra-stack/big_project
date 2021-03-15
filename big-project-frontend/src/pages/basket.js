import '../css/style.css';
import '../App.css';
import footer from '../img/group.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import productReducer from '../reducers/productReducer';
import { Link } from 'react-router-dom';
import productLists from './data'

const Basket = ({ count, total, basket, addItem, addQty, minQty, delItem, minItem, basketItem }) => {

    //localStorage.setItem('items', JSON.stringify(basket));
    const items = JSON.parse(localStorage.getItem('items'))
    const totalItems = JSON.parse(localStorage.getItem('totalItems'))
    const allQty = items.map(qty => qty.quantity)
    const totalQty = allQty.reduce(function(acc, val) { return acc + val; }, 0)
    
    return(
        <div>
            <div className="container-full-basket">
                <br/>
                <div className="container" style={{ marginTop: 30, marginBottom: 55 }}>
                    <div className="row">
                        <div className="col-md-6">{
                         items !== null && items.map(item => (
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <img src= { item.productImg }  style={{ width: 123, height: 167 }}  alt="" />
                                    </div>
                                    <br></br>
                                </div>
                                <div className="col-md-6">
                                    <div className="row" >
                                        <p style={{marginBottom : 1}}>Name : {item.productName}</p>
                                    </div>
                                    <div className="row">
                                        <p style={{marginBottom : 1}}>Price : ${item.productPrice}</p>
                                    </div>
                                    <div className="row">
                                        <p>Material : {item.productMaterial}</p>
                                    </div >
                                    {/* <div className="row">
                                        <p>Description : {item.productDesc}</p>
                                    </div> */}
                                    <div className="row">
                                        <p style={{marginBottom : 1}}>Qty : 
                                            <FontAwesomeIcon icon={faMinus} style={{ fontSize: 14, marginRight:12, marginLeft:4 }} onClick={() => minQty(item.productId)} />
                                            {item.quantity}
                                            <FontAwesomeIcon icon={faPlus} style={{ fontSize: 14 , marginLeft:12}} onClick={() => addQty(item.productId)}/>
                                        </p>
                                    </div>
                                    <div className="row ">
                                        <button className="btn btn-danger" style={{paddingTop:1, paddingBottom:1}} onClick={() => delItem(item.productId)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                            ))}
                            <div className="row">
                                <div className="col-md-6">
                                
                                </div>
                                <div className="col-md-6">
                                { totalItems !== 0 && 
                                    <div className="row">
                                        <p>Total : ${totalItems}</p>
                                    </div>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" >
                                    <FontAwesomeIcon icon={faShoppingCart} style={{float: "right" , marginRight : 27 }} />
                                    <p style={{float: "right", zIndex:1 }}>{totalQty}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md" style={{borderRight: 1 , borderRightColor: "#E7F0F2" }}>
                                    <Link to="/" style={{ textDecoration: 'none'}}>
                                        <p className="go" style={{color: 'black'}} >GO BACK</p>  
                                    </Link>
                                </div>
                            </div>
                            
                            {/* <div  className="row">
                                <div className="col-md-6">
                                    <FontAwesomeIcon icon={faMinus} style={{ fontSize: 14 }} />
                                    <p style={{display:'inline' , marginLeft:9, marginRight:9}}>{totalQty}</p>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: 14 }} />
                                </div>
                                <div className="col-md-6">
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>Mens</p>
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>100% Cotton</p>
                                </div>
                            </div> */}
                            {/* <div className="row">
                                <div className="col-md">
                                    <button className="btn-shop" style={{paddingTop: 14 , paddingBottom : 14, paddingLeft : 33, paddingRight : 33 }} 
                                    >ADD TO CART</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            {/* <div className="container-fluid" style={{ marginTop : 0 }}>
                <div className="row">
                    <div className="footer">
                        <img src={footer} alt=""/>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

const mapStateToProps = (props) => {
    console.log('props basket', props['product']['basket'])
    // let x = Array (props['product']['total'])
    // localStorage.setItem('Items', JSON.stringify(props['product']['basket']));
    return {
      count: props.add.counter,
      total : props.product.total,
      basket: props.product.basket,
    }
  }
  
  // adalah membuat sebuah function untuk memanggil redux action
  const mapDispatchtoProps = (dispatch) => {
    return {
      addItem: () => dispatch({
        type: 'ADD'
      }),
      slideItem: () => dispatch({
        type: 'SLIDE',
      }),
      basketItem: (basket) => dispatch({
        type: 'ADD_ITEM',
        product: basket,
      }),
      delItem: (productId) => dispatch({
        type: 'DEL_ITEM',
        productId
      }),
      addQty: (productId) => dispatch({
        type: 'ADD_QUANTITY',
        productId
      }),
      minQty: (productId) => dispatch({
        type: 'SUB_QUANTITY',
        productId
      }),
    }
  }
  
  // connect = menghubungkan & inisialisasi props store dan function redux
export default connect(mapStateToProps, mapDispatchtoProps)(Basket);
//   export {Product}