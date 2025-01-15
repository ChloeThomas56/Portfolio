import { AnimatePresence, motion } from 'framer-motion';
import { modalBlur, modalScale } from '@/lib/variants';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { MdOutlineClose } from 'react-icons/md';

export default function Modal({ children, show, close }: { children?: React.ReactNode, show: boolean, close: () => void }) {
    const lenis = useSmoothScrollingControl();

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    variants={modalBlur}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="modal-overlay">
                    <motion.div
                        variants={modalScale}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="modal"
                        role="dialog"
                        onAnimationStart={(variant) => {
                            if (variant === 'enter') {
                                lenis?.stop();
                                document.documentElement.style.overflowY = 'hidden';
                            }
                        }}
                        onAnimationComplete={(variant) => {
                            if (variant === 'exit') {
                                lenis?.start();
                                document.documentElement.style.overflowY = 'auto'; 
                            }
                        }}>
                            <button className="modal__close-btn" onClick={close}>
                                <MdOutlineClose />
                            </button>
                            {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

}