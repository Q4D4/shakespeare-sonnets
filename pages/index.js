import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
	return <></>
}

export default HomePage
