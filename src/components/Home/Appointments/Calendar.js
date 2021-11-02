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


    // to convert date in the good format for react big calendar
    eventsList = eventsList.map(({start, end, ...rest}) => {
      return {
        start: new Date(Date.parse(start)),
        end: new Date(Date.parse(end)),
      ...rest}
    })

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
         <Link to="/event/add" className="calendar-container__link btn--primary">
            Ajouter un évènement
         </Link>

         {/* <div className="events-container">
         {eventsList.map((event) => (
             <div className="event_item" key={event._id}>
                <p className="paragraph-text name">{event.petName}</p>
                <p className="paragraph-text">{event.title}</p>
                <p className="paragraph-text">{event.address}</p>
                <p className="paragraph-text">{(event.start).toLocaleString('fr-FR')}</p>
                <p className="paragraph-text">{(event.end).toLocaleString('fr-FR')}</p>
            </div>
        ))}
        
         </div>
         <select className="select" onChange={filterEventsByPet} name="petId">
            <option value="all">Tous les évènements</option>
            {petsList.map((pet) => (
                <option key={pet._id} value={pet._id} label={pet.name}>{pet.name}</option>
            ))}
        </select> */}
    </div>
    )
}

export default MyCalendar;