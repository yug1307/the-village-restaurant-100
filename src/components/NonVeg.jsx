import React from 'react'
import Topbar from './Topbar'
import { MdCurrencyRupee } from "react-icons/md";

const NonVeg = () => {
  return (
    <> 
    <Topbar />
    <section className="bg-yellow-700 py-16 px-6 md:px-20" id="nonveg">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mb-12">Chicken Soups</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="border border-neutral-50 bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Clear Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
 
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Manchow Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Hot & Sour Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Tandoor Se Non-Veg : Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Tandoor Se Non-Veg : Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Lasuni Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Malai Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
    </div>

    {/* Hara Bhara Salad */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hara Bhara Salad</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Plain Salad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>40</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Green Salad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>60</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Kachumbar Salad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>80</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Curd</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>50</p>
      </div>
    </div>

    {/* Gaon Ki Biryani */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Gaon Ki Biryani</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>
    </div>

    {/* Egg (Ande ka Funda) */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Egg (Ande ka Funda)</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>120</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Bhurji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>90</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Boiled</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>50</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Bolied Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>70</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Bhurji Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Lapeta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Omelet</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>90</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Cheese Omelet</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>140</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Half Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>90</p>
      </div>
    </div>

    {/* India ka Non Veg Chinese */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">India ka Non Veg Chinese</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Noodles</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Manchurian</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Garlic Chicken</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken 65</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Manchurian Noodles</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Chilly</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250/500</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Chilly</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Lollipop</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Fried Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Egg Chicken Fried Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Black Pepper Chicken</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>
    </div>

    {/* Hotelwalo ka Chicken Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hotelwalo ka Chicken Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Oil Roast</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Popcorn</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Bhuna Chicken</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Jungli Chicken (Boiler)</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Lapeta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tawa Bhuna Chicken</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>
    </div>

    {/* Mutton Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Mutton Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Lapeta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Bhuna Mutton</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>380</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tawa Mutton Bhuna</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
    </div>

    {/* Indian Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Indian Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Roast Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>20</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fry Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>25</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Masala Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>30</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Finger Chips</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Dal */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Dal</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Dal Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180/120</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Dal Tadka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200/120</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Dal Jeera</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170/110</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Butter Dal Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180/120</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Dal Kolhapuri</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>190/120</p>
      </div>
    </div>

    {/* Talao ki Fish Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Talao ki Fish Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Fry Masala Roast</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>275</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Fingers</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>400</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tawa Fish Bhuna</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Manchurian</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Garlic Fish</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fish Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>
    </div>

    {/* Desi Chicken */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Desi Chicken</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Sawaji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Dhaba</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Waradi (Desi)</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Murg Maratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>360/750</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Village Special Chulah Chicken Handi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Gravy</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Mutton Market Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Mutton Market Se</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Rogan Josh</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Sawaji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Rarha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>325</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutton Keema Kaleji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>
    </div>

    {/* Khet Ke Chawal Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Khet Ke Chawal Se</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Plain Steam Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>140/90</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Jeera Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150/110</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutter Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170/120</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Garlic Jeera Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180/125</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Plain Dal Khichdi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250/150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Biryani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>240/125</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Pulao</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mushroom Pulao</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutter Pulao</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>
    </div>

    {/* Hotelwale Chicken Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hotelwale Chicken Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Afghani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Rum Chicken Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>465</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Butter Chicken</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Butter Chicken (Boneless)</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Kadhai</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Patiyala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken RaRa Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Chicken Rogan Josh</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default NonVeg
