import React from 'react';

const CaseTimelineWidget = ({ title, events = [] }) => (
    <div className="card shadow-sm timeline-widget">
        <div className="card-header"><i className="bi bi-calendar-week me-2"></i>{title}</div>
        <div className="card-body">
            {/* Logo como marca d'água */}
            <div className="position-absolute opacity-05 logo-watermark">
                <img src="/images/logo.png" alt="Bacelar" width="120" />
            </div>
            
            <ul className="timeline-list list-unstyled mb-0">
                {events.map((event, index) => (
                    <li key={index} className={`timeline-item ${event.current ? 'current' : ''} ${event.critical ? 'critical' : ''}`}>
                        <div className="timeline-icon">
                            <i className={`${event.icon || 'bi-record-circle'}`}></i>
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">{event.date}</span>
                            <h6 className="timeline-title">{event.title}</h6>
                            {event.description && <p className="timeline-description">{event.description}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Footer com logo */}
        <div className="card-footer-branded">
            <small className="text-muted">Linha do tempo processual</small>
            <img src="/images/logo.png" alt="Bacelar" />
        </div>
    </div>
);

export default CaseTimelineWidget;