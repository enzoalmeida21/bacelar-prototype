import React from 'react';

function CaseTimelinePlaceholder() { 
  return (
    <div className="card shadow-sm h-100">
      <div className="card-header">
        <i className="bi bi-calendar-week me-2"></i>Timeline Visual do Caso
      </div>
      <div className="card-body">
        {/* Substituindo placeholder por timeline visual */}
        <img 
          src="https://i.imgur.com/OfuGsHs.png" 
          alt="Timeline visual do processo" 
          className="img-fluid" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export default CaseTimelinePlaceholder;