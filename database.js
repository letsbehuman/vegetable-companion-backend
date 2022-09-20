const JAN = 'Jan';
const FEB = 'Feb';
const MAR = 'Mar';
const APR = 'Apr';
const MAY = 'May';
const JUN = 'Jun';
const JUL = 'Jul';
const AGO = 'Ago';
const SEP = 'Sep';
const OCT = 'Oct';
const NOV = 'Nov';
const DEC = 'Dec';

const database = {
  vegetables: [
    {
      id: 'r1',
      name: 'Onions',
      type: 'RootPlant',
      plantSeeds: [FEB, APR, MAY],
      harvest: [SEP, OCT, NOV, DEC],
      spacing: '1',
      germination: [9, 12],
      maturation: [40, 47],
      watchOut: 'slugs',
      image: `https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_960_720.jpg`,
      favorite: false,
    },

    {
      id: 'r2',
      name: 'Shallots',
      type: 'RootPlant',
      plantSeeds: [MAR, APR, MAY],
      harvest: [AGO, SEP, OCT],
      spacing: '3',
      germination: [7, 10],
      maturation: [55, 65],
      watchOut: 'mice',
      image:
        'https://cdn.pixabay.com/photo/2011/03/24/10/48/red-shallots-5775_960_720.jpg',
      favorite: true,
    },

    {
      id: 'r3',
      name: 'Garlic',
      type: 'RootPlant',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      image:
        'https://cdn.pixabay.com/photo/2018/05/21/21/23/garlic-3419544_960_720.jpg',
      favorite: false,
    },

    {
      id: 'r4',
      name: 'Beetroot',
      type: 'RootPlant',
      harvest: [MAR, APR, MAY, JUN, JUL, AGO, SEP, OCT, NOV, DEC, JAN, FEB],
      spacing: '',
      plantSeeds: [APR, MAY, JUN, JUL],
      harvest: [JUN, JUL, AGO, SEP],
      germination: [7, 10],
      maturation: [55, 56],
      watchOut: '',
      image:
        'https://cdn.pixabay.com/photo/2015/03/24/08/52/beetroot-687251_960_720.jpg',
      favorite: false,
    },

    {
      id: 'r5',
      name: 'Radishes',
      type: 'RootPlant',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: false,
      image:
        'https://cdn.pixabay.com/photo/2016/07/23/17/10/radish-1537141_960_720.jpg',
    },

    {
      id: 'r6',
      name: 'Turnips',
      type: 'RootPlant',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://thebikinggardener.files.wordpress.com/2021/03/turnips-harvested-copy.jpg',
    },

    {
      id: 'r7',
      name: 'Carrots',
      type: 'RootPlant',
      harvest: [JUL, AGO, SEP, OCT],
      plantSeeds: [APR, MAY, JUN, JUL],
      spacing: '',
      germination: [10, 17],
      maturation: [60, 80],
      watchOut: 'flies',

      favorite: true,

      image:
        'https://cdn.shopify.com/s/files/1/0242/9205/products/carrots_1200x1200.jpg?v=1441513539',
    },

    {
      id: 'r8',
      name: 'Potatoes',
      type: 'RootPlant',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://tse3.mm.bing.net/th?id=OIP.HM0UCAigKrJhM4zz0_BnfwHaE8&pid=Api',
    },

    {
      id: 'ly1',
      name: 'Broccoli',
      type: 'LeafyPlants',
      plantSeeds: [APR, MAY],
      harvest: [JUL, AGO, SEP],
      spacing: '',
      germination: [3, 10],
      maturation: [60, 80],
      watchOut: 'caterpillars',
      favorite: true,

      image:
        'https://www.maysgardenseed.com/wp-content/uploads/2020/10/40.-Broccoli-3.jpg',
    },

    {
      id: 'ly2',
      name: 'Lettuce',
      type: 'LeafyPlants',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://www.growjoy.com/store/pc/catalog/parris_island_cos_lettuce_plant_1892_detail.jpg',
    },

    {
      id: 'ly3',
      name: 'Cabbage',
      type: 'LeafyPlants',
      plantSeeds: [MAR, APR],
      harvest: [JUL, AGO, SEP],
      spacing: '',
      germination: [4, 10],
      maturation: [65, 95],
      watchOut: 'slugs, caterpillars',
      favorite: true,

      image:
        'http://cdn.shopify.com/s/files/1/0011/2341/8172/products/CB231-3_1024x1024.jpg?v=1523403813',
    },

    {
      id: 'ly4',
      name: 'Cauliflower',
      type: 'LeafyPlants',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://cdn.pixabay.com/photo/2014/04/07/01/46/cauliflower-318152__340.jpg',
    },

    {
      id: 'ly5',
      name: 'Spinach',
      type: 'LeafyPlants',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'http://servingjoy.com/wp-content/uploads/2014/12/spinach-in-the-bowl-on-the-dark-wood-background.jpg',
    },

    {
      id: 'le1',
      name: 'Runner beans',
      type: 'Legumes',
      plantSeeds: [MAR],
      harvest: [FEB],
      sapacinging: '',
      germination: '',
      maturation: [],
      plantSeeds: [],
      watchOut: '',
      favorite: true,

      image: 'https://cdn.dtbrownseeds.co.uk/product-images/op/z/20688z.jpg',
    },

    {
      id: 'le2',
      name: 'Lentil',
      type: 'Legumes',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://alamboga.com/wp-content/uploads/2019/02/Brown-Lentils-p.jpg',
    },

    {
      id: 'le3',
      name: 'Peas',
      type: 'Legumes',
      plantSeeds: [MAR],
      harvest: [SEP],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://www.cropsvegetables.com/cache/subproducts/180/thumb/1500_800_PEAS.jpg',
    },

    {
      id: 'le4',
      name: 'Garbanzos',
      type: 'Legumes',
      plantSeeds: [],
      harvest: [],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://www.cuidatuvida.com/wp-content/uploads/2021/09/Garbanzos-scaled-e1632943865948.jpg',
    },

    {
      id: 'fr1',
      name: 'Cucumbers',
      type: 'FruitingPlants',
      spacing: [APR, MAY],
      harvest: [JUN, JUL, AGO],
      spacing: '',
      germination: [6, 10],
      maturation: [55, 65],
      watchOut: '',
      favorite: true,

      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/96/ARS_cucumber.jpg',
    },

    {
      id: 'fr2',
      name: 'Courgettes',
      type: 'FruitingPlants',
      plantSeeds: [APR, MAY],
      harvest: [JUL, AGO, SEP, OCT],
      spacing: '',
      germination: [4, 8],
      maturation: [45, 60],
      watchOut: '',
      favorite: true,

      image:
        'https://organic-gardening.s3.amazonaws.com/p/xl/780208/780208.jpg',
    },

    {
      id: 'fr3',
      name: 'Tomatoes',
      type: 'FruitingPlants',
      plantSeeds: [MAR, APR],
      harvest: [JUL, AGO, SEP, OCT],
      spacing: '',
      germination: [6, 14],
      maturation: [55, 90],
      watchOut: '',
      favorite: true,

      image: 'https://www.yates.com.au/media/gffpp5qa/tomato-image.png',
    },

    {
      id: 'fr4',
      name: 'Pumpkins',
      type: 'FruitingPlants',
      plantSeeds: [SEP, OCT, NOV],
      harvest: [],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: true,

      image:
        'https://townsquare.media/site/706/files/2016/10/pumpkin1.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    },

    {
      id: 'fr5',
      name: 'Aubergines',
      type: 'FruitingPlants',
      plantSeeds: [JUN, JUL, AGO],
      harvest: [JUN, JUL, AGO],
      spacing: '',
      germination: [],
      maturation: [],
      watchOut: '',
      favorite: false,

      image:
        'https://cdn.pixabay.com/photo/2017/08/05/15/43/vegetable-2584412_960_720.jpg',
    },

    {
      id: 'fr6',
      name: 'Sweetcorn',
      type: 'FruitingPlants',
      plantSeeds: [APR, MAY],
      harvest: [JUL, AGO, SEP, OCT],
      spacing: '',
      germination: [6, 10],
      maturation: [60, 90],
      watchOut: '',
      favorite: true,

      image:
        'https://www.gardensonline.com.au/Uploads/Product/6812/Sweetcorn.jpg',
    },
  ],

  vegetablesType: [
    {
      idType: 1,
      name: 'RootPlant',
    },
    { idType: 2, name: 'LeafyPlants' },
    { idType: 3, name: 'Legumes' },
    { idType: 4, name: 'FruitingPlants' },
  ],

  users: [
    {
      id: 1,
      name: 'juan',
      password: '1234',
      emial: 'juan@gmail.com',
      userName: 'juanito',
      favorite: ['Aubergines', 'Sweetcorn'],
    },
    {
      id: 2,
      name: 'lola',
      password: '1235',
      emial: 'lola@gmail.com',
      userName: 'lolita',
      favorite: [],
    },
    {
      id: 3,
      name: 'ziska',
      password: '135',
      emial: 'ziska@gmail.com',
      userName: 'ziska90',
      favorite: [],
    },
  ],
  login: [
    { id: '12', hash: 'hash', email: 'juan@gmail.com' },
    { id: '14', hash: 'hash', email: 'lola@gmail.com' },
  ],
};

module.exports.database = database;
