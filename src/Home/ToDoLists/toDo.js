import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import { appContext } from '../../App';

export function ToDoList(props) {
    return (
        <appContext.Consumer>
            {value =>
                (
                    <Card>
                        <Card.Header className="bg-dark text-light">To Do List</Card.Header>
                        <ListGroup variant="flush">
                            {value.todos.filter(task => { return !(task.complete || task.deleted) }).map(task => <ToDoTask {...task} />)}
                        </ListGroup>
                    </Card>
                )
            }
        </appContext.Consumer>
    
    
        )
    }
    
    
export default ToDoList;