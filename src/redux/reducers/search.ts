import { PayloadAction } from '@reduxjs/toolkit'
import { UPDATE_LIST } from '../action-types/search'

interface SearchState {
  list: any[];
}

const initState: SearchState = {
	list: []
}

export default function searchReducer(state: SearchState = initState, action: PayloadAction<any>) {
	const { type, payload } = action
	switch (type) {
		case UPDATE_LIST:
			return { ...state, list: payload }
		default:
			return state
	}
}