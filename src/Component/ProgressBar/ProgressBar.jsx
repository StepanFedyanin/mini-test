import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeShow } from '../../Redux/Reducer/ProgressAnswer';
import './ProgressBar.scss'
function ProgressBar({ params }) {
	const dispath = useDispatch();
	const textArray = useSelector(state => state.textAnswer);
	const progressBar = useRef("*")
	useEffect(() => {
		progressBar.current.style.width = (100 / 8 * params) + '%';
	}, [params])
	return (
		<div className='ProgressBar'>
			<div className="ProgressBar__list">
				{
					textArray.map((text, index) =>

						text.secret ?
							<div key={index} className="ProgressBar__list--shine">{text.text}</div>
							:
							<div key={index} className="ProgressBar__list--item">{text.secretText}</div>
					)
				}
			</div>
			<div className="ProgressBar__show">
				<div className="ProgressBar__show--after" ref={progressBar}></div>
			</div>
		</div>
	)
}

export default ProgressBar