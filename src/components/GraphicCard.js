import React from "react";

const GraphicCard = React.memo(({ name, status, image, link, price }) => {
  return (
    <a className="gclink" target="_blank" rel="noreferrer" href={link}>
      <div className="card">
        <h3>{name}</h3>
        <p className={status !== "Rupture" ? "en-stock" : "en-rupture"}>
          {status}
        </p>
        <img className="image" src={image} alt={name} />
        <p className="price">{price}</p>
      </div>
    </a>
  );
});

export default GraphicCard;
