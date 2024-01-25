import { Title } from "../../Styles/title";

const RenderTitle = ({
    title,
    color,
    size,
    align,
    fontWeight,
    padding,
    margin,
    styleString,
    bgColor,
    id,
}) => {
    return (
        <Title
            id={id}
            color={color}
            size={size}
            align={align}
            margin={margin}
            fontWeight={fontWeight}
            padding={padding}
            styleString={styleString}
            bgColor={bgColor}
        >
            {title}
        </Title>
    );
};

export default RenderTitle;
