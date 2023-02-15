// Header.tsx

export default () => {
	return (
		<header>
			<div className='p-8 items-center flex gap-4'>
				<h1 className='flex-grow text-lg text-gray-400 dark:text-zinc-600 font-semibold hidden sm:block'>
					abiddiscombe.dev
				</h1>
				<a className='text-gray-700 dark:text-zinc-200 hover:underline' href='https://github.com/abiddiscombe'>GitHub</a>
				<a className='text-gray-700 dark:text-zinc-200 hover:underline' href='https://linkedin.com/in/archiebiddiscombe'>LinkedIn</a>
			</div>
		</header>
	)
}