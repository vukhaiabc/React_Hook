import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name : PropTypes.string,
};
Hero.defaultProps = {
    name : '',
};

function Hero({name}) {
    console.log(name)
    return (
        <div>
            <h1>Sử dụng memo (HOC - Reactjs) : {name}</h1>
        </div>
    );
}

export default React.memo(Hero);