import PropTypes from 'prop-types'
import Button from './Button.js'
import { useLocation } from 'react-router-dom'

const Header = ({ title , onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={headingStyle}>
                {title}
            </h1>
            {location.pathname === '/' && <Button 
                color={showAdd ? 'red' : 'green'}  
                copy={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} 
            />}
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
