"use client"
import React from 'react'
import Image from "next/image";
import { redirect } from "next/navigation";
const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            <div className="text-center">
                <Image
                    src="https://babynama.com/_next/static/media/logo-light.f8d530c6.svg"
                    alt="Babynama Logo"
                    width={150}
                    height={35}
                    priority
                    className="mx-auto mb-8"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Welcome to the Babynama Intern Assignment
                </h1>
                <p className="text-lg text-gray-600">
                    Your task is to build the feature at the <code>/webinars</code> page.
                </p>
                <p className="mt-4 text-gray-500">Good luck!</p>
                <button
                    className="px-6 py-3 mt-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={(e) => {
                        e.preventDefault()
                        redirect('/webinars')
                    }}
                >
                    Webinars Page
                </button>
            </div>
        </main>
    )
}

export default HomePage
