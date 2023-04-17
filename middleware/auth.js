import jwt from "jsonwebtoken";

// verify if the token of the user is valid
export function verifyUser(req, res, next) {
    let token = req.headers["auth_token"];

    if (!token) {
        return res.status(403).send("Login Please!");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}