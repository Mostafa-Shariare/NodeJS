# NodeJS
This repo documents my Node.js learning journey, covering fundamentals, backend development, npm, Express.js, databases, and real-world projects. I'll be building and sharing hands-on exercises, REST APIs, and more. Stay tuned for updates, and feel free to explore or contribute!


## What is Node.js?

Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and is widely used for building scalable network applications, web servers, and backend services.

### **Key Features of Node.js**
- **Asynchronous and Event-Driven**: Handles multiple operations concurrently without blocking execution.
- **Non-Blocking I/O**: Efficiently manages operations like file system access, database calls, and networking.
- **Cross-Platform**: Works on Windows, macOS, and Linux.
- **Package Management (npm)**: Comes with Node Package Manager (npm) for managing dependencies.
- **Fast Execution**: Uses the V8 engine for high-speed JavaScript execution.

---

## How to Install Node.js on Your PC

### **Step 1: Download Node.js**
1. Visit the official [Node.js download page](https://nodejs.org/).
2. You will see two versions:
   - **LTS (Long-Term Support)**: Recommended for most users.
   - **Current (Latest Version)**: Includes the latest features but may not be stable for production.
3. Download the appropriate version based on your operating system (Windows, macOS, or Linux).

### **Step 2: Install Node.js on Windows**
1. Open the downloaded `.msi` installer.
2. Follow the installation wizard:
   - Click **Next** to proceed.
   - Accept the License Agreement.
   - Choose the installation directory (default is recommended).
   - Select components (keep default selections).
   - Click **Install** and wait for the process to complete.
3. Once installed, restart your computer (optional but recommended).

### **Step 3: Verify the Installation**
1. Open **Command Prompt (cmd)** or **PowerShell**.
2. Run the following command to check the installed Node.js version:
   ```sh
   node -v
   ```
   If installed correctly, it will display the Node.js version.
3. Verify npm (Node Package Manager) by running:
   ```sh
   npm -v
   ```
   This will show the npm version, confirming that it is installed with Node.js.

### **Step 4: Install Node.js on macOS & Linux**
1. Open **Terminal** and run the following command:
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
   For macOS, you can install Node.js via Homebrew:
   ```sh
   brew install node
   ```
2. After installation, verify using:
   ```sh
   node -v
   npm -v
   ```

---

## Getting Started with Node.js
Now that Node.js is installed, you can start writing JavaScript code!

1. Create a new file named `app.js` and add the following code:
   ```js
   console.log('Hello, Node.js!');
   ```
2. Run the script using:
   ```sh
   node app.js
   ```
   This should output:
   ```sh
   Hello, Node.js!
   ```

### **Next Steps**
- Learn about npm and install packages: `npm install express`
- Explore frameworks like Express.js
- Build a simple HTTP server using Node.js

Happy Coding! 🚀

