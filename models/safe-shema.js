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

    },

    {

        timestamps: true,

    }

)

const name = 'safeuser'

module.exports = mongoose.models[name] || mongoose.model(name, schema)