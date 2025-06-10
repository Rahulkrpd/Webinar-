"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { redirect } from "next/navigation";


const data = [
  {
    "id": 1,
    "title": "The Future of AI",
    "speaker": "Dr. Alice Kapoor",
    "date": "2025-07-01",
    "description": "A discussion on upcoming trends in Artificial Intelligence and their impact on society."
  },
  {
    "id": 2,
    "title": "Climate Change and You",
    "speaker": "Prof. Rajiv Menon",
    "date": "2025-07-05",
    "description": "Exploring the role individuals can play in combating climate change."
  },
  {
    "id": 3,
    "title": "The Rise of Quantum Computing",
    "speaker": "Dr. Sarah Lee",
    "date": "2025-07-10",
    "description": "An introduction to quantum computing and how it differs from classical computing."
  },
  {
    "id": 4,
    "title": "Building Scalable Web Apps",
    "speaker": "John Carter",
    "date": "2025-07-12",
    "description": "Best practices for developing scalable and maintainable web applications."
  },
  {
    "id": 5,
    "title": "Mental Health in the Workplace",
    "speaker": "Dr. Meera Sinha",
    "date": "2025-07-15",
    "description": "Strategies for maintaining mental health and supporting team well-being at work."
  },
  {
    "id": 6,
    "title": "Design Thinking for Innovation",
    "speaker": "Laura Chen",
    "date": "2025-07-18",
    "description": "How design thinking can be used to drive innovation in any industry."
  },
  {
    "id": 7,
    "title": "Cybersecurity in 2025",
    "speaker": "Anil Kumar",
    "date": "2025-07-20",
    "description": "Emerging threats in cybersecurity and how organizations can stay protected."
  },
  {
    "id": 8,
    "title": "The Power of Habit",
    "speaker": "Rachel Adams",
    "date": "2025-07-22",
    "description": "Understanding how habits form and how to change them for personal growth."
  },
  {
    "id": 9,
    "title": "Intro to Blockchain Technology",
    "speaker": "Vikram Shah",
    "date": "2025-07-25",
    "description": "A beginner-friendly session on blockchain and its real-world applications."
  },
  {
    "id": 10,
    "title": "Public Speaking Mastery",
    "speaker": "Tom Rivera",
    "date": "2025-07-28",
    "description": "Learn tips and techniques to improve your public speaking confidence and clarity."
  }
]

const handelview = (id: number) => {
  redirect(`/webinar/${id}`)
}



function BackgroundGradientDemo() {
  return (
    <div className="py-12 bg-gray-900" id="product">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Webinars 
        </h2>
        
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-center cursor-pointer"
            // onClick={() => handleCardClick(item.id)}
          >
            <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between w-full max-w-sm hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{item.speaker}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm font-medium text-teal-600">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button onClick={() => handelview(item.id)} className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors" >
                    View
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}


export default BackgroundGradientDemo