import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterCardsList = ({items}) => {
  return (
   <section className="characters-cards-list">
        {items.map((item) => {
            return(
                <CharacterCard item={item} key={item.id}/>
            )
        })}
   </section>
  )
}

export default CharacterCardsList