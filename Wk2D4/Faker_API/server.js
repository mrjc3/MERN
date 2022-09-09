import { faker } from '@faker-js/faker';
import express from 'express';
import User from './components/User.js';
import {Company, Address} from './components/Company.js';


// const express = require("express");
const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/users/new", (req, res) => {
    const user = new User();
    user.password = faker.internet.password();
    user.email = faker.internet.email();
    user.phoneNumber = faker.phone.number();
    user.lastName = faker.name.lastName();
    user.firstName = faker.name.firstName();
    user.id = faker.random.alphaNumeric(5);
    
    res.json(user)
});

app.get("/api/companies/new", (req, res) => {
    const newAddress = new Address();
    newAddress.street = faker.address.street();
    newAddress.city = faker.address.city();
    newAddress.country = faker.address.country();
    newAddress.state = faker.address.state();
    newAddress.zipCode = faker.address.zipCode();

    const company = new Company();
    company.name = faker.company.bs();
    company.id = faker.random.alphaNumeric(3);
    company.address = newAddress;

    res.json(company);
})

app.get("/api/user/company", (req, res) => {
    const user = new User();
    user.password = faker.internet.password();
    user.email = faker.internet.email();
    user.phoneNumber = faker.phone.number();
    user.lastName = faker.name.lastName();
    user.firstName = faker.name.firstName();
    user.id = faker.random.alphaNumeric(5);

    const newAddress = new Address();
    newAddress.street = faker.address.street();
    newAddress.city = faker.address.city();
    newAddress.country = faker.address.country();
    newAddress.state = faker.address.state();
    newAddress.zipCode = faker.address.zipCode();

    const company = new Company();
    company.name = faker.company.bs();
    company.id = faker.random.alphaNumeric(3);
    company.address = newAddress;

    res.json([user, company]);
})







const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);