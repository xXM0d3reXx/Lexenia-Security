const mongoose = require('mongoose')

const { Schema } = mongoose

const reqString = {

    type: String,

    required: true,

}

const schema = new Schema(

    {

        name: { type: String},

        userId: { type: String },

        guildId: { type: String },

        day: { type: Number, min: 1, max: 31 },

        month: { type: Number, min: 1, max: 12 },

    },

)

const name = 'gbcall'

module.exports = mongoose.models[name] || mongoose.model(name, schema)