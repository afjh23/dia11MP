import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import datajs from './assets/stays.json'
import './App.css'
import { Modal } from './components/Modal'
import { CardList } from './components/CardList'
import { Nav } from './components/Nav'

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
        <Nav toggleModal={toggleModal} locations={locations} guests={guests}></Nav>
        <main>
          <CardList stay={stay}></CardList>
        </main>
        <footer></footer>
      </div>



    </>
  )
}

export default App
