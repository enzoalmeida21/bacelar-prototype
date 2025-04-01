import React from 'react';

const sidebarLinks = [
    { target: 'dashboard', label: 'Visão Geral', icon: 'bi-grid-1x2-fill' },
    { target: 'cases', label: 'Casos Ativos', icon: 'bi-briefcase-fill' }, // Exemplo, sem tela criada
  ];

const analysisLinks = [
    { target: 'caseDetail', label: 'Detalhamento Estratégico', icon: 'bi-clipboard-data-fill' },
];

// Add this array to the sidebar rendering
sidebarLinks.push(...analysisLinks);


function Sidebar({ activeScreen, handleNavigate }) {
  return (
    <nav id="sidebarMenu" className="col-lg-2 d-lg-block sidebar collapse">
      <div className="position-sticky sidebar-sticky">
        
        <ul className="nav flex-column">
          {sidebarLinks.map(link => (
             <li className="nav-item" key={link.target}>
               <a
                 className={`nav-link ${activeScreen === link.target ? 'active' : ''}`}
                 href="#"
                 onClick={(e) => { e.preventDefault(); handleNavigate(link.target); }}
               >
                 <i className={`bi ${link.icon} me-2`}></i> {link.label}
               </a>
             </li>
          ))}
        </ul>

        {/* Resto do código permanece igual */}
        {/* ... */}
      </div>
    </nav>
  );
}

export default Sidebar;