import { makeAutoObservable } from "mobx";


class ModalStore {
  modal = 0;
  number = 1;
  textName = "";
  textNumber = "";
  textEmail = "";
  data = [
    {
      id: 0,
      title: "Классика",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/classic.webp", "/call-background.jpg"],
    },
    {
      id: 1,
      title: "Под травертин",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/travertin copy.jpeg", "/4.jpg"],
    },
    {
      id: 2,
      title: "3Д фактура",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip",
      img: ["/3d.jpeg", "/3.jpg"],
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
    this.modal
  }
}

export default new ModalStore();
