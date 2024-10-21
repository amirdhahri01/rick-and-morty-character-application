import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = ({items}) => {
  return (
   <section className="characters-list">
        {items.map((item) => {
            return(
                <CharacterCard item={item} key={item.id}/>
            )
        })}
   </section>
  )
}

export default CharacterList