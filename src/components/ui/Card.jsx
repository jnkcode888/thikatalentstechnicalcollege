import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  padding = true,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm';
  const hoverClasses = hover ? 'transition-all duration-200 hover:shadow-md hover:-translate-y-1' : '';
  const paddingClasses = padding ? 'p-6' : '';
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`mt-2 text-gray-600 ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 ${className}`}>{children}</div>
);

export default Card; 