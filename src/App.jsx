import { useState } from 'react'
import reactLogo from './assets/react.svg'
import datajs from './assets/stays.json'
import './App.css'

function App() {
  const [data, setData] = useState(datajs)
  const [openModal,setOpenModal] = useState(false)

  function toggleModal(){
    setOpenModal(true)
  }
  return (
    <>
      {openModal && <div className='modal'><div className='modal-content'></div></div>}
      <div className='container'>
        <header>
          <figure><img src='logo.png' /></figure>
          <div className='search'>
            <input className='input-location' placeholder='Add Location' />
            <input className='input-guest' placeholder='Add Guest' />
            <figure className='search-lupa' onClick={toggleModal}><img src='lupa.svg'></img></figure>
          </div>
        </header>
        <main>
          <section className='card-list'>
            <h1> Stays in </h1>
            <ul>

              {data?.map((x, i) =>
              (<li key={i}>
                <article>
                  <figure>
                    <img src={x.photo} />
                  </figure>
                  <div className='description'>
                    <div >
                      {x.superHost && <div className='super-host'><span>SUPER HOST</span></div>}
                      <div className='type'> <p>{x.type}</p></div>
                      <div className='beds'>  <p>.{x.beds}</p></div>
                    </div>
                    <div className='punctuation'>
                      <span class="rating-star">★</span>
                      <span class="rating"> {x.rating}</span>
                    </div>
                  </div>

                  <h2>{x.title}</h2>
                </article>
              </li>)


              )

              }



            </ul>
          </section>
        </main>
        <footer></footer>
      </div>



    </>
  )
}

export default App
