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

export const getIndexRouter = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
};
