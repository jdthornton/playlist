import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Toast from '../Toast';

import styles from './index.css';
const animations = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive
}

const Toaster = ({toasts, removeToast}) =>
    <TransitionGroup className={styles.container}>
        {toasts.map(toast =>
          <CSSTransition
            classNames={animations}
            timeout={300}
            unmountOnExit
          >
            <Toast key={toast.id} toast={toast} close={removeToast} />
          </CSSTransition>
        )}
    </TransitionGroup>


export default Toaster;
