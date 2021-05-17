import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log(e.target);
    }

    return (
        <header className='header'>
            <h1 style={headingStyle}>
                {title}
            </h1>
            <Button color='yellow' copy='NEW Copy' onClick={onClick} />
            <Button color='green' copy='Copy 2' onClick={onClick} />
            <Button color='black' copy='Copy 3' onClick={onClick} />
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
