import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-heading tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer"
}) => {
  return (
    <div className={className}>
      <img 
        src="/ecosystem/risemanager.png" 
        alt="RiseManager Logo" 
        className={`${iconClassName} object-contain`}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className={`${iconClassName} hidden bg-primary rounded-xl items-center justify-center shadow-lg shadow-primary/20`}>
         <div className="w-[50%] h-[50%] bg-white rounded-sm rotate-45" />
      </div>
      {showText && <span className={textClassName}>RiseManager</span>}
    </div>
  );
};

export default Logo;
