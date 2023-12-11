const Contact = require('../model/contact');

const { validationResult } = require('express-validator');
 
const addRequest = (request, response) => {
    let reason = request.body.reason;
    let name = request.body.name;
    let email = request.body.email;
    let message = request.body.message;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
    }

    const contact = new Contact({ reason: reason, name: name, email: email, message: message});
    contact.save()
        .then((data) => {
            console.log(`Contact saved to database: id -> ${data._id}`);
            response.redirect('/');
        })
        .catch((err) => { console.log(err) });
};

module.exports = {
    addRequest: addRequest
  };
