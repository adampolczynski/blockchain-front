import ReactModal from "react-modal";

interface ModalProps {
  show: boolean;
  text: string;
  onClose: () => void;
}
export const Modal = ({ show, text, onClose }: ModalProps) => {
  return (
    <ReactModal isOpen={show}>
      <textarea rows={10} value={text}>
        {text}
      </textarea>
      <button onClick={() => onClose()}>Close Modal</button>
    </ReactModal>
  );
};
