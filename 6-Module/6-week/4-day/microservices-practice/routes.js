const express = require("express");
const csrf = require("csurf");
const { check, validationResult } = require("express-validator");
const fetch = require("node-fetch");

const db = require("./db/models");

const router = express.Router();

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
	handler(req, res, next).catch(next);

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const books = await db.Book.findAll({ order: [["title", "ASC"]] });
		res.render("book-list", { title: "Books", books });
	})
);

router.get("/book/add", csrfProtection, (req, res) => {
	const book = db.Book.build();
	res.render("book-add", {
		title: "Add Book",
		book,
		csrfToken: req.csrfToken(),
	});
});

const bookValidators = [
	check("title")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Title")
		.isLength({ max: 255 })
		.withMessage("Title must not be more than 255 characters long"),
	check("author")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Author")
		.isLength({ max: 100 })
		.withMessage("Author must not be more than 100 characters long"),
	check("releaseDate")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Release Date")
		.isISO8601()
		.withMessage("Please provide a valid date for Release Date"),
	check("pageCount")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Page Count")
		.isInt({ min: 0 })
		.withMessage("Please provide a valid integer for Page Count"),
	check("publisher")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Publisher")
		.isLength({ max: 100 })
		.withMessage("Publisher must not be more than 100 characters long"),
];

router.post(
	"/book/add",
	csrfProtection,
	bookValidators,
	asyncHandler(async (req, res) => {
		const { title, author, releaseDate, pageCount, publisher } = req.body;

		const book = db.Book.build({
			title,
			author,
			releaseDate,
			pageCount,
			publisher,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await book.save();
			res.redirect("/");
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render("book-add", {
				title: "Add Book",
				book,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

router.get(
	"/book/edit/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const book = await db.Book.findByPk(bookId);
		res.render("book-edit", {
			title: "Edit Book",
			book,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	"/book/edit/:id(\\d+)",
	csrfProtection,
	bookValidators,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const bookToUpdate = await db.Book.findByPk(bookId);

		const { title, author, releaseDate, pageCount, publisher } = req.body;

		const book = {
			title,
			author,
			releaseDate,
			pageCount,
			publisher,
		};

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await bookToUpdate.update(book);
			res.redirect("/");
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render("book-edit", {
				title: "Edit Book",
				book: { ...book, bookId },
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

router.get(
	"/book/delete/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const book = await db.Book.findByPk(bookId);
		res.render("book-delete", {
			title: "Delete Book",
			book,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	"/book/delete/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const book = await db.Book.findByPk(bookId);
		await book.destroy();
		res.redirect("/");
	})
);

router.get(
	"/book/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const book = await db.Book.findByPk(bookId);
		let bookRating = "n/a";
		const response = await fetch(
			`http://host.docker.internal:5000/ratings/${bookId}`
		);
		const ratings = await response.json();
		if (ratings.average) bookRating = ratings.average;

		res.render("book-show", {
			title: book.title,
			book,
			bookRating,
			csrfToken: req.csrfToken(),
		});
	})
);

router.get(
	"/book/ratings/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const rating = {
			value: "",
			email: "",
		};

		res.render("rating-add", {
			title: `Rate Book`,
			bookId,
			rating,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	"/book/ratings/:id(\\d+)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const bookId = parseInt(req.params.id, 10);
		const { value, email } = req.body;

		if (value && email) {
			await fetch(
				`http://host.docker.internal:5000/ratings/${bookId}?value=${value}&email=${email}`,
				{
					method: "POST",
				}
			);
			res.redirect(`/book/${bookId}`);
		} else {
			const errors = ["Please provide a valid rating value and email"];
			res.render("rating-add", {
				title: `Rate Book`,
				bookId,
				rating: {
					value,
					email,
				},
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

module.exports = router;
