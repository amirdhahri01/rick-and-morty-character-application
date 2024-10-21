import React from "react";

const CharacterCard = ({
  item: { name, image, status, gender, species, created },
}) => {
  return (
    <div className="character-card">
      <div className="character-card-front">
        <img src={image} alt={name + " image"} />
      </div>
      <div className="character-card-back">
        <h1>{name}</h1>
        <ul>
          <li>
            <strong> Name :</strong> {name}
          </li>
          <li>
            <strong> Status :</strong>{" "}
            <span style={{ color: status === "Alive" ? "green" : "red" }}>
              {status}
            </span>
          </li>
          <li>
            <strong>Gender :</strong> {gender}
          </li>
          <li>
            <strong>Species : </strong>
            {species}
          </li>
          <li>
            <strong>Created : </strong>
            {created}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
