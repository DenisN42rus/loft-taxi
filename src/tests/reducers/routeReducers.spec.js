import {initialState} from '../../reducers/routeReducers';
import reducer from '../../reducers/routeReducers';
import {addRoute, addCoordinates} from "../../actions/routeActions";

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
      coordinates: []
    })
  })

  it('ADD_COORDINATES', () => { 
    const action = {
      type: addCoordinates.toString(),
      payload: {
        coordinates: ["адресс 1", "адресс 2"]
      }
    }
    
    expect(reducer(initialState, action)).toEqual({
      addresses: [],
      coordinates: ["адресс 1", "адресс 2"]
    })
  })
})