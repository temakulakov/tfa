import { makeAutoObservable } from "mobx";

class ModalStore {
  modal = 0;
  number = 1;
  data = [
    {
      id: 0,
      title: "Классика",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/classic.webp", "/card-image.png"],
    },
    {
      id: 1,
      title: "Под травертин",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/classic.webp", "/cardBack.png"],
    },
    {
      id: 2,
      title: "3Д фактура",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/classic.webp", "/cardBack.png"],
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  setNumber(props) {
    this.number = props;
  }

  setModal(props) {
    this.modal = props;
    this.modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }
}

export default new ModalStore();
