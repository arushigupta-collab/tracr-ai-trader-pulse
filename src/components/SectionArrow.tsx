import { ChevronDown } from 'lucide-react';

interface SectionArrowProps {
  variant?: 'default' | 'glow' | 'bounce' | 'float';
  className?: string;
}

const SectionArrow = ({ variant = 'default', className = '' }: SectionArrowProps) => {
  const getArrowStyles = () => {
    switch (variant) {
      case 'glow':
        return 'text-pantone-298 animate-pulse hover:text-pantone-171 drop-shadow-[0_0_20px_rgba(0,234,255,0.6)] hover:drop-shadow-[0_0_30px_rgba(255,20,147,0.8)]';
      case 'bounce':
        return 'text-white/70 animate-bounce hover:text-pantone-298 hover:scale-125';
      case 'float':
        return 'text-pantone-171 animate-[float_3s_ease-in-out_infinite] hover:text-white hover:scale-110';
      default:
        return 'text-white/60 hover:text-pantone-298 hover:scale-110';
    }
  };

  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <ChevronDown
        size={32}
        className={`cursor-pointer transition-all duration-300 ${getArrowStyles()}`}
      />
    </div>
  );
};

export default SectionArrow;