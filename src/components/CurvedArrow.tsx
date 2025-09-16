interface CurvedArrowProps {
  className?: string;
}

const CurvedArrow = ({ className = '' }: CurvedArrowProps) => {
  return (
    <div className={`flex justify-center py-12 ${className}`}>
      <svg
        width="80"
        height="180"
        viewBox="0 0 80 180"
        fill="none"
        className="animate-float hover:scale-110 transition-transform duration-300"
      >
        {/* Curved flowing path */}
        <path
          d="M40 10 C20 30, 60 50, 30 80 C15 100, 45 120, 35 140 C30 155, 50 160, 40 170"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
        
        {/* Arrow head */}
        <path
          d="M35 165 L40 170 L45 165 M37 167 L40 170 L43 167"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--pantone-298))" />
            <stop offset="50%" stopColor="hsl(var(--pantone-171))" />
            <stop offset="100%" stopColor="hsl(var(--pantone-715))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CurvedArrow;