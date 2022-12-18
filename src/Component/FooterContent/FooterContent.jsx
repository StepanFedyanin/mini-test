import React from 'react'
import './FooterContent.scss'
import telegramIcon from '../../Resurce/telegramIcon.png'
import vkIcon from '../../Resurce/vkIcon.png'
function FooterContent() {
	return (
		<div className='footer'>
			<div className="footer__container">
				<div className="footer__container--description">
					<p className='footer__description--name'>Выполнил: Федянин Степан Олегович</p>
				</div>
				<div className="footer__container--connection">
					<a className='footer__connection--item' href="https://web.telegram.org/k/#@bb_fedyanin">
						<img src={telegramIcon} alt="" />
					</a>
					<a className='footer__connection--item' href="https://vk.com/bb_fedyanin">
						<img src={vkIcon} alt="" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default FooterContent