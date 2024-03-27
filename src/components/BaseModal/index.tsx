/* eslint-disable @next/next/no-img-element */
import { Modal } from "react-bootstrap";
import React, { PropsWithChildren, useState } from "react";
import Button from "@/components/Global/Button";

interface ModalProps extends PropsWithChildren {
  content:string
  titulo: string
  className?:string
  variant?: "primary" | "outline" | "close" | "success" 
  value?:string
}

export default function BaseModal({variant, value, titulo, content, children}:ModalProps){
 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return ( 
      
      <>
        <button className="subtitulosGlobal" onClick={handleShow} style={{textDecoration: 'underline', border:'none', backgroundColor:'transparent', outline:'none'}}>
          {content}
        </button>
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
            <Button value={value} type="button" variant={variant} onClick={handleClose} />
          </Modal.Footer>
        </Modal>
      </>
     )
}