// Hero.tsx

function Header () {
	return (
		<header className='p-8 flex flex-wrap justify-between items-center'>
			<h1 className='text-lg text-gray-700 dark:text-zinc-200 font-semibold hidden sm:block'>
				<a className='hover:underline' href='https://arch.codes'>arch.codes</a>
			</h1>
			<nav className='flex gap-4 text-gray-700  dark:text-zinc-200'>
				<a className='hover:underline' href='https://github.com/abiddiscombe'>GitHub</a>
				<a className='hover:underline' href='https://linkedin.com/in/archiebiddiscombe'>LinkedIn</a>
			</nav>
		</header>
	)
}

export default Header