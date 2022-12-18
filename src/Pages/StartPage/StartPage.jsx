import React from 'react'
import FooterContent from '../../Component/FooterContent/FooterContent'
import './StartPage.scss';
import philosifia from '../../Resurce/philosifia.png';
import ButtonUI from '../../Component/UI/ButtonUI/ButtonUI';
function StartPage() {
	return (
		<div className='startPage'>
			<div className="startPage__content">
				<div className="startPage__title">
					<h1 className='startPage__title--style'>Экзаменационная работа по философии</h1>
				</div>
				<div className="startPage__tools">
					<div className="startPage__tools--cover">
						<img src={philosifia} alt="cover" />
					</div>
					<div className="startPage__tools--description">
						<div className="startPage__description--container">
							<p className='startPage__description--text'>
								Описание шифрования: при правильном ответе на вопроос показывается слово, если не будут угаданы все слова, то в конце надо будет дать ответ на основе тех слов, которые показаны.
							</p>
						</div>
						<div className="startPage__description--btn">
							<ButtonUI href="/answer/0">Разгадать шифрование</ButtonUI>
						</div>
					</div>
				</div>
			</div>
			<FooterContent />
		</div>
	)
}

export default StartPage