import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
// Data
import { SiteMetadataConfig } from '../data'
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
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#191b20' />
				<meta name='author' content='QADA' />
				<meta name='description' content={SiteMetadataConfig.description} />
				<meta name='keywords' content={SiteMetadataConfig.keywords} />
				<meta property='og:type' content='website' />

				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/icons/apple-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/icons/apple-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/icons/apple-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/icons/apple-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/icons/apple-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/icons/apple-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/icons/apple-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/icons/apple-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/icons/apple-icon-180x180.png'
				/>
				<link rel='apple-touch-icon' sizes='192x192' href='/logo192.png' />
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/icons/android-icon-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/icons/favicon-96x96.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/icons/favicon-16x16.png'
				/>

				<meta name='msapplication-TileColor' content='#191b20' />
				<meta
					name='msapplication-TileImage'
					content='/icons/ms-icon-144x144.png'
				/>

				<meta property='og:image' content='/og-1200-630.png' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:url' content='/og-1200-630.png' />

				<meta property='twitter:image' content='/og-1200-630.png' />

				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Header
				switch={handleThemeSwitch}
				langSwitch={setLanguage}
				currentLang={lang}
			/>
			<main className='w-100'>
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
