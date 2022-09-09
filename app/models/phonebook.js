const mongoose = require('mongoose')

const { Schema, model } = mongoose
const phonebookSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        
        toObject: { virtuals: true },
        toJSON: {virtuals: true }
    }
)

// virtuals go here
phonebookSchema.virtual('fullTitle').get(function () {
    return `${this.firstName} ${this.lastName} ${this.phoneNumber}`
})

module.exports = model('Phonebook', phonebookSchema)