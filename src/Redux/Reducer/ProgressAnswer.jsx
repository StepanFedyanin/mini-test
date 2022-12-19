const defaultState = [
	{
		text: 'Все',
		secret: false,
		secretText: '???',
		id_table: "firstWord"
	},
	{
		text: 'мы',
		secret: false,
		secretText: '??',
		id_table: "secondWord"
	},
	{
		text: 'ценим',
		secret: false,
		secretText: '?????',
		id_table: "thirdWord"

	},
	{
		text: 'добро,',
		secret: false,
		secretText: '?????',
		id_table: "fourthWord"
	},
	{
		text: 'лишь',
		secret: false,
		secretText: '????',
		id_table: "fifthWord"

	},
	{
		text: 'теряя',
		secret: false,
		secretText: '?????',
		id_table: "sixthWord"
	},
	{
		text: 'его',
		secret: false,
		secretText: '???',
		id_table: "seventhWord"
	},
	{
		text: 'невозвратно',
		secret: false,
		secretText: '???????????',
		id_table: "eighthWord"
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
