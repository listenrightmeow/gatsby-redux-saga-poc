## 🚀 POC Instructions

1.  **Setup**

    ```sh
    nvm install
    npm i
    ```

1.  **Usage**

    ```sh
    nvm use
    npx gatsby deploy
    ```

## 🧐 What's inside?

This POC is a full React + Redux stack wrapped with GatsbyJS.

There is a custom workaround for the provider logic and Gatsby that allows us to utilize Redux. This integration will allow us to use additional state management tools like Redux-Form.

The file-system architecture is a Isomorphic design that will allow re-usable data logic sharing amongst native react clients (e.g. web, iOS, Android). This approach allows Drift to natively deploy data and business logic as a first-class citizen. This inherently allows development to focus on the client presentation layer and the ability to re-use store logic across all clients.
