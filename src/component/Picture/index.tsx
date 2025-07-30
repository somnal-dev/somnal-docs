import Styled from './Picture.styles';

const Picture = ({
    src = '',
    width = '300px',
}) => {
    return (
        <>
            <Styled.Picture
                src={src}
                width={width}
            />
        </>
    )
}

export default Picture;