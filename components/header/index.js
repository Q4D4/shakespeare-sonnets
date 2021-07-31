import Link from 'next/link'
import { useRouter } from 'next/router'
import Switch from '../switch'
// Data
import { LangIcons, LogoIcon } from '../../data'
// Styles
import styles from './header.module.css'

function Header(props) {
	const router = useRouter()
	const { id } = router.query

	return (
		<header className={styles.container}>
			<div className='container'>
				<div className={styles.logo}>{LogoIcon}</div>
				<div className={styles.settings}>
					<Switch switch={props.switch} />

					<Link href={props.currentLang === 'en' ? `/ge/${id}` : `/en/${id}`}>
						<a
							onClick={() =>
								props.langSwitch(props.currentLang === 'en' ? 'ge' : 'en')
							}
							className={styles.lang}
						>
							{props.currentLang === 'en' ? LangIcons.ge : LangIcons.en}
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
