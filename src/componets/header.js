import { Fragment } from "react";
import {Link} from 'react-router-dom'
import Srch from './ProductSrch'

export default function Header({cartItems}){
    return <Fragment>
                    <nav className="navbar row">
                        <div className="col-12 col-md-3">
                            <div className="navbar-brand">
                          <Link to={"/"}>  <img width="150px" src="./images/logo1.png" /> </Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-2 mt-md-0">
                           <Srch/>
                        </div>

                        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                            <Link to={"/cart"}>
                            <span id="cart" className="ml-3">Cart</span>
                            <span className="ml-1" id="cart_count">{cartItems.length}</span></Link>
                            
                        </div>
                     </nav>
    </Fragment>
}