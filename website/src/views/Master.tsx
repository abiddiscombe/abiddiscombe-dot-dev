// Master.tsx

import Header from '../elements/Header'
import Hero from '../elements/Hero'
import TechStack from '../elements/TechStack'
import Portfolio from '../elements/Portfolio'
import Footer from '../elements/Footer'

export default () => {

	const dataSources = {
		techStack: './shields.json',
		portfolioPlay: './portfolio-play.json',
		portfolioWork: './portfolio-work.json'
	}

	return (
		<div className='bg-gray-100 dark:bg-zinc-900'>
			<Header />
			<main>
				<Hero />
				<TechStack href={dataSources.techStack} />
				<Portfolio href={dataSources.portfolioPlay} title='Projects' />
				<Portfolio href={dataSources.portfolioWork} title='Open Projects @ Ordnance Survey' />
			</main>
			<Footer />
		</div>
	)

}