import {initialState} from './authReducers';
import reducer from './authReducers';
import {logIn, logOut} from "./authActions";

describe('auth reducers', () => { 
  it('LOG_IN', () => { 
    const action = {
      type: logIn.toString(),
      payload: {
        success: true
      }
    }

    expect(reducer(initialState, action)).toEqual({
      isLoggedIn: true,
    })
  })

  it('LOG_OUT', () => { 
    const action = {
      type: logOut.toString(),
    }

    expect(reducer(initialState, action)).toEqual({
      isLoggedIn: false,
    })
  })
})