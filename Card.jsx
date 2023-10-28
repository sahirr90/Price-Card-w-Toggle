import React from 'react'

const Card = ({ price, small, small2 }) => {
    return (
        <div className='Card'>
            <header>

                <h4 className='card-price'>{price}</h4>
                <h8 className='text'>{small}</h8>
                <h8 className='text2'>{small2}</h8>
            </header>
        </div>
    )
}

export default Card