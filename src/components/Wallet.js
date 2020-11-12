import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
    state = {
        balance: undefined,
     }

     updateBalance = ({ target }) => {
        this.setState({balance: parseInt(target.value, 10)});
     }

     deposit = () => this.props.deposit(this.state.balance);

     withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
        <div>
            <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
            <br/>
            <input onChange={this.updateBalance}className="input-wallet"/>
            <button
            onClick={this.deposit}
            className="btn-deposit">Deposit</button>
            <button
            onClick={this.withdraw}
            className="btn-withdraw">Withdraw</button>
        </div>
        );
    }
}
const mstp = state => ({
    balance: state
})
export default connect(mstp, {deposit, withdraw})(Wallet);