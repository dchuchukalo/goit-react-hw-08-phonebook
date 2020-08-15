import { toast } from 'react-toastify';

const notification = text => {
  return toast.error(text);
};

export default notification;
