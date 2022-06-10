import React, { useState } from 'react';

const Tour = ({ image, name, id, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return <article className='single-tour'>
    <div>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : "read more"}</button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>

    </div>
  </article>
};

export default Tour;
