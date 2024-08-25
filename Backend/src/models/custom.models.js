import mongoose from 'mongoose';
import faker from '@faker-js/faker';

const customDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String }
    },
    company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
    },
    jobTitle: { type: String },
    jobDescriptor: { type: String },
    jobArea: { type: String },
    jobType: { type: String },
    date: { type: Date, default: Date.now }
});

customDataSchema.statics.generateFakeData = function (numberOfRecords) {
    const data = [];
    for (let i = 0; i < numberOfRecords; i++) {
        data.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                country: faker.address.country()
            },
            company: {
                name: faker.company.companyName(),
                catchPhrase: faker.company.catchPhrase(),
                bs: faker.company.bs()
            },
            jobTitle: faker.name.jobTitle(),
            jobDescriptor: faker.name.jobDescriptor(),
            jobArea: faker.name.jobArea(),
            jobType: faker.name.jobType()
        });
    }
    return data;
};

const CustomData = mongoose.model('CustomData', customDataSchema);

module.exports = CustomData;
