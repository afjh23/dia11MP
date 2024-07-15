import React, { useRef, useEffect, useState, Children } from 'react';
import './modal.css';

export const Modal = ({ data, locations, guests, setLocations, setGuests, toggleModal, guestsValues,setGuestsValues }) => {
    const [openValues, setOpenValues] = useState({guests: false, location: false}) 
    const modalRef = useRef(null);
    const locationCountry = [...new Set(data.map(guest => `${guest.city},${guest.country}`))].map(guest => guest.split(','))

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target))
            toggleModal()
    }

    const handleLocation = (e) => {
        const liClick = e.target.closest('li')
        setLocations(liClick.querySelector('span').textContent)
        /*  console.log(e.target.closest('li').id) */

       /*  const rs = data.filter(stay => (stay.city.toLowerCase()) === liClick.id.toLowerCase())
        console.log(rs)
        setStay(rs) */
    }

    const toggleOpenValues = (type) => {
        setOpenValues((prevOpen) => ({...prevOpen, [type]:!prevOpen[type] }))
    }

    const handleGuests = (type, value) => {
        if ((guestsValues[type] || 0) + value >= 0) {
            setGuestsValues((prevGuestsValues) => {
                const newGuestsValues = { ...prevGuestsValues, [type]: prevGuestsValues[type] + value };
                setGuests(newGuestsValues.adults + newGuestsValues.children);
                return newGuestsValues;
              });
        }

    }


    return (
        <div className='modal' onClick={handleClickOutside}>
            <div className='modal-content' ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <div className='modal-inputs'>
                    <div className='modal-location' onClick={() => toggleOpenValues('location')}>
                        <span>LOCATION</span>
                        <input placeholder='Add Location' value={locations} />
                    </div>
                    <div className='modal-guests' onClick={() => toggleOpenValues('guests')}>
                        <span>GUESTS</span>
                        <input placeholder='Add Guests' value={guests}/>
                    </div>
                    <button className='search-button' onClick={toggleModal}>
                        <img src='lupa.svg' alt='search' />
                        <span>Search</span>
                    </button>
                </div>
                <div className='modal-values'>
                    <div className='values-location'>
                       { openValues.location &&
                        <ul>
                            {
                                locationCountry.map(city =>
                                    <li key={city[0]} id={city[0]} onClick={handleLocation}>
                                        <figure>
                                            <img src='ubi.svg' alt='location' />
                                        </figure>
                                        <span>{city[0]}, {city[1]}</span>
                                    </li>

                                )
                            }


                        </ul>
                        }
                    </div>
                    <div className='values-guests'>
                        {openValues.guests &&  
                            <>
                            <p className='guests-type'>Adults</p>
                            <p className='guests-age'>Ages 13 or above</p>
                            <div>
                                <button onClick={() => handleGuests('adults', -1)}>-</button>
                                <span>{guestsValues.adults}</span>
                                <button onClick={() => handleGuests('adults', +1)}>+</button>
                            </div>
                            <p className='guests-type'>Children</p>
                            <p className='guests-age'>Ages 2 - 12</p>
                            <div>
                                <button onClick={() => handleGuests('children', -1)}>-</button>
                                <span>{guestsValues.children}</span>
                                <button onClick={() => handleGuests('children', +1)}>+</button>
                            </div> </>
                            
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};