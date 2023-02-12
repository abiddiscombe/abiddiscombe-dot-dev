// TechStack.tsx

import { useState, useEffect } from 'react'

function TechStack() {

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
        const res = await fetch('./shields.json')
        const resJSON = await res.json()
        setShields(resJSON)
    }

    useEffect(() => {
        fetchShields()
    }, [])

    if (shields.length < 1) {
        return (
            <section>
                {/* return nothing */}
            </section>
        )
    }

    return (
        <section className='py-2 sm:max-w-[68rem] sm:mx-auto text-gray-700 dark:text-zinc-200'>
            <h2 className='mb-4 text-xl font-semibold'>My Tech Stack</h2>
            {shields.map((category) => {
                return (
                    <>
                        {category.id == 'Now Learning' &&
                            <h3 className='mt-4 text-sm'>I'm also learning how to use...</h3>
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
        </section>
    )

}

export default TechStack