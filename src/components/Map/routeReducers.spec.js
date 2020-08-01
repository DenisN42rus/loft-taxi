import {initialState} from '../../reducers/routeReducers';
import reducer from '../../reducers/routeReducers';
import {addRoute, addAddresses} from "../../actions/routeActions";

describe('route reducer', () => { 
  it('ADD_ROUTE', () => { 
    const action = {
      type: addRoute.toString(),
      payload: {
        addresses: ["адресс 1", "адресс 2"]
      }
    }

    expect(reducer(initialState, action)).toEqual({
      addresses: ["адресс 1", "адресс 2"],
      route: []
    })
  })

  it('ADD_COORDINATES', () => { 
    const action = {
      type: addAddresses.toString(),
      payload: {
        route: ["адресс 1", "адресс 2"]
      }
    }
    
    expect(reducer(initialState, action)).toEqual({
      addresses: [],
      route: ["адресс 1", "адресс 2"]
    })
  })
})