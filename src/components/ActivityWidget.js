import React from 'react';

function ActivityWidget() {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header">
        <i className="bi bi-activity me-2"></i>Atividade Recente
      </div>
      <div className="card-body">
        {/* Logo sutil como marca d'água no fundo */}
        <div className="position-absolute opacity-05 logo-watermark">
          <img src="/images/logo.png" alt="Bacelar" width="120" />
        </div>
        
        <div className="timeline-widget">
          <ul className="timeline-list list-unstyled mb-0">
            <li className="timeline-item current">
              <div className="timeline-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Hoje, 14:30</span>
                <h6 className="timeline-title">Petição Protocolada</h6>
                <p className="timeline-description">Dr. Bacelar protocolou petição de Embargos no processo #0012345.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Hoje, 11:15</span>
                <h6 className="timeline-title">Audiência Concluída</h6>
                <p className="timeline-description">Dr. Bacelar representou cliente na audiência de conciliação.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Ontem, 16:45</span>
                <h6 className="timeline-title">Reunião com Cliente</h6>
                <p className="timeline-description">Discussão de estratégia para caso #0009876.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-icon">
                <i className="bi bi-envelope-open"></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Ontem, 09:20</span>
                <h6 className="timeline-title">Intimação Recebida</h6>
                <p className="timeline-description">Prazo de 15 dias para manifestação. Encaminhado ao Dr. Bacelar.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityWidget;