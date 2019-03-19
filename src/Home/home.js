import React from 'react';
// import {Switch,Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ToDoHeader from './header';
import ToDoList from './ToDoLists/toDo';
import DoneList from './ToDoLists/done';
import DeletedList from './ToDoLists/deleted';


export default function ToDoHome(props) {

    return (
        <React.Fragment>
            <ToDoHeader />
            <Container fluid={true}>
                <Row noGutters={true} className="p-2 m-n1">
                    <Col col={4} className="p-2">
                        <ToDoList />
                    </Col>
                    <Col col={4} className="p-2">
                        <DoneList />
                    </Col>
                    <Col col={4} className="p-2">
                        <DeletedList />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}