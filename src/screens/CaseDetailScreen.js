import React from 'react';
import CaseDetailHeader from '../components/CaseDetailHeader';
import CaseInsightsWidget from '../components/CaseInsightsWidget';
import CaseTimelineWidget from '../components/CaseTimelineWidget';
import CaseDocsPlaceholder from '../components/CaseDocsPlaceholder';

// Simulação de dados mais detalhados para UM CASO
const mockCaseDetailData = {
    id: 'XYZ', // Corresponde ao ID simplificado que passamos
    number: '0009876-54.2022.4.02.0055',
    client: 'XYZ S/A',
    type: 'Contencioso Cível Estratégico',
    status: 'Em Análise de Recurso',
    statusClass: 'info', // Para estilização de badge no header
    responsibleLawyer: 'Dr. Bacelar', // Alterado para Dr. Bacelar
    value: 'R$ 4.2M', // Valor da causa
    court: 'TRF-2',

    // Dados para Insights Preditivos
    insights: {
        probability: '45%', // Um pouco melhor
        probClass: 'text-warning',
        valueRange: 'R$ 1.0M - R$ 1.6M (Cenário Provável)',
        keyFactors: [
            { text: 'Jurisprudência recente desfavorável na Turma', icon: 'bi-arrow-down-circle', class: 'text-danger' },
            { text: 'Argumentação da Apelação considerada Sólida (IA)', icon: 'bi-arrow-up-circle', class: 'text-success' },
             { text: 'Histórico do Cliente em casos similares (Neutro)', icon: 'bi-dash-circle', class: 'text-secondary' }
        ],
        recommendation: 'Focar em contra-argumentar jurisprudência. Avaliar possibilidade de acordo abaixo do piso estimado.' // Simulação IA
    },

    // Dados para Timeline
    timelineEvents: [
      { date: '20/01/2024', title: 'Recurso de Apelação Protocolado', icon: 'bi-file-earmark-arrow-up', description: 'Protocolado recurso contra sentença de 1ª Instância.'},
      { date: '05/02/2024', title: 'Contrarrazões Apresentadas (Parte Contrária)', icon: 'bi-file-earmark-text', description: ''},
      { date: '15/03/2024', title: 'Processo Distribuído no TRF-2', icon: 'bi-diagram-3', description: 'Relator Designado: Des. Silva.'},
      { date: 'Ontem', title: 'Conclusos para Julgamento', icon: 'bi-hourglass-split', description: 'Processo encaminhado para análise e inclusão em pauta.', current: true}, // Indicar evento atual/recente
       { date: 'Próx. Estimativa', title: 'Previsão de Julgamento', icon: 'bi-calendar-event', description: 'Estimativa: Próximos 30-60 dias.'},
       { date: 'Limite', title: 'Prazo Recurso Especial (se aplicável)', icon: 'bi-calendar-x-fill', description: 'Após publicação do acórdão.', critical: true}, // Indicar prazo futuro
    ]
};


function CaseDetailScreen({ caseId /* , onNavigate - Se precisar de navegação interna */ }) {

    // No futuro, buscaria dados da API com base no caseId real
    const caseData = mockCaseDetailData;

    return (
    <>
        {/* 1. Cabeçalho com informações gerais */}
        <CaseDetailHeader
            caseNumber={caseData.number}
            caseType={caseData.type}
            status={caseData.status}
            statusClass={caseData.statusClass}
            responsible={caseData.responsibleLawyer} // Prop adicional
            value={caseData.value} // Prop adicional
        />

        {/* 2. Layout Principal: Timeline à esquerda, Insights à direita */}
        <div className="row g-4"> {/* g-4 para gutter/espaçamento entre colunas */}

            {/* Coluna da Esquerda: Timeline e outras infos */}
            <div className="col-lg-7 col-xl-8"> {/* Ocupa mais espaço */}

                {/* === TIMELINE DE MOVIMENTAÇÕES === */}
                <CaseTimelineWidget title="Histórico e Próximos Passos" events={caseData.timelineEvents} />

                {/* Outros Componentes (Ex: Documentos) poderiam vir aqui */}
                <div className="mt-4">
                    <CaseDocsPlaceholder title="Documentos Chave Anexados"/>
                </div>

            </div>

            {/* Coluna da Direita: Insights e Ações Rápidas */}
            <div className="col-lg-5 col-xl-4"> {/* Ocupa menos espaço */}

                {/* === INSIGHTS PREDITIVOS === */}
                <CaseInsightsWidget
                    probability={caseData.insights.probability}
                    probClass={caseData.insights.probClass}
                    valueRange={caseData.insights.valueRange}
                    keyFactors={caseData.insights.keyFactors}
                    statusDescription={caseData.insights.recommendation} // Usando recomendação simulada
                />

                 {/* Pode adicionar outros widgets aqui: Tarefas Relacionadas, Custos, etc. */}
                 <div className="card shadow-sm mt-4">
                    <div className="card-header"><i className="bi bi-list-task me-2"></i>Análise de Risco</div>
                    <div className="card-body">
                        <img 
                            src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Cenário Pessimista','Cenário Atual','Cenário Otimista'],datasets:[{label:'Probabilidade de Êxito',data:[25,45,70],backgroundColor:['rgba(220,53,69,0.8)','rgba(255,193,7,0.8)','rgba(40,167,69,0.8)']}]},options:{scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Probabilidade (%)'}},x:{title:{display:true,text:'Cenários'}}}}}" 
                            alt="Análise de risco do caso" 
                            className="img-fluid" 
                            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
                        />
                    </div>
                </div>
                <div className="card shadow-sm mt-4">
                    <div className="card-header"><i className="bi bi-list-task me-2"></i>Tarefas Pendentes do Caso</div>
                    <div className="card-body placeholder-list" style={{minHeight: '100px'}}>[Placeholder: Lista de Tarefas específicas deste caso]</div>
                 </div>

            </div>
        </div>
    </>
    );
}

export default CaseDetailScreen;