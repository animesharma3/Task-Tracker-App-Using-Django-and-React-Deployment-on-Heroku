import PropTypes from 'prop-types'
// impt rafce
import Button from './Button'

// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{ title }</h1> */}

            {/* <h1 style={ headingStyle }>{ title }</h1> */}
            <h1>{ title }</h1>
            {/* <button className='btn'>Add</button> */}

            {/* <Button color='green' text='Hello' />
            <Button color='red' text='Hello' />
            <Button color='blue' text='Hello' /> */}

            {/* Reusable Components */}

            <Button color={ showAdd ? 'red': 'green' } text={ showAdd ? 'Close': 'Add' } onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header