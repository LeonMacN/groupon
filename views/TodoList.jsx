import React from 'react';
import Axios from 'axios';

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.state = { data: [] };
        console.log('El componente aun no se ha montado');
    }

    getData(){
        return Axios.get('http://localhost:8080/todos')
            .then(res => {
                //const todos = res.data.data.children.map(obj => obj.data);
                this.setState({data : res.data});
            });
    }

    componentWillMount() {
        this.getData().then(res => {
            console.log(res);
        });

    }

    render() {
        if (this.state.data.length > 0){
            return (
                <todoList>
                    <ul>
                        {this.state.data.map(todo =>
                            <li key={todo.id}>{todo.title}</li>
                        )}
                    </ul>
                </todoList>
            );
        } else {
            return (
                <todoList>
                    <h5>Cargando lista...</h5>
                </todoList>
            );
        }
    }
}