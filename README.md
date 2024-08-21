# Simple Print API

This is a simple Node.js API that simulates sending a print job to a printer. The API accepts a `POST` request containing text to be printed and the IP address of the printer.

## Features

- Accepts a JSON payload with `inputText` and `printerIP`.
- Logs the message being sent to the printer.

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:

   ```bash
   npm install
   ```

## Running the API

Start the API server by running:

```bash
node index.js
```

By default, the API will run on `http://localhost:3000`.

## Endpoints

### POST /print

#### Description

This endpoint accepts a JSON payload with the text to be printed and the IP address of the printer. It logs the message and simulates sending it to the specified printer.

#### Request

- **Method**: `POST`
- **URL**: `/print`
- **Headers**: `Content-Type: application/json`
- **Body**:

  ```json
  {
    "inputText": "Hello, World!",
    "printerIP": "192.168.1.100"
  }
  ```

#### Response

- **Status Code**: `200 OK`
- **Body**:

  ```json
  {
    "status": "Message sent to printer",
    "inputText": "Hello, World!",
    "printerIP": "192.168.1.100"
  }
  ```

#### Error Response

If either `inputText` or `printerIP` is missing from the request, the API will return:

- **Status Code**: `400 Bad Request`
- **Body**:

  ```json
  {
    "error": "Both inputText and printerIP are required"
  }
  ```
