const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

export const getIndex = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
};

export const getForm = (req, res) => {
    res.render("form");
};
