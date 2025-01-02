import React from 'react'
import { Link } from 'react-router';

const Work = () => {
    const projects = [
        { "name": "Portfolio project ", "link": "/", "image": 'portfolio.PNG' },
        { "name": "movie_app project", "link": "https://hamzanajem.github.io/react-movie-app/", "image": 'movie1.PNG' },
        { "name": "ItPourTous project", "link": "https://www.itpourtous.ma/", "image": 'itourtous.PNG' },
        { "name": "project4", "link": "/", "image": 'proj1.png' },
        { "name": "project5", "link": "/", "image": 'proj2.png' },
        { "name": "project6", "link": "/", "image": 'proj4.png' }
    ];
    return (
        <div className='max-w-[1200px] mx-auto p-6'>
            <div className='pb-8'>
                <p className='primary-color font-bold text-4xl mb-3'>Work</p>
                <p className='text-gray-400'>Check out same of my recent work</p>

            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 ' >
                {projects.map((proj, key) =>
                    <div className='  group duration-300 hover:scale-105  ease-in-out overflow-hidden rounded-2xl  flex justify-center items-center relative ' key={key}>
                        <img src={`./assets/${proj.image}`} alt='movieapp' className='w-full h-full  object-fill' />
                        <div className=' opacity-0   absolute inset-0 group-hover:opacity-90  bg-[gray]/70 flex flex-col justify-center items-center '>
                            <span className='text-2xl font-bold text-white tracking-wider'>{proj.name}</span>
                            <div className='pt-8 '>
                                <a href={proj.link} target='_blanck'>
                                    <button className='rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'> live</button>
                                </a>
                            </div>
                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Work