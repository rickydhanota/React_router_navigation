import React from 'react';
import { Link, navigate } from '@reach/router';

const Page_two = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/pageOne')
    }

    return (
        <div>
            <h1>This is Page 2</h1>
            <Link to='/pageOne'>Go To Page 1</Link>
            <button onClick = {onClickHandler}>Programmed Button to Page 1</button>
        </div>
    );
};


export default Page_two;