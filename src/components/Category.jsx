import React from 'react';

const Category = props => {
    return (
      <li className={props.class}><a href='#'>{props.name} <span>&nbsp;&nbsp;/</span></a></li>
    )
}

export default Category;
