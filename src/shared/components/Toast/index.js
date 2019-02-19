import React from 'react';

import styles from './index.css';

function Toast(props){
  var timer = setTimeout(closeToast, props.delay);
  function closeToast(){
    props.close(props.id)
    clearTimeout(timer)
  }
  return(
    <div onClick={closeToast} className={styles.container}>
      Preview Not Available
    </div>
  )
}

export default Toast;
