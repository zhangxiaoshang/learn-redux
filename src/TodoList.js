import React from "react";
import { connect } from "react-redux";
import {
  getChangeInputValueAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";

class TodoList extends React.Component {
  render() {
    const {
      inputValue,
      list,
      changeInputValue,
      handleClick,
      handleDelete
    } = this.props;

    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = getChangeInputValueAction(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
