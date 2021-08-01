import Link from 'next/link'
// Styles
import styles from '../styles/pages/not_found.module.css'

function NotFound() {
	return (
		<div className={`container h-100 d-f-cc fd-c ${styles.container}`}>
			<b>Error 404</b>Page Not Found
		</div>
	)
}

export default NotFound
