# HTTP Methods & Postman Guide

## HTTP Methods
HTTP (Hypertext Transfer Protocol) methods define actions that can be performed on resources. The most common methods are:

- **GET**: Retrieves data from a server.
- **POST**: Sends data to a server to create a resource.
- **PUT**: Updates an existing resource or creates a new resource if it doesn’t exist.
- **DELETE**: Removes a specified resource.

## What is Postman?
[Postman](https://www.postman.com/) is a powerful API testing tool that allows developers to test API endpoints, automate API testing, and collaborate efficiently.

## Why Use Postman?
- **User-Friendly Interface**: Simplifies API testing with an intuitive UI.
- **Supports Multiple HTTP Methods**: GET, POST, PUT, DELETE, and more.
- **Automated Testing**: Allows creation of test scripts using JavaScript.
- **Collections & Workspaces**: Organize API requests and collaborate with teams.
- **Environment Variables**: Store and reuse API keys, URLs, and other settings.
- **API Monitoring**: Schedule API tests and monitor performance.

## How to Use Postman

### 1. Install Postman
- Download and install Postman from [Postman’s official website](https://www.postman.com/downloads/).

### 2. Create a New Request
- Open Postman.
- Click **+ New Tab**.
- Choose an HTTP method (GET, POST, PUT, DELETE, etc.).
- Enter the API URL.

### 3. Set Headers & Parameters
- Add **Headers** (e.g., `Content-Type: application/json`).
- Set **Query Parameters** if needed.

### 4. Sending a GET Request
- Select **GET** method.
- Enter the API URL.
- Click **Send**.
- View the response in the response section.

### 5. Sending a POST Request
- Select **POST** method.
- Enter the API URL.
- Go to **Body** > Select **raw** > Choose `JSON` format.
- Enter JSON data.
- Click **Send**.

### 6. Sending a PUT Request
- Select **PUT** method.
- Enter the API URL.
- Provide updated data in the **Body**.
- Click **Send**.

### 7. Sending a DELETE Request
- Select **DELETE** method.
- Enter the API URL.
- Click **Send** to delete the resource.

### 8. Using Collections
- Create a **Collection** to organize multiple API requests.
- Save and reuse requests for future testing.

### 9. Automating Tests
- Use the **Tests** tab to write JavaScript-based tests.
- Example test script:
  ```javascript
  pm.test("Status code is 200", function () {
      pm.response.to.have.status(200);
  });
  ```

### 10. Working with Environments
- Create **Environments** to manage API keys, base URLs, etc.
- Use `{{variable_name}}` to reference variables in requests.

## Conclusion
Postman is an essential tool for API development and testing. It simplifies API requests, enhances collaboration, and enables automation. By mastering Postman, developers can efficiently interact with APIs and streamline their workflow.


