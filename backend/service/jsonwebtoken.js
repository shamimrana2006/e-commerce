var jwt = require('jsonwebtoken');
const jsonntoken = (data, screat, expired) =>{

    const token = jwt.sign(data,screat,{expiresIn: expired} );
    return token 
}

module.exports = {jsonntoken}