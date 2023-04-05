import React, {useState} from "react";
import  Button  from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from "react-bootstrap/FormControl";
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

export default function Blogs() {

    return(
        <div>
        <ListGroup>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                Contenido
                <div>
                <FaEdit size={20} style={{ cursor: 'pointer'}}/>

                <FaTrashAlt size={20} style={{ cursor: 'pointer'}}/>
                </div>
            </ListGroupItem>
        </ListGroup>

        <Modal>
            <ModalHeader>
                <Modal.Title>
                    EDIT Blog
                </Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <FormControl
                type="text"
                placeholder="Type Here!"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" type="submit">
                   CLOSE
                </Button>
                <Button variant="dark" type="submit">
                   SAVE
                </Button>
            </Modal.Footer>

        </Modal>
        </div>
    )
}
