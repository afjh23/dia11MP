import React from 'react'
import './modal.css'
export const Modal = () => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-inputs'>
                    <div className='modal-location'>
                        <span>LOCATION</span>
                        <input placeholder='Add Location' />
                    </div>
                    <div className='modal-guests'>
                        <span>GUESTS</span>
                        <input placeholder='Add Location' />
                    </div>
                    <button className='search-button'><img src='lupa.svg'></img><span>Search</span></button>
                </div>
                <div className='modal-values'>
                    <div className='values-location'>
                        <ul>
                            <li>
                            <figure>
                                <img src='ubi.svg'></img>
                            </figure>
    <span> muestra</span>
                            </li>
                        </ul>
                    </div>
                    <div className='values-guests'>
                        <p className='guests-type'>Adults</p>
                        <p className='guests-age'>Ages 13 or above</p>
                        <div>
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>

                        <p className='guests-type'>Children</p>
                        <p className='guests-age'>Ages 2 - 12</p>
                        <div>
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
