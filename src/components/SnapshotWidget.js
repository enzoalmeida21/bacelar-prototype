// src/components/SnapshotWidget.js
import React from 'react';

function SnapshotWidget({ icon, bgColor, textColor, title, value, footer, link }) {
  // Construindo a classe de cor manualmente em vez de usar text-bg-* diretos
  // Assim podemos usar RGBA ou cores customizadas mais fácil se necessário
  const cardClasses = `card ${textColor || ''} shadow-sm h-100 snapshot-card`; // Adicionado 'snapshot-card'
  const cardStyles = bgColor ? { backgroundColor: bgColor, borderColor: bgColor } : {}; // Estilo inline para cor

  // Mapeia classes de background para cores CSS se não vierem como cores diretas
  // Idealmente, passaríamos cores hex/rgba via props
  let footerColorStyle = {};
  let linkClass = `card-footer ${textColor || ''} d-flex justify-content-between align-items-center text-decoration-none snapshot-footer`; // classe para footer
   if (bgColor === 'bg-primary') { cardStyles.backgroundColor = '#3a5a78'; cardStyles.borderColor = '#3a5a78'; footerColorStyle.color = 'rgba(255, 255, 255, 0.8)';}
   else if (bgColor === 'bg-warning') { cardStyles.backgroundColor = '#c7a463'; cardStyles.borderColor = '#c7a463'; footerColorStyle.color = 'rgba(0, 0, 0, 0.8)'; textColor = 'text-dark';} // tom ouro velho, texto escuro
   else if (bgColor === 'bg-success') { cardStyles.backgroundColor = '#52796f'; cardStyles.borderColor = '#52796f'; footerColorStyle.color = 'rgba(255, 255, 255, 0.8)';} // Verde desaturado
   else if (bgColor === 'bg-secondary') { cardStyles.backgroundColor = '#495057'; cardStyles.borderColor = '#495057'; footerColorStyle.color = 'rgba(255, 255, 255, 0.8)';} // Cinza grafite escuro

   // Garante que textColor seja atualizado para warning
    const finalCardClasses = `card ${textColor || ''} shadow-sm h-100 snapshot-card`;

  return (
    <div className="col-xl-3 col-md-6">
      {/* Aplicando a classe snapshot-card e estilos inline para cor */}
      <div className={finalCardClasses} style={cardStyles}>
        <div className="card-body"> {/* snapshot-body adicionado aqui */}
           <div className="snapshot-content"> {/* Novo wrapper para conteúdo */}
              <i className={`${icon} snapshot-icon mb-2`}></i> {/* Classe para icone */}
              <h5 className="snapshot-title">{title}</h5>
              <p className="snapshot-value">{value}</p>
           </div>
        </div>
         <a href={link || '#!'} className={linkClass} style={footerColorStyle}> {/* Usando href="#!" e classe/estilo para footer */}
             <span>{footer}</span> {/* Span para texto do footer */}
            <i className="bi bi-arrow-right-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default SnapshotWidget;