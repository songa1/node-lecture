

const welcome = (req, res) => {
    res.status(200).send({ message: "Welcome to our API!"});
}

export default welcome;