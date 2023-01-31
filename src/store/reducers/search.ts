import { PayloadAction } from '@reduxjs/toolkit'
import { SETPARAMS, UPDATE_SEARCH } from '../action-types/search'

interface SearchState {
  value: string;
}

const initState: SearchState = {
	value: ''
}

export default function searchReducer(state: SearchState = initState, action: PayloadAction<any>) {
	const { type, payload } = action
	switch (type) {
		case SETPARAMS:
			return { ...state, param: payload }
		case UPDATE_SEARCH:
			return { ...state, keywords: payload }
		default:
			return state
	}
}