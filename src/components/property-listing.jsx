import React, { useState } from 'react';
import "./listing.scss";
import Button from '../design/button';
import CSelect from "../design/c-select";
import ItemCard from './item-card';
import { filterData } from '../data/data_filter';

const ONE_DAY = 24 * 60 * 60 * 1000;

const LOCATION_OPTIONS = [
    { value: null, label: 'All' },
    { value: 'New York', label: 'New York' },
    { value: 'LA', label: 'LA' },
    { value: 'Washington', label: 'Washington' },
    { value: 'Utah', label: 'Utah' },
];

const WHEN_OPTIONS = [
    { value: null, label: 'Any date' },
    { value: new Date(new Date().getTime() - (10 * ONE_DAY)).getTime(), label: '10 days ago' },
    { value: new Date(new Date().getTime() - (20 * ONE_DAY)).getTime(), label: '20 days ago' },
    { value: new Date(new Date().getTime() - (31 * ONE_DAY)).getTime(), label: '1 Month ago' },
    { value: new Date(new Date().getTime() - (2 * 31 * ONE_DAY)).getTime(), label: '2 Month ago' },
];

const PRICE_OPTIONS = [
    { value: null, label: 'All prices' },
    { value: { min: 1000, max: 2000 }, label: '$1000-$2000' },
    { value: { min: 2000, max: 3000 }, label: '$2000-$3000' },
    { value: { min: 3000, max: 4000 }, label: '$3000-$4000' },
    { value: { min: 4000, max: 5000 }, label: '$4000-$5000' },
    { value: { min: 5000, max: 10000 }, label: '$5000-$10000' },
];

const TYPE_OPTIONS = [
    { value: null, label: 'All types' },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value:  "industrial", label:  "Industrial" },
    { value: "land", label: "Land" },
];

const PropertyListing = () => {
    const [location, setLocation] = useState(null);
    const [registeredAfter, setRegisteredAfter] = useState(null);
    const [priceRange, setPriceRange] = useState(null);
    const [type, setType] = useState(null);

    return (
        <div className='listing-container'>
            <div className="search-card">
                <div className="search-card__input-group">
                    <div>
                        <CSelect label="Location" options={LOCATION_OPTIONS} onChange={(_location) => setLocation(_location.value)} />
                    </div>
                    <div>
                        <CSelect label="When" options={WHEN_OPTIONS} onChange={(_registeredAfter) => setRegisteredAfter(_registeredAfter.value)} />
                    </div>
                    <div>
                        <CSelect label="Price" options={PRICE_OPTIONS} onChange={(_priceRange) => setPriceRange(_priceRange.value)} />
                    </div>
                    <div>
                        <CSelect label="Property Type" options={TYPE_OPTIONS} onChange={(_type) => setType(_type.value)} />
                    </div>

                </div>
            </div>
            <div className="cards-container">
                {
                    filterData(location, registeredAfter, priceRange, type).map((property) => {
                        return (
                            <ItemCard key={`item-card-${property.name}`} property={property} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PropertyListing;