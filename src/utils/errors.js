export const createErrorMessage = (error, res) => {
    if (error.name !== "SequelizeValidationError") {
        return res.status(500).json(error);
    }

    const err = {
        message: "ValidationError",
        errors: []
    }
    if (error.errors.length > 0) {
        error.errors.forEach(element => {
            const word = element.message.split(" ")[0];
            const camelCaseWord = word.split(".")[1];
            err.errors.push("El campo " + camelCaseWord + " es requerido.");
        });
    }
    res.status(400).json(err);

}

export const ErrorLogin = (res, {status,message}) => {
    if (status && message) {
        return res.status(status).json({
            message
        });
    }
    return res.status(400).json({
        message: 'Usuario y contraseña requeridos'
    });
}