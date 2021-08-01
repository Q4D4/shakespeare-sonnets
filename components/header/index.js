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
		<header className={`w-100 p-f ${styles.container}`}>
			<div className='container d-f-bc'>
				<div className={styles.logo}>{LogoIcon}</div>
				<div className={`d-f-bc ${styles.settings}`}>
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
