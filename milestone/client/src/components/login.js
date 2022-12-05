import 'bootstrap/dist/css/bootstrap.min.css'; 
import {FontAwesomeIcon} from '@fontawesome/react-font-awesome';
import {} from '@fontawesome/free regular.svg.cors';
import {faSign,faSignIn} from '@fontawesome/free.svg.icons';
export function login_form(){
    return(
        <div>
            <div className="container">
                <div className="row-mt-6">
                    <div className='col-mg-4 text-center'>&nbsp;</div>
                        <div className="col-log-4">&nbsp;</div>
                        </div>
                        <div className='row-mt-3'>
                            <div className='col-lg-4'>&nbsp;</div>
                         <div className='col-log-2'>
                            <label className='username'>
                                username :

                            </label>
                         </div>

                        <div className="col-lg-2">
                            <input type={"text"} name="password" id="password" className="password" 
                            
                        </div>
                            <div className='col-lg-3'>&nbsp;</div>

                    </div>
                    <div className='col-lg-3'>
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-2'>
                            <label className="password">
                                password:
                            </label>
                        </div>
                        <div class='col-lg-2'>
                            <input type={"text"} name="password" id="password" className="password"
                            
                         </div>
                        <div className='col-lg-4'>&nbsp;</div>
        
                    </div> 
                    <div className='col-mt-3'>
                        <div className='col-lg-4'>&nbsp;</div>
                        <div className='col-lg-2'>
                            <Link to={"/Dashboard"}><p><FontAwesomeIcon icon={faSignIn}/></p></Link>
                        </div>
                        <div className='col-lg-2'>
                         <Link to={"/registration_form"} ><p><FontAwesomeIcon icon={faSignIn}/></p></Link>

                        </div>
                        <div className='col-lg-4'>&nbsp;</div>
                    </div>

                </div>
            </div>
            )
               }
