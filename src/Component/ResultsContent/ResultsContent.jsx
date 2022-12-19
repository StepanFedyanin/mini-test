import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ButtonUI from '../UI/ButtonUI/ButtonUI';
import './ResultsContent.scss'

const DragBlock = ({ text, shine }) => {
	return (
		<div className={shine ? 'DragBlock__shine' : "DragBlock"}>{text}</div>
	)
}
const AnswerOptionsContent = ({ answerList, dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dragHandler }) => {
	return (
		<div className="">
			{answerList.answerList.map((item, index) =>
				<div
					key={item.text + index}
					draggable={true}
					onDragStart={(e) => dragStartHandler(e, item)}
					onDragLeave={(e) => dragLeaveHandler(e, item)}
					onDragEnd={(e) => dragEndHandler(e, item)}
					onDragOver={(e) => dragOverHandler(e, item)}
					data_table={answerList.table}
					className="AnswerContent"
				>{item.text}
				</div>
			)}
		</div>
	)
}
function ResultsContent() {
	const textArray = useSelector(state => state.textAnswer);
	const [answerArray, setAnswerArray] = useState(textArray.slice(0))
	const [answerOptions, setAnswerOptions] = useState([
		{
			table: 'firstWord',
			answerList: [{ text: 'Иногда' }, { text: 'Все' }, { text: 'Изредко' }]
		},
		{
			table: 'secondWord',
			answerList: [{ text: 'они' }, { text: 'мы' }, { text: 'не все' }]
		},
		{
			table: 'thirdWord',
			answerList: [{ text: 'ценим' }, { text: 'не ценим' }, , { text: 'радуемся' }]
		},
		{
			table: 'fourthWord',
			answerList: [{ text: 'добро' }, { text: 'зло' }, { text: 'агрессию' }]
		},
		{
			table: 'fifthWord',
			answerList: [{ text: 'когда' }, { text: 'лишь' }, { text: 'однако' }]
		},
		{
			table: 'sixthWord',
			answerList: [{ text: 'теряя' }, { text: 'приобретая' }, { text: 'находя' }]
		},
		{
			table: 'seventhWord',
			answerList: [{ text: 'когда-нибудь' }, { text: 'его' }, { text: 'безвозрастно' }]
		},
		{
			table: 'eighthWord',
			answerList: [{ text: 'возвратно' }, { text: 'невозвратно' }, { text: 'расстраиваемся' }]
		}

	])
	const dragStartHandler = (e, card) => {
	}
	const dragLeaveHandler = (e, card) => {

	}
	const dragEndHandler = (e, card) => {
		console.log(e.target.className);
		if (e.target.className == 'AnswerContent') {
			const index = answerArray.findIndex(table =>
				table.id_table == e.target.getAttribute('data_table')
			)
			const newAnswer = answerArray.splice(index, 1, {
				text: card.text,
				secret: () => changeSecret(),
				secretText: '???',
				id_table: e.target.getAttribute('data_table')
			})
			setAnswerArray(answerArray);
			setAnswerOptions(
				answerOptions.filter((item) =>
					item.text != card.text
				)
			)
		}
		const changeSecret = () => {
			return false
		}

	}
	const dragOverHandler = (e, card) => {

	}
	return (
		<div className='ResultsContent'>
			<div className="ResultsContent__aswerUsers">
				{
					answerArray.map(card =>
						<DragBlock key={card.id_table} shine={card.secret} text={card.secret ? card.text : card.secretText} />
					)
				}
			</div>
			<div className="ResultsContent__options">
				{
					answerOptions.map((opt, index) =>
						<AnswerOptionsContent
							key={opt.table + index}
							answerList={opt}
							dragStartHandler={dragStartHandler}
							dragLeaveHandler={dragLeaveHandler}
							dragEndHandler={dragEndHandler}
							dragOverHandler={dragOverHandler}
						/>
					)
				}
			</div>
			<div className="ResultsContent__btn">
				<ButtonUI func='' href='/'>На главную</ButtonUI>
			</div>
		</div>
	)

}
export default ResultsContent