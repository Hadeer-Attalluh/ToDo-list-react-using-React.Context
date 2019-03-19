import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import { appContext } from '../../App';

export class DoneList extends React.Component {

    render() {
        return (
            <appContext.Consumer>
                {
                    value => (
                        <Card>
                            <Card.Header className="bg-dark text-light">Done List</Card.Header>
                            <ListGroup variant="flush">
                                {
                                    value.todos.filter(task => (task.complete && !task.deleted)).map(task => <ToDoTask {...task} />)
                                }
                            </ListGroup>
                        </Card>
                    )
                }
            </appContext.Consumer>
        );
    }
}

export default DoneList;