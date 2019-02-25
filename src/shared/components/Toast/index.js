import React from 'react';

import styles from './index.css';

function Toast(props){
  var timer = setTimeout(closeToast, 1500);
  function closeToast(){
    props.close(props.toast.id)
    clearTimeout(timer)
  }
  return(
    <div onClick={closeToast} className={styles.container}>
      {props.toast.msg}
    </div>
  )
}

export default Toast;
