const Button = (props) => {
    return <button className={`button ${props.styles}`}>
        <span>{props.children}</span>
    </button>
}

export default Button;