import Link from 'next/link'
// Styles
import styles from './button.module.css'

function Button(props) {
	return (
		<Link href={props.href}>
			<a
				className={`${props.isDisabled ? 'disabled' : ''} ${
					styles.wrapper
				} pager-button rounded`}
			>
				{props.value} {props.isDisabled ? null : `(${props.id})`}
			</a>
		</Link>
	)
}

export default Button
