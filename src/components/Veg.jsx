import React from 'react'
import Topbar from './Topbar'
import { MdCurrencyRupee } from 'react-icons/md'

const Veg = () => {
  return (
  <> 
  <Topbar />
  <section className="bg-yellow-700 py-16 px-6 md:px-20" id="veg">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mb-12">Shuruwat Ke Liye Veg Soups</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tomato Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Hot & Sour Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Manchow Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>100</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Lemon Coriander Soup</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>110</p>
      </div>
    </div>

    {/* Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Roast Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>20</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Fry Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>25</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Butter Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>25</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Masala Papad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>40</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Papad Bhurji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>125</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Dal Snack</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Peanut Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>110</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Corn Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Garlic Fry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
    </div>

    {/* Quick Bites */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Quick Bites</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Nachos</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>110</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Salted French Fries</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Peri Peri Fries</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Masala Garlic Fries</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>
      
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Plain Maggi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>110</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tadka Maggi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>130</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Cheese Maggi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Red Sauce Pasta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>130</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">White Sauce Pasta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>130</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Cheese Balls</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Cheese Corn Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>
    </div>
      
    {/*Tandoor Se Veg Starter*/}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Tandoor Se Veg Starter</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Lasuni Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>260</p>
      </div>
  
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Malai Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mushroom Masala Tikka</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>300</p>
      </div>
    </div>

    {/* Hara Bhara Salad */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Hara Bhara Salad</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Plain Salad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>50</p>
      </div>
      
      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Green Salad</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>70</p>
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

    {/* Restaurant Walo Ka Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Restaurant Walo Ka Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Pakora</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>130</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Cutlet</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Cheese Cutlet</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">French Fries</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Harabhara Kabab</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Cheese Ball</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Pakoda</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Crispy Corn</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>170</p>
      </div>
    </div>

    {/* India ka Chinese Snacks */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">India ka Chinese Snacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Noodles</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>140</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Manchurian</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Manchurian Noodles</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Manchurian Noodles</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Chilly</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mushroom Chilly</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Crispy</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>240</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg 65</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>190</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer 65</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>240</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Fried Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>210</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Manchurian Fried Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>240</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Schezwan Fried Rice</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>
    </div>

    {/* Khet Ke Chawal Se */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Khet Ke Chawal</h2>
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

    {/* Pustik Dal */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Pustik Dal</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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

    {/* Dairywala Veg Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Dairywala Veg Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Butter Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Lacchedar</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Kadhai</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Shahi Paneer</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Bhurji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>270</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mutter Paneer</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Tikka Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>255</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Kaju Paneer Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Patyala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Kadhai Paneer Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>255</p>
      </div>
    </div>

    {/* APMC Wala Veg Main Course */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">APMC Wala Veg Main Course</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mix Veg</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Anda Curry</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>230</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Kofta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>225</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Malai Kofta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Kolhapuri</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Veg Hyderabadi</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>220</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Methi Mutter Malai</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mushroom Masala</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>250</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Sev Bhaji</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>180</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tomato Chatani</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>150</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Village Spl Chatpata</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>280</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Bhaigan Bharta</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>200</p>
      </div>
    </div>

    {/* Paratha */}
    <h2 className="text-4xl font-bold font-serif text-center text-neutral-50 mt-12 mb-12">Paratha</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Aloo Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>60</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Gobi Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>60</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Mix Veg Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>60</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Paneer Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>80</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tandoori Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>35</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Tandoori Butter Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>40</p>
      </div>

      <div className="bg-none shadow-lg rounded-lg p-6 flex items-center justify-between mb-3 mt-3">
        <h3 className="text-2xl font-semibold font-serif text-neutral-50">Laccha Paratha</h3>
        <p className="text-lg text-neutral-50 flex items-center"><MdCurrencyRupee/>60</p>
      </div>
    </div>
    </div>
    </section>
  </>
  )
}

export default Veg
