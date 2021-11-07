import { message } from 'antd';
import { LOADING_REAUEST, COMPANIES_REQUEST } from '../actionTypes/actionTypes';

const initialState = {
	loading: false,
};

const companiesReducer = (state = initialState, { type, payload }) => {
	const newState = { ...state };
	switch (type) {
		case LOADING_REAUEST:
			newState.loading = true;
			return newState;
		case COMPANIES_REQUEST:
			newState.loading = false;
			return newState;
		default:
			return newState;
	}
};
export default companiesReducer;
