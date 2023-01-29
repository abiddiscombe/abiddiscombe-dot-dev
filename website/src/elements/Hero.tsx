// Hero.tsx

function Hero() {
    return (
        <section className='px-8 pt-14 sm:pt-36 pb-16'>
            <div className='sm:w-[68rem] sm:mx-auto text-gray-700 dark:text-zinc-200'>
                <div className='max-w-2xl'>
                    <h2 className='mb-4 text-4xl font-semibold'>Hey, I'm Archie!</h2>
                    <p className='text-lg'>I'm a <a className='text-purple-700 dark:text-purple-400 hover:underline' href='https://www.durham.ac.uk/geography'>BSc Geography</a> graduate working at <a className='text-purple-700 dark:text-purple-400 hover:underline' href='https://ordnancesurvey.co.uk/'>Ordnance Survey</a>. I'm training as a full-stack developer with a specialism in geospatial. I enjoy music, getting outdoors, and discovering new tech through self-taught projects and self-hosting.</p>
                </div>
            </div>

        </section>
    )
}

export default Hero