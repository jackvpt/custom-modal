// src/jackvpt-custom-modal.d.ts
declare module 'jackvpt-custom-modal' {
    export interface ModalProps {
      // Exemples de props pour ton modal
      isOpen: boolean;
      onClose: () => void;
      content: React.ReactNode;
    }
  
    const Modal: React.FC<ModalProps>;
  
    export default Modal;
  }
  