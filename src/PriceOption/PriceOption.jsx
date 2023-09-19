import PropTypes from 'prop-types'; 

const PriceOption = ({gym}) => {
    return (
        <div className='bg-blue-700 text-white p-5 rounded-lg text-center'>
            <h1 className='mb-3'>
                <span className='text-6xl font-bold'>{gym.price}</span>
                <span className='text-3xl font-semibold'>/mon</span>
            </h1>
            <p className='text-4xl font-bold'>{gym.membership}</p>
            <p>
                
            </p>
        </div>
    );
};
PriceOption.propTypes={
    gym: PropTypes.object
}
export default PriceOption;