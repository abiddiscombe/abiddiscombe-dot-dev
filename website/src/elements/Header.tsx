// Header.tsx

export default () => {
	return (
		<header className='bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 drop-shadow-sm sticky top-0'>
			<div className='px-8 py-6 items-center flex gap-4'>
				<h1 className='flex-grow text-lg text-gray-400 dark:text-zinc-600 hidden sm:block'>
					@<b>abiddiscombe</b>
				</h1>
				<a className='text-gray-700 dark:text-zinc-200 hover:underline' href='https://github.com/abiddiscombe'>GitHub</a>
				<a className='text-gray-700 dark:text-zinc-200 hover:underline' href='https://linkedin.com/in/archiebiddiscombe'>LinkedIn</a>
			</div>
		</header>
	)
}