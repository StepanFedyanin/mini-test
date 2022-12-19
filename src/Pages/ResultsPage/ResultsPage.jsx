import React from 'react'
import './ResultsPage.scss'
import FooterContent from '../../Component/FooterContent/FooterContent'
import ProgressBar from '../../Component/ProgressBar/ProgressBar'
import ResultsContent from '../../Component/ResultsContent/ResultsContent'

function ResultsPage() {
	return (
		<div className='ResultsPage'>
			<ResultsContent />
			<FooterContent />
		</div>
	)
}

export default ResultsPage