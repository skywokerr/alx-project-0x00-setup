import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md', 
  className = '' 
}) => {
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Base classes with dynamic size and shape
  const baseClasses = `bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200 ${sizeClasses[size]} ${shape} ${className}`;

  return (
    <button className={baseClasses}>
      {title}
    </button>
  );
};

export default Button;