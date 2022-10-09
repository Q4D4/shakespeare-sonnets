// Styles
import styles from './footer.module.css'

function Footer({ text }) {
	return (
		<footer className={styles.container}>
			<section className='ta-c container'>
				<p>{text}</p>
				<p>
					&copy; {new Date().getFullYear()} |{' '}
					<a
						className='fw-b'
						rel='noopener noreferrer'
						target='_blank'
						href='https://www.qada.ge'
					>
						QADA
					</a>
				</p>
			</section>
		</footer>
	)
}

export default Footer
