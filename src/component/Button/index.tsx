import Styled from './Button.styles';

const Button = ({
    text = '',
    onClick = () => {},
}) => {
    return (
        <>
            <Styled.Button
                onClick={() => { onClick(); }}
            >
                {text}
            </Styled.Button>
        </>
    )
}

export default Button;