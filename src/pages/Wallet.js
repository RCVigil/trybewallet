import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import user from '../redux/reducers/user';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
