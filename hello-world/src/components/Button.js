import PropTypes from 'prop-types'

const Button = ({ color, copy, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className='btn'
            style={{ backgroundColor: color}}
        >
            {copy}
        </button>
    );
}

Button.defaultProps = {
    color: 'blue',
    copy: 'Add55'
}

Button.propTypes = {
    color: PropTypes.string,
    copy: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button