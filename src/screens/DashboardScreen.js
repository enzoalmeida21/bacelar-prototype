import React from 'react';
import ImperativesWidget from '../components/ImperativesWidget';
import SnapshotWidget from '../components/SnapshotWidget';
import ActivityWidget from '../components/ActivityWidget';

function DashboardScreen({ onNavigate }) {
  return (
    <>
      {/* Passa onNavigate para o ImperativesWidget */}
      <ImperativesWidget onNavigate={onNavigate} />

      <div className="row g-4 mb-4">
          <SnapshotWidget
              icon="bi-briefcase-fill" bgColor="bg-primary" textColor="text-white"
              title="Casos Ativos" value="980" footer="Alto Valor: 150" link="#"
          />
           <SnapshotWidget
              icon="bi-calendar-x-fill" bgColor="bg-warning" textColor="text-dark"
              title="Prazos Críticos (3d)" value="12" footer="Críticos: 5" link="#"
          />
           <SnapshotWidget
              icon="bi-check2-all" bgColor="bg-success" textColor="text-white"
              title="Tarefas Concluídas (Mês)" value="215" footer="Relatório de Atividades" link="#"
          />
            <SnapshotWidget
              icon="bi-graph-down-arrow" bgColor="bg-secondary" textColor="text-white"
              title="Valor Potencial em Risco" value="R$ 3.5M" footer="Análise Financeira" link="#"
          />
      </div>

      <div className="row">
           <div className="col-lg-7 mb-4">
                <div className="card h-100 shadow-sm">
                     <div className="card-header"><i className="bi bi-pie-chart-fill me-2"></i>Distribuição de Casos por Status</div>
                     <div className="card-body">
                          {/* Substituindo placeholder por gráfico real */}
                          <img 
                               src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Em Andamento','Concluídos','Suspensos','Em Recurso','Arquivados'],datasets:[{data:[45,25,15,10,5],backgroundColor:['rgba(54,162,235,0.8)','rgba(75,192,192,0.8)','rgba(255,159,64,0.8)','rgba(153,102,255,0.8)','rgba(201,203,207,0.8)']}]}}" 
                               alt="Gráfico de distribuição de casos" 
                               className="img-fluid" 
                               style={{ maxHeight: '300px', margin: '0 auto', display: 'block' }}
                          />
                     </div>
                </div>
           </div>
           <div className="col-lg-5 mb-4">
                 <div className="card h-100 shadow-sm">
                     <div className="card-header"><i className="bi bi-list-check me-2"></i>Minhas Tarefas Urgentes</div>
                     <div className="card-body">
                          <ul className="list-group list-group-flush">
                               <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                         <span className="badge bg-danger me-2">Hoje</span>
                                         Revisar petição inicial - Caso #0012345
                                    </div>
                                    <span><i className="bi bi-clock-fill text-danger"></i></span>
                               </li>
                               <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                         <span className="badge bg-warning text-dark me-2">Amanhã</span>
                                         Preparar para audiência - Caso #0009876
                                    </div>
                                    <span><i className="bi bi-clock-fill text-warning"></i></span>
                               </li>
                               <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                         <span className="badge bg-info text-dark me-2">3 dias</span>
                                         Analisar jurisprudência - Caso #0007654
                                    </div>
                                    <span><i className="bi bi-clock-fill text-info"></i></span>
                               </li>
                          </ul>
                          <a href="#" className="btn btn-sm btn-outline-primary mt-3">Ver todas as tarefas</a>
                     </div>
                </div>
           </div>
      </div>

      <ActivityWidget />
    </>
  );
}


export default DashboardScreen;