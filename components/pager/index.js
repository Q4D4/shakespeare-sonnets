import Button from '../button'
// Styles
import styles from './pager.module.css'

function Pager(props) {
	return (
		<div className={`w-100 d-f-bc ${styles.container}`}>
			<Button
				value={props.prev.value}
				href={props.prev.href}
				id={props.prev.id}
				isDisabled={props.prev.id < props.prev.first ? true : false}
			/>
			<Button
				value={props.next.value}
				href={props.next.href}
				id={props.next.id}
				isDisabled={props.next.id > props.next.last ? true : false}
			/>
		</div>
	)
}

export default Pager
