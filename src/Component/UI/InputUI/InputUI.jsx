import React from 'react'

function InputUI({ name, text, answer_right }) {
	const onChangeUserAnswer = (e) => {
		e.target.removeAttribute('data-answer-user');
		if (e.target.checked && answer_right) {
			e.target.setAttribute("data-answer-user", e.target.checked);
		} else {
			e.target.setAttribute("data-answer-user", '');
		}
	}
	return (
		<div>
			<input
				type="checkbox"
				id={name}
				data-answer-right={answer_right}
				data-answer-user=''
				// onChange={e => console.log(e.target.checked)}
				onChange={(e) => onChangeUserAnswer(e)}
			/>
			<label htmlFor={name}>{text}</label>
		</div>
	)
}

export default InputUI