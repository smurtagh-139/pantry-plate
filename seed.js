// Starter data, loaded once by the 'Load the starter recipes and pantry' button.
window.PP_SEED = {
 "settings": {
  "main": {
   "budget": 25,
   "days": {
    "Fri": "cook",
    "Mon": "cook",
    "Sat": "cook",
    "Sun": "cook",
    "Thu": "leftovers",
    "Tue": "quick",
    "Wed": "cook"
   },
   "defaultPrice": 2,
   "household": 4,
   "limits": [
    {
     "max": 2,
     "what": "chicken"
    }
   ],
   "quickMax": 25
  }
 },
 "people": {
  "p-everyone": {
   "likes": [
    "mexican",
    "spicy",
    "chicken",
    "quick"
   ],
   "name": "Everyone (split into people)",
   "nogo": [
    "mushrooms"
   ]
  }
 },
 "items": {
  "bell-pepper": {
   "have": 0,
   "name": "bell pepper",
   "price": 1
  },
  "black-beans": {
   "have": 1,
   "name": "black beans",
   "price": 1
  },
  "broccoli": {
   "have": 0,
   "name": "broccoli",
   "price": 1.5
  },
  "canned-tomatoes": {
   "have": 2,
   "name": "canned tomatoes",
   "price": 1.2
  },
  "cheese": {
   "have": 1,
   "name": "cheese",
   "price": 2.5
  },
  "chicken-breast": {
   "have": 2,
   "name": "chicken breast",
   "price": 3.5
  },
  "coconut-milk": {
   "have": 0,
   "name": "coconut milk",
   "price": 1.8
  },
  "curry-paste": {
   "have": 0,
   "name": "curry paste",
   "price": 1.5
  },
  "eggs": {
   "have": 6,
   "name": "eggs",
   "price": 0.3
  },
  "garlic": {
   "have": 5,
   "name": "garlic",
   "price": 0.25
  },
  "ground-beef": {
   "have": 0,
   "name": "ground beef",
   "price": 4
  },
  "lentils": {
   "have": 0,
   "name": "lentils",
   "price": 1
  },
  "mushrooms": {
   "have": 0,
   "name": "mushrooms",
   "price": 2
  },
  "onion": {
   "have": 3,
   "name": "onion",
   "price": 0.6
  },
  "pasta": {
   "have": 2,
   "name": "pasta",
   "price": 1
  },
  "potatoes": {
   "have": 0,
   "name": "potatoes",
   "price": 0.5
  },
  "rice": {
   "have": 4,
   "name": "rice",
   "price": 0.5
  },
  "soy-sauce": {
   "have": 0,
   "name": "soy sauce",
   "price": 0.4
  },
  "spinach": {
   "have": 0,
   "name": "spinach",
   "price": 2
  },
  "tortillas": {
   "have": 6,
   "name": "tortillas",
   "price": 0.25
  }
 },
 "recipes": {
  "bean-cheese-quesadillas": {
   "how": "Fill tortillas with mashed beans and cheese; toast in a pan until melty.",
   "ingredients": {
    "black beans": 1,
    "cheese": 1,
    "tortillas": 2
   },
   "minutes": 15,
   "name": "Bean & Cheese Quesadillas",
   "serves": 4,
   "tags": [
    "mexican",
    "quick",
    "vegetarian"
   ]
  },
  "beef-chili": {
   "how": "Brown beef with onion, add beans, tomatoes and chili spice; simmer 30 min.",
   "ingredients": {
    "black beans": 1,
    "canned tomatoes": 1,
    "ground beef": 1,
    "onion": 1
   },
   "minutes": 45,
   "name": "Beef Chili",
   "serves": 4,
   "tags": [
    "mexican",
    "spicy",
    "comfort"
   ]
  },
  "chicken-burrito-bowl": {
   "how": "Cook rice; sear spiced chicken with onion; serve over rice with beans.",
   "ingredients": {
    "black beans": 1,
    "chicken breast": 1,
    "onion": 1,
    "rice": 1
   },
   "minutes": 35,
   "name": "Chicken Burrito Bowl",
   "serves": 4,
   "tags": [
    "mexican",
    "chicken",
    "spicy"
   ]
  },
  "chicken-stir-fry": {
   "how": "Stir-fry chicken, add broccoli and garlic, finish with soy; serve on rice.",
   "ingredients": {
    "broccoli": 1,
    "chicken breast": 1,
    "garlic": 1,
    "rice": 1,
    "soy sauce": 1
   },
   "minutes": 25,
   "name": "Chicken Stir-Fry",
   "serves": 4,
   "tags": [
    "asian",
    "chicken",
    "quick"
   ]
  },
  "chicken-tacos": {
   "how": "Cook sliced chicken with chili spices and onion; serve in warm tortillas.",
   "ingredients": {
    "chicken breast": 1,
    "onion": 1,
    "tortillas": 3
   },
   "minutes": 20,
   "name": "Chicken Tacos",
   "serves": 4,
   "tags": [
    "mexican",
    "chicken",
    "spicy",
    "quick"
   ]
  },
  "egg-fried-rice": {
   "how": "Fry onion, add cooked rice, push aside and scramble eggs, season with soy.",
   "ingredients": {
    "eggs": 2,
    "onion": 1,
    "rice": 1,
    "soy sauce": 1
   },
   "minutes": 20,
   "name": "Egg Fried Rice",
   "serves": 4,
   "tags": [
    "asian",
    "quick"
   ]
  },
  "garlic-spinach-pasta": {
   "how": "Saute garlic, wilt spinach, toss with pasta and cheese.",
   "ingredients": {
    "cheese": 1,
    "garlic": 3,
    "pasta": 1,
    "spinach": 1
   },
   "minutes": 20,
   "name": "Garlic Spinach Pasta",
   "serves": 4,
   "tags": [
    "italian",
    "quick",
    "vegetarian"
   ]
  },
  "lentil-curry": {
   "how": "Fry onion and curry paste, add lentils, coconut milk and water; simmer 25 min.",
   "ingredients": {
    "coconut milk": 1,
    "curry paste": 1,
    "lentils": 1,
    "onion": 1,
    "rice": 1
   },
   "minutes": 40,
   "name": "Lentil Curry",
   "serves": 4,
   "tags": [
    "indian",
    "spicy",
    "vegetarian"
   ]
  },
  "mushroom-risotto": {
   "how": "Toast rice with onion, add stock gradually, stir in cooked mushrooms.",
   "ingredients": {
    "mushrooms": 2,
    "onion": 1,
    "rice": 2
   },
   "minutes": 45,
   "name": "Mushroom Risotto",
   "serves": 4,
   "tags": [
    "italian",
    "vegetarian"
   ]
  },
  "pasta-pomodoro": {
   "how": "Simmer garlic, onion and tomatoes 15 min; toss with cooked pasta.",
   "ingredients": {
    "canned tomatoes": 1,
    "garlic": 2,
    "onion": 1,
    "pasta": 1
   },
   "minutes": 30,
   "name": "Pasta Pomodoro",
   "serves": 4,
   "tags": [
    "italian",
    "vegetarian"
   ]
  },
  "shakshuka": {
   "how": "Cook pepper and onion, add spiced tomatoes, poach eggs in the sauce.",
   "ingredients": {
    "bell pepper": 1,
    "canned tomatoes": 1,
    "eggs": 3,
    "onion": 1
   },
   "minutes": 25,
   "name": "Shakshuka",
   "serves": 4,
   "tags": [
    "spicy",
    "vegetarian",
    "quick"
   ]
  },
  "spanish-omelette": {
   "how": "Slowly fry sliced potato and onion, add beaten eggs, cook through and flip.",
   "ingredients": {
    "eggs": 4,
    "onion": 1,
    "potatoes": 2
   },
   "minutes": 40,
   "name": "Spanish Omelette",
   "serves": 4,
   "tags": [
    "spanish",
    "vegetarian"
   ]
  }
 }
};
