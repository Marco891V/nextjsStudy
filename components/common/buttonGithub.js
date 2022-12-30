import { FaGithub } from 'react-icons/fa';
const Button = (props) => {

    return(
        <button
            color='white' //??
            outline={false}
            className='border btn p-1 rounded shadow-sm text-center'
        >
          < FaGithub /> GitHub 
        </button> 
    )
} 

export default Button

//potevo usare {props.title} e creare un solo bottone.
// ma come inserivo icon con props?? o css?
