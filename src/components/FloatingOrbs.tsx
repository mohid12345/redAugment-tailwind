import React from 'react';

const FloatingOrbs: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <style >{`
            .orbs-container::before,
            .orbs-container::after,
            .fast-orbs::before,
            .fast-orbs::after {
              position: fixed;
              top: 50%;
              left: 50%;
              width: 3em;
              height: 3em;
              content: ".";
              mix-blend-mode: screen;
              animation: move infinite ease-in-out alternate;
            }
    
            .orbs-container::before {
              text-shadow: 
                1.4952886907em 0.5833486293em 12px rgba(160, 120, 255, 0.9),
                -0.7302391306em 1.2922216775em 14px rgba(220, 210, 255, 0.8);
              animation-duration: 44s;
              animation-delay: -27s;
            }
    
            .orbs-container::after {
              text-shadow: 
                0.6144792605em 1.5176242603em 18px rgba(130, 0, 255, 0.85),
                -0.5538613803em 0.92195917em 16px rgba(190, 140, 255, 0.75);
              animation-duration: 43s;
              animation-delay: -32s;
            }
    
            .fast-orbs::before {
              text-shadow: 
                1.1235329073em 0.8515888954em 10px rgba(230, 190, 255, 0.9),
                0.5166925109em 1.1140487437em 9px rgba(255, 220, 255, 0.85),
                -0.3745379215em 0.8584201087em 11px rgba(180, 100, 255, 0.8);
              animation-duration: 30s;
              animation-delay: -15s;
            }
    
            .fast-orbs::after {
              text-shadow: 
                0.7830701982em 0.515548237em 12px rgba(210, 150, 255, 0.85),
                1.1154790195em 1.0364328179em 10px rgba(255, 200, 255, 0.8),
                -0.4683737283em 0.7478802852em 14px rgba(140, 60, 255, 0.9);
              animation-duration: 25s;
              animation-delay: -10s;
            }
    
            @keyframes move {
              from {
                transform: rotate(0deg) scale(12) translateX(-20px);
              }
              to {
                transform: rotate(360deg) scale(18) translateX(20px);
              }
            }
    
            @keyframes fast-move {
              from {
                transform: rotate(0deg) scale(10) translateX(-30px);
              }
              to {
                transform: rotate(360deg) scale(16) translateX(30px);
              }
            }
          `}</style>
          <div className="orbs-container w-full h-full text-5xl bg-[#0e0225]" />
          <div className="fast-orbs w-full h-full absolute top-0 left-0 text-5xl" />
        </div>
      );
};

export default FloatingOrbs;