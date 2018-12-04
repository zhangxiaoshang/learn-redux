import "antd/dist/antd.css";
import React, { Component } from "react";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.state = store.getState();

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);

    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();

    store.dispatch(action);
  }
  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);

    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }
}

export default TodoList;
