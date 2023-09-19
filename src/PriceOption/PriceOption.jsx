import PropTypes from 'prop-types'; 
import Features from '../component/Feature/Features';

const PriceOption = ({gym}) => {
    const {price,membership,features} = gym;
    // console.log(name,features)
    return (
        <div className='bg-blue-700 flex flex-col text-white p-5 rounded-lg text-center'>
            <h1 className='mb-3'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-3xl font-semibold'>/mon</span>
            </h1>
            <p className='text-4xl font-bold'>{membership}</p>
            <div className='mt-4 flex-grow gap-5'>
                {
                    features.map((feature, idx)=><Features key={idx} feature={feature}></Features>)
                }
            </div >
            <div className=''>
            <button className='text-xl font-bold mt-8 py-2 hover:bg-green-700 bg-green-500 rounded-lg w-full '>Buy Now</button>

            </div>
        </div>
    );
};
PriceOption.propTypes={
    gym: PropTypes.object
}
export default PriceOption;