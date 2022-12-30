import { FcGoogle } from 'react-icons/fc';
const Button = (props) => {

    return(
        <button
            color='white'
            outline={false}
            className='border btn p-1 rounded shadow-sm text-center'
        >
           < FcGoogle /> Google
        </button>
    )
} 

export default Button