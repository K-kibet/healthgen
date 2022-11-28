import React from 'react';

const Newsletter = () => {
    return (
        <div className='newsletter' id='subscribe'>
            <h2>Subscribe to our email List</h2>
            <p>Subscribe Now</p>
            <form>
                <input type='email' name='newsletter' placeholder='example@gmail.com'/>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default Newsletter;
