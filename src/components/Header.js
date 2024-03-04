import React from 'react';
import './Header.css';

const Header = ()=>{
    return(
        <>
         {/*this are the class which are using from the Semantic ui */}
        <div className='ui fixed menu header'> 
            <div className='ui container center'>
                <h1>SaiShop</h1>
            </div>
        </div>
        </>
    )
};

export default Header;