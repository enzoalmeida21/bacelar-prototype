import React from 'react';

function ImperativesWidget({ onNavigate }) {
  // Função para navegar para o caso específico
  const handleCaseClick = (e, caseId) => {
    e.preventDefault();
    onNavigate('caseDetail', caseId);
  };

  return (
    <div className="card shadow-sm mb-4 widget-imperatives">
      <div className="card-header">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>Imperativos de Atenção
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#" onClick={(e) => handleCaseClick(e, 'ABC')}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-danger me-2">Urgente</span>
                <strong>Prazo Recursal</strong> - Caso #0012345-67.2023
              </div>
              <span className="text-danger"><i className="bi bi-clock-fill me-1"></i>2 dias</span>
            </div>
            <small className="text-muted d-block mt-1">Dr. Bacelar designou para análise prioritária</small>
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" onClick={(e) => handleCaseClick(e, 'XYZ')}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-warning text-dark me-2">Importante</span>
                <strong>Audiência</strong> - Caso #0009876-54.2022
              </div>
              <span className="text-warning"><i className="bi bi-calendar-event me-1"></i>5 dias</span>
            </div>
            <small className="text-muted d-block mt-1">Dr. Bacelar conduzirá pessoalmente</small>
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" onClick={(e) => handleCaseClick(e, 'DEF')}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-info text-dark me-2">Atenção</span>
                <strong>Despacho Publicado</strong> - Caso #0007654-32.2023
              </div>
              <span className="text-info"><i className="bi bi-file-earmark-text me-1"></i>Novo</span>
            </div>
            <small className="text-muted d-block mt-1">Aguardando revisão do Dr. Bacelar</small>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ImperativesWidget;