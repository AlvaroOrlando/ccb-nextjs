import MainContainer from '@/components/Containers/MainContainer';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <MainContainer>
      <div style={{minHeight:"inherit"}} className="container-fluid d-flex align-items-center justify-content-center px-4 py-5 sm:py-5">
        <div className="text-center">
            <p className="text-base display-1 font-weight-bold text-primary">404</p>
            <h1 className="mt-4 text-xxl font-weight-bold tracking-tight text-dark">Página não encontrada</h1>
            <p className="mt-5 text-base leading-7 text-secondary">
            Desculpe, não encontramos a página solicitada
            </p>
            <div className="mt-5 d-flex justify-content-center gap-3">
            <Link
                href="/"
                className="btn btn-primary rounded-md px-3.5 py-2.5 text-sm text-light font-weight-bold shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
                <span aria-hidden="true">&larr;</span> Home
            </Link>
            <Link href="#" className="btn btn-link text-sm font-weight-bold text-dark">
                Contato <span aria-hidden="true">&rarr;</span>
            </Link>
            </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default NotFoundPage;
