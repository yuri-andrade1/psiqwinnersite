import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('psiwinner-cookie-consent');
    if (!consent) {
      // Show consent banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('psiwinner-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('psiwinner-cookie-consent', 'declined');
    setIsVisible(false);
  };

  const handleOpenPrivacy = () => {
    window.dispatchEvent(new CustomEvent('open-privacy-modal'));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-[#FDFCFB] border border-[#1A1A1A] p-5 sm:p-6 rounded-none shadow-2xl editorial-shadow-dark font-sans"
        >
          <div className="flex items-start space-x-3.5">
            <div className="p-2 border border-[#1A1A1A] bg-[#F9F7F2] text-[#1A1A1A] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1A1A1A] mb-1">
                Privacidade & Cookies
              </h4>
              <p className="text-[11px] text-[#2C3531] leading-relaxed mb-4">
                Utilizamos apenas cookies essenciais para navegação segura e em total conformidade com a <strong>LGPD</strong>. Ao continuar, você concorda com nossos termos. Leia nossa{' '}
                <button
                  onClick={handleOpenPrivacy}
                  className="font-bold underline text-[#1A1A1A] hover:text-[#8E8A83] transition-colors cursor-pointer focus:outline-none"
                >
                  Política de Privacidade
                </button>
                .
              </p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#FDFCFB] bg-[#1A1A1A] hover:bg-[#333] transition-colors rounded-none cursor-pointer"
                >
                  Aceitar
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#8E8A83] hover:text-[#1A1A1A] transition-colors rounded-none cursor-pointer"
                >
                  Recusar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
