import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({feature}) => {
    return (
        <div className='text-left flex items-center gap-3 pl-5'>
            <AiFillCheckCircle className='text-green-500 text-2xl'></AiFillCheckCircle>
            <p className='text-xl mt-1'>{feature}</p>
        </div>
    );
};
Features.propTypes ={
    feature: PropTypes.string.isRequired
}
export default Features;