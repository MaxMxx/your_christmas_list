// src/components/GiftCard.js
import React from "react";
import "./GiftCard.css";

function GiftCard({ gift }) {
  return (
    <div className="gift-card">
      {!gift.isNothing && (
        <img src={gift?.image} alt={gift?.name} className="gift-image" />
      )}
      <div className="gift-info">
        <h3>{gift?.name}</h3>
        {!gift?.isNothing && (
          <>
            <p>{gift?.description}</p>
            {gift?.isPromo && <span className="promo-badge">En Promo!</span>}
            {gift?.isPromo ? (
              <p className="price">
                <span className="discount-price">{gift?.discountPrice}€</span>
                <span className="original-price">{gift?.originalPrice}€</span>
              </p>
            ) : (
              <p className="price">
                <span className="discount-price">{gift?.originalPrice}€</span>
              </p>
            )}
            {gift?.isButton ? (
              <a href={gift?.link} target="_blank" rel="noopener noreferrer">
                <button className="view-button">Voir le produit</button>
              </a>
            ) : (
              <p className="text-gift">Disponible à {gift?.where}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default GiftCard;
