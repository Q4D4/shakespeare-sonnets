import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

function HomePage() {
	const router = useRouter()
	useEffect(() => {
		const currentLang = localStorage.getItem('lang')
		if (currentLang && currentLang == 'ge') {
			router.push('/ge/1')
		} else {
			router.push('/en/1')
		}
	}, [])
	return (
		<Head>
			<meta name='robots' content='noindex, nofollow' />
		</Head>
	)
}

export default HomePage
