import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({ title , onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>
                {title}
            </h1>
            <Button 
                color={showAdd ? 'red' : 'green'}  
                copy={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'This is default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header
