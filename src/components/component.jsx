import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

const Component = (props) => (
  <div onClick={props.handleClick}>
    Click here
    <br />
    {props.text}
  </div>
);

const mapStateToProps = (state) => ({
  text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(actions.change());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
