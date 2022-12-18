const defaultState = [
	{
		text: 'Все',
		secret: false,
		secretText: '???'
	},
	{
		text: 'мы',
		secret: false,
		secretText: '??'
	},
	{
		text: 'ценим',
		secret: false,
		secretText: '?????'
	},
	{
		text: 'добро,',
		secret: false,
		secretText: '?????'
	},
	{
		text: 'лишь',
		secret: false,
		secretText: '????'
	},
	{
		text: 'теряя',
		secret: false,
		secretText: '?????'
	},
	{
		text: 'его',
		secret: false,
		secretText: '???'
	},
	{
		text: 'невозвратно',
		secret: false,
		secretText: '???????????'
	},
]

const CHANGE_SECRET = 'CHANGE_SECRET'

export const textAnswer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_SECRET:
			return (
				state.map((item, index) => {
					if (index == action.payload) {
						return {
							text: item.text,
							secret: true,
							secretText: item.secretText
						}
					}
					return item
				}
				)
			)
		default:
			return state
	}
}
export const ChangeShow = (payload, index) => { return { type: CHANGE_SECRET, payload } }
