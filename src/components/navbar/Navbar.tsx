import './Navbar.css'

/**
 * renders the navigation bar based on the properties passed into it
 * @param props 
 * @returns 
 */
function Navbar() {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="name">
                        <h2>
                            Tembea
                        </h2>
                    </div>
                    <div className="links-wrapper">
                        <button className="">
                            Home
                        </button>
                        <button className="">
                            Places
                        </button>
                        <button className="">
                            Packages
                        </button>
                        <button className="">
                            About
                        </button>
                    </div>
                    <div className="account-wrapper">
                        <button className="">
                            account
                        </button>
                        <button className="create-acc">
                            create account
                        </button>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;