import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import { appContext } from '../../App';

export class DeletedList extends React.Component {

    render() {
        return (
            <appContext.Consumer>
                {
                    value =>
                        (
                            <Card>
                                <Card.Header className="bg-dark text-light">Deleted List</Card.Header>
                                <ListGroup variant="flush">
                                    {
                                        value.todos.filter(task => (task.deleted)).map(task => <ToDoTask {...task} />)
                                    }
                                </ListGroup>
                            </Card>
                        )
                }
            </appContext.Consumer>
        );
    }
}

export default DeletedList;