import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import actions, { IComponentAction } from '../actions/actions';
import { IStoreState } from '../store';
// import * as style from '../css/style.css';

interface IComponentStateProps {
  text: string;
}

interface IComponentDIspatchProps {
  handleClick: () => void;
}

class Component extends React.Component<IComponentStateProps & IComponentDIspatchProps> {
  render() {
    return (
      // <div onClick={this.props.handleClick} className={style.blue}>
      <div onClick={this.props.handleClick}>
        Click here
        <br />
        {this.props.text}
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState): IComponentStateProps => ({
  text: state.text,
});

const mapDispatchToProps = (dispatch: Dispatch<IComponentAction>) => ({
  handleClick() {
    dispatch(actions.change());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
