import { Product } from "@/types/product";
export const products: Product[] = [
      // =========================
  // BREAKFAST
  // =========================
  {
    id: "scrambled-egg",
    name: "Scrambled Egg",
    section: "Breakfast",
    description: "Fluffy creamy egg, with toast, fruit.",
    price: 650,
    image: "/images/bf1.webp",
  },
  {
    id: "spanish-omelette",
    name: "Spanish Omelette",
    section: "Breakfast",
    description:
      "Creamy egg, capsicum, tomato, onions, cheese, toast.",
    price: 690,
    image: "/images/bf2.webp",
  },
  {
    id: "mini-buns-egg",
    name: "Mini Buns Egg",
    section: "Breakfast",
    description: "Mini bun poached egg, pepperoni.",
    price: 690,
    image: "/images/bf3.webp",
  },
  {
    id: "signature-folded-egg",
    name: "Signature Folded Egg",
    section: "Breakfast",
    description:
      "Folded omelete with veggie, red sauce, white sauce, toast.",
    price: 690,
    image: "/images/bf4.webp",
  },
  {
    id: "croissant-egg-poached",
    name: "Croissant Egg Poached",
    section: "Breakfast",
    description:
      "Croissant, two poached eggs, egg yolk sauce.",
    price: 690,
    image: "/images/bf5.webp",
  },
  // =========================
  // STARTERS
  // =========================
  {
    id: "chicken-strips",
    name: "Chicken Strips",
    section: "Starters",
description: "Tender chicken strips, seasoned and fried to golden perfection.",
    price: 650,
    image: "/images/strips.webp",
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    section: "Starters",
  description: "Crispy fries loaded with flavorful toppings and savory sauces.",
    price: 750,
    image: "/images/loadedfries.webp",
  },
  {
    id: "mini-buns",
    name: "Mini Buns",
    section: "Starters",
    description: "Soft mini buns filled with a savory chicken filling and served warm.",
    price: 750,
    image: "/images/minibuns.webp",
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    section: "Starters",
    description: "Crispy golden-fried onion rings with a savory, crunchy coating.",
    price: 490,
    image: "/images/onionrings.webp",
  },
  {
    id: "honey-mustard-bbq-wings",
    name: "Honey Mustard or BBQ Wings",
    section: "Starters",
    description: "Juicy chicken wings coated in a rich, smoky BBQ sauce.",
    price: 599,
    image: "/images/bbqwings.webp",
  },
  {
    id: "chicken-poppers",
    name: "Chicken Poppers",
    section: "Starters",
    description: "Tender bite-sized pieces of chicken, coated in a crispy golden crust.",
    price: 600,
    image: "/images/poppers.webp",
  },
  {
    id: "fries-garlic-mayo",
    name: "Fries Garlic Mayo",
    section: "Starters",
    description: "Crispy fries tossed in creamy garlic mayo sauce.",
    price: 490,
    image: "/images/garlic.webp",
  },
  {
    id: "potato-cheeze-balls",
    name: "Potato Cheeze Balls",
    section: "Starters",
    description: "Golden-fried potato balls filled with melted cheese.",
    price: 600,
    image: "/images/potatoballs.webp",
  },
  {
    id: "combo-plate",
    name: "Combo Plate",
    section: "Starters",
    description: "BBQ Wings, Cheese Balls, Mozzarella Sticks.",
    price: 950,
    image: "/images/combo.webp",
  },
  // =========================
  // SALADS
  // =========================
  {
    id: "ceasar-salad",
    name: "Ceasar Salad",
    section: "Salads",
    description:
      "Fresh iceberg, cucumber, tomato, grilled chicken, ceasar dressing served with bread.",
    price: 800,
    image: "/images/csalad.webp",
  },
  {
    id: "farmhouse-peanut-salad",
    name: "Farmhouse Peanut Salad",
    section: "Salads",
    description:
      "Fresh iceberg, cucumber, peanut, carrot, french dressing, chicken.",
    price: 800,
    image: "/images/psalad.webp",
  },
  // =========================
  // MAIN COURSE
  // =========================
  {
    id: "mushroom-chicken-steak",
    name: "Mushroom Chicken Steak",
    section: "Main Course",
    description:
      "Char grilled chicken, topped with creamy mushroom sauce, served with fresh vegetables and crispy fries.",
    price: 1700,
    image: "/images/steakmashroom.webp",
  },
  {
    id: "espagnole-chicken-steak",
    name: "Espagnole Chicken Steak",
    section: "Main Course",
    description:
      "Char grilled chicken, topped with creamy peber sauce, served with fresh vegetables.",
    price: 1700,
    image: "/images/espagnole.webp",
  },
  {
    id: "tarragon-chicken-steak",
    name: "Tarragon Chicken Steak",
    section: "Main Course",
    description:
      "Char grilled chicken, topped with tarragon sauce, served with fresh vegetables presented on sizzling plate.",
    price: 1700,
    image: "/images/tarragon.webp",
  },
  {
    id: "honey-mustard-chicken",
    name: "Honey Mustard Chicken",
    section: "Main Course",
    description:
      "Two crispy fried chicken fillet with honey mustard sauce, served with mashed potato / fried rice.",
    price: 1700,
    image: "/images/honeychicken.webp",
  },
  {
    id: "white-peber-chicken",
    name: "White Peber Chicken",
    section: "Main Course",
    description:
      "Two grilled chicken fillet with peber sauce, served with mashed potato or fried rice.",
    price: 1700,
    image: "/images/whitepeber.webp",
  },
  {
    id: "napoleon-stuffed-chicken",
    name: "Napoleon Stuffed Chicken",
    section: "Main Course",
    description: "Jalapeño sauce, served with fried rice or potato.",
    price: 1700,
    image: "/images/napoleon.webp",
  },
  {
    id: "steak-beef",
    name: "Steak Beef",
    section: "Main Course",
    description:
      "Marinated beef with delicious sauce, fries and veggie, served on sizzler.",
    price: 2100,
    image: "/images/steakbeef.webp",
  },
  {
    id: "steak-strips",
    name: "Steak Strips",
    section: "Main Course",
    description:
      "Tender marinated beef strips with sauce, fries, veggie, served on sizzler.",
    price: 2100,
    image: "/images/steakstrips.webp",
  },
  // =========================
  // PIZZA
  // =========================
  {
    id: "tikka-chicken-pizza",
    name: "Tikka Chicken",
    section: "Pizza",
    description:
      "Thin crust, mozzarella cheese, chicken, sauce, onions, capsicum.",
    sizes: [
      {
        name: "Large",
        price: 2100,
      },
      {
        name: "Medium",
        price: 1700,
      },
    ],
    image: "/images/chickentikkapizza.webp",
  },
  {
    id: "fajita-pizza",
    name: "Fajita Pizza",
    section: "Pizza",
    description:
      "Thin crust, cheese, chicken, topped with iceberg, tomato, cucumber, fresh range dressing.",
    sizes: [
      {
        name: "Large",
        price: 2100,
      },
      {
        name: "Medium",
        price: 1700,
      },
    ],
    image: "/images/fajitapizza.webp",
  },
  {
    id: "malai-boti-pizza",
    name: "Malai Boti Chicken",
    section: "Pizza",
    description:
      "Soft crust, cheese, chicken malai, topped with creamy sauce.",
    sizes: [
      {
        name: "Large",
        price: 2100,
      },
      {
        name: "Medium",
        price: 1700,
      },
    ],
    image: "/images/malaibotipizza.webp",
  },
  {
    id: "crown-crust-pizza",
    name: "Crown Crust Pizza",
    section: "Pizza",
    description:
      "Thin crust filling, mozzarella cheese, chicken, sauce, capsicum.",
    sizes: [
      {
        name: "Large",
        price: 2200,
      },
      {
        name: "Medium",
        price: 1800,
      },
    ],
    image: "/images/crowncrust.webp",
  },
  // =========================
  // BURGERS
  // =========================
  {
    id: "grilled-chicken-burger",
    name: "Grilled Chicken Burger",
    section: "Burgers",
    description:
      "Grilled chicken with cheese, iceberg, tomato, cucumber. Served with fries & salad.",
    price: 849,
    image: "/images/grilledburger.webp",
  },
  {
    id: "grilled-chicken-mushroom-burger",
    name: "Grilled Chicken Mushroom Burger",
    section: "Burgers",
    description:
      "Grilled chicken, mushroom sauce, iceberg, slice of cheese, pickle. Served with fries & salad.",
    price: 849,
    image: "/images/grilledmashroom.webp",
  },
  {
    id: "crispy-crunch-burger",
    name: "Crispy Crunch Burger",
    section: "Burgers",
    description:
      "Bun with crispy chicken, iceberg, cheese, peri peri sauce. Served with fries & salad.",
    price: 899,
    image: "/images/crispycrunch.webp",
  },
  {
    id: "sizzling-beef-burger",
    name: "Sizzling Beef Burger",
    section: "Burgers",
    description: "Served with fries & salad.",
    price: 999,
    image: "/images/beefb.webp",
  },
  {
    id: "cowboy-beef-burger",
    name: "Cowboy Beef Burger",
    section: "Burgers",
    description:
      "Beef with crispy onion ring, iceberg, cucumber, cheese slice, thousand island, pickle. Served with fries & salad.",
    price: 999,
    image: "/images/cowboyb.webp",
  },
  {
    id: "smashed-beef-burger",
    name: "Smashed Beef Burger",
    section: "Burgers",
    description:
      "Double beef, pickle, cheese slices, iceberg, tomato, pickles, cucumber. Served with fries & salad.",
    price: 999,
    image: "/images/smashedbeefb.webp",
  },
  {
    id: "bravo-burger",
    name: "Bravo Burger",
    section: "Burgers",
    description:
      "Triple chicken patty, tomato, cucumber, iceberg. Served with fries & salad.",
    price: 1200,
    image: "/images/bravob.webp",
  },
  // =========================
  // SANDWICHES
  // =========================
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    section: "Sandwiches",
    description:
      "Grilled chicken, triple sandwich with cheese, iceberg, tomato, cucumber, fried egg, sauce.",
    price: 799,
    image: "/images/clubsandwich.webp",
  },
  {
    id: "grilled-sandwich",
    name: "Grilled Sandwich",
    section: "Sandwiches",
    description:
      "Grilled chicken with cheese, fresh iceberg salad, onions, tomato, cucumber served with crispy fries.",
    price: 799,
    image: "/images/grilledsandwich.webp",
  },
  {
    id: "panini-sandwich",
    name: "Panini Sandwich",
    section: "Sandwiches",
    description:
      "Grilled chicken, tomato, cucumber, iceberg salad, cheese, Chipotle sauce.",
    price: 799,
    image: "/images/paninisandwich.webp",
  },
  // =========================
  // PASTA
  // =========================
  {
    id: "mac-n-cheese-pasta",
    name: "Mac N Cheese Pasta",
    section: "Pasta",
    description:
      "Elbow macaroni with sauce, capsicum, tomato, baked with cheese.",
    price: 999,
    image: "/images/macncheese.webp",
  },
  {
    id: "italian-tomato-pasta",
    name: "Italian Tomato Pasta",
    section: "Pasta",
    description:
      "Italian red tomato sauce, capsicum, tomato, served with grilled chicken.",
    price: 999,
    image: "/images/italianpasta.webp",
  },
  {
    id: "chef-special-pasta",
    name: "Chef Special Pasta",
    section: "Pasta",
    description:
      "Authentic french béchamel sauce, with puck cheese.",
    price: 999,
    image: "/images/chefspecial.webp",
  },
  {
    id: "fried-spaghetti-pasta",
    name: "Fried Spaghetti Pasta",
    section: "Pasta",
    description:
      "Fried Spaghetti, authentic Italian tomato sauce.",
    price: 999,
    image: "/images/friedpasta.webp",
  },
  {
    id: "alfredo-pasta",
    name: "Alfredo Pasta",
    section: "Pasta",
    description:
      "Béchamel French Sauce, served with grilled chicken.",
    price: 999,
    image: "/images/alfredopasta.webp",
  },
  // =========================
  // BEVERAGES - SOFT & COLD DRINKS
  // =========================
  {
    id: "small-water",
    name: "Small Water",
    section: "Soft Drinks & Cold Drinks",
    description: "Chilled bottled water.",
    price: 70,
    image: "/images/water.webp",
  },
  {
    id: "pepsi-7up",
    name: "Pepsi / 7Up",
    section: "Soft Drinks & Cold Drinks",
    description: "Refreshing drink served chilled.",
    price: 160,
    image: "/images/pepsi.webp",
  },
  {
    id: "fresh-lime",
    name: "Fresh Lime",
    section: "Soft Drinks & Cold Drinks",
    description: "Refreshing lime drink made with freshly squeezed lime.",
    price: 220,
    image: "/images/lime.webp",
  },
  {
    id: "peach-ice-tea",
    name: "Peach Ice Tea",
    section: "Soft Drinks & Cold Drinks",
    description: "Refreshing iced tea infused with sweet peach flavor.",
    price: 450,
    image: "/images/peachtea.webp",
  },
  {
    id: "lemon-ice-tea",
    name: "Lemon Ice Tea",
    section: "Soft Drinks & Cold Drinks",
    description: "Refreshing iced tea with a bright and zesty lemon flavor.",
    price: 450,
    image: "/images/lemontea.webp",
  },
  // =========================
  // MOCKTAILS
  // =========================
  {
    id: "mint-margarita",
    name: "Mint Margarita",
    section: "Mocktails",
    description: "A refreshing blend of mint, lime, and crushed ice with a cool, zesty flavor.",
    price: 550,
    image: "/images/mintmar.webp",
  },
  {
    id: "blue-colada",
    name: "Blue Colada",
    section: "Mocktails",
    description: "A tropical blend of creamy coconut and sweet pineapple flavors with a refreshing blue twist.",
    price: 550,
    image: "/images/blue.webp",
  },
  {
    id: "pina-colada",
    name: "Pina Colada",
    section: "Mocktails",
    description: "A creamy tropical blend of pineapple and coconut flavors, served chilled.",
    price: 550,
    image: "/images/pinal.webp",
  },
  {
    id: "electric-blue-lemonade",
    name: "Electric Blue Lemonade",
    section: "Mocktails",
    description: "A vibrant blue lemonade with a refreshing citrus flavor.",
    price: 550,
    image: "/images/electric.webp",
  },
  // =========================
  // SHAKES
  // =========================
  {
    id: "oreo-shake",
    name: "Oreo Shake",
    section: "Shakes",
    description: "A creamy milkshake blended with Oreo cookies for a rich chocolatey treat.",
    price: 550,
    image: "/images/oreoshake.webp",
  },
  {
    id: "strawberry-shake",
    name: "Strawberry Shake",
    section: "Shakes",
    description: "A creamy strawberry milkshake blended with sweet, fruity strawberry flavor.",
    price: 550,
    image: "/images/strawberry.webp",
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Shake",
    section: "Shakes",
    description: "A smooth and creamy milkshake with a rich vanilla flavor.",
    price: 550,
    image: "/images/vanilla.webp",
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Shake",
    section: "Shakes",
    description: "A rich and creamy chocolate milkshake with a smooth chocolate flavor.",
    price: 550,
    image: "/images/cshake.webp",
  },
  {
    id: "kamakazy-shake",
    name: "Kamakazy Shake",
    section: "Shakes",
    description: "A rich and creamy milkshake with a bold, indulgent flavor.",
    price: 550,
    image: "/images/kshake.webp",
  },
  {
    id: "banana-dates-almond-shake",
    name: "Banana Dates with Almond Shake",
    section: "Shakes",
    description: "A creamy blend of banana, dates, and almonds for a naturally rich and indulgent shake.",
    price: 600,
    image: "/images/bdates.webp",
  },
  // =========================
  // COLD COFFEES
  // =========================
  {
    id: "traditional-cold-coffee",
    name: "Traditional Cold Coffee",
    section: "Cold Coffees",
    description: "A smooth and refreshing blend of chilled coffee with a rich, creamy finish.",
    price: 500,
    image: "/images/coldc.webp",
  },
  {
    id: "vanilla-ice-latte",
    name: "Vanilla Ice Latte",
    section: "Cold Coffees",
    description: "Smooth espresso blended with creamy milk and a delicate vanilla flavor, served chilled.",
    price: 600,
    image: "/images/vanillaiced.webp",
  },
  {
    id: "caramel-ice-latte",
    name: "Caramel Ice Latte",
    section: "Cold Coffees",
    description: "Smooth espresso blended with creamy milk and rich caramel flavor, served chilled.",
    price: 600,
    image: "/images/caramelcoffee.webp",
  },
  {
    id: "mocha-ice-latte",
    name: "Mocha Ice Latte",
    section: "Cold Coffees",
    description: "Smooth espresso blended with creamy milk and rich chocolate flavor, served chilled.",
    price: 600,
    image: "/images/mocha.webp",
  },
  // =========================
  // HOT COFFEES & SPECIALS
  // =========================
  {
    id: "espresso-shots",
    name: "Espresso Shots",
    section: "Hot Coffees & Specials",
    description: "Rich and concentrated coffee shots with a bold, intense flavor.",
    sizes: [
      {
        name: "Single",
        price: 250,
      },
      {
        name: "Double",
        price: 350,
      },
    ],
    image: "/images/espresso.webp",
  },
  {
    id: "americano",
    name: "Americano",
    section: "Hot Coffees & Specials",
    description: "A smooth blend of rich espresso and hot water, with a clean and balanced coffee flavor.",
    price: 550,
    image: "/images/americano.webp",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    section: "Hot Coffees & Specials",
    description: "A rich espresso topped with steamed milk and a smooth layer of creamy foam.",
    price: 550,
    image: "/images/coffee.webp",
  },
  {
    id: "latte",
    name: "Latte",
    section: "Hot Coffees & Specials",
    description: "A smooth and creamy blend of rich espresso and steamed milk.",
    price: 550,
    image: "/images/latte.webp",
  },
  {
    id: "flavoured-latte",
    name: "Flavoured Latte",
    section: "Hot Coffees & Specials",
    description: "Smooth espresso blended with creamy milk and your choice of rich flavored syrup.",
    price: 600,
    image: "/images/clatte.webp",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    section: "Hot Coffees & Specials",
    description: "Rich and creamy chocolate drink with a smooth, indulgent cocoa flavor.",
    price: 550,
    image: "/images/hotchoco.webp",
  },
  // =========================
  // HOT TEA
  // =========================
  {
    id: "green-tea",
    name: "Green Tea",
    section: "Hot Tea",
    description: "Light and refreshing hot green tea.",
    price: 150,
    image: "/images/greentea.webp",
  },
  {
    id: "turkish-tea",
    name: "Turkish Tea",
    section: "Hot Tea",
    description: "Traditional Turkish-style black tea served hot.",
    price: 250,
    image: "/images/turkishtea.webp",
  },
  {
    id: "karak-chai",
    name: "Karak Chai",
    section: "Hot Tea",
    description: "Rich and aromatic spiced milk tea.",
    price: 250,
    image: "/images/karakchai.webp",
  },
    // =========================
  // DESSERTS
  // =========================
  {
    id: "banana-split",
    name: "Banana Split",
    section: "Desserts",
    description:
      "Banana, with ice cream, chocolate sauce, strawberry sauce.",
    price: 750,
    image: "/images/bananasplit.webp",
  },
  {
    id: "flower-ice-cream",
    name: "Flower Ice Cream",
    section: "Desserts",
    description: "Special flower pot Ice cream.",
    price: 650,
    image: "/images/flowericecream.webp",
  },
  {
    id: "cookie-ice-cream",
    name: "Cookie Ice Cream",
    section: "Desserts",
    description:
      "Vanilla ice cream, biscuit crumble layer, chocolate sauce.",
    price: 650,
    image: "/images/cookieicecream.webp",
  },
  {
    id: "fudge-sizzling-brownie",
    name: "Fudge Sizzling Brownie",
    section: "Desserts",
    description: "Served with ice cream and fudge sauce.",
    price: 650,
    image: "/images/brownie.webp",
  },
  {
    id: "walnut-bite-size-brownie",
    name: "Walnut Bite Size Brownie",
    section: "Desserts",
    description: "Bite-sized fudgy brownies topped with crunchy walnuts.",
    price: 600,
    image: "/images/walnutb.webp",
  },
  {
    id: "choco-cake",
    name: "Choco Cake",
    section: "Desserts",
    description: "Delicious chocolate cake with vanilla ice cream.",
    price: 650,
    image: "/images/chococake.webp",
  },
  {
    id: "fruit-with-ice-cream",
    name: "Fruit With Ice Cream",
    section: "Desserts",
    description: "Fresh seasonal fruits served with creamy vanilla ice cream.",
    price: 600,
    image: "/images/fruitcake.webp",
  },
  {
    id: "classic-ice-cream",
    name: "Classic Ice Cream",
    section: "Desserts",
    description: "Strawberry, Chocolate, or Vanilla.",
    price: 600,
    image: "/images/icecream.webp",
  },
  {
    id: "mango-shot-ice-cream",
    name: "Mango Shot Ice Cream",
    section: "Desserts",
    description:
      "Fresh chilled mango shot, topped with delicious vanilla ice cream.",
    price: 650,
    image: "/images/mangoshot.webp",
  },
  {
    id: "peach-shot-ice-cream",
    name: "Peach Shot Ice Cream",
    section: "Desserts",
    description:
      "Soft topping with chilled fresh peach, vanilla ice cream bottom.",
    price: 650,
    image: "/images/peachshot.webp",
  },
// =========================
// CAKES
// =========================
{
  id: "caramel-cake",
  name: "Caramel Cake",
  section: "Cakes",
  description: "With Ice Cream.",
  price: 650,
  image: "/images/cake1.webp",
},
{
  id: "red-velvet-cake",
  name: "Red-Velvet Cake",
  section: "Cakes",
  description: "With Ice Cream.",
  price: 650,
  image: "/images/cake2.webp",
},
{
  id: "lemon-cake",
  name: "Lemon Cake",
  section: "Cakes",
  description: "With Ice Cream.",
  price: 650,
  image: "/images/cake3.webp",
},
];