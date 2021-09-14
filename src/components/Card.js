import React from "react";

const Card = ({id, imgSrc, imgAlt, name, email}) => {
  return <div className="w-52 transform transition duration-200 hover:scale-105 inline-block bg-white rounded shadow m-4 text-center p-4 border" style={{borderColor: "#0ccac4"}}>
    <img src={imgSrc} alt={imgAlt}/>
    <div>
      <h2>{name}</h2>
      <p className="max-w-full overflow-ellipsis overflow-hidden ...">{email}</p>
    </div>
  </div>;
};

export default Card;