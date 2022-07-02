import { createStore, combineReducers } from 'redux';
import pageReducer from '../Reducers/pageList';
import LoginReducer from '../Reducers/LoginReducer';
import SignUpReducer from '../Reducers/SignupReducer';
import ForgotPassReducer from '../Reducers/ForgotPassReducer';
import VerifyOtpReducer from '../Reducers/VerifyOtpReducer';
import ResetPassReducer from '../Reducers/ResetPassReducer';
import ChangePassReducer from '../Reducers/ChangePassReducer';
import UploadPlayerReducer from '../Reducers/UploadPlayerReducer';
import GetPlayerListReducer from '../Reducers/GetPlayerListReducer';
import PlayerVIdeoDelReducer from '../Reducers/PlayerVIdeoDelReducer';
import UpdatePlayerReducer from '../Reducers/UpdatePlayerReducer';
import CreateTeamReducer from '../Reducers/AddTeamReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { 
        pageList: pageReducer, 
        loginReducer: LoginReducer,
        SignUpReducer:SignUpReducer,
        ForgotPassReducer:ForgotPassReducer,
        VerifyOtpReducer: VerifyOtpReducer,
        ResetPassReducer:ResetPassReducer,
        ChangePassReducer:ChangePassReducer,
        UploadPlayerReducer:UploadPlayerReducer,
        GetPlayerListReducer:GetPlayerListReducer,
        CreateTeamReducer:CreateTeamReducer,
        PlayerVIdeoDelReducer:PlayerVIdeoDelReducer,
        UpdatePlayerReducer:UpdatePlayerReducer,

    }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;