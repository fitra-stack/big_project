import '../css/style.css';
import '../App.css';
import footer from '../img/group.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import { connect } from 'react-redux';
import productReducer from '../reducers/productReducer';
import { Link } from 'react-router-dom';
import productLists from './data'

// baris comment dibawah uda gak kepake karena uda pake reducer products, jadi uda gak local dari hal Infinity, ini dipake kalo local, nyambung di setProducts line 34
// const productLists = [{
//     productId : 1,
//     productDesc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis Nostrum quasi suscipit vitae ducimus harum culpa et distinctio sequi voluptas maiores", 
//     productPrice : 20,
// },
// {
//     productId : 2,
//     productDesc : "Casual",
//     productPrice : 21,

// },
// {
//     productId : 3,
//     productDesc : "Jeans",
//     productPrice : 22,

// }]
const Product = ({ products, count, slide , basket, addItem, minItem, slideItem, slideItem2, basketItem }) => {
    // baris dibawah ini uda gak kepake soalnya uda ambil dari productReducer, cek products di mapStateToProps atau di param baris atas ini
    // const [products, setProducts] = useState(productLists);
    // const [productIndex, setProductIndex] = useState(0);
    //console.log(data)
    localStorage.setItem('dataProduct', JSON.stringify(productLists));
    const items = JSON.parse(localStorage.getItem('items'))
    const dataProduct = JSON.parse(localStorage.getItem('dataProduct'))
    const allQty = items.map(qty => qty.quantity)
    const totalQty = allQty.reduce(function(acc, val) { return acc + val; }, 0)
    console.log(totalQty,"tototototo")
    
    return(
        <div>
            <div className="container-full-product">
                <br/>
                <div className="container" style={{ marginTop: 30, marginBottom: 55 }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src= { dataProduct[slide].productImg }  style={{ width: 523, height: 567 }}  alt="" />
                                {/* <img src= { products.productId === 1 ? catalog : catalog2 }  style={{ width: 523, height: 567 }}  alt="" /> */}
                                {/* {productIndex !== 0 && ( */}
                                    {/* <button className="btn-shop x" onClick={() => setProductIndex(productIndex - 1 )}>&#8249;</button> */}
                                    <button className="btn-shop x" onClick={() => slideItem2()}>&#8249;</button>
                                {/* )} */}
                                {/* {productIndex !== products.length - 1 && ( */}
                                    <button className="btn-shop y" onClick={() => slideItem()}> &#8250;</button>
                                {/* )} */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" >
                                    <Link to="/basket" style={{ textDecoration: 'none'}}>
                                        <FontAwesomeIcon icon={faShoppingCart} style={{float: "right" , color : "black", marginRight : 27 }} />
                                    </Link>
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
                            <div className="row">
                                <div className="col-md">
                                    <p className="color">Color</p>
                                    <p className="item">{products[slide].productName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="price">${products[slide].productPrice}</p>
                                    <p className="normal-price">$39.99</p>
                                    <p className="content">Kacamata tampan dan berani</p>
                                    <p className="desc">{products[slide].productDesc}</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <p className="size">Size: </p>
                                        </div>
                                        <div className="col-md-3">
                                            {/* <div className="form-group"> */}
                                                <select className="form-control" id="size">
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                </select>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <FontAwesomeIcon icon={faMinus} style={{ fontSize: 14 }} /> */}
                                    {/* <p style={{display:'inline' , marginLeft:9, marginRight:9}}>{totalQty}</p> */}
                                    {/* <FontAwesomeIcon icon={faPlus} style={{ fontSize: 14 }} /> */}
                                </div>
                                <div className="col-md-6">
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>Mens</p>
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>{products[slide].productMaterial}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <Link>
                                    <button className="btn-shop" style={{paddingTop: 14 , paddingBottom : 14, paddingLeft : 33, paddingRight : 33 }} 
                                    onClick={() => basketItem({
                                        productId : dataProduct[slide].productId,
                                        productDesc : dataProduct[slide].productDesc,
                                        productPrice : dataProduct[slide].productPrice,
                                        productImg : dataProduct[slide].productImg,
                                        productName : dataProduct[slide].productName,
                                        productMaterial : dataProduct[slide].productMaterial,
                                    }
                                    )}>ADD TO CART</button>
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid" style={{ marginTop : 0 }}>
                <div className="row">
                    <div className="footer">
                        <img src={footer} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (props) => {
    // console.log('tes', props)
    console.log('props basket', props['product']['basket'])
    localStorage.setItem('items', JSON.stringify(props['product']['basket']));
    localStorage.setItem('totalItems', JSON.stringify(props['product']['total']));
    localStorage.setItem('totalQuantity', JSON.stringify(props['product']['quantity']));
    return {
      count: props.add.counter,
      products: props.product.products,
      basket: props.product.basket,
      slide: props.slide.slide,
    }
  }
  
  // adalah membuat sebuah function untuk memanggil redux action
  const mapDispatchtoProps = (dispatch) => {
    return {
      addItem: () => dispatch({
        type: 'ADD'
      }),
      minItem: (value) => dispatch({
        type: 'MIN',
        value,
      }),
      slideItem: () => dispatch({
        type: 'SLIDE',
      }),
      slideItem2: () => dispatch({
        type: 'SLIDE_MIN',
      }),
      basketItem: (bebas) => dispatch({
        type: 'ADD_ITEM',
        product: bebas,
      })
    }
  }
  
  // connect = menghubungkan & inisialisasi props store dan function redux
export default connect(mapStateToProps, mapDispatchtoProps)(Product);
//   export {Product}