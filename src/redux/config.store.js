import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducer/product.reducer';
import cartReducer from './reducer/cart.reducer';
import loginReducer from './reducer/login.reducer';
import registerReducer from './reducer/register.reducer';
import { userDetailsReducer, userUpdateProfileReducer } from './reducer/user.reducer';

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  loginReducer,
  registerReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
