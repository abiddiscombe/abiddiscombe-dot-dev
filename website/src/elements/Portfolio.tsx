// Portfolio.tsx

import { useState, useEffect } from 'react'

export default ({ href = '', title = ''}) => {
    return (
        <section className='px-8 py-8 | sm:max-w-[70rem] sm:mx-auto'>
            <h2 className='mb-6 text-xl font-semibold text-gray-700 dark:text-zinc-200'>{title}</h2>
            <Portfolio href={href} />
        </section>
    )
}

function PortfolioCard({ title = 'Untitled Card', href = '', desc = '', tags = [] }) {
    return (
        <a href={href} target='_blank'>
            <div className='px-6 py-8 max-w-[21rem] h-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded hover:shadow-md'>
                <h3 className='mb-1 text-lg text-gray-700 dark:text-zinc-200'>{title}</h3>
                <p className='text-sm text-gray-500 dark:text-zinc-400'>{desc} </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => {
                        return (
                            <span className='text-xs text-gray-400 dark:text-zinc-600 font-mono uppercase before:content-["#"]'>{tag}</span>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}

function Portfolio({ href = ''}) {

    const [projects, setProjects] = useState([
        {
            name: '',
            href: '',
            desc: '',
            tags: []
        }
    ])

    async function fetchProjectList() {
        const res = await fetch(href)
        const resJSON = await res.json()
        setProjects(resJSON)
    }

    useEffect(() => {
        fetchProjectList()
    }, [])

    if (projects.length > 0) {
        return (
            <div className='mb-4 flex flex-wrap gap-4'>
                { projects.map((project) => {
                    return (
                        <PortfolioCard title={project.name} href={project.href} desc={project.desc} tags={project.tags} />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}