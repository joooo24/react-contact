import React, { useMemo } from 'react'
import usePhoneBookStore from '../stores/usePhoneBookStore'
import './ConctactList.css'

const ConctactList = ({ searchQuery = '' }) => {
    const {phoneBook, deleteContact} = usePhoneBookStore()

  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) {
      return phoneBook
    }
    
    const query = searchQuery.toLowerCase()
    return phoneBook.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().includes(query)
      const phoneMatch = contact.phoneNumber.includes(query)
      return nameMatch || phoneMatch
    })
  }, [phoneBook, searchQuery])

  return (
    <div className="contact-list">
      <ul className="contact-list__list">
        {filteredContacts.length === 0 ? (
          <li className="contact-list__empty">
            {searchQuery ? '검색 결과가 없습니다.' : '연락처가 없습니다.'}
          </li>
        ) : (
          filteredContacts.map((contact) => (
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
          ))
        )}
      </ul>
    </div>
  )
}

export default ConctactList