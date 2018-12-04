import React from "react";
import { Input, Button, List } from "antd";

const TodoListUI = props => {
  return (
    <div>
      <div>
        <Input
          placeholder="Todo Item"
          value={props.inputValue}
          style={{ width: "80%" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleDeleteItem(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
