import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';
import balance from './balance';
// import * as actions from './balance';

describe('balanceReducer', ()=> {
    describe('when initializing', () => {
        const balance = 10;

        it('sets a balance', () => {
            // state = undefined at the beginning
            expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
        });

        // test coockies (if cookies contain balance --> initialize the state). When reinitializing the store (on reload), you expect the last balance number to be there
        describe('then re-initializing', () => {
            it('reades the balance from coockies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            })
        })
    })

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    })

    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdrawal})).toEqual(initialState - withdrawal);
    })
})