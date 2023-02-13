// Header.tsx

export default () => {
	return (
		<nav className='p-8 items-center flex gap-4 text-gray-700 dark:text-zinc-200 border-b border-gray-100 dark:border-zinc-800'>
			<h1 className='flex-grow text-lg text-gray-400 dark:text-zinc-600 font-semibold hidden sm:block'>
				abiddiscombe.dev
			</h1>
			<a className='hover:underline' href='https://github.com/abiddiscombe'>GitHub</a>
			<a className='hover:underline' href='https://linkedin.com/in/archiebiddiscombe'>LinkedIn</a>
		</nav>
	)
}