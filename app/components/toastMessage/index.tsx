import { toast, ToastContainer as ReactToastContainer, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type TToastMessageType = "error" | "warning" | "success" | "info"

export const ToastContainer = ReactToastContainer

export function showToastMessage(message: string, toastMessageType: TToastMessageType) {
  const option = {
    position: 'top-right' as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  switch(toastMessageType) {
    case 'error':
      toast.error(message, option);
      break;
    case 'success':
      toast.success(message, option);
      break;
    case 'info':
      toast.info(message, option);
      break;
    case 'warning':
      toast.warning(message, option);
      break;
    default:
      break;
  }
}