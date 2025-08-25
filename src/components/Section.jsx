const Section = ({ 
  children, 
  className = '', 
  padding = 'medium',
  background = 'white',
  container = true,
  id,
  ...props 
}) => {
  const paddings = {
    none: '',
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24',
  };
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  };
  
  return (
    <section
      id={id}
      className={`${paddings[padding]} ${backgrounds[background]} ${className}`}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;