import { connect } from 'react-redux';

import { removeToast } from '../reducers/toast';
import Toaster from '../components/Toaster';

export default connect(
  ({toast}) => ({toasts: toast}),
  {removeToast}
)(Toaster);
