import store from "../../store/store";

const Button = (props) => {
  if (props.modal) {
    return (
      <button
        className={`button ${props.styles}`}
        onClick={() => {
          store.setModal(props.modal);
        }}>
        <span>{props.children}</span>
      </button>
    );
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
