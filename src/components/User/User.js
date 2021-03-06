
import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    return (
        <div>
            <div>
                <h1>Greeting</h1>
                {
                    familiar ? <h3>Welcome My Friend</h3> : <h3>Who the hell are you!!</h3>
                }
            </div>
            <div>
                <h1>Food</h1>
                {
                    familiar ? <h3>I will buy food for you</h3> : <h3>Let's eat his his whose whose money!!</h3>
                }
            </div>
            <div>
                <h1>Connection</h1>
                {
                    familiar && <h3>Let's join my facebook</h3>
                }
            </div>
        </div>
    );
};

export default User;