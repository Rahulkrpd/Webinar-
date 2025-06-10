"use client"
import React from 'react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { redirect } from 'next/navigation';
import { useParams } from 'next/navigation';

const data = [
    {
        id: 1,
        title: 'The Future of AI',
        speaker: 'Dr. Alice Kapoor',
        date: '2025-07-01',
        description:
            'A discussion on upcoming trends in Artificial Intelligence and their impact on society.',
    },
    {
        id: 2,
        title: 'Climate Change and You',
        speaker: 'Prof. Rajiv Menon',
        date: '2025-07-05',
        description:
            'Exploring the role individuals can play in combating climate change.',
    },
    {
        id: 3,
        title: 'The Rise of Quantum Computing',
        speaker: 'Dr. Sarah Lee',
        date: '2025-07-10',
        description:
            'An introduction to quantum computing and how it differs from classical computing.',
    },
    {
        id: 4,
        title: 'Building Scalable Web Apps',
        speaker: 'John Carter',
        date: '2025-07-12',
        description:
            'Best practices for developing scalable and maintainable web applications.',
    },
    {
        id: 5,
        title: 'Mental Health in the Workplace',
        speaker: 'Dr. Meera Sinha',
        date: '2025-07-15',
        description:
            'Strategies for maintaining mental health and supporting team well-being at work.',
    },
    {
        id: 6,
        title: 'Design Thinking for Innovation',
        speaker: 'Laura Chen',
        date: '2025-07-18',
        description:
            'How design thinking can be used to drive innovation in any industry.',
    },
    {
        id: 7,
        title: 'Cybersecurity in 2025',
        speaker: 'Anil Kumar',
        date: '2025-07-20',
        description:
            'Emerging threats in cybersecurity and how organizations can stay protected.',
    },
    {
        id: 8,
        title: 'The Power of Habit',
        speaker: 'Rachel Adams',
        date: '2025-07-22',
        description:
            'Understanding how habits form and how to change them for personal growth.',
    },
    {
        id: 9,
        title: 'Intro to Blockchain Technology',
        speaker: 'Vikram Shah',
        date: '2025-07-25',
        description:
            'A beginner-friendly session on blockchain and its real-world applications.',
    },
    {
        id: 10,
        title: 'Public Speaking Mastery',
        speaker: 'Tom Rivera',
        date: '2025-07-28',
        description:
            'Learn tips and techniques to improve your public speaking confidence and clarity.',
    },
];

const Page = () => {
    const params = useParams();
    const id = parseInt(params?.id as string || '0');

    const item = data.find((i) => i.id === id);

    if (!item) {
        return <div className="text-center py-12 text-red-500">Item not found</div>;
    }

    return (
        <div className="mt-10 px-4">
            <CardContainer className="inter-var">
                <CardBody className="bg-white dark:bg-black border border-black/10 dark:border-white/20 rounded-2xl p-6 w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Speaker Image */}


                        {/* Webinar Details */}
                        <div className="space-y-3">
                            <CardItem translateZ="50" className="text-2xl font-bold text-neutral-800 dark:text-white">
                                {item.title}
                            </CardItem>

                            <CardItem translateZ="40" className="text-sm text-gray-500 dark:text-gray-400">
                                Speaker: {item.speaker}
                            </CardItem>

                            <CardItem translateZ="50" className="text-xl font-semibold text-black dark:text-white">
                                Date: {new Date(item.date).toLocaleDateString()}
                            </CardItem>

                            <CardItem translateZ="30" className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {item.description}
                            </CardItem>

                            <CardItem translateZ="30" className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Join us for this exciting webinar!</p>
                                </div>
                            </CardItem>



                        </div>
                       
                    </div>
                </CardBody>
            </CardContainer>
            <div className='w-full mt-8 flex justify-center items-center'>
                <button 
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={(e) => {
                        e.preventDefault()
                        redirect('/webinars')
                    }}
                >
                    Go Back to Webinars
                </button>
            </div>
        </div>
    );
};

export default Page;
