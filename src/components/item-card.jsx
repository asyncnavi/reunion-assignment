import React from 'react';
import {BiBed} from 'react-icons/bi';
import {MdOutlineBathroom} from 'react-icons/md';
import {TbDimensions} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import "./item-card.scss"


const ItemCard = ({
                      property
                  }) => {
    const {
        name,
        imageUrl,
        address,
        priceInDollars,
        numberOfBeds,
        numberOfBathrooms,
        size
    } = property;


    return (
        <div className="item-card">
            <div className="item-card__top">
                <img src={imageUrl} alt="Rental property image"/>
            </div>
            <div className="item-card__bottom">
                 <span className="item-card__bottom_like">
                    <AiOutlineHeart size={26}/>
                </span>
                <div className="item-card__bottom_price">
                    <h4>${priceInDollars}</h4><span>/month</span>
                </div>
                <h2>{name}</h2>
                <p>
                    {address}
                </p>
                <div className="divider"/>
                <div className="item-card__bottom_specification">
                        <span>
                             <BiBed size={18}/>
                            {numberOfBeds} Beds
                        </span>
                        <span>
                             <MdOutlineBathroom size={18}/>
                             {numberOfBathrooms} Bathrooms
                        </span>
                        <span>
                             <TbDimensions size={18}/>
                            {size}
                        </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;