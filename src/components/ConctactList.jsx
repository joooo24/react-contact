import React from 'react'
import usePhoneBookStore from '../stores/usePhoneBookStore'
import './ConctactList.css'

const ConctactList = () => {
    const {phoneBook, deleteContact} = usePhoneBookStore()

  return (
    <div className="contact-list">
      <ul className="contact-list__list">
        {phoneBook.map((contact) => (
            <li key={contact.id} className="contact-list__item">
              <div className="contact-list__item-content">
                <div className="contact-list__item-info">
                  <span className="contact-list__item-id">
                    ID: {contact.id}
                  </span>
                  <span className="contact-list__item-name">
                    {contact.name}
                  </span>
                  <span className="contact-list__item-phone">
                    {contact.phoneNumber}
                  </span>
                </div>
                <button 
                  className="contact-list__delete-button"
                  onClick={() => deleteContact(contact.id)}
                >
                  삭제
                </button>
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ConctactList