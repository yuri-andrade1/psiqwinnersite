import React from 'react';
import { motion } from 'motion/react';

export default function AmbientBreezeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-60">
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Wave Line 1 (Gold) */}
        <motion.path
          d="M -200,100 Q 300,40 600,160 T 1400,80"
          fill="none"
          stroke="#C5A059"
          strokeWidth="2.5"
          strokeDasharray="180 220"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-400, 400] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />

        {/* Wave Line 2 (Dark Charcoal) */}
        <motion.path
          d="M -200,280 Q 450,360 800,240 T 1400,320"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeDasharray="140 260"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-500, 300] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {/* Wave Line 3 (Taupe) */}
        <motion.path
          d="M -200,480 Q 250,400 650,540 T 1400,460"
          fill="none"
          stroke="#8E8A83"
          strokeWidth="2.5"
          strokeDasharray="200 300"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-450, 450] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Wave Line 4 (Gold Accent) */}
        <motion.path
          d="M -200,680 Q 500,600 850,720 T 1400,640"
          fill="none"
          stroke="#C5A059"
          strokeWidth="2.5"
          strokeDasharray="160 240"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-360, 360] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}
