import React from 'react';

const CaseDocsPlaceholder = ({title = "Documentos"}) => (
     <div className="card shadow-sm">
          <div className="card-header"><i className="bi bi-archive me-2"></i>{title}</div>
          <div className="card-body">
             {/* Substituindo placeholder por grid de documentos */}
             <div className="row g-3">
                <div className="col-md-3">
                    <div className="card h-100 border">
                        <div className="card-body p-2 text-center">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                                alt="PDF" 
                                className="img-fluid mb-2" 
                                style={{maxHeight: '60px'}} 
                            />
                            <p className="small mb-0">Petição Inicial.pdf</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border">
                        <div className="card-body p-2 text-center">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                                alt="PDF" 
                                className="img-fluid mb-2" 
                                style={{maxHeight: '60px'}} 
                            />
                            <p className="small mb-0">Contestação.pdf</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border">
                        <div className="card-body p-2 text-center">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                                alt="PDF" 
                                className="img-fluid mb-2" 
                                style={{maxHeight: '60px'}} 
                            />
                            <p className="small mb-0">Decisão.pdf</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border">
                        <div className="card-body p-2 text-center">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                                alt="PDF" 
                                className="img-fluid mb-2" 
                                style={{maxHeight: '60px'}} 
                            />
                            <p className="small mb-0">Recurso.pdf</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Logo como marca d'água */}
             <div className="position-absolute opacity-05 logo-watermark">
                <img src="/images/logo.png" alt="Bacelar" width="150" />
             </div>
          </div>
          
          {/* Footer com logo */}
          <div className="card-footer-branded">
               <small className="text-muted">Repositório de documentos</small>
               <img src="/images/logo.png" alt="Bacelar" />
          </div>
     </div>
);

export default CaseDocsPlaceholder;