import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye, FaHeart } from "react-icons/fa";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import T1 from "../images/T1.avif";
import Banner1 from "../images/Multi-Banner-1.avif";
import Banner2 from "../images/Multi-Banner-2.avif";
import Banner3 from "../images/Multi-Banner-3.webp";
import Banner4 from "../images/Multi-Banner-4.avif";
import Banner5 from "../images/Multi-Banner-5.webp";
import "./home.css";
const Home = ({ addtocart }) => {
  // Product Category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  // Trending Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  // filter of trending product
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curEle) => {
        return curEle.type === x;
    })
    setTrendingProduct(filterproduct);
  }
  // All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  }
  // product type
  useEffect(() => {
    productcategory();
  }, [])
  const productcategory = () => {
    // New Product
    const newCategory = Homeproduct.filter((x) => {
        return x.type === 'new'
    })
    setNewProduct(newCategory)
    // Featured Product
    const featuredCategory = Homeproduct.filter((x) => {
        return x.type === 'featured'
    })
    setFeaturedProduct(featuredCategory)
    // Top Product
    const topCategory = Homeproduct.filter((x) => {
        return x.type === 'top'
    })
    setTopProduct(topCategory)
  }
  return (
    <div>
      <div className="home">
        <div className="top-banner">
            <div className="contant">
                <Link to="/shop" className="link">Shop Now</Link>
            </div>
        </div>
        <div className="trending">
            <div className="container">
                <div className="left-box">
                    <div className="header">
                        <div className="heading">
                            <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                        </div>
                        <div className="cate">
                            <h3 onClick={() => filtercate('new')}>New</h3>
                            <h3 onClick={() => filtercate('featured')}>Featured</h3>
                            <h3 onClick={() => filtercate('top')}>top selling</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            {
                                trendingProduct.map((curEle) => {
                                    return (
                                        <div key={curEle.id} className="box">
                                            <div className="img-box">
                                                <img src={curEle.img} alt="" />
                                                <div className="icon">
                                                    <div className="icon-box">
                                                        <FaEye />
                                                    </div>
                                                    <div className="icon-box">
                                                        <FaHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3>{curEle.name}</h3>
                                                <p>EGP{curEle.price}</p>
                                                <button className="btn" onClick={() => addtocart(curEle)}>Add to cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button>Show More</button>
                    </div>
                </div>
                <div className="right-box">
                    <div className="right-container">
                        <div className="testimonial">
                            <div className="head">
                                <h3>our testmonial</h3>
                            </div>
                            <div className="detail">
                                <div className="img-box">
                                    <img src={T1} alt="testmonial" />
                                </div>
                                <div className="info">
                                    <h3>stephan robot</h3>
                                    <h4>web designer</h4>
                                    <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                            <div className="head">
                                <h3>newsletter</h3>
                            </div>
                            <div className="form">
                                <p>join our malling list</p>
                                <input type="email" placeholder="E-mail" autoComplete="off" />
                                <button>subscribe</button>
                                <div className="icon-box">
                                    <div className="icon">
                                        <BiLogoFacebook />
                                    </div>
                                    <div className="icon">
                                        <BiLogoTwitter />
                                    </div>
                                    <div className="icon">
                                        <BiLogoInstagram />
                                    </div>
                                    <div className="icon">
                                        <BiLogoYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banners">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <img src={Banner1} alt="banner" />
                    </div>
                    <div className="box">
                        <img src={Banner2} alt="banner" />
                    </div>
                </div>
                <div className="right-box">
                    <div className="top">
                        <img src={Banner3} alt="" />
                        <img src={Banner4}  alt="" />
                    </div>
                    <div className="bottom">
                        <img src={Banner5}  alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-type">
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h2>New Product</h2>
                    </div>
                    {
                        newProduct.map((curEle) => {
                            return (
                                <div key={curEle.id}>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curEle.img} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curEle.name}</h3>
                                            <p>EGP{curEle.price}</p>
                                            <div className="icon">
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() => addtocart(curEle)}><FaCartShopping /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Featured Product</h2>
                    </div>
                    {
                        featuredProduct.map((curEle) => {
                            return (
                                <div key={curEle.id}>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curEle.img} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curEle.name}</h3>
                                            <p>EGP{curEle.price}</p>
                                            <div className="icon">
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() => addtocart(curEle)}><FaCartShopping /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Top Selling Product</h2>
                    </div>
                    {
                        topProduct.map((curEle) => {
                            return (
                                <div key={curEle.id}>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curEle.img} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curEle.name}</h3>
                                            <p>EGP{curEle.price}</p>
                                            <div className="icon">
                                                <button><FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button onClick={() => addtocart(curEle)}><FaCartShopping /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
