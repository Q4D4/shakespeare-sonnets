import { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
// Fonts
import '../fonts/fonts.css'
// Styles
import '../styles/globals.css'
import '../styles/theme.css'

function MyApp({ Component, pageProps }) {
	const [lang, setLang] = useState()

	useEffect(() => {
		// Theme
		const currentTheme = localStorage.getItem('theme')
		if (currentTheme) {
			document.body.className = currentTheme
		} else {
			setTheme('dark')
		}
		// Language
		const currentLang = localStorage.getItem('lang')
		if (currentLang) {
			setLanguage(currentLang)
		} else {
			setLanguage('en')
		}
	}, [])

	function handleThemeSwitch() {
		const currentTheme = localStorage.getItem('theme')
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
	}

	function setTheme(theme) {
		localStorage.setItem('theme', theme)
		document.body.className = theme
	}

	function setLanguage(language) {
		localStorage.setItem('lang', language)
		setLang(language)
	}

	return (
		<>
			<Header
				switch={handleThemeSwitch}
				langSwitch={setLanguage}
				currentLang={lang}
			/>
			<main>
				<Component currentLang={lang} langSwitch={setLanguage} {...pageProps} />
			</main>
			<Footer
				text={
					lang === 'ge'
						? 'ინგლისურიდან თარგმნა რეზო თაბუკაშვილმა'
						: 'Translated into Georgian by Rezo Tabukashvili'
				}
			/>
		</>
	)
}

export default MyApp
