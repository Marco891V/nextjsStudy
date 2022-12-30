import { Button as UIButton } from 'reactstrap' //richiama bottone strap ma con possibilità di custom tramite alias

const Button = (props) => {
    const title = props.title
    const icon = props.icon 
    const color = props.color
    const onClick = props.onClick

    return(
        <UIButton
            color={color}
            className='text-center rounded shadow-sm border p-1'
            onClick= {onClick}
        >
            {props.icon && icon()}
            <span className='mx-2'>{title}</span>
        </UIButton>
    )
} 

export default Button