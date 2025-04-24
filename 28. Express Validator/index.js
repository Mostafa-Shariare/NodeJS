const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ========================= REGISTER ROUTE =========================

app.post(
  "/api/register",

  // Validation rules
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 5 }).withMessage("Name must be at least 5 characters long"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isLength({ min: 5 }).withMessage("Not a valid email")
    .isEmail().withMessage("Not a valid email"),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),

  body("dob")
    .trim()
    .notEmpty().withMessage("Date of Birth is required")
    .isDate().withMessage("Not a valid date"),

  // Validation handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

  // Logic
  (req, res) => {
    try {
      const { name, email, password, dob } = req.body;
      const newUser = { name, email, password, dob };

      return res.status(201).json({
        message: "User registered successfully",
        newUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// ========================= LOGIN ROUTE =========================

app.post(
  "/api/login",

  // Validation rules
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please enter a valid email"),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),

  // Validation handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

  // Logic
  (req, res) => {
    try {
      const { email, password } = req.body;

      // Dummy login check (replace with real DB logic)
      // For now, we assume any validated input is OK.
      return res.status(200).json({
        message: "Login successful",
        user: { email },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// ========================= LISTEN =========================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
