import React  from 'react'
import PropTypes from 'prop-types'

import './event.scss'

const Event = ({
    title,
    start
}) => {

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(date)
            const day = formattedDate.getDate()
            const month = formattedDate.getMonth()+1
            const year = formattedDate.getFullYear()
            return `${day}/${month}/${year}`
        }
    }

    return (
        <>
            <div className="event-container">
                <p>{formatDate(start)}</p>
                <p>{title}</p>
            </div>
        </>
    )
}

Event.propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}

export default Event
