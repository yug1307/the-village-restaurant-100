import React, { useState } from "react";
import Topbar from "./Topbar";

// ✅ Menu Data
const chickenSoups = [
  { id: 1, name: "Chicken Clear Soup", price: 150 },
  { id: 2, name: "Chicken Manchow Soup", price: 150 },
  { id: 3, name: "Chicken Hot & Sour Soup", price: 150 }
]

const tandoorStarter = [
  { id: 1, name: "Chicken Tikka", price: 300 },
  { id: 2, name: "Chicken Lasuni Tikka", price: 360 },
  { id: 3, name: "Chicken Malai Tikka", price: 360 }
]

const salad = [
  { id: 1, name: "Plain Salad", price: 40 },
  { id: 2, name: "Green Salad", price: 60 },
  { id: 3, name: "Kachumbar Salad", price: 80 },
  { id: 4, name: "Curd", price: 50 }
]

const gaonKiBiryani = [
  { id: 1, name: "Chicken Biryani", price: 250 },
  { id: 2, name: "Mutton Biryani", price: 350 },
  { id: 3, name: "Fish Biryani", price: 350 },
  { id: 4, name: "Egg Biryani", price: 200 },
  { id: 5, name: "Veg Biryani", price: 180 }
]

const andeKaFunda = [
  { id: 1, name: "Egg Curry", price: 120 },
  { id: 2, name: "Egg Masala", price: 125 },
  { id: 3, name: "Egg Bhurji", price: 90 },
  { id: 4, name: "Egg Boiled", price: 50 },
  { id: 5, name: "Egg Boiled Fry", price: 70 },
  { id: 6, name: "Egg Bhurji Curry", price: 125 },
  { id: 7, name: "Egg Lapeta", price: 150 },
  { id: 8, name: "Egg Omelet", price: 90 },
  { id: 9, name: "Egg Cheese Omelet", price: 140 },
  { id: 10, name: "Half Fry", price: 90 }
] 

const nonVegChinese = [
  { id: 1, name: "Chicken Noodles", price: 200 },
  { id: 2, name: "Chicken Manchurian", price: 250 },
  { id: 3, name: "Garlic Chicken", price: 260 },
  { id: 4, name: "Chicken 65", price: 260 },
  { id: 5, name: "Chicken Manchurian Noodles", price: 280 },
  { id: 6, name: "Chicken Chilly", price: 250, price2: '/500' },
  { id: 7, name: "Egg Chilly", price: 200 },
  { id: 8, name: "Chicken Lollipop", price: 260 },
  { id: 9, name: "Chicken Fried Rice", price: 230 },
  { id:10, name: "Egg Chicken Fried Rice", price: 250 },
  { id:11, name: "Black Pepper Chicken", price: 280 }
]

const chickenStarter = [
  { id: 1, name: "Chicken Oil Roast", price: 300 },
  { id: 2, name: "Chicken Popcorn", price: 300 },
  { id: 3, name: "Bhuna Chicken", price: 300 },
  { id: 4, name: "Jungli Chicken (Boiler)", price: 300 },
  { id: 5, name: "Chicken Lapeta", price: 300 },
  { id: 6, name: "Tawa Bhuna Chicken", price: 300 }
]

const muttonStarter = [
  { id: 1, name: "Mutton Lapeta", price: 350 },
  { id: 2, name: "Bhuna Mutton", price: 380 },
  { id: 3, name: "Tawa Mutton Bhuna", price: 360 }
]

const indianSnacks = [
  { id: 1, name: "Roast Papad", price: 20 },
  { id: 2, name: "Fry Papad", price: 25 },
  { id: 3, name: "Masala Papad", price: 30 },
  { id: 4, name: "Finger Chips", price: 150 }
]

const Dal = [
  { id: 1, name: "Dal Fry", price: 180, price2: '/120' },
  { id: 2, name: "Dal Tadka", price: 200, price2: '/120' },
  { id: 3, name: "Dal Jeera", price: 170, price2: '/110' },
  { id: 4, name: "Butter Dal Fry", price: 180, price2: '/120' },
  { id: 5, name: "Dal Kolhapuri", price: 190, price2: '/120' }
]

const fishStarter = [
  { id: 1, name: "Fish Fry", price: 220 },
  { id: 2, name: "Fish Fry Masala Roast", price: 275 },
  { id: 3, name: "Fish Fingers", price: 400 },
  { id: 4, name: "Tawa Fish Bhuna", price: 300 },
  { id: 5, name: "Fish Manchurian", price: 350 },
  { id: 6, name: "Garlic Fish", price: 250 },
  { id: 7, name: "Fish Curry", price: 230 }
]

const desiChicken = [
  { id: 1, name: "Chicken Masala", price: 280 },
  { id: 2, name: "Chicken Curry", price: 250 },
  { id: 3, name: "Chicken Sawaji", price: 260 },
  { id: 4, name: "Chicken Dhaba", price: 250 },
  { id: 5, name: "Chicken Waradi (Desi)", price: 300 },
  { id: 6, name: "Murg Maratha", price: 360, price2: '/750' },
  { id: 7, name: "Village Special Chulah Chicken Handi", price: 350 },
  { id: 8, name: "Gravy", price: 150 }
]

const Mutton = [
  { id: 1, name: "Mutton Curry", price: 300 },
  { id: 2, name: "Mutton Masala", price: 350 },
  { id: 3, name: "Mutton Rogan Josh", price: 350 },
  { id: 4, name: "Mutton Sawaji", price: 300 },
  { id: 5, name: "Mutton Rarha", price: 325 },
  { id: 6, name: "Mutton Keema Kaleji", price: 250 },
]

const Chawal = [
  { id: 1, name: "Plain Steam Rice", price: 140, price2: '/90' },
  { id: 2, name: "Jeera Rice", price: 150, price2: '/110' },
  { id: 3, name: "Mutter Rice", price: 170, price2: '/120' },
  { id: 4, name: "Garlic Jeera Rice", price: 180, price2: '/125' },
  { id: 5, name: "Plain Dal Khichdi", price: 250, price2: '/150' },
  { id: 6, name: "Veg Biryani", price: 240, price2: '/125'},
  { id: 7, name: "Paneer Pulao", price: 200 },
  { id: 8, name: "Mushroom Pulao", price: 250 },
  { id: 9, name: "Mutter Pulao", price: 180 }
]

const chickenMainCourse = [
  { id: 1, name: "Chicken Afghani", price: 300 },
  { id: 2, name: "Rum Chicken Masala", price: 465 },
  { id: 3, name: "Butter Chicken", price: 300 },
  { id: 4, name: "Butter Chicken (Boneless)", price: 300 },
  { id: 5, name: "Chicken Kadhai", price: 300 },
  { id: 6, name: "Chicken Patiyala", price: 270 },
  { id: 7, name: "Chicken RaRa Masala", price: 280 },
  { id: 8, name: "Chicken Rogan Josh", price: 280 }
]

// ✅ Categories + custom grid sizes
const categories = [
  { id: 1, name: "Chicken Soups", items: chickenSoups, gridCols: "grid-cols-3" },
  { id: 2, name: "Tandoor Se Non-Veg : Starter", items: tandoorStarter, gridCols: "grid-cols-3" },
  { id: 3, name: "Hara Bhara Salad", items: salad, gridCols: "grid-cols-4" },
  { id: 4, name: "Gaon Ki Biryani", items: gaonKiBiryani, gridCols: "grid-cols-5" },
  { id: 5, name: "Egg (Ande Ka Funda)", items: andeKaFunda, gridCols: "grid-cols-5" },
  { id: 6, name: "India ka Non-Veg Chinese", items: nonVegChinese, gridCols: "grid-cols-4" },
  { id: 7, name: "Hotel Walo ka Chicken Starter", items: chickenStarter, gridCols: "grid-cols-3" },
  { id: 8, name: "Mutton Starter", items: muttonStarter, gridCols: "grid-cols-3" },
  { id: 9, name: "Indian Snacks", items: indianSnacks, gridCols: "grid-cols-4" },
  { id: 10, name: "Dal", items: Dal, gridCols: "grid-cols-3" },
  { id: 11, name: "Talao Ki Fish Starter", items: fishStarter, gridCols: "grid-cols-4" },
  { id: 12, name: "Desi Chicken", items: desiChicken, gridCols: "grid-cols-3" },
  { id: 13, name: "Mutton Market Se", items: Mutton, gridCols: "grid-cols-3" },
  { id: 14, name: "Khet Ke Chawal Se", items: Chawal, gridCols: "grid-cols-3" },
  { id: 15, name: "Hotelwale Chicken Main Course", items: chickenMainCourse, gridCols: "grid-cols-4" }
];

const NonVeg = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredCategories = categories.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <>
    <Topbar/>
    <div className="p-6 bg-yellow-700 min-h-screen">

      {/* Filters */}
      <div className="max-w-xl mx-auto gap-6 sticky top-[85px] py-4 rounded-2xl">

        {/* Search */}
        <input type="text" placeholder="🔍 Search for a dish....." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border text-gray-900 rounded-lg border-neutral-600"
        />
      </div>

      {/* Menu Display */}
      {filteredCategories.map((cat) => (
        <div key={cat.name} className="max-w-7xl mx-auto my-12 pt-[18px]">
          <h2 className="text-4xl font-bold font-serif text-white text-center py-3">{cat.name}</h2>

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
  );
};

export default NonVeg;
