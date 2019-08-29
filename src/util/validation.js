const generateFormErrors = (errors) => {
    let errorList = [];
    console.log(errors)
    for (field in errors) {
        if (errors[field].properties.type === 'user defined') {
            errorList.push(errors[field].properties.message)
        } else {
            errorList.push(errors[field].properties.path + ' ' + errors[field].properties.type)
        }

    }
    return errorList
}


module.exports = generateFormErrors;