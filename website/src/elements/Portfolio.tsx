// Portfolio.tsx

import { useState, useEffect } from 'react'

function PortfolioCard({ title = 'Untitled Card', href = '', desc = '', tags = [] }) {
    return (
        <a href={href} target='_blank'>
            <div className='px-6 py-8 max-w-[21rem] h-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded hover:shadow-md'>
                <h3 className='mb-1 text-lg text-gray-700 dark:text-zinc-200'>{title}</h3>
                <p className='text-sm text-gray-500 dark:text-zinc-400'>{desc} </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    { tags.map((tag) => {
                        return (
                            <span className='text-xs text-gray-400 dark:text-zinc-600 font-mono uppercase before:content-["#"]'>{tag}</span>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}

function Portfolio() {

    const [projects, setProjects] = useState({
        personal: [{
            name: '',
            href: '',
            desc: '',
            tags: []
        }],
        ordnancesurvey: [{
            name: '',
            href: '',
            desc: '',
            tags: []
        }]
    })

    async function fetchProjectList() {
        const res = await fetch('./projects.json')
        const resJSON = await res.json()
        setProjects(resJSON)
    }

    useEffect(() => {
        fetchProjectList()
    }, [])

    if (projects.personal.length > 0) {
        return (
            <section className='px-8 py-2'>
                <div className='sm:max-w-[68rem] sm:mx-auto text-gray-700 dark:text-zinc-200'>
                    <h2 className='my-6 text-xl font-semibold'>Projects</h2>
                    <div className='mb-4 flex flex-row flex-wrap gap-4'>
                        {projects.personal.map((project) => {
                            return (
                                <PortfolioCard title={project.name} href={project.href} desc={project.desc} tags={project.tags} />
                            )
                        })}
                    </div>
                    <h2 className='mt-6 mb-1 text-xl font-semibold'>Projects @ Ordnance Survey</h2>
                    <p className='mb-6 text-sm italic text-gray-400'>Some of my public-facing work...</p>
                    <div className='mb-4 flex flex-wrap gap-4'>
                        {projects.ordnancesurvey.map((project) => {
                            return (
                                <PortfolioCard title={project.name} href={project.href} desc={project.desc} tags={project.tags} />
                            )
                        })}
                    </div>
                </div>

            </section>
        )
    } else {
        return (
            <section></section>
        )
    }
}

export default Portfolio