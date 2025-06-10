import React from 'react'
import Topbar from './Topbar'
import { MdCurrencyRupee } from 'react-icons/md'

const Veg = () => {
  return (
  <> 
  <Topbar />
  <section className="bg-amber-700 py-16 px-6 md:px-20" id="veg">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mb-12">Shuruwat Ke Liye Veg Soups</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Tomato Soup</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Hot & Sour Soup</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Manchow Soup</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Lemon Coriander Soup</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>110</p>
      </div>
    </div>

    {/* Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Roast Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>20</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Fry Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>25</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Butter Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>25</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Masala Papad</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>30</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Papad Bhurji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Dal Biting</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>145</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Peanut Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>110</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Corn Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Garlic Fry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/*Tandoor Se Veg Starter*/}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Tandoor Se Veg Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Lasuni Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>260</p>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Malai Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>260</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mushroom Masala Tikka</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>300</p>
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

    {/* Restaurant Walo Ka Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Restaurant Walo Ka Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Pakora</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>130</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Cutlet</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>120</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">French Fries</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Harabhara Kabab</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Cheese Ball</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Pakoda</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Crispy Corn</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>170</p>
      </div>
    </div>

    {/* India ka Chinese Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">India ka Chinese Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Noodles</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>140</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Manchurian</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Manchurian Noodles</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Manchurian Noodles</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Chilly</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mushroom Chilly</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Krispy</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>160</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg 65</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>190</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer 65</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>210</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Fried Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>210</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Manchurian Fried Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>240</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Schezwan Fried Rice</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>
    </div>

    {/* Khet Ke Chawal Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Khet Ke Chawal</h2>
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

    {/* Pustik Dal */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Pustik Dal</h2>
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

    {/* Dairywala Veg Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Dairywala Veg Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Butter Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Lacchedar</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Kadhai</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Shahi Paneer</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Bhurji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mutter Paneer</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700 mt-3 mb-3">Paneer Tikka Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>255</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Kaju Paneer Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Paneer Patyala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Kadhai Paneer Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>255</p>
      </div>
    </div>

    {/* APMC Wala Veg Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">APMC Wala Veg Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mix Veg</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Anda Curry</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Kofta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>225</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Malai Kofta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Kolhapuri</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Veg Hyderabadi</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Methi Mutter Malai</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Mushroom Masala</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Sev Bhaji</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Tomato Chatani</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Village Spl Chatpata</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-blue-700">Bhaigan Bharta</h3>
        <p className="text-lg text-emerald-500 flex items-center"><MdCurrencyRupee/>200</p>
      </div>
    </div>
    </div>
    </section>
  </>
  )
}

export default Veg
