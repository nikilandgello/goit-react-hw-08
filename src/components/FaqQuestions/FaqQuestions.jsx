import { useState } from 'react';
import css from './FaqQuestions.module.css';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const FaqQuestions = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = index => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
      <h2 className={css.title}>FAQ - Frequently Asked Questions</h2>
      <div className={css.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={css.faqItem}>
            <div className={css.faqItemHead} onClick={() => toggleFAQ(index)}>
              <p className={clsx(css.textQuestion, css.text)}>{faq.question}</p>
              <svg
                width={20}
                height={20}
                className={clsx(
                  openIndexes.includes(index) ? css.open : css.close,
                  css.icon
                )}
              >
                <use href="/sprite.svg#icon-arrow"></use>
              </svg>
            </div>
            <AnimatePresence initial={false}>
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ height: 0, visibility: 'hidden' }}
                  animate={{
                    height: 'auto',
                    visibility: 'visible',
                  }}
                  exit={{ height: 0, visibility: 'hidden' }}
                  transition={{
                    height: { duration: 0.25 },
                    visibility: { duration: 0 },
                  }}
                  className={css.askedContainer}
                >
                  <div className={css.faqTextContainer}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0, delay: 0.25 },
                      }}
                      className={css.text}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqQuestions;
