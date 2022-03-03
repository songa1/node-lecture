

export const TellMe = (req, res) => {
    const {name} = req.body;

    res.status(201).send({message: `Your name is ${name}`});
}

export const TellMeNow = (req, res) => {
    const {name} = req.body;

    res.status(201).send({message: `Your name is ${name}`});
}
