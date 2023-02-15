// Portfolio.tsx

interface PortfolioGroup {
    id: string;
    items: (PortfolioGroupItem)[];
}

interface PortfolioGroupItem {
    name: string;
    href: string;
    desc: string;
    tags: string[];
}

export default ({ content = []} ) => {
    return (
        <section>
            <div className='px-8 py-8 | sm:max-w-[70rem] sm:mx-auto'>
                {content.map((category: PortfolioGroup, key:number) => {
                    return (
                        <div key={key}>
                            <h2 className='mb-6 text-xl font-semibold text-gray-700 dark:text-zinc-200'>{category.id}</h2>
                            <div className='mb-4 flex flex-wrap gap-4'>
                                { category.items.map((item: PortfolioGroupItem, key: number) => {
                                    return (
                                        <PortfolioCard key={key} details={item} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

function PortfolioCard({ details }: { details: PortfolioGroupItem } ) {
    return (
        <a href={details.href} target='_blank'>
            <div className='px-6 py-8 max-w-[21rem] h-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded hover:shadow-md'>
                <h3 className='mb-1 text-lg text-gray-700 dark:text-zinc-200'>{details.name}</h3>
                <p className='text-sm text-gray-500 dark:text-zinc-400'>{details.desc} </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {details.tags.map((tag: string, key: number) => {
                        return (
                            <span key={key} className='text-xs text-gray-400 dark:text-zinc-600 font-mono uppercase before:content-["#"]'>{tag}</span>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}