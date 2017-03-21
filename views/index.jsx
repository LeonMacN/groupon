import React from "react";
import TodoList from "./TodoList";

class TodoBody extends React.Component {
    render() {
        return (
            <html title={this.props.title}>
                <body>
                    <div>
                        <header>
                            <h1>TODOS</h1>
                            <input type="text"/>
                        </header>
                        <main>
                            <input type="checkbox" name="selectAll"/>
                            <label for="selectAll">Mark all as complete</label>
                            <TodoList />
                        </main>
                        <footer>
                            <a href="#">Clear completed</a>
                            <div>Count: </div>
                        </footer>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = TodoBody;