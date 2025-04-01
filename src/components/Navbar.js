// src/components/Navbar.js
import React from 'react';

// Recebe theme e toggleTheme como props
function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#!">
                {/* Logo com tamanho aumentado */}
                <img 
                  src="/images/logo.png" 
                  alt="Bacelar Advocacia" 
                  height="40" 
                  className="me-2"
                />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>

            {/* Botão de Tema antes da busca */}
            <button
                className="btn btn-outline-secondary border-0 text-white ms-auto me-3"
                onClick={toggleTheme}
                title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
            >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>

            <form className="d-flex me-3" role="search">
                 <input className="form-control form-control-sm me-2 bg-dark text-white border-secondary" type="search" placeholder="Busca rápida..." aria-label="Search"/>
            </form>

             <div className="navbar-nav">
                 <a className="nav-link text-white position-relative me-3" href="#!">
                      <i className="bi bi-bell-fill fs-5"></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           3<span className="visually-hidden">Notificações</span>
                      </span>
                 </a>
            </div>

            <div className="dropdown">
                <a href="#!" className="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle fs-4 align-middle"></i>
                </a>
                 <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark text-small shadow">
                     <li><a className="dropdown-item" href="#!"><i className="bi bi-gear-fill me-2"></i>Configurações</a></li>
                     <li><a className="dropdown-item" href="#!"><i className="bi bi-person-badge me-2"></i>Meu Perfil</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#!"><i className="bi bi-power me-2"></i>Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;