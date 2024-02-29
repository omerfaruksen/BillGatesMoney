import React from 'react'

function Header({total, money}) {
    return (
        
        <div className='header'>
            
            {total> 0 && (
                <div><span>$ {money- total}</span></div>
            ) || (
                <div><span>$ {money}</span></div>
            )}
        </div>
    )
}

export default Header
