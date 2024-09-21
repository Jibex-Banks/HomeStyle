// Import images at the top
import Ke from './img/5c11c0fa-88f0-41d0-b1de-54d769892ec9.jpg';
import livingRoom from './img/Modern Living VillaF42.jpg';
import sofa2 from './img/Thi.jpg';
import livingRoom2 from './img/01.jpg';
import livingRoom3 from './img/Describe this living room decor inspiration in one word .jpg';
import bed1 from './img/Luxury bed.jpg';
import bed2 from './img/bhg-brown-wood-midcentury-modern-bedroom.jpg';
import bed3 from './img/OIP (1).jpg';
import bed4 from './img/Modern-Minimalist-minimalist-bedroom-ideas-5.jpg';
import kitchen2 from './img/k2.jpg';
import kitchen3 from './img/k3.jpg';
import lighting1 from './img/LWP.jpg';
import lighting2 from './img/Reality Cameron Pendelleuchte Braun, 4-flammig.jpg';
import lighting3 from './img/NCL.jpg';
import other1 from './img/Boa Sulfur Yellow Pouf.jpg';
import other2 from './img/Modern Round Faux Cashmere Area Rug with Abstract Multicolor Painting Living Room Carpet.jpg';
import other3 from './img/3D wall decorations.jpg';
import other4 from './img/03-door-wardrobe-.webp';
import other5 from './img/3c496d54-afc2-40c5-a415-c75bd107d20d.jpg';
import designer1Pic from './img/designer.jpg';
import designer2Pic from './img/designer2.jpg';
import designer3Pic from './img/designer3.jpg';
import designer4Pic from './img/designer4.jpg';
import designer5Pic from './img/designer5.jpg';
import designer6Pic from './img/designer6.jpg';

// Gallery data
export const galleryData = [
  { id: 1, category: 'parlor', src: livingRoom, alt: 'Living room', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 2, category: 'parlor', src: sofa2, alt: 'Sofa 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 14, category: 'parlor', src: livingRoom2, alt: 'Living Room 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 17, category: 'parlor', src: livingRoom3, alt: 'Living Room 3', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 3, category: 'bed', src: bed1, alt: 'Bed 1', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 4, category: 'bed', src: bed2, alt: 'Bed 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 18, category: 'bed', src: bed3, alt: 'Bed 3', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 19, category: 'bed', src: bed4, alt: 'Bed 4', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 5, category: 'kitchen', src: Ke, alt: 'Kitchen 1', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 6, category: 'kitchen', src: kitchen2, alt: 'Kitchen 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 7, category: 'kitchen', src: kitchen3, alt: 'Kitchen 3', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 8, category: 'lighting', src: lighting1, alt: 'Lighting 1', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 9, category: 'lighting', src: lighting2, alt: 'Lighting 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 10, category: 'lighting', src: lighting3, alt: 'Lighting 3', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 11, category: 'others', src: other1, alt: 'Others 1', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 12, category: 'others', src: other2, alt: 'Others 2', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 13, category: 'others', src: other3, alt: 'Others 3', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 15, category: 'others', src: other4, alt: 'Others 4', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  { id: 16, category: 'others', src: other5, alt: 'Others 5', items: [{ name: 'Sofa', cost: 800 }, { name: 'Coffee Table', cost: 150 }, { name: 'Lamp', cost: 50 }] },
  // Designers


{ 
  id: 22, 
  category: 'designers', 
  profilePic: designer4Pic,
  name: 'Mia Chen', 
  bio: 'Mia Chen is an innovative interior designer known for her minimalist approach and sustainable designs. She focuses on creating serene environments that enhance well-being and promote eco-friendliness.', 
  rate: '$200/hour', 
  contact: 'miachen@design.com', 
  notableWorks: [
    'Eco-Friendly Office in San Francisco',
    'Minimalist Apartment in New York City',
    'Sustainable Home in Los Angeles'
  ]
},{ 
  id: 23, 
  category: 'designers', 
  profilePic: designer3Pic,
  name: 'Leo Martinez', 
  bio: 'Leo Martinez is celebrated for his modern aesthetics and functional designs. He combines traditional elements with contemporary styles to create spaces that are both stylish and practical.', 
  rate: '$250/hour', 
  contact: 'leomartinez@design.com', 
  notableWorks: [
    'Contemporary Loft in Chicago',
    'Modern Restaurant in Miami',
    'Luxury Villa in Palm Springs'
  ]
}, { 
  id: 24, 
  category: 'designers', 
  profilePic: designer1Pic,
  name: 'Ava Sinclair', 
  bio: 'Ava Sinclair is known for her artistic flair and ability to transform ordinary spaces into extraordinary experiences. Her designs often blend vintage and contemporary styles, creating unique and inviting environments.', 
  rate: '$220/hour', 
  contact: 'avasinclair@design.com', 
  notableWorks: [
    'Boutique Hotel in Nashville',
    'Art Gallery in Paris',
    'Luxury Apartment in London'
  ]
},
{ 
  id: 25, 
  category: 'designers', 
  profilePic: designer5Pic,
  name: 'Zoe Patel', 
  bio: 'Zoe Patel specializes in creating modern spaces that emphasize functionality and aesthetics. Her minimalist designs often incorporate natural materials, promoting a sense of calm and harmony.', 
  rate: '$210/hour', 
  contact: 'zoepatel@design.com', 
  notableWorks: [
    'Modern House in Seattle',
    'Sustainable Office in Denver',
    'Cozy Cafe in San Francisco'
  ]
},
{ 
  id: 26, 
  category: 'designers', 
  profilePic: designer2Pic, 
  name: 'Ethan Brooks', 
  bio: 'Ethan Brooks is a visionary interior designer known for his bold use of color and texture. His work emphasizes creating vibrant and dynamic spaces that inspire and energize.', 
  rate: '$230/hour', 
  contact: 'ethanbrooks@design.com', 
  notableWorks: [
    'Modern Penthouse in New York City',
    'Vibrant Cafe in Toronto',
    'Artistic Loft in Miami'
  ]
},
{ 
  id: 27, 
  category: 'designers', 
  profilePic: designer6Pic, 
  name: 'Isabella Hart', 
  bio: 'Isabella Hart is celebrated for her elegant and sophisticated designs. She has a knack for blending classic and contemporary styles to create timeless interiors.', 
  rate: '$240/hour', 
  contact: 'isabellahart@design.com', 
  notableWorks: [
    'Luxury Villa in Los Angeles',
    'Charming Boutique in San Francisco',
    'Elegant Apartment in Paris'
  ]
},




];
