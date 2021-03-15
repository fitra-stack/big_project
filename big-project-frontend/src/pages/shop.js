import '../css/style.css';
import '../App.css';
import img1 from '../img/activities.jpg';
import img2 from '../img/keynotes.jpg';
import img3 from '../img/gallery.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import footer from '../img/group.svg';

const Shop = () => {
    return (
        <div>
            <div className="container-shop">
                <div className="container" style={{marginTop: 30}}>
                    <div className="row" style={{marginBottom: 51}}>
                        <div className="col-md-7">
                            <p className="shop-name">Your Shop Name</p>    
                        </div>
                        <div className="col-md-4">
                            <form className="form-inline d-flex justify-content-center md-form form-sm">
                                <input className="form-control form-control-sm mr-3 w-75" style={{borderTop: 0 , borderLeft: 0 , borderRight: 0 }} type="text" placeholder="Search"
                                aria-label="Search" />
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </form>
                        </div>
                        <div className="col-md-1">
                            <FontAwesomeIcon icon={faShoppingCart} style={{float: "right" , marginRight : 27 }} />
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: 43 }}>
                        <div className="col align-self-end">
                            <ul style={{ marginBottom: 0 }}>
                                <li className="list-category">Featured</li>
                                <li className="list-category" style={{fontFamily:'Roboto', fontWeight: 900}}>Category 1</li>
                                <li className="list-category">Category 2</li>
                                <li className="list-category">Category 3</li>
                                <li className="list-category">Category 4</li>
                                <li className="list-category">Category 5</li>
                            </ul>
                        </div>
                        
                        <div className="col-md-7" style={{ marginRight: 52}}>
                        <div className="container">
                            <div className="row" style={{marginBottom: 35}}>
                                <div className="col-md-4"  >
                                    <img className="category" src={img1} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20}}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" style={{ paddingLeft: 0 , paddingRight: 12 }} > 
                                    <img className="category" src={img1} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20}}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" >
                                    <img className="category" src={img1} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20}}>CATEGORY</p>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: 35}}>
                                <div className="col-md-4">
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20}}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" style={{paddingLeft: 0 , paddingRight: 12}}>
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20 }}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" >
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20 }}>CATEGORY</p>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-4" >
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{ marginTop: 20 }}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" style={{ paddingLeft: 0 , paddingRight: 12 }}> 
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20}}>CATEGORY</p>
                                </div>
                                <div className="col-md-4" >
                                    <img className="category" src={img2} alt="" />
                                    <p className="gallery left">TITLE HERE </p>
                                    <p className="subtitle left sub" style={{marginTop: 20 }} >CATEGORY</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-2" >
                            <ul style= {{ float: "right" }}>
                                <li className="list-filter">ALL</li>
                                <li className="list-filter">FILTER 1</li>
                                <li className="list-filter">FILTER 2</li>
                                <li className="list-filter">FILTER 3</li>
                                <li className="list-filter">FILTER 4</li>
                                <li className="list-filter">FILTER 5</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-md-center" style={{ marginBottom: 45 }}>
                        <div className="col-md-auto">
                            <hr style={{ marginTop: 0 , marginBottom: 8 }} /> 
                            <p className="paging" style={{ fontWeight: "bold" , color: "black" }} >1</p>
                            <p className="paging">2</p>
                            <p className="paging">3</p>
                            <p className="paging">4</p>
                            <p className="paging">5</p>
                            <p className="paging">6</p>
                            <p className="paging">7</p>
                            <p className="paging">8</p>
                            <p className="paging">9</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid" style={{ marginTop: 0 }}>
                <div className="row">
                    <div className="footer">
                        <img src={footer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Shop }