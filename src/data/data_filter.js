import { PROPERTIES } from "./properties";

export const filterData = (
    location,
    registeredAfter,
    pricingRange,
    propertyType
) => {
    let filteredData = PROPERTIES;
    if (location && location.length) {
        filteredData = filteredData.filter((p) => p.address.match(location));
    }
    if (pricingRange) {
        filteredData = filteredData.filter((p) => {
            return parseInt(p.priceInDollars) <= pricingRange.max && parseInt(p.priceInDollars) >= pricingRange.min;
        });
    }
    if (registeredAfter) {
        filteredData = filteredData.filter((p) => {
            console.log(new Date(p.registered).getTime(), registeredAfter);
            return (new Date(p.registered).getTime() >= registeredAfter);
        });
    }
    if (propertyType) {
        filteredData = filteredData.filter((p) => {
            return p.type === propertyType;
        });
    }
    return filteredData;
}