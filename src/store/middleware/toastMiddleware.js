import { toast } from 'react-toastify';
import { errorAdded } from '../error';

const toastMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === errorAdded.type) {
      toast.error(action.payload);
      next(action);
    } else next(action);
  };

export default toastMiddleware;
