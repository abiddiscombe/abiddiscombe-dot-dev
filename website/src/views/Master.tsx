// Master.tsx

import Header from '../elements/Header'
import Hero from '../elements/Hero'
import Portfolio from '../elements/Portfolio'
import Footer from '../elements/Footer'

function Master () {

	return (
		<div className='bg-gray-100 dark:bg-zinc-900'>
			<Header />
			<main className='min-h-screen '>
				<Hero />
				<Portfolio />
			</main>
			<Footer />
		</div>
	)
}

export default Master