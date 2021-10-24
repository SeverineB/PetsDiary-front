import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './Calendar.scss';

const localizer = momentLocalizer(moment)

const MyCalendar = ({ eventsList, petsList, getEventsList, getEventsListByPet }) => {

    useEffect(() => {
        getEventsList();
    }, []);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('Titre de l\'évènement')
        if (title) {
            var newEvent = {
                start: start,
                end: end,
                title: title 
            }
            let updatedEventsList = eventsList
            updatedEventsList.push(newEvent)
            setEventsList(updatedEventsList)
        }
    }

    const filterEventsByPet = (event) => {
        if (event.target.value !== "all") {
            localStorage.setItem('petId', event.target.value)
            getEventsListByPet(event.target.value)
        }
        else {
            getEventsList()
        }   
    }

    return (
    <div className="calendar-container">
        <Calendar
            selectable
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectSlot={handleSelect}
            messages={{
              month: 'Mois',
              day: 'Jour',
              today: 'Aujourd\'hui',
              week: 'semaine',
              back: 'préc',
              next: 'suiv'
            }}
        />
         <Link to="/event/add" className="calendar-container__link">
           {/*  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 457.47 457.469">
                <g>
                    <path d="M228.734,0C102.41,0,0,102.41,0,228.735C0,355.06,102.41,457.469,228.734,457.469
                        c126.325,0,228.735-102.409,228.735-228.734C457.47,102.41,355.06,0,228.734,0z M359.268,265.476h-97.326v97.315
                        c0,16.668-13.506,30.186-30.181,30.186c-16.668,0-30.189-13.518-30.189-30.186v-97.315h-97.309
                        c-16.674,0-30.192-13.512-30.192-30.187c0-16.674,13.518-30.188,30.192-30.188h97.315v-97.31c0-16.674,13.515-30.183,30.189-30.183
                        c16.675,0,30.187,13.509,30.187,30.183v97.315h97.314c16.669,0,30.192,13.515,30.192,30.188
                        C389.46,251.97,375.937,265.476,359.268,265.476z"/>
                </g>
            </svg> */}
            Ajouter un évènement
         </Link>

         <div className="events-container">
         {eventsList.map((event) => (
             <div className="event_item" key={event.id}>
                <p className="paragraph-text name" key={event.id}>{event.petName}</p>
                <p className="paragraph-text" key={event.id}>{event.title}</p>
                <p className="paragraph-text" key={event.id}>{event.address}</p>
            </div>
        ))}
        
         </div>
         <select onChange={filterEventsByPet} name="petId">
            <option value="all">Tous les évènements</option>
            {petsList.map((pet) => (
                <option key={pet._id} value={pet._id} label={pet.name}>{pet.name}</option>
            ))}
        </select>
    </div>
    )
}

export default MyCalendar;