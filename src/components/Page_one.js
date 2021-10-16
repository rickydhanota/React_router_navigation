import React from 'react';
import { Link, navigate } from '@reach/router';

const Page_one = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/pageTwo')
    }

    return (
        <div>
            <h1>This is Page 1</h1>
            <Link to='/pageTwo'>Go To Page 2</Link>
            <button onClick = {onClickHandler}>Programmed Button to Page 2</button>
        </div>
    );
};

export default Page_one;