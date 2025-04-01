// src/App.js
import React, { useState, useEffect } from 'react'; // Import useState e useEffect
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardScreen from './screens/DashboardScreen';
import CaseDetailScreen from './screens/CaseDetailScreen';
import CaseListScreen from './screens/CaseListScreen'; // Verifique se este está sendo importado
import './App.css';

function App() {
  document.addEventListener('DOMContentLoaded', function() {
    // Toggle para sidebar mobile
    const sidebarToggle = document.querySelector('.navbar-toggler');
    const sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'sidebar-overlay';
    document.body.appendChild(sidebarOverlay);
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
        document.body.classList.toggle('sidebar-open');
      });
      
      sidebarOverlay.addEventListener('click', function() {
        document.body.classList.remove('sidebar-open');
      });
    }
    
    // Adiciona data-label aos TDs da tabela para mobile
    const caseTables = document.querySelectorAll('.case-list-table');
    caseTables.forEach(table => {
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
      const rows = table.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
          if (headers[index]) {
            cell.setAttribute('data-label', headers[index]);
          }
        });
      });
    });
  });
  
  // Estado para controlar o tema ('light' ou 'dark')
  const [theme, setTheme] = useState('light');
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [currentCaseId, setCurrentCaseId] = useState(null);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Efeito para aplicar a classe de tema ao body
  useEffect(() => {
    // Remove classes anteriores e adiciona a atual
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    // Opcional: Armazenar preferência no localStorage
    // localStorage.setItem('themePreference', theme);
  }, [theme]); // Executa sempre que o tema mudar

  // Recuperar tema do localStorage ao iniciar (opcional)
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('themePreference');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, []);


  const handleNavigate = (screen, caseId = null) => {
    setActiveScreen(screen);
    setCurrentCaseId(caseId);
     // Reset scroll on navigation
     const mainContent = document.querySelector('.main-content');
     if (mainContent) mainContent.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'caseDetail':
        return <CaseDetailScreen caseId={currentCaseId || 'XYZ'} />;
      case 'cases': // Nome da tela da lista de casos
        return <CaseListScreen onNavigate={handleNavigate} />;
      case 'dashboard':
      default:
        return <DashboardScreen onNavigate={handleNavigate} />;
    }
  };

   const getScreenTitle = () => {
     switch (activeScreen) {
      case 'caseDetail':
        return 'Detalhe Estratégico do Caso';
      case 'cases':
        return 'Gestão de Casos Ativos';
      case 'dashboard':
      default:
        return 'Visão Geral Estratégica';
     }
   }

  return (
    <>
      {/* Passa o tema atual e a função de alternância para a Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="container-fluid">
        <div className="row">
           {/* Passar handleNavigate para sidebar continuar funcionando */}
          <Sidebar activeScreen={activeScreen} handleNavigate={handleNavigate} />
          <main className="col-lg-10 ms-sm-auto px-md-4 main-content">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
               <h1 id="main-title" className="h2 fw-light">{getScreenTitle()}</h1>
               <div className="btn-toolbar mb-2 mb-md-0">
                  {/* Exibe botões apenas no dashboard */}
                  {activeScreen === 'dashboard' && (
                      <>
                        <button type="button" className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-plus-circle me-1"></i> Novo Caso</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><i className="bi bi-calendar-plus me-1"></i> Agendar Prazo</button>
                      </>
                 )}
               </div>
            </div>
            {renderScreen()}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;