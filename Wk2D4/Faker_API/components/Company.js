
export class Company{
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

export class Address{
    constructor(street, city, state, zipCode, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
}

// export default {Company, Address};