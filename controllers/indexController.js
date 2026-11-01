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

export const postForm = (req, res) => {
    const { text, user } = req.body;
    if (!text.trim() || !user.trim()) {
        return res.redirect("/new");
    }
    messages.push({ text: text.trim(), user: user.trim(), added: new Date() });
    res.redirect("/");
};
