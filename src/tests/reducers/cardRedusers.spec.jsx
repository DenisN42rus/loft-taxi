import {initialState} from '../../reducers/cardRedusers';
import reducer from '../../reducers/cardRedusers';
import {addCard} from "../../actions/cardActions";

describe('card reducer', () => { 
  it('ADD_CARD', () => { 
    const action = {
      type: addCard.toString(),
      payload: {
        cardNumber: "0000 0000 0000 0000", 
        expiryDate: "", 
        cardName: "testName", 
        cvc: "123"
      }
    }

    expect(reducer(initialState, action)).toEqual({
      cardNumber: "0000 0000 0000 0000", 
      expiryDate: "", 
      cardName: "testName", 
      cvc: "123"
    })
  })
})