import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../../client/components/views/Home/reducer';
import contactsReducer from '../../client/components/views/Contacts/reducer';

export default () => {
	const store = createStore(
		combineReducers({
			homeReducer,
			contactsReducer
			/* somemorereducers */
		}),
		{},
		applyMiddleware(thunk)
	);
	return store;
};
