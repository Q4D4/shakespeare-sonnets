import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
// Styles
import styles from './sidebar.module.css'

function SideBar(props) {
	const filterRef = useRef()
	// State
	const [open, setOpen] = useState(false)
	const [results, setResults] = useState()

	useEffect(() => {
		if (!results) {
			setResults(props.sonnets)
		}
	}, [])

	const handleFilter = () => {
		const filterResults = props.sonnets.filter(({ id, title }) => {
			return `${id}. ${title}`
				.toLowerCase()
				.includes(filterRef.current.value.toLowerCase())
		})
		setResults(filterResults)
	}

	return (
		<div className={styles.container}>
			<div className={`w-100 d-f fd-c ${open ? styles.open : ''}`}>
				<div
					className={`sidebar-head w-100 d-f-bc p-r ${styles.head}`}
					onClick={() => {
						!open && setOpen(true)
					}}
				>
					<h3 className='fw-l'>{props.header}</h3>
					<div className='p-r d-f-ac fd-c' onClick={() => setOpen(!open)}>
						<span className='w-100'></span>
						<span className='w-100'></span>
						<span className='w-100'></span>
					</div>
				</div>
				<div
					className={`rounded sidebar-body w-100 d-n ai-fs fd-c ${styles.body}`}
				>
					<div className={`d-f-bc ${styles.form}`}>
						<input
							className='w-100 rounded'
							ref={filterRef}
							onChange={handleFilter}
							type='text'
							placeholder={props.filterPlaceholder}
						/>
						{results && props.sonnets.length !== results.length && (
							<input
								className='w-100 rounded'
								onClick={() => {
									filterRef.current.value = ''
									setResults(props.sonnets)
								}}
								type='button'
								value={props.clearValue}
							/>
						)}
					</div>
					<div className={`custom-scrollbar w-100 ${styles.list}`}>
						{results && results.length !== 0 ? (
							results.map((sonnet) => (
								<Link
									key={sonnet.id}
									href={`/${props.lang}/${sonnet.id}`}
									scroll={false}
								>
									<a
										className={`w-100 d-b o-h ${
											props.current == sonnet.id ? 'active' : ''
										}`}
									>
										{sonnet.id}. {sonnet.title}
									</a>
								</Link>
							))
						) : (
							<p className='w-100 ta-c'>{props.noResultsText}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
