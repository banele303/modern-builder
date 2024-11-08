"use state"
import { useState } from 'react'
import Image from 'next/image'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PortFolio() {


  const services = {
    bathroom: [
      { title: 'Luxury Shower Installation', description: 'Transform your bathroom with our state-of-the-art shower systems.', image: '/placeholder.svg?height=400&width=600' },
      { title: 'Custom Vanity Design', description: 'Tailor-made vanities that combine style and functionality.', image: '/placeholder.svg?height=400&width=600' },
      { title: 'Tile and Flooring', description: 'Premium materials and expert installation for stunning floors.', image: '/placeholder.svg?height=400&width=600' },
    ],
    kitchen: [
      { title: 'Gourmet Kitchen Layouts', description: 'Optimize your kitchen space for the ultimate cooking experience.', image: '/placeholder.svg?height=400&width=600' },
      { title: 'Custom Cabinetry', description: 'Handcrafted cabinets designed to your exact specifications.', image: '/placeholder.svg?height=400&width=600' },
      { title: 'Smart Appliance Integration', description: 'Seamlessly incorporate the latest in kitchen technology.', image: '/placeholder.svg?height=400&width=600' },
    ],
  }

  const portfolioItems = [
    { title: 'Modern Bathroom Oasis', image: '/barthrooms/bb3.jpg' },
    { title: 'Sleek Kitchen Renovation', image: '/kitchenr/k5.jpeg' },
    { title: 'Luxurious Master Bath', image: '/barthrooms/k&b.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k10.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kitchen-remodeling1.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k12.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kitchen-remodeling3.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kbath1.heic' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k9.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k8.jpeg' },
  

  ]

  const faqs = [
    { question: 'How long does a typical remodeling project take?', answer: 'Project duration varies depending on the scope, but most bathroom remodels take 2-3 weeks, while kitchen remodels typically take 3-5 weeks.' },
    { question: 'Do you provide design services?', answer: 'Yes, we offer comprehensive design services to help you visualize and plan your perfect space before construction begins.' },
    { question: 'Are you licensed and insured?', answer: 'Absolutely. We are fully licensed and insured for your peace of mind and protection.' },
    { question: 'Can you work with my budget?', answer: 'We strive to work within various budgets and can provide options to help you achieve your desired results while respecting your financial constraints.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
     

      

      

      

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Portfolio</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      
    </div>
  )
}