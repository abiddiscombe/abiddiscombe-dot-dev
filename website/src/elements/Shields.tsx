// Shields.tsx

interface ShieldList {
    id: string | null;
    items: (Shield)[];
}

interface Shield {
    name: string;
    logo: string;
    col_bg: string;
    col_fg: string;
}

export default ({ content = [] }) => {
    return (
        <section className='px-8 py-8 | sm:max-w-[70rem] sm:mx-auto'>
            <h2 className='mb-6 text-xl font-semibold text-gray-700 dark:text-zinc-200'>My Tech Stack</h2>
            {content.map((list: ShieldList, key: number) => {
                return (
                    <div key={key}>
                        {list.id &&
                            <h3 className='my-4 text-sm text-gray-700 dark:text-zinc-200'>{list.id}</h3>
                        }
                        <div className='my-2 flex flex-wrap gap-2'>
                            {list.items.map((item, key: number) => {
                                return (
                                    <img key={key} className='rounded-sm' src={`https://img.shields.io/badge/${item.name}-${item.col_bg}?style=for-the-badge&logo=${item.logo}&logoColor=${item.col_fg}`} alt={item.name} />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

