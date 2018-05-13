import React, { Component } from "react";
import { ListContainer } from "./containers/list-container";
import { Title } from "./components/title";
import styles from "./style.css";

export const TodoApp = ({ name }) => {
    const appTitle = "Todo App";
    return (
        <div className="todo-app">
            <Title title={appTitle} />
            <ListContainer />
        </div>
    );
};
