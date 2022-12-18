const defaultState = {
	title: "",
	qestion: []
}

const OVERWRITING = 'OVERWRITING'

export const qestionContent = (state = defaultState, action) => {
	switch (action.type) {
		case OVERWRITING:
			return action.payload
		default:
			return state
	}
}
export const overwriting = (payload) => { return { type: OVERWRITING, payload } }
