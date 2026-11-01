import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: crypto.randomUUID(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: crypto.randomUUID(),
    },
];

export const getIndex = (req, res) => {
    res.render("index", { title: "Mini Message Board", messages });
};

export const getForm = (req, res) => {
    res.render("form");
};

export const postForm = (req, res) => {
    const { text, user } = req.body;
    if (!text.trim() || !user.trim()) {
        return res.redirect("/new");
    }
    messages.push({
        text: text.trim(),
        user: user.trim(),
        added: new Date(),
        id: crypto.randomUUID(),
    });
    res.redirect("/");
};

export const getMessageById = (req, res) => {
    const { messageId } = req.params;

    const message = messages.find((message) => message.id === messageId);

    if (!message) {
        throw new CustomNotFoundError("Message not found!");
    }
    res.render("messages/messageDetails", { message });
};
