const Model = require('../models/User'),
    BaseService = require('../services/BaseService');

class UserService extends BaseService {

    constructor() {
        super(Model);
    }

    get(id) {
        return Model.find({ _id: id }, { "password": 0, "phoneNumber": 0 }).lean();
    }

    //Overriding BaseService Method
    add(body) {
        console.log('here')
            // handle all logic here and return promise.
        return Promise.resolve("User added successfully");
    }

}
module.exports = new UserService();