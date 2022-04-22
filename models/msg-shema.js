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

        countId: { type: Number, default: 0 },

        lb: { type: String },

    },

    {

        timestamps: true,

    }

)

const name = 'msgcount'

module.exports = mongoose.models[name] || mongoose.model(name, schema)