import React from 'react';
import { shallowToJson  } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(shallowToJson(app)).toMatchSnapshot();
    })

    /*
    it('contains a Wallet component', () => {
        // <Connect(Wallet) />
        // console.log(app.debug())

        // the test will fail with this one: because we are importing the connected version into the App.js and not just a pure component
        expect(app.find('Wallet').exists()).toBe(true);
    })
    */
   it('contains a connected Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })

    it('contains a connected Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    })

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    })
})