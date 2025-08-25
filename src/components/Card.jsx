import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  shadow = 'medium',
  padding = 'medium',
  onClick,
  ...props 
}) => {
  const shadows = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  
  const hoverEffect = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  const clickable = onClick ? 'cursor-pointer' : '';
  
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      onClick={onClick}
      className={`bg-white rounded-lg ${shadows[shadow]} ${paddings[padding]} ${hoverEffect} ${clickable} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;