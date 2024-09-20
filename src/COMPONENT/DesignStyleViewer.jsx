import React, { useState } from 'react';
import styles from './DesignStyleViewer.module.css';
import ML1 from './img/New folder/bdd46820e74d6dff65373f19b4e305d7.jpg'
import Mm1 from './img/New folder/Modern Creative Minimalist Living Room Ideas 2020.jpg'
import Mr1 from './img/New folder/Sophisticated-rustic-living-room-decor-with-modern-lighting.jpg'
import Me1 from './img/New folder/Elegant1.jpg'
import Bed1 from './img/57aab538dc4f600c477f0ede798d7221.jpg'
import K1 from './img/5c11c0fa-88f0-41d0-b1de-54d769892ec9.jpg'
import B1 from './img/a05c1b30-77df-48d0-8d20-e5bf48b0e722.jpg'
import Km1 from './img/New folder/KM1.gif'

const designStyles = [
  {
    id: 1,
    category: 'Living Room',
    trend: 'Minimalist',
    title: 'Modern Living Room Elegance',
    description: 'The image showcases a well-lit, contemporary living room with minimalist decor, featuring a gray sofa, wooden round coffee table, and decorative plants.',
    image: Mm1,
    products: ['Grey Sofa', 'Throw Blanket and Cushion', 'Two Wooden Side Tables', 'Round Wooden Coffee Table','Small Plant on Coffee Table','Two Framed Wall Art Pieces','Pouf','Potted Plant','Light-Colored Rug','Curtains',],
    cost: 1750,
    reviews: [
      { rating: 4, text: 'Great minimalist design, but the colors are a bit dull.' },
      { rating: 5, text: 'Perfect blend of modern and cozy!' },
    ]
  },
  {
    id: 2,
    category: 'Living Room',
    trend: 'Contemporary',
    title: 'Modern Luxury Living Room with Cozy Fireplace',
    description: 'A sleek modern living room featuring a cozy fireplace, vibrant accents, and expansive glass doors that seamlessly blend indoor elegance with outdoor views. The neutral tones and bold decor create a stylish yet inviting atmosphere.',
    image: ML1,
    products: ['Sectional Sofa with Cushions', 'Ottomans','Decorative Pillow', 'Bookshelves', 'Decorative Books and Items', 'Modern Fireplace with Marble Surround','Wall-mounted TV','Sliding Glass Doors', 'Coffee Table',],
    cost: 15000,
    reviews: [
      { rating: 5, text: 'Absolutely love the fireplace and the natural lighting!' },
      { rating: 4, text: 'Beautiful, but the decor feels a bit too bold for my taste.' },
    ]
  },
  {
    id: 3,
    category: 'Living Room',
    trend: 'Rustic',
    title: 'Modern Rustic Living Room',
    description: 'A modern rustic living room design featuring natural materials and earthy tones that create an inviting atmosphere.',
    image: Mr1,
    products: ['Stone Fireplace', 'Circular Mirror','Ceiling Fan', 'Two Sofas', 'Coffee Table', 'Two Armchairs','Wooden Flooring','Additional Chair and Small Table', 'Decorative Items (including wall art and tabletop decor)',],
    cost: 20000,
    reviews: [
      { rating: 5, text: 'Love the rustic charm! Feels warm and inviting.' },
      { rating: 3, text: 'Nice design, but the cost is a bit high.' },
    ]
  },
  {
    id: 4,
    category: 'Living Room',
    trend: 'Elegant',
    title: 'Elegant Living Room Decor',
    description: ' A well-lit living room featuring a neutral color palette with a three-seater sofa, two matching armchairs, a wooden coffee table, two table lamps, and an abstract triptych wall art.',
    image: Me1,
    products: ['Three-seater sofa with cushions', 'Two armchairs','Wooden coffee table', 'Two table lamps', 'Abstract triptych wall art', 'Area rug',],
    cost: 10000,
    reviews: [
      { rating: 5, text: 'This is the definition of elegance! I love everything about it.' },
      { rating: 4, text: 'Looks great, but I think it could use a pop of color.' },
    ]
  },
  {
    id: 5,
    category: 'Kitchen',
    trend: 'Contemporary',
    title: 'Contemporary Kitchen Design',
    description: 'A sleek and stylish kitchen featuring gray cabinetry, white countertops, a central island with a black base and striped design, and stainless steel appliances.',
    image: K1,
    products: ['Gray upper and lower cabinets', 'Stainless steel gas stove top','Stainless steel sink with faucet', 'Recessed ceiling lights'],
    cost: 28400,
    reviews: [
      { rating: 4, text: 'The kitchen is gorgeous, but I think it lacks some warmth.' },
      { rating: 5, text: 'Absolutely stunning and functional!' },
    ]
  },
  {
    id: 8,
    category: 'Kitchen',
    trend: 'Minimalist ',
    title: 'Modern Minimalist Kitchen Interior',
    description: 'This image captures a sleek and contemporary kitchen design that emphasizes clean lines and natural materials. The use of wood and marble creates a warm yet sophisticated space that is both functional and aesthetically pleasing.',
    image: Km1,
    products: ['Light wood cabinetry', 'White countertops','Marble backsplash', 'Kitchen island with built-in sink','Three wooden stools','Black pendant light'],
    cost: 30000,
    reviews: [
      { rating: 4.3, text: 'The kitchen is gorgeous, but I think it lacks some warmth.' },
      { rating: 5, text: 'Absolutely stunning and functional!' },
    ]
  },
  {
    id: 9,
    category: 'Kitchen',
    trend: 'Elegant ',
    title: 'Modern Kitchen Interior',
    description: 'The image showcases a spacious kitchen with a contemporary design featuring white cabinetry, stainless steel appliances, and an expansive island with seating.',
    image: Km1,
    products: ['White cabinetry', 'Stainless steel refrigerator','Stainless steel oven range', 'Stainless steel dishwasher','Marble countertops','Kitchen island with seating area','Pendant lighting over the island','Recessed ceiling lights','Chandelier over the dining area'],
    cost: 50000,
    reviews: [
      { rating: 4.3, text: 'The kitchen is gorgeous, but I think it lacks some warmth.' },
      { rating: 5, text: 'Absolutely stunning and functional!' },
    ]
  },
  {
    id: 6,
    category: 'Bedroom',
    trend: 'Contemporary',
    title: 'Contemporary Bedroom Design',
    description: ' A sleek and stylish bedroom featuring a gray and white color scheme, complemented by gold accents.',
    image: Bed1,
    products: ['Double bed with gray bedding', 'Two white bedside tables','Wall-mounted lamps with circular shades','Large area rug with a textured pattern','Sheer curtains and opaque drapes', 'Gold-colored decorative lines on the wall behind the bed'],
    cost: 28400,
    reviews: [
      { rating: 5, text: 'Love the luxurious feel of this bedroom!' },
      { rating: 4, text: 'Beautiful, but I would have preferred a more colorful design.' },
    ]
  },
  {
    id: 7,
    category: 'Bathroom',
    trend: 'Contemporary',
    title: 'Modern Marble Bathroom Interior',
    description: 'A contemporary bathroom design featuring white marble walls and flooring. A glass shower enclosure with black trim, a wall-mounted sink, a toilet, and two grey bath mats are visible. The space is illuminated by LED mirrors creating a bright and elegant atmosphere.',
    image: B1,
    products: ['Glass shower enclosure with black trim', 'Wall-mounted sink','Toilet','Two grey bath mats','LED mirror lighting'],
    cost: 7400,
    reviews: [
      { rating: 5, text: 'A bathroom that feels like a spa!' },
      { rating: 4, text: 'Love the design, but it could use more storage space.' },
    ]
  },
];


const categories = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom'];
const trends = ['Contemporary', 'Elegant', 'Rustic', 'Minimalist'];

const DesignStyleViewer = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedTrend, setSelectedTrend] = useState(trends[0]);
  const [search, setSearch] = useState('');

  const filteredDesigns = designStyles.filter(
    design => design.category === selectedCategory && design.trend === selectedTrend
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Design Style Viewer</h1>
      
      {/* Category Tabs */}
      <div className={styles.tabList}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.tab} ${selectedCategory === category ? styles.activeTab : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Trend Filters */}
      <div className={styles.trendList}>
        {trends.map(trend => (
          <span
            key={trend}
            className={`${styles.trend} ${selectedTrend === trend ? styles.activeTrend : ''}`}
            onClick={() => setSelectedTrend(trend)}
          >
            {trend}
          </span>
        ))}
      </div>

      {/* <form className="mb-4 w-75 d-flex justify-content-center mx-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form> */}

      {/* Display Designs */}
      <div className={styles.designGrid}>
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map(design => (
            <div key={design.id} className={styles.card}>
              <img src={design.image} alt={design.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{design.title}</h2>
                <p className={styles.cardDescription}>{design.description}</p>
                
                {/* Products Used */}
                <h4>Products Used:</h4>
                <ul className={styles.productList}>
                  {design.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
                
                {/* Estimated Cost */}
                <p className={styles.cost}>Estimated Cost: ${design.cost.toLocaleString()}</p>

                {/* Reviews Section */}
                <h4>User Reviews and Ratings</h4>
                <div className={styles.reviews}>
                  {design.reviews.map((review, index) => (
                    <div key={index} className={styles.review}>
                      <p><strong>Rating:</strong> {review.rating}/5</p>
                      <p>{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No designs found for the selected category and trend.</p>
        )}
      </div>
    </div>
  );
};

export default DesignStyleViewer;