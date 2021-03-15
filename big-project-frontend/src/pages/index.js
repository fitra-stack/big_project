import '../css/style.css';
import '../App.css';
import img1 from '../img/activities.jpg';
import img2 from '../img/keynotes.jpg';
import img3 from '../img/gallery.jpeg';
import footer from '../img/group.svg';
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <div className="container-full" style={{marginTop : 0}}>
                <div className="container-css">
                    <div className="d-flex">
                        <div className="title">
                            <p className="title1">Choose <b>you want</b></p>
                            <p className="title1">Pay <b>as you can</b></p>
                        </div>
                        <div className="list d-flex">
                            <ul>
                                <li className="li">LATEST</li>
                                <li className="li">ALL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="btn-mid">
                        <Link to="/product">
                            <button className="btn-shop">Shop Now</button>
                        </Link>
                        </div>
                        <div className="d-flex new-concept">
                            <p><b>New Concept</b>
                                of Online Shopping
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3 text-right">
                            <p className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio ab necessitatibus harum est fugit cumque facilis, hic voluptate dolores.</p>
                        </div>
                    </div>
                    <div className="container" style={{paddingRight: 0 , marginTop: 0 }}>
                        <div className="row">
                            <div class="col-md-3"></div>
                            <div className="col-md-3">
                                <img src= {img1} alt="" /> 
                                <p class="gallery">GALLERY </p>
                                <p class="subtitle" style={{marginTop : 20 }}>SUBTITLE</p>
                            </div>
                            <div class="col-md-3">
                                <img src={img2} alt="" />
                                <p class="gallery">ACTIVITIES </p>
                                <p class="subtitle" style={{marginTop : 20 }}>SUBTITLE</p>
                            </div>
                            <div class="col-md-3">
                                <img src={img3} alt="" />
                                <p class="gallery">KEYNOTES </p>
                                <p class="subtitle" style={{marginTop : 20 }}>SUBTITLE</p>
                            </div>   
                        </div>
                    </div>   
                </div>
            </div>
            <hr/>
            <div class="container-fluid" style={{ marginTop : 0 }}>
                <div class="row">
                    <div class="footer">
                        <img src={footer} alt="" />
                    </div>
                </div>
            </div>
        </div>
        

    )
}


export { Index }