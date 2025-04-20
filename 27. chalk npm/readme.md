

### 🎨 What is `chalk`?

`chalk` is a Node.js library used to **style and color terminal output**. Think of it as adding *makeup* 💄 to your console logs.

It doesn’t affect your actual app logic — it just makes things **easier to read** during development or when debugging.

---

### 📦 Installation

```bash
npm install chalk
```

If you're using ESM (ECMAScript Modules), which is the default in newer Node.js versions, your import will look a bit different than the older CommonJS style.

---

### 🧪 Basic Usage

For **ESM (recommended in recent versions):**

```js
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
```

For **CommonJS (older way):**

```js
const chalk = require('chalk');

console.log(chalk.green('Hello world!'));
```

---

### 🎯 Styling Examples

```js
console.log(chalk.red('Error! Something went wrong.'));
console.log(chalk.green('Success! Everything is good.'));
console.log(chalk.yellow('Warning! Be careful.'));
console.log(chalk.blue.bgWhite('Information'));
```

You can also **chain styles**:

```js
console.log(chalk.bold.italic.underline.cyan('Stylish text'));
```

Or **nest styles**:

```js
console.log(
  chalk.green('Success!') +
  ' This is a normal message, but ' +
  chalk.red.bold('this part is a warning!')
);
```

---

### 📋 Available Styles

#### Text colors:
`red`, `green`, `blue`, `cyan`, `magenta`, `yellow`, `white`, `gray`, `black`, etc.

#### Background colors:
`bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, etc.

#### Modifiers:
`bold`, `italic`, `underline`, `strikethrough`, `dim`, `inverse`, `hidden`

---

### 🛠️ Why Use `chalk`?

- Makes logs easier to scan at a glance
- Helps separate info, warnings, errors visually
- Boosts productivity while debugging
- Useful for CLI apps (you'll look like a pro dev 😎)

---

### ⚙️ Pro Tip – Combine with `morgan`

You can use `chalk` to **customize `morgan` logs** like this:

```js
app.use(morgan((tokens, req, res) => {
  return [
    chalk.green.bold(tokens.method(req, res)),
    chalk.blue(tokens.url(req, res)),
    chalk.yellow(tokens.status(req, res)),
    chalk.magenta(tokens['response-time'](req, res) + ' ms'),
  ].join(' ');
}));
```

---
