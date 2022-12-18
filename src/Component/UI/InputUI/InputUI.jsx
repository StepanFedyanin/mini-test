import React from 'react'
import './InputUI.scss'
function InputUI({ name, text, answer_right, type, width = false }) {
	const onChangeUserAnswer = (e) => {
		e.target.removeAttribute('data-answer-user');
		if (e.target.checked) {
			e.target.setAttribute("data-answer-user", e.target.checked);
		} else {
			e.target.setAttribute("data-answer-user", '');
		}
	}
	return (
		<div className={width ? 'InputUI--half' : "InputUI"}>
			<input
				className={type == 'radio' ? 'InputUI__radio' : 'InputUI__checkbox'}
				type={type}
				id={name}
				name={type}
				data-answer-right={answer_right}
				data-answer-user=''
				// onChange={e => console.log(e.target.checked)}
				onChange={(e) => onChangeUserAnswer(e)}
			/>
			<label className='InputUI__label' htmlFor={name}>{text}</label>
		</div>
	)
}

export default InputUI