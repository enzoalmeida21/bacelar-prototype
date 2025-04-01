import React from 'react';

const CaseInsightsWidget = ({ probability, probClass, valueRange, keyFactors = [], statusDescription }) => (
     <div className="card shadow-sm insights-widget">
          <div className="card-header"><i className="bi bi-lightning-charge-fill me-2"></i>Insights Preditivos & Risco</div>
          <div className="card-body text-center">
               {/* Logo como marca d'água */}
               <div className="position-absolute opacity-05 logo-watermark">
                    <img src="/images/logo.png" alt="Bacelar" width="120" />
               </div>
               
               <h6 className='text-muted small text-uppercase'>Probabilidade de Êxito</h6>
               <p className={`display-6 fw-bold mb-1 ${probClass}`}>{probability}</p>
               <hr className='my-3'/>
               <h6 className='text-muted small text-uppercase'>Estimativa de Valor (Cenário Prov.)</h6>
               <p className='fs-5 mb-3'>{valueRange}</p>
               <h6 className='text-muted small text-uppercase'>Fatores Chave (IA)</h6>
               <ul className='list-unstyled text-start small mb-3'>
                    {keyFactors.map((factor, index) => (
                        <li key={index} className='mb-1'>
                            <i className={`${factor.icon} me-2 ${factor.class}`}></i>{factor.text}
                        </li>
                    ))}
               </ul>
               <hr className='my-3'/>
               <h6 className='text-muted small text-uppercase'>Sugestão IA</h6>
               <p className='small fst-italic mb-0'>{statusDescription}</p>
          </div>
          
          {/* Footer com logo */}
          <div className="card-footer-branded">
               <small className="text-muted">Análise gerada por IA</small>
               <img src="/images/logo.png" alt="Bacelar" />
          </div>
     </div>
);

export default CaseInsightsWidget;