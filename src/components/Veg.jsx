import React, { useState } from 'react'
import Topbar from './Topbar'

// ✅ Menu Data
const vegSoups = [
  { id: 1, name: "Tomato Soup", price: 100 },
  { id: 2, name: "Veg Hot & Sour Soup", price: 100 },
  { id: 3, name: "Manchow Soup", price: 100 },
  { id: 4, name: "Lemon Coriander Soup", price: 110 }
]

const Snacks = [
  { id: 1, name: "Roast Papad", price: 20 },
  { id: 2, name: "Fry Papad", price: 25 },
  { id: 3, name: "Butter Papad", price: 25 },
  { id: 4, name: "Masala Papad", price: 40 },
  { id: 5, name: "Papad Bhurji", price: 125 },
  { id: 6, name: "Dal Snack", price: 250 },
  { id: 7, name: "Peanut Fry", price: 110 },
  { id: 8, name: "Corn Masala", price: 180 },
  { id: 9, name: "Garlic Fry", price: 150 }
]

const quickBites = [
  { id: 1, name: "Nachos", price: 110 },
  { id: 2, name: "Salted French Fries", price: 150 },
  { id: 3, name: "Peri Peri Fries", price: 170 },
  { id: 4, name: "Masala Garlic Fries", price: 200 },
  { id: 5, name: "Plain Maggi", price: 110 },
  { id: 6, name: "Tadka Maggi", price: 130 },
  { id: 7, name: "Cheese Maggi", price: 150 },
  { id: 8, name: "Red Sauce Pasta", price: 130 },
  { id: 9, name: "White Sauce Pasta", price: 130 },
  { id:10, name: "Cheese Balls", price: 170 },
  { id:11, name: "Cheese Corn Masala", price: 230 }
]

const vegStarter = [
  { id: 1, name: "Paneer Tikka", price: 230 },
  { id: 2, name: "Paneer Lasuni Tikka", price: 260 },
  { id: 3, name: "Paneer Malai Tikka", price: 300 },
  { id: 4, name: "Mushroom Masala Tikka", price: 300 },
]

const Salad = [
  { id: 1, name: "Plain Salad", price: 50 },
  { id: 2, name: "Green Salad", price: 70 },
  { id: 3, name: "Kachumbar Salad", price: 80 },
  { id: 4, name: "Curd", price: 50 }
]

const restaurantWaloKaSnacks = [
  { id: 1, name: "Veg Pakora", price: 130 },
  { id: 2, name: "Cutlet", price: 170 },
  { id: 3, name: "Paneer Cheese Cutlet", price: 200 },
  { id: 4, name: "French Fries", price: 150 },
  { id: 5, name: "Hara Bhara Kabab", price: 170 },
  { id: 6, name: "Paneer Cheese Ball", price: 200 },
  { id: 7, name: "Paneer Pakoda", price: 170 },
  { id: 8, name: "Crispy Corn", price: 170 }
]

const vegChinese = [
  { id: 1, name: "Veg Noodles", price: 140 },
  { id: 2, name: "Veg Manchurian", price: 180 },
  { id: 3, name: "Manchurian Noodles", price: 180 },
  { id: 4, name: "Paneer Manchurian Noodles", price: 220 },
  { id: 5, name: "Paneer Chilly", price: 220 },
  { id: 6, name: "Mushroom Chilly", price: 220 },
  { id: 7, name: "Veg Crispy", price: 240 },
  { id: 8, name: "Veg 65", price: 190 },
  { id: 9, name: "Paneer 65", price: 240 },
  { id:10, name: "Veg Fried Rice", price: 210 },
  { id:11, name: "Manchurian Fried Rice", price: 210 },
  { id:12, name: "Schezwan Fried Rice", price: 220 },
]

const khetKeChawal = [
  { id: 1, name: "Plain Steam Rice", price: 140, price2: '/90' },
  { id: 2, name: "Jeera Rice", price: 150, price2: '/110' },
  { id: 3, name: "Mutter Rice", price: 170, price2: '/120' },
  { id: 4, name: "Garlic Jeera Rice", price: 180, price2: '/125' },
  { id: 5, name: "Plain Dal Khichdi", price: 250, price2: '/150' },
  { id: 6, name: "Veg Biryani", price: 240, price2: '/125' },
  { id: 7, name: "Paneer Pulao", price: 200 },
  { id: 8, name: "Mushroom Pulao", price: 250 },
  { id: 9, name: "Mutter Pulao", price: 180 }
]

const pustikDal = [
  { id: 1, name: "Dal Fry", price: 180, price2: '/120' },
  { id: 2, name: "Dal Tadka", price: 200, price2: '/120' },
  { id: 3, name: "Dal Jeera", price: 170, price2: '/110' },
  { id: 4, name: "Butter Dal Fry", price: 180, price2: '/120' },
  { id: 5, name: "Dal Kolhapuri", price: 190, price2: '/120' }
]

const mainCourse = [
  { id: 1, name: "Paneer Masala", price: 220 },
  { id: 2, name: "Paneer Butter Masala", price: 230 },
  { id: 3, name: "Paneer Lacchedar", price: 250 },
  { id: 4, name: "Paneer Kadhai", price: 250 },
  { id: 5, name: "Shahi Paneer", price: 270 },
  { id: 6, name: "Paneer Bhurji", price: 270 },
  { id: 7, name: "Mutter Paneer", price: 220 },
  { id: 8, name: "Paneer Tikka Masala", price: 255 },
  { id: 9, name: "Kaju Paneer Masala", price: 280 },
  { id:10, name: "Paneer Patyala", price: 250 },
  { id:11, name: "Kadhai Paneer", price: 255 },
]

const apmcMainCourse = [
  { id: 1, name: "Mix Veg", price: 200 },
  { id: 2, name: "Veg Anda Curry", price: 230 },
  { id: 3, name: "Veg Kofta", price: 225 },
  { id: 4, name: "Malai Kofta", price: 250 },
  { id: 5, name: "Veg Kolhapuri", price: 220 },
  { id: 6, name: "Veg Hyderabadi", price: 220 },
  { id: 7, name: "Methi Mutter Malai", price: 250 },
  { id: 8, name: "Mushroom Masala", price: 250 },
  { id: 9, name: "Sev Bhaji", price: 180 },
  { id:10, name: "Tomato Chatani", price: 150 },
  { id:11, name: "Village Spl Chatpata", price: 280 },
  { id:12, name: "Bhaigan Bharta", price: 200 }
]

const Paratha = [
  { id: 1, name: "Aloo Paratha", price: 60 },
  { id: 2, name: "Gobi Paratha", price: 60 },
  { id: 3, name: "Mix Veg Paratha", price: 60 },
  { id: 4, name: "Paneer Paratha", price: 80 },
  { id: 5, name: "Tandoori Paratha", price: 35 },
  { id: 6, name: "Tandoori Butter Paratha", price: 40 },
  { id: 7, name: "Lachha Paratha", price: 60 }
]

// ✅ Categories + custom grid sizes
const categories = [
  { id: 1, name: "Veg Soups", items: vegSoups, gridCols: "grid-cols-4" },
  { id: 2, name: "Snacks", items: Snacks, gridCols: "grid-cols-3" },
  { id: 3, name: "Quick Bites", items: quickBites, gridCols: "grid-cols-4" },
  { id: 4, name: "Tandoor Se Veg Starter", items: vegStarter, gridCols: "grid-cols-2" },
  { id: 5, name: "Hara Bhara Salad", items: Salad, gridCols: "grid-cols-4" },
  { id: 6, name: "Restaurant Walo Ka Snacks", items: restaurantWaloKaSnacks, gridCols: "grid-cols-4" },
  { id: 7, name: "India Ka Chinese Snacks", items: vegChinese, gridCols: "grid-cols-3" },
  { id: 8, name: "Khet Ke Chawal", items: khetKeChawal, gridCols: "grid-cols-3" },
  { id: 9, name: "Pustik Dal", items: pustikDal, gridCols: "grid-cols-3" },
  { id: 10, name: "Dairywala Veg Main Course", items: mainCourse, gridCols: "grid-cols-3" },
  { id: 11, name: "APMC Wala Veg Main Course", items: apmcMainCourse, gridCols: "grid-cols-3" },
  { id: 12, name: "Paratha", items: Paratha, gridCols: "grid-cols-4" }
]

const Veg = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState("All")

  //Filter logic
  const filteredCategories = categories.map((cat) => {
    const filteredItems = cat.items.filter((item) =>

      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    return { ...cat, items: filteredItems }
  })

  const visibleCategories = 
    selectedCategory === "All"
      ? filteredCategories 
      : filteredCategories.filter((cat) => cat.name === selectedCategory )

  return (
  <>  
  <Topbar />
  <div className="p-6 bg-yellow-700 min-h-screen">

      {/* Filters */}
      <div className="max-w-6xl mx-auto gap-6 grid grid-cols-1 md:grid-cols-3 sticky top-[85px] bg-purple-200 p-4 rounded-2xl">

        {/* Search */}
        <input type="text" placeholder="Search for a dish....." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border text-gray-900 rounded-lg border-neutral-600"
        />

        {/* Price Range */}
        <div className="flex items-center gap-2 w-full">
          <span className="font-medium">Min ₹{priceRange[0]}</span>

          <input type="range" min="0" max="1000" step="10" value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-full accent-red-500"/>

          <input type="range" min="0" max="1000" step="10" value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full accent-yellow-500"/>
            
          <span className="font-medium">₹{priceRange[1]} Max</span>
        </div>

        {/* Category Dropdown */}
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded-lg border-neutral-600">

          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Menu Display */}
      {visibleCategories.map((cat) => (
        <div key={cat.name} className="max-w-7xl mx-auto my-12 pt-[18px]">
          <h2 className="text-4xl font-bold font-serif text-white text-center py-5">{cat.name}</h2>

          {cat.items.length > 0 ? (
            <div className={`grid gap-6 sm:${cat.gridCols} lg:${cat.gridCols}`}>
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-6 rounded-lg">

                  <h3 className="text-2xl font-semibold text-red-600">{item.name}</h3>
                  <p className="text-gray-700 text-lg">₹{item.price}{item.price2}</p>
                </div>
              ))}
            </div>
            ) : (
            <p className="text-white text-lg italic">No dishes found.</p>
          )}
        </div>
      ))}
    </div>
  </>
  )
}

export default Veg
