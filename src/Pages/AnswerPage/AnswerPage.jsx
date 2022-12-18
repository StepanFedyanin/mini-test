import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FooterContent from '../../Component/FooterContent/FooterContent'
import ProgressBar from '../../Component/ProgressBar/ProgressBar'
import ButtonUI from '../../Component/UI/ButtonUI/ButtonUI'
import InputUI from '../../Component/UI/InputUI/InputUI'
import { qestion__list } from '../../QestionsObj/QestionsObj'
import { ChangeShow } from '../../Redux/Reducer/ProgressAnswer'
import { overwriting } from '../../Redux/Reducer/QestionContent'
import './AnswerPage.scss'
function AnswerPage() {
	const params = useParams();
	const dispath = useDispatch();
	const qestionContent = useSelector(state => state.qestionContent);
	const answer_list = useRef('*')
	useEffect(() => {
		dispath(overwriting(qestion__list[params.number]))
	}, [params])
	const checkAnswer = () => {
		const arrayChildren = Array.from(answer_list.current.children);
		const countUserAnswer = arrayChildren.filter(item =>
			Array.from(item.children)[0].getAttribute('data-answer-right') == Array.from(item.children)[0].getAttribute('data-answer-user')
		).length

		const countTrueAnswer = qestion__list[params.number].qestion.filter(item => item.qestion__answer == true).length
		console.log(countTrueAnswer, countUserAnswer);

		if (countTrueAnswer == countUserAnswer) {
			dispath(ChangeShow(params.number))
		}
	}
	return (
		<div className='answer'>
			<ProgressBar params={params.number} />
			<div className="answer__content">
				<div className="answer__content--title">
					<h1>{qestionContent.title}</h1>
				</div>
				<div className="answer__content--list" ref={answer_list}>
					{
						qestionContent.qestion.map((item) =>
							<InputUI key={item.qestion__id} name={item.qestion__id} text={item.qestion__text} answer_right={item.qestion__answer} />
						)
					}
				</div>
				<div className="answer__content--btn">
					<ButtonUI func={checkAnswer} href={"/answer/" + (Number(params.number) + 1)}>Следующий вопрос</ButtonUI>
				</div>
			</div>
			<FooterContent />
		</div>
	)
}

export default AnswerPage