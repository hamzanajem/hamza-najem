import React from 'react'

const About = () => {
    return (
        <div className='bg-black md:h-[500px] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 mx-auto my-10 ' id='about'>
            <div className=' my-auto text-left mx-6'>
                <h1 className='primary-color font-bold text-4xl mb-4 '>About Me</h1>
                <p className='text-base text-white leading-relaxed '>
                    I'm a passionate React Developer with a strong focus on building dynamic, responsive, and scalable web applications. With hands-on experience in JavaScript, React, Redux, and RESTful APIs, I specialize in crafting intuitive user interfaces and delivering high-performance single-page applications (SPAs). <br />

                    I believe in Reusable Component Design and clean, maintainable code that drives seamless user experiences. Constantly evolving with the latest web technologies, I enjoy solving complex problems and collaborating with teams to bring creative ideas to life. <br />

                    I'm currently seeking opportunities to contribute my skills to innovative projects and grow as a developer in a forward-thinking environment.
                </p></div>
            <div className='mx-auto my-auto  p-8 md:p-0 hover:scale-105   duration-300'><img className='rounded-3xl w-[300px] sm:w-[400px]' src='assets/react-js2.png' alt='hamza' /></div>
        </div>
    )
}

export default About