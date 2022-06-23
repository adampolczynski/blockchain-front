import ReactModal from "react-modal";

interface ModalProps {
  show: boolean;
  text: string;
  onClose: () => void;
}
export const Modal = ({ show, text, onClose }: ModalProps) => {
  return (
    <div>
      <ReactModal isOpen={show} contentLabel="Info">
        <textarea rows={10} value={text}>
          {text}
        </textarea>
        <button onClick={() => onClose()}>Close Modal</button>
      </ReactModal>
    </div>
  );
};
