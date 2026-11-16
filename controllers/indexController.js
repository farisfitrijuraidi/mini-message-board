import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";
import { db } from "../db/queries.js";
import { body, validationResult, matchedData, param } from "express-validator";

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 50 characters.";

const validateMessage = [
    body("author")
        .trim()
        .notEmpty()
        .withMessage("Author name cannot be empty")
        .isAlpha("en-US", { ignore: " " })
        .withMessage(`Author name ${alphaErr}`)
        .isLength({ min: 1, max: 50 })
        .withMessage(`Author name ${lengthErr}`),
    body("text")
        .trim()
        .notEmpty()
        .withMessage("Text field cannot be empty")
        .isLength({ max: 200 })
        .withMessage("Cannot exceed 200 characters"),
];

const validateMessageId = [
    param("messageId")
        .isInt({ min: 1 })
        .withMessage("Message ID must be an integer")
        .toInt(),
];

const createUserController = (database) => {
    const getIndex = async (req, res) => {
        const messages = await database.getAllMessages();
        res.render("index", { title: "Mini Message Board", messages });
    };

    const getForm = (req, res) => {
        res.render("form", { title: "Create a New Message" });
    };

    const postForm = [
        validateMessage,
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).render("form", {
                    title: "Mini Message Board",
                    errors: errors.array(),
                });
            }
            const { text, author } = matchedData(req);
            await database.insertMessage(author, text);
            res.redirect("/");
        },
    ];

    const getMessageById = [
        validateMessageId,
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new CustomNotFoundError("Message not found!");
            }
            const { messageId } = matchedData(req);

            const message = await database.getMessageById(messageId);
            if (!message) {
                throw new CustomNotFoundError("Message not found!");
            }
            res.render("messages/messageDetails", { message });
        },
    ];

    return {
        getIndex,
        getForm,
        postForm,
        getMessageById,
    };
};

export const userController = createUserController(db);
