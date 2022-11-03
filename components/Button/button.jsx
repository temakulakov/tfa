import store from "../../store/store";

const Button = (props) => {
  if (props.modal) {
    switch (props.modal) {
      case 1:
        return (
          <button
            className={`button ${props.styles}`}
            onClick={() => {
              store.setModal(true);
            }}>
            <span>{props.children}</span>
          </button>
        );
    }
  } else {
    return (
      <button
        className={`button ${props.styles}`}
        onClick={() => {
          props.onclick ? props.onclick(true) : "";
        }}>
        <span>{props.children}</span>
      </button>
    );
  }
};

export default Button;
