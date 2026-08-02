import { useState, useEffect } from "react";
import "./App.css";

/* =========================================================
   FOOD CATEGORIES
========================================================= */

const categories = [
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Biryani",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "South Indian",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "North Indian",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chicken",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Healthy Food",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sandwich",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80",
  },
];

/* =========================================================
   RESTAURANTS
========================================================= */

const restaurants = [
  {
    name: "Pizza Palace",
    category: "Pizza",
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.5,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "La Pino's Pizza",
    category: "Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.4,
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Domino's Style Pizza",
    category: "Pizza",
    cuisine: "Pizza, Fast Food",
    rating: 4.3,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Burger House",
    category: "Burger",
    cuisine: "Burgers, Fast Food",
    rating: 4.3,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Smash Burger Co.",
    category: "Burger",
    cuisine: "Smash Burgers, Fries",
    rating: 4.6,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Burger Nation",
    category: "Burger",
    cuisine: "Burgers, Shakes, Fast Food",
    rating: 4.4,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Royal Biryani",
    category: "Biryani",
    cuisine: "Biryani, Indian",
    rating: 4.6,
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hyderabadi Biryani House",
    category: "Biryani",
    cuisine: "Hyderabadi Biryani, Indian",
    rating: 4.7,
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Biryani Express",
    category: "Biryani",
    cuisine: "Biryani, Mughlai",
    rating: 4.5,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Noodle Corner",
    category: "Noodles",
    cuisine: "Noodles, Chinese",
    rating: 4.4,
    time: "28 mins",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wok Express",
    category: "Noodles",
    cuisine: "Chinese, Noodles, Wok",
    rating: 4.5,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dosa Corner",
    category: "South Indian",
    cuisine: "Dosa, Idli, South Indian",
    rating: 4.5,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Madurai Mess",
    category: "South Indian",
    cuisine: "South Indian Meals, Parotta",
    rating: 4.6,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Idli Express",
    category: "South Indian",
    cuisine: "Idli, Dosa, Vada",
    rating: 4.4,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Punjabi Rasoi",
    category: "North Indian",
    cuisine: "North Indian, Punjabi",
    rating: 4.4,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Spice Kitchen",
    category: "North Indian",
    cuisine: "North Indian, Paneer, Naan",
    rating: 4.5,
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chicken Hub",
    category: "Chicken",
    cuisine: "Chicken, Grill, Fast Food",
    rating: 4.5,
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Grill House",
    category: "Chicken",
    cuisine: "Grilled Chicken, BBQ",
    rating: 4.6,
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Green Bowl",
    category: "Healthy Food",
    cuisine: "Healthy Food, Salads, Bowls",
    rating: 4.6,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fresh & Fit",
    category: "Healthy Food",
    cuisine: "Salads, Fruit Bowls, Healthy",
    rating: 4.7,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cake Studio",
    category: "Cake",
    cuisine: "Cakes, Desserts, Bakery",
    rating: 4.7,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sweet Treats",
    category: "Cake",
    cuisine: "Desserts, Donuts, Cupcakes",
    rating: 4.6,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Juice Junction",
    category: "Drinks",
    cuisine: "Juices, Shakes, Beverages",
    rating: 4.4,
    time: "15 mins",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cool Drinks Cafe",
    category: "Drinks",
    cuisine: "Milkshakes, Cold Coffee, Drinks",
    rating: 4.5,
    time: "15 mins",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fast Food Factory",
    category: "Fast Food",
    cuisine: "Fries, Nuggets, Fast Food",
    rating: 4.3,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Snack Station",
    category: "Fast Food",
    cuisine: "Samosa, Snacks, Fast Food",
    rating: 4.4,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sandwich Hub",
    category: "Sandwich",
    cuisine: "Sandwiches, Toast, Snacks",
    rating: 4.4,
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fresh Sandwich Cafe",
    category: "Sandwich",
    cuisine: "Grilled Sandwich, Club Sandwich",
    rating: 4.5,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chennai Chinese Kitchen",
    category: "Noodles",
    cuisine: "Chinese, Noodles, Rice",
    rating: 4.5,
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
  },
];

/* =========================================================
   RESTAURANT MENUS
========================================================= */

const restaurantMenus = {
  "Pizza Palace": [
    {
      name: "Margherita Pizza",
      price: 199,
      type: "Veg",
      description: "Classic pizza with tomato, mozzarella and fresh basil.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Farmhouse Pizza",
      price: 249,
      type: "Veg",
      description: "Loaded with fresh vegetables, mushrooms and cheese.",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Pepperoni Pizza",
      price: 299,
      type: "Non-Veg",
      description: "Cheesy pizza topped with chicken pepperoni.",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c8c8d0?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "La Pino's Pizza": [
    {
      name: "Pepperoni Pizza",
      price: 299,
      type: "Non-Veg",
      description: "Loaded with cheesy goodness and chicken pepperoni.",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Veggie Supreme Pizza",
      price: 269,
      type: "Veg",
      description: "Fresh vegetables, olives, capsicum and melted cheese.",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cheese Pizza",
      price: 219,
      type: "Veg",
      description: "Classic cheesy pizza with a golden crust.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Domino's Style Pizza": [
    {
      name: "Cheese Burst Pizza",
      price: 299,
      type: "Veg",
      description: "Cheesy pizza with a delicious cheese burst crust.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Supreme Pizza",
      price: 349,
      type: "Non-Veg",
      description: "Loaded pizza with chicken and fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Burger House": [
    {
      name: "Classic Chicken Burger",
      price: 129,
      type: "Non-Veg",
      description: "Juicy chicken patty with lettuce and creamy sauce.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Double Cheese Burger",
      price: 179,
      type: "Non-Veg",
      description: "Two delicious patties with double cheese.",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Veggie Burger",
      price: 109,
      type: "Veg",
      description: "Crispy vegetable patty with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Smash Burger Co.": [
    {
      name: "Smash Beef Burger",
      price: 199,
      type: "Non-Veg",
      description: "Juicy smashed patty with cheese and signature sauce.",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Double Patty Burger",
      price: 249,
      type: "Non-Veg",
      description: "Double smashed patties with melted cheese.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Crispy Chicken Burger",
      price: 179,
      type: "Non-Veg",
      description: "Crispy fried chicken with lettuce and sauce.",
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Burger Nation": [
    {
      name: "Classic Veg Burger",
      price: 119,
      type: "Veg",
      description: "Crispy veggie patty with fresh lettuce and sauce.",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Cheese Burger",
      price: 169,
      type: "Non-Veg",
      description: "Chicken patty topped with melted cheese.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Royal Biryani": [
    {
      name: "Chicken Biryani",
      price: 180,
      type: "Non-Veg",
      description: "Aromatic basmati rice cooked with tender chicken.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mutton Biryani",
      price: 250,
      type: "Non-Veg",
      description: "Rich and flavorful biryani with tender mutton.",
      image:
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Veg Biryani",
      price: 140,
      type: "Veg",
      description: "Fragrant rice cooked with fresh vegetables and spices.",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Hyderabadi Biryani House": [
    {
      name: "Hyderabadi Chicken Biryani",
      price: 220,
      type: "Non-Veg",
      description: "Traditional Hyderabadi dum biryani with tender chicken.",
      image:
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mutton Dum Biryani",
      price: 280,
      type: "Non-Veg",
      description: "Slow-cooked dum biryani with flavorful mutton.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Paneer Biryani",
      price: 180,
      type: "Veg",
      description: "Aromatic basmati rice with soft paneer and spices.",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Biryani Express": [
    {
      name: "Chicken Dum Biryani",
      price: 199,
      type: "Non-Veg",
      description: "Flavorful dum biryani prepared with aromatic spices.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Egg Biryani",
      price: 160,
      type: "Non-Veg",
      description: "Aromatic biryani served with boiled eggs.",
      image:
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Noodle Corner": [
    {
      name: "Veg Hakka Noodles",
      price: 149,
      type: "Veg",
      description: "Stir-fried noodles with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Noodles",
      price: 189,
      type: "Non-Veg",
      description: "Delicious noodles tossed with juicy chicken.",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Schezwan Noodles",
      price: 169,
      type: "Veg",
      description: "Spicy Schezwan noodles with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Wok Express": [
    {
      name: "Schezwan Chicken Noodles",
      price: 199,
      type: "Non-Veg",
      description: "Spicy noodles tossed with chicken and Schezwan sauce.",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Vegetable Chow Mein",
      price: 159,
      type: "Veg",
      description: "Classic Chinese-style noodles with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Dosa Corner": [
    {
      name: "Masala Dosa",
      price: 80,
      type: "Veg",
      description: "Crispy dosa filled with flavorful potato masala.",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Idli Sambar",
      price: 60,
      type: "Veg",
      description: "Soft steamed idlis served with hot sambar.",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ghee Roast Dosa",
      price: 120,
      type: "Veg",
      description: "Crispy dosa roasted with aromatic ghee.",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Paneer Dosa",
      price: 120,
      type: "Veg",
      description: "Crispy dosa filled with paneer.",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
    },
  ],

  "Madurai Mess": [
    {
      name: "South Indian Meals",
      price: 150,
      type: "Veg",
      description: "Traditional South Indian meal with rice and side dishes.",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Parotta with Chicken Curry",
      price: 180,
      type: "Non-Veg",
      description: "Flaky parotta served with spicy chicken curry.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Curd Rice",
      price: 70,
      type: "Veg",
      description: "Creamy curd rice topped with traditional seasoning.",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Idli Express": [
    {
      name: "Idli Vada Combo",
      price: 80,
      type: "Veg",
      description: "Soft idlis and crispy vada served with sambar.",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Plain Dosa",
      price: 70,
      type: "Veg",
      description: "Crispy golden dosa served with chutney.",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Punjabi Rasoi": [
    {
      name: "Butter Chicken",
      price: 250,
      type: "Non-Veg",
      description: "Creamy tomato-based curry with tender chicken.",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Paneer Butter Masala",
      price: 220,
      type: "Veg",
      description: "Soft paneer cooked in rich buttery tomato gravy.",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Garlic Naan",
      price: 70,
      type: "Veg",
      description: "Soft naan topped with garlic and butter.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Spice Kitchen": [
    {
      name: "Paneer Tikka",
      price: 180,
      type: "Veg",
      description: "Grilled paneer cubes marinated with Indian spices.",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dal Makhani",
      price: 160,
      type: "Veg",
      description: "Creamy black lentils cooked with butter and spices.",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Butter Naan",
      price: 60,
      type: "Veg",
      description: "Soft Indian flatbread brushed with butter.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Chicken Hub": [
    {
      name: "Grilled Chicken",
      price: 250,
      type: "Non-Veg",
      description: "Juicy chicken grilled with aromatic herbs and spices.",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken 65",
      price: 180,
      type: "Non-Veg",
      description: "Crispy spicy fried chicken bites.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Wings",
      price: 220,
      type: "Non-Veg",
      description: "Crispy chicken wings tossed in flavorful sauce.",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Grill House": [
    {
      name: "BBQ Chicken",
      price: 280,
      type: "Non-Veg",
      description: "Tender chicken coated in smoky BBQ sauce.",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Grilled Chicken Platter",
      price: 350,
      type: "Non-Veg",
      description: "A delicious platter of freshly grilled chicken.",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Green Bowl": [
    {
      name: "Fresh Garden Salad",
      price: 150,
      type: "Veg",
      description: "Fresh vegetables served with a healthy dressing.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Avocado Bowl",
      price: 220,
      type: "Veg",
      description: "Healthy avocado bowl with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Fresh & Fit": [
    {
      name: "Fruit Bowl",
      price: 120,
      type: "Veg",
      description: "Fresh seasonal fruits served in a healthy bowl.",
      image:
        "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Protein Salad",
      price: 220,
      type: "Veg",
      description: "Fresh salad packed with nutritious ingredients.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Cake Studio": [
    {
      name: "Chocolate Truffle Cake",
      price: 450,
      type: "Veg",
      description: "Rich chocolate cake layered with creamy chocolate truffle.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Red Velvet Cake",
      price: 500,
      type: "Veg",
      description: "Soft red velvet cake with creamy frosting.",
      image:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Chennai Chinese Kitchen": [
    {
      name: "Veg Noodles",
      price: 130,
      type: "Veg",
      description: "Stir-fried noodles with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Chicken Noodles",
      price: 170,
      type: "Non-Veg",
      description: "Tasty noodles with chicken and vegetables.",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Fried Rice",
      price: 140,
      type: "Veg",
      description: "Flavorful Chinese-style fried rice.",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80",
    },
  ],

  "Sweet Treats": [
    {
      name: "Chocolate Cake",
      price: 120,
      type: "Veg",
      description: "Soft and delicious chocolate cake.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Gulab Jamun",
      price: 80,
      type: "Veg",
      description: "Soft sweet dumplings soaked in syrup.",
      image:
        "https://images.unsplash.com/photo-1666190094760-7e2e8d4d6d8f?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Ice Cream",
      price: 100,
      type: "Veg",
      description: "Creamy and refreshing ice cream.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Chocolate Donut",
      price: 80,
      type: "Veg",
      description: "Soft donut covered with rich chocolate glaze.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chocolate Brownie",
      price: 120,
      type: "Veg",
      description: "Rich and fudgy chocolate brownie.",
      image:
        "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Juice Junction": [
    {
      name: "Fresh Orange Juice",
      price: 90,
      type: "Veg",
      description: "Freshly squeezed orange juice.",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mango Juice",
      price: 100,
      type: "Veg",
      description: "Refreshing mango juice made from ripe mangoes.",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Cool Drinks Cafe": [
    {
      name: "Chocolate Milkshake",
      price: 150,
      type: "Veg",
      description: "Creamy chocolate milkshake topped with chocolate.",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cold Coffee",
      price: 130,
      type: "Veg",
      description: "Chilled creamy coffee with a rich coffee flavor.",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Fast Food Factory": [
    {
      name: "French Fries",
      price: 100,
      type: "Veg",
      description: "Crispy golden fries seasoned with salt.",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Nuggets",
      price: 150,
      type: "Non-Veg",
      description: "Crispy golden chicken nuggets.",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Snack Station": [
    {
      name: "Samosa",
      price: 40,
      type: "Veg",
      description: "Crispy pastry filled with spicy potato masala.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Popcorn",
      price: 160,
      type: "Non-Veg",
      description: "Bite-sized crispy chicken pieces.",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Sandwich Hub": [
    {
      name: "Grilled Cheese Sandwich",
      price: 120,
      type: "Veg",
      description: "Grilled bread filled with melted cheese.",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Sandwich",
      price: 160,
      type: "Non-Veg",
      description: "Tender chicken with fresh vegetables and sauce.",
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    },
  ],

  "Fresh Sandwich Cafe": [
    {
      name: "Veg Club Sandwich",
      price: 140,
      type: "Veg",
      description: "Triple-layer sandwich packed with fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1567234669003-dce7a7a88868?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Club Sandwich",
      price: 180,
      type: "Non-Veg",
      description: "Triple-layer sandwich with chicken and fresh vegetables.",
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

/* =========================================================
   APP
========================================================= */

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const [foodSearch, setFoodSearch] = useState("");
  const [foodFilter, setFoodFilter] = useState("All");

  const [cart, setCart] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderStatus, setOrderStatus] = useState("Order Placed");

  const [showSaveFood, setShowSaveFood] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [surplusFoods, setSurplusFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [showAccount, setShowAccount] = useState(false);

  /* LOAD SAVED ACCOUNT */
  useEffect(() => {
    const savedUser = localStorage.getItem("smiggyUser");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error loading saved account:", error);
        localStorage.removeItem("smiggyUser");
      }
    }
  }, []);

  /* FETCH SURPLUS FOOD */
  useEffect(() => {
    fetch("http://localhost:5000/api/surplus-foods")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch surplus food");
        return response.json();
      })
      .then((data) => setSurplusFoods(data))
      .catch((error) => console.error("Error fetching surplus food:", error));
  }, []);

  /* FILTER RESTAURANTS */
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "" || restaurant.category === selectedCategory;
    const search = searchTerm.toLowerCase().trim();
    const matchesSearch =
      restaurant.name.toLowerCase().includes(search) ||
      restaurant.category.toLowerCase().includes(search) ||
      restaurant.cuisine.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  /* CART FUNCTIONS */
  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) =>
        item.name === food.name && item.restaurant === food.restaurant
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === food.name && item.restaurant === food.restaurant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
    alert(`${food.name} added to cart! 🛒`);
  };

  const increaseQuantity = (name, restaurant) => {
    setCart(
      cart.map((item) =>
        item.name === name && item.restaurant === restaurant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (name, restaurant) => {
    setCart(
      cart
        .map((item) =>
          item.name === name && item.restaurant === restaurant
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name, restaurant) => {
    setCart(
      cart.filter(
        (item) => !(item.name === name && item.restaurant === restaurant)
      )
    );
  };

  /* BILL CALCULATION */
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = cart.length > 0 ? 30 : 0;
  const finalTotal = subtotal + deliveryFee;

  /* ORDER FUNCTIONS */
  const placeOrder = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      items: cart,
      subtotal,
      deliveryFee,
      total: finalTotal,
      createdAt: new Date().toISOString(),
    };

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log("Order saved on backend:", data))
      .catch((err) => console.error("Error saving order on backend:", err));

    setOrderPlaced(true);
    setOrderStatus("Order Placed");
    setShowCheckout(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const updateOrderStatus = () => {
    const statuses = [
      "Order Placed",
      "Restaurant Accepted",
      "Preparing Your Food",
      "Ready for Pickup",
      "Out for Delivery",
      "Delivered",
    ];
    const currentIndex = statuses.indexOf(orderStatus);
    if (currentIndex < statuses.length - 1) {
      setOrderStatus(statuses[currentIndex + 1]);
    }
  };

  /* NAVIGATION HANDLERS */
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchTerm("");
    setSelectedRestaurant(null);
    setCurrentPage("restaurants");
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const showAllRestaurants = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setSelectedRestaurant(null);
    setCurrentPage("restaurants");
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  /* AUTHENTICATION HANDLERS */
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    localStorage.setItem("smiggyUser", JSON.stringify(newUser));
    setUser(newUser);
    setShowSignup(false);
    alert(`Welcome to Smiggy, ${newUser.name}! 🎉`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const password = form.password.value;
    const savedUser = localStorage.getItem("smiggyUser");

    if (!savedUser) {
      alert("No account found. Please create an account first.");
      return;
    }
    const storedUser = JSON.parse(savedUser);
    if (storedUser.phone === phone && storedUser.password === password) {
      setUser(storedUser);
      setShowLogin(false);
      alert(`Welcome back, ${storedUser.name}! 🎉`);
    } else {
      alert("Invalid phone number or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("smiggyUser");
    setUser(null);
    setShowAccount(false);
    alert("You have been logged out successfully.");
  };

  const handleAddSurplusFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const newFood = {
      restaurant: form.restaurant.value,
      name: form.foodName.value,
      originalPrice: Number(form.originalPrice.value),
      price: Number(form.discountedPrice.value),
      portions: Number(form.portions.value),
    };

    fetch("http://localhost:5000/api/surplus-foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to save surplus food");
        return response.json();
      })
      .then((data) => {
        setSurplusFoods((prev) => [...prev, data.food || newFood]);
        form.reset();
        alert("Surplus food added successfully & saved to live backend server! 🎉");
      })
      .catch((error) => {
        console.error("Backend error, saving to local state:", error);
        setSurplusFoods((prev) => [...prev, newFood]);
        form.reset();
        alert("Surplus food added to local state! (Backend server notice)");
      });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div
          className="logo-container"
          onClick={() => {
            setSelectedRestaurant(null);
            setCurrentPage("home");
            setSearchTerm("");
            setSelectedCategory("");
            setShowDashboard(false);
            setShowAccount(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ cursor: "pointer" }}
        >
          <img src="/swiggy-logo.png" alt="Smiggy Logo" className="logo-image" />
          <span className="logo-text">Smiggy</span>
        </div>

        <ul className="nav-links">
          <li
            onClick={() => {
              setSelectedRestaurant(null);
              setCurrentPage("home");
              setSearchTerm("");
              setSelectedCategory("");
              setShowDashboard(false);
              setShowCheckout(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setSelectedRestaurant(null);
              setCurrentPage("restaurants");
              setShowDashboard(false);
              window.scrollTo({ top: 600, behavior: "smooth" });
            }}
          >
            Restaurants
          </li>
          <li
            onClick={() => {
              setSelectedRestaurant(null);
              setCurrentPage("offers");
              setShowDashboard(false);
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
          >
            Offers
          </li>
          <li
            onClick={() => {
              if (user) {
                setShowAccount(true);
                setShowLogin(false);
                setShowSignup(false);
              } else {
                setShowLogin(true);
              }
            }}
          >
            {user ? `Hi, ${user.name}` : "Login"}
          </li>
          <li onClick={() => setShowDashboard(true)}>
            Restaurant Dashboard
          </li>
          <li
            onClick={() => {
              setSelectedRestaurant(null);
              setShowCheckout(false);
              setShowDashboard(false);
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
            style={{ cursor: "pointer" }}
          >
            🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </li>
        </ul>
      </nav>

      {/* USER ACCOUNT BAR IF LOGGED IN */}
      {user && (
        <div className="user-account-bar">
          <div>
            <strong>👤 {user.name}</strong>
            <span> • {user.phone}</span>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="login-overlay">
          <div className="login-modal">
            <button
              type="button"
              className="close-login"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <div className="login-icon">👤</div>
            <h2>Login to Smiggy</h2>
            <p>Enter your details to continue</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <p className="signup-text">
              New to Smiggy?{" "}
              <button
                type="button"
                className="signup-link"
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="login-overlay">
          <div className="login-modal">
            <button
              type="button"
              className="close-login"
              onClick={() => setShowSignup(false)}
            >
              ✕
            </button>
            <div className="login-icon">🍔</div>
            <h2>Create Your Smiggy Account</h2>
            <p>Join Smiggy and order delicious food!</p>
            <form onSubmit={handleCreateAccount}>
              <div className="form-group">
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input name="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" placeholder="Create a password" required />
              </div>
              <button type="submit" className="login-button">Create Account</button>
            </form>
            <p className="signup-text">
              Already have an account?{" "}
              <button
                type="button"
                className="signup-link"
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}

      {/* ACCOUNT DRAWER */}
      {showAccount && (
        <section className="account-section">
          <button className="close-account" onClick={() => setShowAccount(false)}>
            ✕ Close
          </button>
          {user ? (
            <div className="user-profile">
              <h2>👤 My Account</h2>
              <h3>Welcome, {user.name}!</h3>
              <p>📧 {user.email}</p>
              <p>📱 {user.phone}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="create-account">
              <h2>✨ Create Your Smiggy Account</h2>
              <p>Sign up to enjoy a better food ordering experience.</p>
              <button onClick={() => { setShowAccount(false); setShowSignup(true); }}>
                Create Account
              </button>
            </div>
          )}
        </section>
      )}

      {/* HERO SECTION */}
      {!selectedRestaurant && (
        <section className="hero">
          <h1>Order food online. Smiggy it!</h1>
          <p>Delicious food delivered to your doorstep.</p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for restaurants or food"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedCategory("");
              }}
            />
            <button>Search</button>
          </div>

          {/* CATEGORIES */}
          <div className="categories">
            <h2>What's on your mind?</h2>
            <div className="category-scroll">
              {categories.map((category) => (
                <div
                  className={
                    selectedCategory === category.name
                      ? "category-card active-category"
                      : "category-card"
                  }
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img src={category.image} alt={category.name} className="category-image" />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESTAURANTS LIST */}
      {!selectedRestaurant && (
        <section className="restaurants">
          <div className="section-heading">
            <h2>
              {selectedCategory
                ? `${selectedCategory} Restaurants`
                : "Top Restaurants Near You"}
            </h2>
            {selectedCategory && (
              <button onClick={showAllRestaurants}>Show All Restaurants</button>
            )}
          </div>

          <div className="restaurant-scroll">
            {filteredRestaurants.length === 0 ? (
              <div className="no-results">
                <h3>No restaurants found 😔</h3>
                <p>Try another restaurant, food or category.</p>
                <button onClick={showAllRestaurants}>View All Restaurants</button>
              </div>
            ) : (
              filteredRestaurants.map((restaurant) => (
                <div
                  className="restaurant-card"
                  key={restaurant.name}
                  onClick={() => {
                    setSelectedRestaurant(restaurant);
                    setFoodSearch("");
                    setFoodFilter("All");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="restaurant-image-real"
                  />
                  <div className="restaurant-card-content">
                    <h3>{restaurant.name}</h3>
                    <p>⭐ {restaurant.rating} • {restaurant.time}</p>
                    <p>{restaurant.cuisine}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* RESTAURANT MENU */}
      {selectedRestaurant && (
        <section className="restaurant-menu">
          <button
            className="back-button"
            onClick={() => {
              setSelectedRestaurant(null);
              setFoodSearch("");
              setFoodFilter("All");
            }}
          >
            ← Back to Restaurants
          </button>

          <div className="restaurant-header">
            <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
            <div className="restaurant-info">
              <h1>{selectedRestaurant.name}</h1>
              <p>⭐ {selectedRestaurant.rating} • {selectedRestaurant.time}</p>
              <p>{selectedRestaurant.cuisine}</p>
              <p>🛵 Free delivery available</p>
            </div>
          </div>

          {/* FOOD SEARCH & FILTER */}
          <div className="food-search">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={foodSearch}
              onChange={(e) => setFoodSearch(e.target.value)}
            />
          </div>

          <div className="food-filters">
            <button
              className={foodFilter === "All" ? "filter-active" : ""}
              onClick={() => setFoodFilter("All")}
            >
              All
            </button>
            <button
              className={foodFilter === "Veg" ? "filter-active" : ""}
              onClick={() => setFoodFilter("Veg")}
            >
              🟢 Veg
            </button>
            <button
              className={foodFilter === "Non-Veg" ? "filter-active" : ""}
              onClick={() => setFoodFilter("Non-Veg")}
            >
              🔴 Non-Veg
            </button>
          </div>

          <h2>Recommended</h2>
          <div className="menu-list">
            {(restaurantMenus[selectedRestaurant.name] || [])
              .filter((food) => {
                const matchesSearch = food.name
                  .toLowerCase()
                  .includes(foodSearch.toLowerCase());
                const matchesFilter =
                  foodFilter === "All" || food.type === foodFilter;
                return matchesSearch && matchesFilter;
              })
              .map((food) => (
                <div className="menu-item" key={food.name}>
                  <div className="menu-item-info">
                    <span className={food.type === "Veg" ? "veg-dot" : "nonveg-dot"} />
                    <h3>{food.name}</h3>
                    <strong>₹{food.price}</strong>
                    <p>{food.description}</p>
                  </div>
                  <div className="menu-item-image">
                    <img src={food.image} alt={food.name} />
                    <button
                      className="add-food-button"
                      onClick={() =>
                        addToCart({
                          name: food.name,
                          restaurant: selectedRestaurant.name,
                          price: food.price,
                        })
                      }
                    >
                      ADD
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SAVE FOOD PROMO */}
      {!selectedRestaurant && (
        <section className="save-food">
          <div className="save-food-content">
            <h2>Save Food, Save Money</h2>
            <p>
              Enjoy delicious surplus food from local restaurants at special prices
              while helping reduce food waste.
            </p>
            <button onClick={() => setShowSaveFood(!showSaveFood)}>
              {showSaveFood ? "Hide Save Food" : "Explore Save Food"}
            </button>
          </div>
        </section>
      )}

      {/* SAVE FOOD LIST */}
      {showSaveFood && !selectedRestaurant && (
        <section className="save-food-list">
          <h2>Available Save Food</h2>
          <div className="save-food-cards">
            <div className="save-food-card">
              <img
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
                alt="Chicken Biryani"
                className="save-food-real-image"
              />
              <h3>Chicken Biryani</h3>
              <p>Royal Biryani</p>
              <p className="price">
                <span className="old-price">₹180</span> ₹99
              </p>
              <p>Only 5 portions left</p>
              <button
                onClick={() =>
                  addToCart({
                    name: "Chicken Biryani",
                    restaurant: "Royal Biryani",
                    price: 99,
                  })
                }
              >
                Add to Cart
              </button>
            </div>

            <div className="save-food-card">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
                alt="Veg Pizza"
                className="save-food-real-image"
              />
              <h3>Veg Pizza</h3>
              <p>Pizza Palace</p>
              <p className="price">
                <span className="old-price">₹250</span> ₹149
              </p>
              <p>Only 3 portions left</p>
              <button
                onClick={() =>
                  addToCart({
                    name: "Veg Pizza",
                    restaurant: "Pizza Palace",
                    price: 149,
                  })
                }
              >
                Add to Cart
              </button>
            </div>

            <div className="save-food-card">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                alt="Cheese Burger"
                className="save-food-real-image"
              />
              <h3>Cheese Burger</h3>
              <p>Burger House</p>
              <p className="price">
                <span className="old-price">₹150</span> ₹89
              </p>
              <p>Only 4 portions left</p>
              <button
                onClick={() =>
                  addToCart({
                    name: "Cheese Burger",
                    restaurant: "Burger House",
                    price: 89,
                  })
                }
              >
                Add to Cart
              </button>
            </div>

            {surplusFoods.map((food, index) => (
              <div className="save-food-card" key={index}>
                <h3>{food.name}</h3>
                <p>{food.restaurant}</p>
                <p className="price">
                  <span className="old-price">₹{food.originalPrice}</span> ₹{food.price}
                </p>
                <p>Only {food.portions} portions left</p>
                <button
                  onClick={() =>
                    addToCart({
                      name: food.name,
                      restaurant: food.restaurant,
                      price: food.price,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CART SECTION */}
      <section id="cart-selection" className="cart-section">
        <h2>🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div className="cart-item" key={item.name + item.restaurant}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.restaurant}</p>
                  <strong>₹{item.price}</strong>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.name, item.restaurant)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.name, item.restaurant)}>
                    +
                  </button>
                </div>

                <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>

                <button
                  className="remove-button"
                  onClick={() => removeItem(item.name, item.restaurant)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bill">
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
              <hr />
              <h3>Final Total: ₹{finalTotal.toFixed(2)}</h3>
              <button
                className="checkout-button"
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CHECKOUT SECTION */}
      {showCheckout && !orderPlaced && (
        <section className="checkout-section">
          <h2>Checkout 🛍️</h2>
          <form onSubmit={placeOrder}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea placeholder="Enter your complete delivery address" required />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select required>
                <option value="">Select payment method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Credit / Debit Card</option>
              </select>
            </div>
            <div className="checkout-summary">
              <h3>Order Summary</h3>
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
              <hr />
              <h3>Final Total: ₹{finalTotal.toFixed(2)}</h3>
            </div>
            <button type="submit" className="place-order-button">
              Place Order
            </button>
          </form>
        </section>
      )}

      {/* ORDER TRACKING */}
      {orderPlaced && (
        <section className="order-tracking">
          <div className="success-icon">✅</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for ordering with Smiggy.</p>

          <div className="tracking-card">
            <h3>Order Status</h3>
            <div className="status-step"><span>✅</span><p>Order Placed</p></div>
            <div className="status-step"><span>🍳</span><p>Restaurant Accepted</p></div>
            <div className="status-step"><span>👨‍🍳</span><p>Preparing Your Food</p></div>
            <div className="status-step"><span>📦</span><p>Ready for Pickup</p></div>
            <div className="status-step"><span>🛵</span><p>Out for Delivery</p></div>
            <div className="status-step"><span>🏠</span><p>Delivered</p></div>
          </div>

          <button className="simulate-button" onClick={updateOrderStatus}>
            Update Order Status
          </button>

          <p className="current-status">
            Current Status: <strong>{orderStatus}</strong>
          </p>
        </section>
      )}

      {/* RESTAURANT DASHBOARD */}
      {showDashboard && (
        <section className="restaurant-dashboard">
          <button className="close-dashboard" onClick={() => setShowDashboard(false)}>
            ✕ Close
          </button>

          <h2>Restaurant Dashboard</h2>
          <p>List your surplus food and help reduce food waste.</p>

          <form onSubmit={handleAddSurplusFood}>
            <div className="form-group">
              <label>Restaurant Name</label>
              <input name="restaurant" type="text" placeholder="Enter restaurant name" required />
            </div>
            <div className="form-group">
              <label>Food Name</label>
              <input name="foodName" type="text" placeholder="Example: Chicken Biryani" required />
            </div>
            <div className="form-group">
              <label>Original Price</label>
              <input name="originalPrice" type="number" placeholder="Enter original price" required />
            </div>
            <div className="form-group">
              <label>Discounted Price</label>
              <input name="discountedPrice" type="number" placeholder="Enter discounted price" required />
            </div>
            <div className="form-group">
              <label>Available Portions</label>
              <input name="portions" type="number" placeholder="Example: 5" min="1" required />
            </div>
            <button type="submit" className="add-food-button">
              Add Surplus Food
            </button>
          </form>

          {surplusFoods.length > 0 && (
            <div className="restaurant-food-list">
              <h3>Your Listed Food</h3>
              {surplusFoods.map((food, index) => (
                <div className="restaurant-food-item" key={index}>
                  <h3>{food.name}</h3>
                  <p>Restaurant: {food.restaurant}</p>
                  <p>Original Price: ₹{food.originalPrice}</p>
                  <p>Save Food Price: ₹{food.price}</p>
                  <p>Available Portions: {food.portions}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* FLOATING CART BUTTON */}
      {cart.length > 0 && (
        <button
          className="floating-cart"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <span>🛒 View Cart</span>
          <span>
            {cart.reduce((total, item) => total + item.quantity, 0)} items
          </span>
          <strong>₹{finalTotal.toFixed(2)}</strong>
        </button>
      )}
    </div>
  );
}

export default App;
