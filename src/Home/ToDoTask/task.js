import React from 'react';
import { Form, ListGroup, Col, Row } from 'react-bootstrap';

import { appContext } from '../../App';

export class ToDoTask extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onChange = (completeHandler) => (e) => {
        debugger;
        completeHandler(this.props.id);
    }
    onDelete = (deleteHandler) => (e) => {
        debugger;
        deleteHandler(this.props.id);
    }
    render() {
        debugger
        return (
            <appContext.Consumer>
                {
                    value =>
                        (
                            <ListGroup.Item key={this.props.id} className="d-flex justify-content-between">
                                <Col col={10}>
                                    {this.props.task}
                                </Col>
                                <Row>
                                    <Col col={1}>
                                        <Form.Check
                                            label="Done"
                                            name="complete"
                                            onChange={!(this.props.complete) ? this.onChange(value.completeTodo) : this.onChange(value.uncompleteTodo)}
                                            checked={this.props.complete}
                                            disabled={this.props.deleted}
                                        />
                                    </Col>
                                    <Col col={1}>
                                        <i className="fas fa-trash-alt"
                                            onClick={!(this.props.deleted) ? this.onChange(value.deleteTodo) : this.onChange(value.undeleteTodo)}>
                                            {(this.props.deleted ? "Undelete" : "Delete")}</i>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                }
            </appContext.Consumer>
        );
    }
}


export default ToDoTask;