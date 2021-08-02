import { useEffect } from 'react'
import { getSonnetsIds, getSonnet, getSortedSonnets } from '../../lib/sonnets'
import SideBar from '../../components/sidebar'
import Pager from '../../components/pager'
import Head from 'next/head'
// Data
import { SiteMetadataConfig } from '../../data'
// Styles
import styles from '../../styles/pages/sonnet.module.css'

export default function Sonnet({ currentLang, langSwitch, allSonnets, sonnetData }) {
	const id = parseInt(sonnetData.id)

	useEffect(() => {
		if (currentLang) {
			if (currentLang !== 'en') {
				langSwitch('en')
			}
		} else {
			langSwitch('en')
		}
	}, [])

	return (
		<div className={`container d-f jc-fs ${styles.container}`}>
			<Head>
				<title>{`Sonnet ${id} - ${SiteMetadataConfig.title}`}</title>
				<meta
					property='og:title'
					content={`Sonnet ${id} - ${SiteMetadataConfig.og_title}`}
				/>
				<meta
					property='og:description'
					content={`${sonnetData.title} ${SiteMetadataConfig.og_description}`}
				/>
				<meta property='og:url' content={`/en/${id}`} />
				<meta name='robots' content='index, follow' />
			</Head>

			<SideBar
				header={'Table of contents'}
				current={id}
				sonnets={allSonnets}
				filterPlaceholder={'filter...'}
				clearValue={'clear'}
				noResultsText='No results found'
				lang='en'
			/>
			{/* <hr /> */}

			<div className='w-100'>
				<h1 className='fw-l ta-c'>{id}</h1>
				<div
					className={`w-100 d-f jc-c ${styles.content}`}
					dangerouslySetInnerHTML={{ __html: sonnetData.contentHtml }}
				/>
				<Pager
					prev={{
						value: 'Previous',
						id: id - 1,
						href: `/en/${id - 1}`,
						first: 1,
					}}
					next={{
						value: 'Next',
						id: id + 1,
						href: `/en/${id + 1}`,
						last: allSonnets.length,
					}}
				/>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const paths = getSonnetsIds('en')
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const allSonnets = getSortedSonnets('en')
	const sonnetData = await getSonnet('en', params.id)
	return {
		props: {
			allSonnets,
			sonnetData,
		},
	}
}
