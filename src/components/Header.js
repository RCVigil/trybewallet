import React, { Component } from 'react';
import { connect } from 'react-redux';
import user from '../redux/reducers/user';

class Header extends Component {
  render() {
    return (
      <div>Header</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userName: () => dispatch(user()),
});

export default connect(null, mapDispatchToProps)(Header);
