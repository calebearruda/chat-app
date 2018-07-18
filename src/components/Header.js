import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ totalMessages, costumer }) => (
  <div>
    <p>User: {costumer.name}</p>
    <p>{totalMessages} Total Messages</p>
  </div>
)

Header.propTypes = {
  totalMessages: PropTypes.number.isRequired,
  costumer: PropTypes.object.isRequired
}

export default Header
