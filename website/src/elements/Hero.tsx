// Hero.tsx

export default () => {
    return (
        <section>
            <div className='px-8 py-32 | sm:max-w-[70rem] sm:mx-auto'>
                <div className='max-w-2xl text-gray-700 dark:text-zinc-200'>
                    <h2 className='mb-4 text-4xl font-semibold'>Hey, I'm Archie!</h2>
                    <p className='text-lg'>I'm a <a className='text-purple-700 dark:text-purple-400 hover:underline' href='https://www.durham.ac.uk/geography'>BSc Geography</a> graduate working at <a className='text-purple-700 dark:text-purple-400 hover:underline' href='https://ordnancesurvey.co.uk/'>Ordnance Survey</a>. I'm training as a full-stack developer with a specialism in geospatial. I enjoy music, getting outdoors, and discovering new tech through self-taught projects and self-hosting.</p>
                </div>
            </div>
        </section>
    )
}