import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    return (
        <li className="mr-8 hover:bg-red-200 px-3 rounded-lg">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes ={
    route: PropTypes.object
}
export default Link;