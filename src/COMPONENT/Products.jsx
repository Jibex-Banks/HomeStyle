import './Products.css'
import React from 'react';
import { useState, useEffect } from 'react';
import id from './images/id.jpeg';
import ij from './images/ij.jpg';
import is from './images/is.jpg';
import chair from './images/chair.jpeg';
import ig from './images/ig.jpeg';
import io from './images/io.jpg';
import ip from './images/ip.webp';
import iq from './images/iq.jpg';
import sale from './images/sale.jpeg';
import table1 from './images/table1.jpeg';
import bed from './images/bed.jpeg';
import wardrobe from './images/wardrobe.jpeg';
import shelf from './images/shelf.webp';
import LSCB from './images/LSCB.jpg';
import RGTT from './images/RGTT.jpeg';
import RMT from './images/RMT.jpg';
import PSB from './images/PSB.jpg';
import bd from './images/bd.jpeg';
import c from './images/c.jpeg';
import it from './images/it.jpeg';
import bb from './images/bb.jpeg';
import chand from './images/chand.jpg';
import RCPB from './images/RCPB.jpg';
import LDJ from './images/LDJ.jpg';
import SCL from './images/SCL.jpg';
import FLV from './images/FLV.jpg';
import NCL from './images/NCL.jpg';
import AFM from './images/AFM.jpg';
import RFC from './images/RFC.jpg';
import Mirrors from './images/Mirrors.jpg';
import GVA from './images/GVA.jpg';
import LPC from './images/LPC.jpg';
import XLBoom from './images/XLBoom.jpg';
import TCP from './images/TCP.jpg';
import Faucet from './images/Faucet.jpg';
import lux from './images/lux.jpg';
import ir from './images/ir.jpeg';
import ifs from './images/ifs.jpg';
import KitchenTab1 from './images/KitchenTab1.jpg';
import KitchenTab2 from './images/KitchenTab2.jpg';
// import Faucet from './images/Faucet.jpg';
import Faucet2 from './images/Faucet2.jpg';
import Sink1 from './images/Sink1.jpg';
import Sink2 from './images/Sink2.jpg';
import KitchenIsland1 from './images/KitchenIsland1.jpg';
import KitchenIsland2 from './images/KitchenIsland2.jpg';
import Backsplash1 from './images/Backsplash1.jpg';
import Backsplash2 from './images/Backsplash2.jpg';
import Vanities1 from './images/Vanities1.jpg';
import VanitiesWithCabinet from './images/VanitiesWithCabinet.jpg';
import Bathtub from './images/Bathtub.jpg'
// Function component for Products
function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [wishlist, setWishlist] = useState([]); 
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allProducts = [
    { id: 1, name: "Cozy Armchair", src: chair, price: 200000, category: "Furniture", subcategory: "Chairs and Recliners", rating: 4.5, reviews: [] },
        { id: 2, name: "Table", src: table1, price: 400000, category: "Furniture", subcategory: "Tables", rating: 4.3, reviews: [] },
        { id: 3, name: "Bed", src: bed, price: 900000, category: "Furniture", subcategory: "Beds and Mattresses", rating: 4.7, reviews: [] },
        { id: 4, name: "Wardrobe", src: wardrobe, price: 300000, category: "Furniture", subcategory: "Storage", rating: 4.2, reviews: [] },
        { id: 5, name: "Luxury Sleigh Chesterfield Bed", src: LSCB, price: 2000000, category: "Furniture", subcategory: "Beds and Mattresses", rating: 4.9, reviews: [] },
        { id: 6, name: "Round Glass Table Top", src: RGTT, price: 200000, category: "Furniture", subcategory: "Tables", rating: 4.4, reviews: [] },
        { id: 7, name: "Round Marble Tabletop with Metal Frame Modern Black & Gold Side Table", src: RMT, price: 1200000, category: "Furniture", subcategory: "Tables", rating: 4.6, reviews: [] },
        { id: 8, name: "Pocket Spring Bed", src: PSB, price: 2000000, category: "Furniture", subcategory: "Beds and Mattresses", rating: 4.8, reviews: [] },
        { id: 9, name: "Transparent Wooden Wardrobe", src: bd, price: 305000, category: "Furniture", subcategory: "Storage", rating: 4.1, reviews: [] },
        { id: 10, name: "Nice Yellow Couch", src: c, price: 270000, category: "Furniture", subcategory: "Sofas and Couches", rating: 4.3, reviews: [] },
        { id: 11, name: "See Through Wardrobe", src: bb, price: 450000, category: "Furniture", subcategory: "Storage", rating: 4.0, reviews: [] },
        { id: 12, name: "Light Blue tint Couch", src: it, price: 295000, category: "Furniture", subcategory: "Sofas and Couches", rating: 4.2, reviews: [] },
        { id: 13, name: "Chair", src: is, price: 150000, category: "Furniture", subcategory: "Chairs and Recliners", rating: 4.1, reviews: [] },
        { id: 14, name: "SHELF", src: shelf, price: 90000, category: "Furniture", subcategory: "Storage", rating: 3.9, reviews: [] },
        { id: 15, name: "Kitchen1", src: ifs, price: 200000, category: "Kitchen", subcategory: "Cabinets and Pantries", rating: 4.4, reviews: [] },
        { id: 16, name: "KitchenTab1", src: KitchenTab1, price: 1400000, category: "Kitchen", subcategory: "Counter tops", rating: 4.7, reviews: [] },
        { id: 17, name: "Faucet", src: Faucet, price: 900000, category: "Kitchen", subcategory: "Sinks and Faucets", rating: 4.5, reviews: [] },
        { id: 18, name: "Elegant Backsplash1", src: Backsplash1, price: 300000, category: "Kitchen", subcategory: "Backsplashes", rating: 4.3, reviews: [] },
        { id: 19, name: "Kitchen antique Island1", src: KitchenIsland1, price: 2400000, category: "Kitchen", subcategory: "Kitchen Islands and carts", rating: 4.8, reviews: [] },
        { id: 20, name: "Natural tone Kitchen Island1", src: KitchenIsland2, price: 1300000, category: "Kitchen", subcategory: "Kitchen Islands and carts", rating: 4.6, reviews: [] },
        { id: 21, name: "KitchenTab2", src: KitchenTab2, price: 2400000, category: "Kitchen", subcategory: "Counter tops", rating: 4.9, reviews: [] },
        { id: 22, name: "Faucet", src: Faucet2, price: 90000, category: "Kitchen", subcategory: "Sinks and Faucets", rating: 4.0, reviews: [] },
        { id: 23, name: "Sink", src: Sink1, price: 80000, category: "Kitchen", subcategory: "Sinks and Faucets", rating: 4.1, reviews: [] },
        { id: 24, name: "Nice Sink", src: Sink2, price: 80000, category: "Kitchen", subcategory: "Sinks and Faucets", rating: 4.2, reviews: [] },
        { id: 25, name: "Elegant Natural tone Backsplash", src: Backsplash2, price: 500000, category: "Kitchen", subcategory: "Backsplashes", rating: 4.5, reviews: [] },
        { id: 26, name: "Chandalia", src: chand, price: 300000, category: "Lightning", subcategory: "Ceiling Lights", rating: 4.4, reviews: [] },
        { id: 27, name: "FTOTI LED Backlit Vanity Mirror", src: FLV, price: 400000, category: "Lightning", subcategory: "Wall Lights", rating: 4.6, reviews: [] },
        { id: 28, name: "Reality Cameron Pendelleuchte Braun", src: RCPB, price: 250000, category: "Lightning", subcategory: "Ceiling Lights", rating: 4.3, reviews: [] },
        { id: 29, name: "Nordic Crystal Lamp", src: NCL, price: 380000, category: "Lightning", subcategory: "Table Lamps", rating: 4.5, reviews: [] },
        { id: 30, name: "Lampe de jardin", src: LDJ, price: 150000, category: "Lightning", subcategory: "Outdoor Lightning", rating: 4.1, reviews: [] },
        { id: 31, name: "Lampe de jardin (Floor)", src: LDJ, price: 150000, category: "Lightning", subcategory: "Floor Lamps", rating: 4.2, reviews: [] },
        { id: 32, name: "Modern Chandalia", src: io, price: 250000, category: "Lightning", subcategory: "Ceiling Lights", rating: 4.3, reviews: [] },
        { id: 33, name: "Scandinavian Chandelier Lighting", src: SCL, price: 550000, category: "Lightning", subcategory: "Ceiling Lights", rating: 4.7, reviews: [] },
        { id: 34, name: "Round Faux Cashmere Area Rug", src: RFC, price: 200000, category: "Décor", subcategory: "Rugs and Carpets", rating: 4.2, reviews: [] },
        { id: 35, name: "Aesthetic Funky Mirror", src: AFM, price: 350000, category: "Décor", subcategory: "Wall Art and Mirrors", rating: 4.4, reviews: [] },
        { id: 36, name: "Table", src: table1, price: 400000, category: "Décor", subcategory: "Curtain and Blinds", rating: 4.0, reviews: [] },
        { id: 37, name: "Mirror", src: Mirrors, price: 900000, category: "Décor", subcategory: "Wall Art and Mirrors", rating: 4.6, reviews: [] },
        { id: 38, name: "Luxury Pillow Cover Set of 8", src: LPC, price: 85000, category: "Décor", subcategory: "Cushions and Throws", rating: 4.3, reviews: [] },
        { id: 39, name: "Gold Vintage Aluminum Vase", src: GVA, price: 100000, category: "Décor", subcategory: "Vases and Plant Pots", rating: 4.1, reviews: [] },
        { id: 40, name: "FTOTI LED Backlit Vanity Mirror", src: FLV, price: 400000, category: "Décor", subcategory: "Wall Art and Mirrors", rating: 4.5, reviews: [] },
        { id: 41, name: "Colorblock Pillow Set of 3", src: LPC, price: 50000, category: "Décor", subcategory: "Cushions and Throws", rating: 4.0, reviews: [] },
        { id: 42, name: "XLBoom", src: XLBoom, price: 100000, category: "Décor", subcategory: "Wall Art and Mirrors", rating: 3.9, reviews: [] },
        { id: 43, name: "Tall Classy Plant Stand and Pot", src: TCP, price: 150000, category: "Décor", subcategory: "Vases and Plant Pots", rating: 4.2, reviews: [] },
        { id: 44, name: "Vanities1", src: Vanities1, price: 800000, category: "Bathroom", subcategory: "Vanities and Cabinets", rating: 4.5, reviews: [] },
        { id: 45, name: "Bathtub", src: Bathtub, price: 800000, category: "Bathroom", subcategory: "Showers and Bathtubs", rating: 4.7, reviews: [] },
        { id: 46, name: "Smart Toilet", src: ir, price: 400000, category: "Bathroom", subcategory: "Toilets and Bidets", rating: 4.6, reviews: [] },
        { id: 47, name: "Bathroom set", src: iq, price: 900000, category: "Bathroom", subcategory: "Bathroom Sinks", rating: 4.8, reviews: [] },
        { id: 48, name: "Mirror", src: Mirrors, price: 90000, category: "Bathroom", subcategory: "Mirrors and Medicine Cabinets", rating: 4.1, reviews: [] },
        { id: 49, name: "Lux Bathroom", src: lux, price: 600000, category: "Bathroom", subcategory: "Showers and Bathtubs", rating: 4.9, reviews: [] },
        { id: 50, name: "Vanities With Cabinet", src: VanitiesWithCabinet, price: 800000, category: "Bathroom", subcategory: "Vanities and Cabinets", rating: 4.4, reviews: [] },
      ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const categories = [
    { name: "All" },
    { name: "Furniture",src:chair },
    { name: "Kitchen", src:KitchenIsland1 },
    { name: "Lightning", src:chand },
    {name:"Décor", src:GVA},
    { name: "Bathroom", src:iq }

  ];

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, priceRange, ratingFilter]);

  // Filter products based on user input
  const filterProducts = () => {
    let filtered = allProducts.filter(product =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.rating >= ratingFilter
    );
    setFilteredProducts(filtered);
  };

  const addToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const openReviewModal = (product) => {
    setSelectedProduct(product);
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    setSelectedProduct(null);
  };

  const submitReview = () => {
    closeReviewModal();
  };

  return (
    <div className='productContainer'>
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={id} className="d-block w-100 custom-image" alt="First Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Design. Live. Inspire.</h4>
              <p>Transform your space with sophisticated furniture, lighting, and décor.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ij} className="d-block w-100 custom-image" alt="Second Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Elevate. Express. Entertain.</h4>
              <p>Create a statement space with bespoke furniture and exquisite lighting.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={is} className="d-block w-100 custom-image" alt="Third Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Craft. Comfort. Style.</h4>
              <p>Elevate your space with artisanal furniture that blends form and function.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Product Category Navigation */}
      <div className="category-nav-container">
        <h3 className="category-title">Shop By Category</h3>
        <div className="category-cards">
          {categories.map((category, index) => (
            <a key={index} href="#" className="category-link" onClick={() => setSelectedCategory(category.name)}>
              <div className="category-card">
                <h4 className="category-name">{category.name}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className='Products'>
        <nav className="categoryNav navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">HomeStyler</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {categories.map((category, index) => (
                  <li className="nav-item" key={index}>
                    <a className={`NavLink nav-link ${selectedCategory === category.name ? 'active' : ""}`} href="#" onClick={() => setSelectedCategory(category.name)}>{category.name}</a>
                  </li>
                ))}
                <li className="nav-item">
                  <a className="NavLink nav-link" href="#">Wishlist ({wishlist.length})</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <h4>Filters</h4>
              <div className="mb-3">
                <label htmlFor="priceRange" className="form-label">Price Range</label>
                <input type="range" className="form-range" id="priceRange" min="0" max="5000000" step="10000"
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} />
              </div>
              <div className="mb-3">
                <label htmlFor="ratingFilter" className="form-label">Minimum Rating</label>
                <input type="number" className="form-control" id="ratingFilter" value={ratingFilter} min="0" max="5" step="0.1"
                  onChange={(e) => setRatingFilter(parseFloat(e.target.value))} />
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                {filteredProducts.map(product => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card">
                      <img src={product.src} className="card-img-top" alt={product.name} />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">₦{product.price.toLocaleString()}</p>
                        <p className="card-text">Rating: {product.rating} Stars</p>
                        <button className="btn btn-primary" onClick={() => openReviewModal(product)}>Review</button>
                        <button className="btn btn-secondary" onClick={() => addToWishlist(product)}>Add to Wishlist</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        

        {/* Review Modal */}
        {showReviewModal && selectedProduct && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Review {selectedProduct.name}</h5>
                  <button type="button" className="btn-close" onClick={closeReviewModal}></button>
                </div>
                <div className="modal-body">
                  <img src={selectedProduct.src} alt={selectedProduct.name} style={{ width: '100%' }} />
                  <textarea className="form-control" placeholder="Write your review here..."></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeReviewModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={submitReview}>Submit Review</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
 
                                                       