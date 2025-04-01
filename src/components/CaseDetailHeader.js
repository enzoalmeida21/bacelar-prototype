import React from 'react';

const CaseDetailHeader = ({ caseNumber, caseType, status, statusClass, responsible, value }) => (
    <div className="card shadow-sm mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
            <div>
                <i className="bi bi-briefcase-fill me-2"></i>Detalhes do Processo
            </div>
            {/* Logo pequena no cabeçalho */}
            <img src="/images/logo.png" alt="Bacelar" height="24" className="opacity-75" />
        </div>
        <div className="card-body bg-secondary-subtle">
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-1"><strong className="text-muted">Número:</strong> {caseNumber}</p>
                    <p className="mb-1"><strong className="text-muted">Tipo:</strong> {caseType}</p>
                    <p className="mb-1"><strong className="text-muted">Status:</strong> <span className={`badge status-${statusClass}`}>{status}</span></p>
                </div>
                <div className="col-md-6">
                    <p className="mb-1"><strong className="text-muted">Responsável:</strong> {responsible}</p>
                    <p className="mb-1"><strong className="text-muted">Valor da Causa:</strong> {value}</p>
                </div>
            </div>
        </div>
    </div>
);

export default CaseDetailHeader;