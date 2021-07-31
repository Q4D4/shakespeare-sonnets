import styles from './switch.module.css'

function Switch(props) {
	return (
		<div onClick={props.switch} className={`theme-switch ${styles.container}`}>
			<div />
		</div>
	)
}

export default Switch
