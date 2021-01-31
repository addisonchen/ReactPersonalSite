import React, { useState } from 'react'

export default function Menu({ width }) {

    const [ isExpanded, setIsExpanded ] = useState(0);

    return (width < 768 ? (
        <div className="mobileMenuContainer">
            <div className="homeButtonContainer">

            </div>

            <div className="menuButtonContainer">
                {/* place holder code to shower where toggle needs to be */}
                <div className="menuButton" onClick={() => setIsExpanded(1 - isExpanded)}>

                </div>
            </div>
            
        </div>
    ) : (
        <div className="menuContainer" onMouseEnter={() => setIsExpanded(1)} onMouseLeave={() => setIsExpanded(0)}>
            
        </div>
    ))
}
