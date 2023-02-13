// TechStack.tsx

import { useState, useEffect } from 'react'

export default ({ href = '' }) => {
    return (
        <section className='px-8 py-8 | sm:max-w-[70rem] sm:mx-auto'>
            <TechStack href={href} />
        </section>
    )
}

function TechStack({ href = '' }) {

    const [shields, setShields] = useState([
        {
            id: 'Test',
            content: [
                {
                    name: undefined,
                    logo: undefined,
                    col_bg: undefined,
                    col_fg: undefined
                }
            ]
        }
    ])

    async function fetchShields() {
        const res = await fetch(href)
        const resJSON = await res.json()
        setShields(resJSON)
    }

    useEffect(() => {
        fetchShields()
    }, [])

    if (shields.length < 1) {

        return (
            <>
            </>
        )

    } else {

        return (
            <>
                <h2 className='mb-6 text-xl font-semibold text-gray-700 dark:text-zinc-200'>My Tech Stack</h2>
                { shields.map((category) => {
                    return (
                        <>
                            {category.id == 'Now Learning' &&
                                <h3 className='my-4 text-sm text-gray-700 dark:text-zinc-200'>I'm also learning how to use...</h3>
                            }
                            <div className='my-2 flex flex-wrap gap-2'>
                                {category.content.map((item) => {
                                    return (
                                        <img className='rounded-sm' src={`https://img.shields.io/badge/${item.name}-${item.col_bg}?style=for-the-badge&logo=${item.logo}&logoColor=${item.col_fg}`} alt={item.name} />
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
            </>
        )

    }



}

