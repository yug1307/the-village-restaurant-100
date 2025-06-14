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
      
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
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

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Lasuni Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Malai Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
    </div>

    {/* Hara Bhara Salad */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hara Bhara Salad</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Plain Salad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>40</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Green Salad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>60</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Kachumbar Salad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>80</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Curd</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>50</p>
      </div>
    </div>

    {/* Gaon Ki Biryani */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Gaon Ki Biryani</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>
    </div>

    {/* Egg (Ande ka Funda) */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Egg (Ande ka Funda)</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Bhurji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>90</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Boiled</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>50</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Bolied Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>70</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Bhurji Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Lapeta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Omelet</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>90</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Cheese Omelet</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>140</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Half Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>90</p>
      </div>
    </div>

    {/* India ka Non Veg Chinese */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">India ka Non Veg Chinese</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Noodles</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Manchurian</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Garlic Chicken</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken 65</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Manchurian Noodles</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Chilly</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Chilly</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Lollipop</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Fried Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Egg Chicken Fried Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Black Pepper Chicken</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>
    </div>

    {/* Hotelwalo ka Chicken Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hotelwalo ka Chicken Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Oil Roast</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Popcorn</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Bhuna Chicken</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Jungli Chicken (Boiler)</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Lapeta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Tawa Bhuna Chicken</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>
    </div>

    {/* Mutton Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Mutton Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Lapeta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Bhuna Mutton</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>380</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Tawa Mutton Bhuna</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>360</p>
      </div>
    </div>

    {/* Indian Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Indian Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Roast Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>20</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fry Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>25</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Masala Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>30</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Finger Chips</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Dal */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Dal</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Dal Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180/120</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Dal Tadka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200/120</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Dal Jeera</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>170/110</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Butter Dal Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180/120</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Dal Kolhapuri</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>190/120</p>
      </div>
    </div>

    {/* Talao ki Fish Starter */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Talao ki Fish Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Fry Masala Roast</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>275</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Fingers</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>400</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Tawa Fish Bhuna</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Manchurian</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>350</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Garlic Fish</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fish Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>
    </div>

    {/* Desi Chicken */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Desi Chicken</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Sawaji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Dhaba</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Waradi (Desi)</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Murg Maratha</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>360/750</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Village Special Chulah Chicken Handi</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Gravy</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Mutton Market Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Mutton Market Se</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280/450/850</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280/450/850</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Rogan Josh</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300/500/925</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Sawaji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300/500/925</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Rarha</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>325/550/1000</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutton Keema Kaleji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>
    </div>

    {/* Khet Ke Chawal Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Khet Ke Chawal Se</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Plain Steam Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>140/90</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Jeera Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150/110</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutter Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>170/120</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Garlic Jeera Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180/125</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Plain Dal Khichdi</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250/150</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Biryani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>240/125</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Pulao</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mushroom Pulao</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutter Pulao</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>
    </div>

    {/* Hotelwale Chicken Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hotelwale Chicken Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Afghani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Rum Chicken Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>465</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Butter Chicken</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Butter Chicken (Boneless)</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Kadhai</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Patiyala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken RaRa Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Chicken Rogan Josh</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default NonVeg
