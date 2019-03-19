import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import uuidv1 from 'uuid/v1';
import { appContext } from '../App';


export class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onAdd = (addTodo)=>(e)=> {
        e.preventDefault();
        // debugger;
        if (this.state.task) {
            const newTask = {
                id: uuidv1(),
                task: this.state.task,
                complete: false,
                deleted: false
            }
            addTodo(newTask);
            this.setState({ task: "" });
        }
    }
    render() {

        return (
            <appContext.Consumer>
                {
                    value => (
                        <Navbar className="bg-dark justify-content-center">
                            <Form inline className="bg-dark justify-content-center" onSubmit={this.onAdd(value.addTodo)}>
                                <FormControl type="text" placeholder="ToDo" name="task" value={this.state.task} onChange={this.onChange} className=" mr-sm-2" />
                                <Button type="submit">Add</Button>
                            </Form>
                        </Navbar>
                    )
                }
            </appContext.Consumer>
        );
    }
}

export default ToDoHeader;