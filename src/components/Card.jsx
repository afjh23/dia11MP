import React from 'react'

export const Card = ({x, i}) => {
  return (
    <li key={i}>
                <article>
                  <figure>
                    <img src={x.photo} />
                  </figure>
                  <div className='description'>
                    <div className='detailed'>
                      {x.superHost && <div className='super-host'><span>SUPER HOST</span></div>}
                      <div className='type'> <p>{x.type}</p></div>
                      <div className='beds'>  <p>.{x.beds}</p></div>
                    </div>
                    <div className='punctuation'>
                      <span className="rating-star">★</span>
                      <span className="rating"> {x.rating}</span>
                    </div>
                  </div>

                  <h2>{x.title}</h2>
                </article>
              </li>
  )
}
