import React from 'react';
import { motion } from 'motion/react';

export default function AmbientBreezeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden select-none">
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <motion.path
          d="M -100,120 Q 300,40 600,140 T 1100,90"
          fill="none"
          stroke="#C5A059"
          strokeWidth="2"
          strokeDasharray="160 240"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-400, 400] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M -100,300 Q 400,360 750,260 T 1100,320"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeDasharray="120 280"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-500, 300] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M -100,480 Q 250,420 650,520 T 1100,450"
          fill="none"
          stroke="#8E8A83"
          strokeWidth="2"
          strokeDasharray="180 320"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-450, 450] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}
