
const axios = require('axios');

const findImageControllers = {

    findimage: (req, res) => {

        // console.log(req.body)
        const { name } = req.body;

        if (!name || name.length <= 2)
            res.status(400).json('you have to pass more than 3 character');


        axios.get(`https://api.unsplash.com/search/collections?page=1&query=${name}&client_id=${process.env.UNPLASH_ACCESS_KEY}`)
            .then(data => {
                res.json(data.data.results);
            }).catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = findImageControllers;