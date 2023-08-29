/* eslint-disable @next/next/no-img-element */
import { Button, Modal } from "react-bootstrap";
import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from '../Header/header.module.scss'
import Link from "next/link";

interface ModalProps extends PropsWithChildren {
  handleLogin?: () => void
  handleLogoff?:() => void
  log?:boolean
  content:string
  titulo: string
}

export default function BaseModal({handleLogin, handleLogoff, titulo, log,content, children}:ModalProps){
  useEffect(() => {
    (function() {
      'use strict';
  
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event:React.FormEvent<HTMLInputElement>):void {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
    })();
  })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return ( 
      
      <div>
        <Link className="subtitulosGlobal" onClick={handleShow} style={{textDecoration: 'underline'}} href="">
          {content}
        </Link>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 className="subtitulosGlobal">{titulo}</h5>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {children}
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" variant="danger" onClick={handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
     )
}