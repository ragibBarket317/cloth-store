import fts1 from '../assets/fts1.jpg'
import fts2 from '../assets/fts2.jpg'
import fts3 from '../assets/fts3.jpg'
import fts4 from '../assets/fts4.jpg'
import fts5 from '../assets/fts5.jpg'
import hts1 from '../assets/hts1.jpg'
import hts2 from '../assets/hts2.jpg'
import hts3 from '../assets/hts3.jpg'
import h1 from '../assets/h1.jpg'
import h2 from '../assets/h2.jpg'
import h3 from '../assets/h3.jpg'
import j1 from '../assets/j1.png'
import j2 from '../assets/j2.jpg'
import j3 from '../assets/j3.jpg'
import j4 from '../assets/j4.jpg'
import j5 from '../assets/j5.jpg'
import jns1 from '../assets/jns1.jpg'
import jns2 from '../assets/jns2.jpg'
import jns3 from '../assets/jns3.png'
import pjb1 from '../assets/pjb1.jpg'
import pjb2 from '../assets/pjb2.jpg'
import pjb3 from '../assets/pjb3.jpg'
import pts1 from '../assets/pts1.jpg'
import pts2 from '../assets/pts2.jpg'
import pts3 from '../assets/pts3.jpg'
import sts1 from '../assets/sts1.jpg'
import sts2 from '../assets/sts2.jpg'
import sts3 from '../assets/sts3.jpg'
import tsr1 from '../assets/tsr1.jpg'
import tsr2 from '../assets/tsr2.jpg'
import tsr3 from '../assets/tsr3.jpg'
import s001 from '../assets/s001.jpg'
import s011 from '../assets/s011.jpg'
import s111 from '../assets/s111.jpg'
import s002 from '../assets/s002.jpg'
import s022 from '../assets/s022.jpg'
import s222 from '../assets/s222.jpg'
import s003 from '../assets/s003.jpg'
import s033 from '../assets/s033.jpg'
import s333 from '../assets/s333.jpg'

export {
  fts1,
  fts2,
  fts3,
  fts4,
  fts5,
  hts1,
  hts2,
  hts3,
  h1,
  h2,
  h3,
  j1,
  j2,
  j3,
  j4,
  j5,
  jns1,
  jns2,
  jns3,
  pjb1,
  pjb2,
  pjb3,
  pts1,
  pts2,
  pts3,
  s001,
  s002,
  s003,
  s011,
  s022,
  s033,
  s111,
  s222,
  s333,
  sts1,
  sts2,
  sts3,
  tsr1,
  tsr2,
  tsr3,
}

export const products = [
  {
    _id: 'aaa0001',
    name: 'Mens Top Quality Blank Full T-shirt',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [fts1, fts2, fts3],
    regularPrice: 650,
    discountPrice: null,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Full Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0002',
    name: 'Mens Blank Full T-shirt - Top Rok',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [fts2, fts2, fts2],
    regularPrice: 750,
    discountPrice: 650,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Full Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0003',
    name: 'Mens Blank Half T-shirt - Premiume',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [hts1, hts1, hts1],
    regularPrice: 550,
    discountPrice: 500,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Half Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0004',
    name: 'Mens Blank Half T-shirt - Dimond ',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [hts2, hts2, hts2],
    regularPrice: 550,
    discountPrice: 500,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Half Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0005',
    name: 'Mens Blank Half T-shirt - Stailish ',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [hts3, hts3, hts3],
    regularPrice: 450,
    discountPrice: 380,
    stock: 2,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Half Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0006',
    name: 'Mens Fashionable Hoodie ',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [h1],
    regularPrice: 1550,
    discountPrice: null,
    stock: 2,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Hoodie',
    date: Date.now(),
  },
  {
    _id: 'aaa0007',
    name: 'Mens Fashionable Hoodie - Pure',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [h2],
    regularPrice: 1890,
    discountPrice: 1850,
    stock: 2,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Hoodie',
    date: Date.now(),
  },
  {
    _id: 'aaa0008',
    name: 'Mens Fashionable Hoodie - 100%',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [h3],
    regularPrice: 1350,
    discountPrice: null,
    stock: 2,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Hoodie',
    date: Date.now(),
  },
  {
    _id: 'aaa0009',
    name: 'Mens Fashionable Jaket - Premiume',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j1],
    regularPrice: 2350,
    discountPrice: null,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
  {
    _id: 'aaa0010',
    name: 'Mens Fashionable Jaket - Premiume Quality',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j2],
    regularPrice: 2850,
    discountPrice: 2550,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
  {
    _id: 'aaa0011',
    name: 'Mens Stailist Jaket - Premiume Quality',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j3],
    regularPrice: 2250,
    discountPrice: 2150,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
  {
    _id: 'aaa0012',
    name: 'Mens Stailist Jeans - Premiume',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [jns1],
    regularPrice: 1250,
    discountPrice: 1150,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Bottomwear',
    subSubCategory: 'Jeans',
    date: Date.now(),
  },
  {
    _id: 'aaa0013',
    name: 'Mens Stailist Jeans',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [jns2],
    regularPrice: 1450,
    discountPrice: 1250,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Bottomwear',
    subSubCategory: 'Jeans',
    date: Date.now(),
  },
  {
    _id: 'aaa0014',
    name: 'Mens Traditional Panjabi',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [pjb1],
    regularPrice: 1850,
    discountPrice: 1750,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Panjabi',
    date: Date.now(),
  },
  {
    _id: 'aaa0015',
    name: 'Mens Traditional Panjabi - 02',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [pjb2, pjb2, pjb2],
    regularPrice: 1990,
    discountPrice: 1950,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Panjabi',
    date: Date.now(),
  },
  {
    _id: 'aaa0016',
    name: 'Mens Half Polo T Shirt - 01',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [pts1, pts1],
    regularPrice: 890,
    discountPrice: 750,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Polo T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0017',
    name: 'Mens Half Polo T Shirt - 02',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [pts2, pts2],
    regularPrice: 890,
    discountPrice: 750,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Polo T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0018',
    name: 'Mens Half Polo T Shirt - 03',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [pts3],
    regularPrice: 890,
    discountPrice: 750,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Polo T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0019',
    name: 'Mens Stailist Trouser - 01',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [tsr1],
    regularPrice: 950,
    discountPrice: 850,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Bottomwear',
    subSubCategory: 'Trouser',
    date: Date.now(),
  },
  {
    _id: 'aaa0020',
    name: 'Mens Stailist Trouser - 02',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [tsr2],
    regularPrice: 950,
    discountPrice: 850,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Bottomwear',
    subSubCategory: 'Trouser',
    date: Date.now(),
  },
  {
    _id: 'aaa0021',
    name: 'Mens Top Quality Full T-shirt',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [fts3, fts3],
    regularPrice: 650,
    discountPrice: null,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Full Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0022',
    name: 'Mens Full T-shirt - Top',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [fts4],
    regularPrice: 650,
    discountPrice: null,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: true,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Full Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0023',
    name: 'Mens Full T-shirt - Best Cotton',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [fts5],
    regularPrice: 650,
    discountPrice: null,
    stock: 5,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Full Sleeve T Shirt',
    date: Date.now(),
  },
  {
    _id: 'aaa0024',
    name: 'Mens Fashionable Jaket - Premiume Cotton',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j3, j3, j3],
    regularPrice: 2350,
    discountPrice: null,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
  {
    _id: 'aaa0025',
    name: 'Mens Winter Jaket - Premiume',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j4],
    regularPrice: 2350,
    discountPrice: null,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
  {
    _id: 'aaa0026',
    name: 'Mens Light Weight Jaket - Premiume',
    description:
      "Cloth store Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the finest quality polyester fabric, perfect for casual or sports wear.",
    image: [j5],
    regularPrice: 2350,
    discountPrice: null,
    stock: 3,
    spacification: [
      'Finest quality Polyester',
      'Regular fit, Crew Neck Mid-weight, 145gsm.',
      'Sharp and long-lasting sublimation print',
      'Preshrunk to minimize shrinkage',
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    reviews: [
      {
        name: 'Ragib Barket',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'Hasan',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
      {
        name: 'RB Rouf',
        description:
          'This is very high quality product. Recomand for everyone.',
      },
    ],
    bestseller: false,
    category: 'Men',
    subCategory: 'Topwear',
    subSubCategory: 'Jaket',
    date: Date.now(),
  },
]
