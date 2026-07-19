import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Lock, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-privacy-modal', handleOpen);
    return () => window.removeEventListener('open-privacy-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-[#FDFCFB] border border-[#1A1A1A] rounded-none p-6 md:p-8 max-h-[85vh] overflow-y-auto z-10 editorial-shadow-dark font-sans"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-[#F9F7F2] border border-transparent hover:border-[#1A1A1A] transition-all cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4 text-[#1A1A1A]" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#E5E1DA]">
              <Shield className="w-6 h-6 text-[#1A1A1A]" />
              <div>
                <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Termos & Privacidade</h3>
                <p className="text-[10px] text-[#8E8A83] uppercase tracking-wider font-bold">Conformidade com a LGPD e o Código de Ética do CFP</p>
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-6 text-xs text-[#2C3531] leading-relaxed">
              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide flex items-center">
                  <FileText className="w-4 h-4 mr-1.5" />
                  1. Tratamento de Dados Pessoais
                </h4>
                <p>
                  Em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>, informamos que este site <strong>não armazena nem processa seus dados pessoais em nenhum banco de dados externo ou servidor próprio</strong>.
                </p>
                <p className="mt-2">
                  As informações preenchidas no formulário de contato (nome, assunto e mensagem) são utilizadas exclusivamente para estruturar e automatizar o texto de contato via API do WhatsApp. A comunicação ocorre de forma direta e segura entre o usuário e o profissional.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide flex items-center">
                  <Lock className="w-4 h-4 mr-1.5" />
                  2. Sigilo Profissional e Segurança
                </h4>
                <p>
                  De acordo com as resoluções do <strong>Conselho Federal de Psicologia (CFP)</strong>, as sessões de psicoterapia online ocorrem através de plataformas de videoconferência que possuem criptografia de ponta a ponta e atendem a todos os requisitos de segurança e sigilo exigidos para o exercício profissional da psicologia no Brasil.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  3. Direitos do Usuário (Titular dos Dados)
                </h4>
                <p>
                  Você tem o direito de solicitar a retificação, limitação ou exclusão de qualquer informação compartilhada durante a marcação de consultas diretamente ao profissional. Nenhum dado é repassado a terceiros sem consentimento prévio por escrito.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide">
                  4. Cookies e Tecnologias de Rastreamento
                </h4>
                <p>
                  Este site utiliza apenas recursos estritamente necessários para permitir a navegação e a correta funcionalidade dos recursos interativos (como manter as configurações de acessibilidade do site). Não utilizamos cookies de rastreamento comercial ou publicidade invasiva.
                </p>
              </div>
            </div>

            {/* Footer button */}
            <div className="mt-8 pt-4 border-t border-[#E5E1DA] flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FDFCFB] bg-[#1A1A1A] hover:bg-[#333] transition-colors rounded-none cursor-pointer"
              >
                Entendi e Aceito
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
