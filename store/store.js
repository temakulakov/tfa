import { makeAutoObservable} from "mobx";

class ModalStore {
    modal = false;
    constructor() {
        makeAutoObservable(this)
    }

    setModal(props) {
        this.modal = props;
        this.modal ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
    }
}

export default new ModalStore();