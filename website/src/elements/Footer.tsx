// Footer.tsx

export default () => {
    return (
        <footer className='px-8 py-8 mt-4 | sm:max-w-[68rem] sm:mx-auto | border-t border-gray-200 dark:border-zinc-700'>
            <Footer />
        </footer>
    )
}

function Footer() {
    return (
        <div className='flex flex-wrap justify-between text-gray-400 dark:text-zinc-600'>
            <small>Made with ☕️ by <a className='hover:underline' href='https://github.com/abiddiscombe'>@abiddiscombe</a></small>
            <small><span className='text-gray-400 dark:text-zinc-600'><a href='https://abiddiscombe.dev'>abiddiscombe.dev</a></span></small>
        </div>
    )
}