import store from "../../store/store";
import {observer} from "mobx-react-lite";

const Modal = observer((props) => {
    return <div className={store.modal ? "modal active" : "modal"} onClick={() => {
        store.setModal(false);
        console.log(store.modal);
    }}>
        <div className={store.modal ? "modal active content" : "modal content"} onClick={e => e.stopPropagation()}>
            {props.children}
        </div>
    </div>
});

export default Modal;