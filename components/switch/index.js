import styles from './switch.module.css'

function Switch(props) {
	return (
		<div
			onClick={props.switch}
			className={`theme-switch p-r rounded ${styles.container}`}
		>
			<div className='p-a' />
		</div>
	)
}

export default Switch
