import css from './Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <motion.div
        className={css.modalContent}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <svg onClick={onClose} className={css.closeIcon} width={25} height={25}>
          <use href="sprite.svg#icon-close"></use>
        </svg>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
