import React from "react"

function Footer (){
    var year = new Date().getFullYear()
    return (
    <footer className = "footer">
        Copyright ⓒ {year}
    </footer>
    )
}

export default Footer