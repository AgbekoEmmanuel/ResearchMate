import React from 'react';
import './StarBorder.css';

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = '#2bb1b0',   // brand-500 teal default
  speed = '6s',
  thickness = 1.5,
  children,
  style,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{ padding: `${thickness}px 0`, ...style }}
      {...rest}
    >
      {/* sweeping gradient orbs */}
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />

      {/* card surface */}
      <div className="star-border-inner">{children}</div>
    </Component>
  );
};

export default StarBorder;
