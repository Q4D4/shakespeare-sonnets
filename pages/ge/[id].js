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
			if (currentLang !== 'ge') {
				langSwitch('ge')
			}
		} else {
			langSwitch('ge')
		}
	}, [])

	return (
		<div className={`container d-f jc-fs ${styles.container}`}>
			<Head>
				<title>{`სონეტი ${id} - ${SiteMetadataConfig.ge_title}`}</title>
				<meta
					property='og:title'
					content={`სონეტი ${id} - ${SiteMetadataConfig.ge_og_title}`}
				/>
				<meta
					property='og:description'
					content={`${sonnetData.title} ${SiteMetadataConfig.ge_og_description}`}
				/>
				<meta property='og:url' content={`/ge/${id}`} />
			</Head>

			<SideBar
				header={'სარჩევი'}
				current={id}
				sonnets={allSonnets}
				filterPlaceholder={'ფილტრი...'}
				clearValue={'მოშორება'}
				noResultsText='შედეგები ვერ მოიძებნა'
				lang='ge'
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
						value: 'წინა',
						id: id - 1,
						href: `/ge/${id - 1}`,
						first: 1,
					}}
					next={{
						value: 'შემდეგი',
						id: id + 1,
						href: `/ge/${id + 1}`,
						last: allSonnets.length,
					}}
				/>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const paths = getSonnetsIds('ge')
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const allSonnets = getSortedSonnets('ge')
	const sonnetData = await getSonnet('ge', params.id)
	return {
		props: {
			allSonnets,
			sonnetData,
		},
	}
}
