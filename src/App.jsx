import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import datajs from './assets/stays.json'
import './App.css'
import { Modal } from './components/Modal'

function App() {
  const [data, setData] = useState(datajs)
  const [stay, setStay] = useState(datajs)
  const [openModal,setOpenModal] = useState(false)
  const [locations, setLocations] = useState("")
  const [guests, setGuests] = useState("")
  const [guestsValues, setGuestsValues] = useState({ adults: 0, children: 0 })

  function toggleModal(){
    setOpenModal(!openModal)
  }


  function handleFilter(){
   
    
    if(locations===""&&guests===""){
      setStay(data)
    }else{

      const citylocation= locations.split(",")
      console.log(citylocation)
    const filteredData = data.filter(stay => {
      if(locations === '' && guests == 0){
        return true
      } else if(locations !== '' && guests == 0){
        return stay.city == citylocation[0]
      }else if(locations === '' && guests > 0){
        console.log(citylocation+" "+guests)
        return stay.maxGuests >= guests
      }else{
        return stay.city == citylocation[0] && stay.maxGuests >= guests
      }
    })

    setStay(filteredData)}

  }

  useEffect(()=>{
    handleFilter()
  }, [locations, guests])

  return (
    <>
      {openModal && <Modal toggleModal={toggleModal} data={data} setStay={setStay} setLocations={setLocations} guests={guests} setGuests={setGuests} locations={locations} setGuestsValues={setGuestsValues} guestsValues={guestsValues}></Modal>}
      <div className='container'>
        <header>
          <figure><img src='logo.png' /></figure>
          <div className='search'  onClick={toggleModal}>
            <input className='input-location' value={locations} placeholder='Add Location' />
            <input className='input-guest' placeholder='Add Guest'  value={guests}/>
            <figure className='search-lupa'><img src='lupa.svg'></img></figure>
          </div>
        </header>
        <main>
          <section className='card-list'>
            <h1> Stays in </h1>
            <ul>

              {stay?.map((x, i) =>
              (<li key={i}>
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
