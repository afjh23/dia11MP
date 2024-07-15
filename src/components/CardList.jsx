import React from 'react'
import { Card } from './Card'

export const CardList = ({stay}) => {
  return (
    <section className='card-list'>
            <h1> Stays in </h1>
            <ul>

              {stay?.map((x, i) =>
              (
                <Card x={x} i={i}></Card>
              )


              )

              }



            </ul>
          </section>
  )
}
