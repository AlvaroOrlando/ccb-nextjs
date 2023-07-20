/* eslint-disable @next/next/no-img-element */
import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styles from '../Header/header.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";

import loginImg from '../../assets/images/login.png'
import profileImg from '../../assets/images/profile.jpg'

interface LoginModalProps {
  handleLogin: () => void
  handleLogoff:() => void
  log:boolean
}

export default function LoginModal({handleLogin , handleLogoff, log}:LoginModalProps){
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

    const { push } = useRouter();


    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      handleClose()
      handleLogin()
      push('/salaVip');
    }

    return ( 
      
      <div className={styles.login}>
        {
        log === false ?
        <button 
          type='button' 
          title="Login" 
          onClick={handleShow}
         >
          <span>LOGIN</span>
          <img src={loginImg.src} alt="" />
        </button>
        :
        <button 
          type='button' 
          title="logoff" 
          onClick={handleLogoff}
         >
          <span>SAIR</span>
          <span data-title='profile'>
            <img src={profileImg.src} alt="" />
          </span>
        </button>
        }

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 className="subtitulosGlobal">LOGIN CCB - Sala VIP</h5>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form name="form_menutop" method="post" onSubmit={handleSubmit} className="needs-validation" noValidate>
              {/* Email input  */}
              <div className="form-outline mb-4">
                <label htmlFor="validationCustom01">
                    Usuário
                </label>
                <input type="text" name="email" className="form-control" id="validationCustom01" placeholder="CPF/Email" required/>
                <div className="invalid-feedback">
                  Este campo não pode ficar vazio!
                </div>
              </div>
        
              {/* Password input  */}
              <div className="form-outline mb-4">
                <label htmlFor="validationCustom02">Senha</label>
                <input type="password" className="form-control" name="sonho" id="validationCustom02" placeholder="Insira sua senha" required />
                <div className="invalid-feedback">
                  Este campo não pode ficar vazio!
                </div>
              </div>
        
              {/* Forgot Password */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <Link onClick={handleClose} href="/salaVip/recuperacaoSenha">Esqueci a senha.</Link>
                </div>
              </div>
        
              {/* Submit button  */}
              <div className="col d-flex justify-content-center">
                <Button id="sub-btn" type="submit" variant="primary" className="btn-block mb-4 btn-md w-50 text-white">
                  Login
                </Button>
              </div>
            </Form>
    
            {/* Register buttons  */}
            <div className={`text-center ${styles.registerModal}`}>
              <div>
                <p>
                  Ainda não é sócio?
                  <Link onClick={handleClose} href="/associar/compositores">
                    &nbsp;Associe-se já!
                  </Link>
                </p>
                <p className={styles.spanModal}>
                  E com poucos cliques desfrute de todos os benefícios do Clube dos Compositores do Brasil!
                </p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" variant="danger" onClick={handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
      
     )
}