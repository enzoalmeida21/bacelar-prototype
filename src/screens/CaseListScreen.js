import React from 'react';

// Dados Simulados (mantidos)
const mockCases = [
  { id: 1, number: '0012345-67.2023.5.01.0001', client: 'ABC Ltda', lastUpdate: 'Decisão Publicada', deadline: 'HOJE 18:00', status: 'Alerta Prazo', statusClass: 'danger', origin: 'PJE', risk: 'Alto', riskClass: 'danger'},
  { id: 2, number: '0009876-54.2022.4.02.0055', client: 'XYZ S/A', lastUpdate: 'Petição Protocolada', deadline: '2 dias', status: 'Ativo', statusClass: 'success', origin: 'EPROC', risk: 'Médio', riskClass: 'warning'},
  { id: 3, number: '1122334-45.2024.8.26.0100', client: 'DEF Corp', lastUpdate: 'Audiência Marcada', deadline: '15 dias', status: 'Aguardando Prazo', statusClass: 'info', origin: 'ESAJ', risk: 'Baixo', riskClass: 'success'},
  { id: 4, number: '5544332-11.2021.5.01.0088', client: 'GHI Internacional', lastUpdate: 'Recurso Pendente', deadline: 'N/A', status: 'Suspenso', statusClass: 'secondary', origin: 'PJE', risk: 'Médio', riskClass: 'warning'},
];

function CaseListScreen({ onNavigate }) {

    // Navegação (mantida)
    const goToCaseDetail = (e, caseId) => {
        // Impede navegação se clique for no botão de ações
        if (e.target.closest('button')) return;
        e.preventDefault();
        console.log('Navegando para detalhe ID simulado:', caseId === 1 ? 'ABC' : caseId === 2 ? 'XYZ' : 'DEF');
        onNavigate('caseDetail', caseId === 1 ? 'ABC' : caseId === 2 ? 'XYZ' : 'DEF');
    }

  return (
    <>
      {/* Cabeçalho da página com estatísticas rápidas */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0"><i className="bi bi-briefcase-fill me-2 text-primary"></i>Casos Ativos</h4>
            <span className="badge bg-primary rounded-pill">Total: {mockCases.length}</span>
          </div>
          <div className="progress" style={{height: '8px'}}>
            <div className="progress-bar bg-success" style={{width: '45%'}} title="Em dia"></div>
            <div className="progress-bar bg-warning" style={{width: '30%'}} title="Atenção"></div>
            <div className="progress-bar bg-danger" style={{width: '25%'}} title="Críticos"></div>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <small className="text-muted">45% Em dia</small>
            <small className="text-muted">30% Atenção</small>
            <small className="text-muted">25% Críticos</small>
          </div>
        </div>
      </div>
    
      {/* Adiciona classe case-list-card para estilização específica */}
      <div className="card shadow-sm case-list-card">
        {/* Cabeçalho com Toolbar */}
        <div className="card-header case-list-toolbar d-flex flex-wrap justify-content-between align-items-center">
          {/* Filtros Rápidos */}
          <div className="filter-quick-buttons btn-group btn-group-sm" role="group" aria-label="Filtros rápidos">
             {/* Usa botões radio ou toggle para indicar seleção */}
            <input type="radio" className="btn-check" name="quickFilter" id="quickFilterActive" autoComplete="off" defaultChecked />
            <label className="btn btn-outline-primary" htmlFor="quickFilterActive">
               <i className="bi bi-check-circle me-1"></i> Ativos
            </label>

            <input type="radio" className="btn-check" name="quickFilter" id="quickFilterPending" autoComplete="off" />
            <label className="btn btn-outline-warning" htmlFor="quickFilterPending">
               <i className="bi bi-exclamation-diamond me-1"></i> Pendências
            </label>

            <input type="radio" className="btn-check" name="quickFilter" id="quickFilterView" autoComplete="off" />
            <label className="btn btn-outline-info" htmlFor="quickFilterView">
                <i className="bi bi-bookmark me-1"></i> Minha Vista
            </label>
          </div>

          {/* Ordenação e Filtros Avançados */}
          <div className="filter-actions mt-2 mt-md-0 d-flex align-items-center">
            <select className="form-select form-select-sm d-inline-block w-auto me-2" aria-label="Ordenar por">
              <option>Ordenar por: Urgência</option>
              <option value="1">Última Atualização</option>
              <option value="2">Cliente</option>
              <option value="3">Risco IA</option>
            </select>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filtrosAvancadosLista"
              aria-expanded="false"
              aria-controls="filtrosAvancadosLista"
              title="Filtros Avançados"
            >
              <i className="bi bi-filter-right"></i> Filtros
            </button>
          </div>
        </div>

        {/* Filtros Avançados Colapsáveis */}
        <div className="collapse" id="filtrosAvancadosLista">
          <div className="card-body bg-secondary-subtle border-bottom"> {/* Usando cor de fundo sutil */}
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label small">Cliente</label>
                <select className="form-select form-select-sm">
                  <option>Todos os clientes</option>
                  <option>ABC Ltda</option>
                  <option>XYZ S/A</option>
                  <option>DEF Corp</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small">Vara</label>
                <select className="form-select form-select-sm">
                  <option>Todas as varas</option>
                  <option>1ª Vara Cível</option>
                  <option>2ª Vara Trabalhista</option>
                  <option>3ª Vara Federal</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small">Data Inicial</label>
                <input type="date" className="form-control form-control-sm" />
              </div>
              <div className="col-md-3">
                <label className="form-label small">Data Final</label>
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Processos */}
        <div className="table-responsive">
          {/* Adiciona classe case-list-table */}
          <table className="table table-hover align-middle mb-0 case-list-table">
            <thead className="sticky-top"> {/* Remover table-dark por enquanto, aplicar no CSS */}
              <tr>
                <th scope="col" className="col-process-number"># Processo</th>
                <th scope="col">Cliente / Parte Principal</th>
                <th scope="col">Última Mov. / Próximo Passo</th>
                <th scope="col" className="text-center col-deadline">Prazo Fatal</th>
                <th scope="col" className="text-center col-status">Status</th>
                <th scope="col" className="text-center col-origin">Origem</th>
                <th scope="col" className="text-center col-risk">Risco IA</th>
                <th scope="col" className="text-center col-actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockCases.map((caseItem) => (
                <tr key={caseItem.id} onClick={(e) => goToCaseDetail(e, caseItem.id)} className={`case-row ${caseItem.statusClass === 'danger' ? 'table-danger' : ''}`}>
                   {/* Número do Processo */}
                  <td className='case-number'>
                      {/* Usar link é melhor semanticamente, previne o clique no tr se precisar */}
                     <a href="#!" onClick={(e) => goToCaseDetail(e, caseItem.id)} className="text-decoration-none">
                      {caseItem.number}
                     </a>
                  </td>
                   {/* Cliente */}
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="client-avatar me-2 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                        <span className="small fw-bold">{caseItem.client.charAt(0)}</span>
                      </div>
                      <div>{caseItem.client}</div>
                    </div>
                  </td>
                   {/* Última Movimentação */}
                  <td className='text-muted'>{caseItem.lastUpdate}</td>
                  {/* Prazo Fatal */}
                  <td className={`text-center deadline-cell ${caseItem.deadline === 'HOJE 18:00' ? 'critical' : ''}`}>
                     {caseItem.deadline === 'HOJE 18:00' ? 
                       <span className="badge bg-danger">{caseItem.deadline}</span> : 
                       caseItem.deadline}
                  </td>
                   {/* Status */}
                  <td className="text-center status-cell">
                    <span className={`badge case-status status-${caseItem.statusClass}`}>{caseItem.status}</span>
                  </td>
                  {/* Origem */}
                  <td className="text-center origin-cell">
                      <span className='case-origin'>{caseItem.origin}</span>
                  </td>
                  {/* Risco IA */}
                  <td className="text-center risk-cell">
                     <i className={`bi bi-circle-fill fs-tiny risk-${caseItem.riskClass}`} title={`Risco: ${caseItem.risk}`}></i>
                     <span className="visually-hidden">{caseItem.risk}</span>
                  </td>
                   {/* Ações */}
                  <td className="text-center actions-cell">
                     <div className="dropdown">
                       <button
                        className="btn btn-sm btn-icon" 
                        onClick={(e) => { e.stopPropagation(); }}
                        title="Mais Ações"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                         <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye me-2"></i>Ver detalhes</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil me-2"></i>Editar</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-text me-2"></i>Gerar relatório</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-archive me-2"></i>Arquivar</a></li>
                      </ul>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
         <div className="card-footer case-list-footer d-flex justify-content-between align-items-center">
             <div>
               <small className="text-muted">Mostrando 1-{mockCases.length} de {mockCases.length} casos</small>
             </div>
             <nav aria-label="Navegação de páginas">
               <ul className="pagination pagination-sm mb-0">
                 <li className="page-item disabled">
                   <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Anterior</a>
                 </li>
                 <li className="page-item active" aria-current="page">
                   <a className="page-link" href="#">1</a>
                 </li>
                 <li className="page-item"><a className="page-link" href="#">2</a></li>
                 <li className="page-item"><a className="page-link" href="#">3</a></li>
                 <li className="page-item">
                   <a className="page-link" href="#">Próxima</a>
                 </li>
               </ul>
             </nav>
         </div>
      </div>
    </>
  );
}

export default CaseListScreen;