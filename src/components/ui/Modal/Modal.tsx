import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { MdOutlineClose } from 'react-icons/md';

export default function Modal({ children, show, close }: { children?: React.ReactNode, show: boolean, close: () => void }) {
    const lenis = useSmoothScrollingControl();

    const modalOverlayAnim: Variants = {
        initial: { backdropFilter: 'blur(0px)' },
        enter: { backdropFilter: 'blur(5px)' },
        exit: { backdropFilter: 'blur(0px)' }
    }

    const modalAnim: Variants = {
        initial: { scale: 0 },
        enter: { scale: 1 },
        exit: { scale: 0 }
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    variants={modalOverlayAnim}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{duration: 0.3, ease:"easeIn"}}
                    className="modal-overlay">
                    <motion.div
                        variants={modalAnim}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        transition={{duration: 0.4, ease: [0.76, 0, 0.24, 1]}}
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