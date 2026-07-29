import React from 'react';
import { motion } from 'motion/react';

export default function AmbientBreezeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden select-none">
      <svg className="w-full h-full min-h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <motion.path
          d="M -200,120 Q 300,80 600,140 T 1400,100"
          fill="none"
          stroke="#8E8A83"
          strokeWidth="1.5"
          strokeDasharray="140 220"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-360, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M -200,320 Q 400,380 750,300 T 1400,350"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1"
          strokeDasharray="100 250"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-450, 250] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M -200,550 Q 250,500 650,580 T 1400,520"
          fill="none"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeDasharray="180 300"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-400, 400] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}
