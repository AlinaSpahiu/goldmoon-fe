import React from "react"

export default function Hero({ children, hero }) {
    return( <header className={hero} classN> {children} </header>
    )
}

Hero.defaultProps={
    hero: "defaultHero"
}