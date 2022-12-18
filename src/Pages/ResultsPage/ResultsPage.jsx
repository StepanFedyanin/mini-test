import React from 'react'
import './ResultsPage.scss'
import FooterContent from '../../Component/FooterContent/FooterContent'
import ProgressBar from '../../Component/ProgressBar/ProgressBar'

function ResultsPage() {
	return (
		<div className='ResultsPage'>
			<ProgressBar params='8' />
			<FooterContent />
		</div>
	)
}

export default ResultsPage