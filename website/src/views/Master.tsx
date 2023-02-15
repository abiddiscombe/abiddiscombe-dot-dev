// Master.tsx

import { useState, useEffect } from 'react'

import Header from '../elements/Header'
import Hero from '../elements/Hero'
import Shields from '../elements/Shields'
import Portfolio from '../elements/Portfolio'
import Footer from '../elements/Footer'

export default () => {

	const [dynamicContent, setDynamicContent] = useState({
		shields: [],
		portfolio: []
	})

	async function fetchDynamicContent() {
		const res = await fetch('./data/content.json')
		const resJSON = await res.json()
		setDynamicContent(resJSON)
	}

	useEffect(() => {
		fetchDynamicContent()
	}, [])

	return (
		<div className='min-h-screen bg-gray-100 dark:bg-zinc-900'>
			<Header />
			<Hero />
			<main>
	
				{dynamicContent.shields[0] &&
					<Shields content={dynamicContent.shields} />
				}

				{dynamicContent.portfolio[0] &&
					<Portfolio content={dynamicContent.portfolio} />
				}

			</main>
			<Footer />
		</div>
	)

}