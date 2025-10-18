# Setting up your environment

## Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code

## Cloning the repository

[Clone the repository](https://github.com/git-guides/git-clone) into a local workspace. Avoid folders that have cloud sync services, such as Microsoft OneDrive.

## Starting your Project

1. Open the project in VS Code.
2. Upon doing so you should see a pop-up prompting you to reopen the folder in a container. Click this if you see it.
3. If you are not automatically prompted, open the VS Code Command Pallete (Mac: `Cmd+Shift+P`, Windows/Linux: `Ctrl+Shift+P`).
4. Run the command **Dev Containers: Rebuild and Reopen in Container**.
5. This will build the Docker container for the development environment. Note that the first build might take a few minutes. Subsequent loads will be much faster.
6. Run `npm run dev` to start the development server.

## Available Commands

Inside the dev container, you can use the following commands:
| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with Hot Module Replacement. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Serves the production build. |
| `npm run lint` | Lints the codebase using ESLint. |
| `npm run lint:fix` | Lints and automatically fixes issues. |
| `npm run format` | Formats the code using Prettier. |
| `npm run typecheck` | Runs the TypeScript compiler to check for type errors. |

## Stopping the Project

Close the running app with `Ctrl + C`.

## Conclusion

By the end of this, you should have an interactive app running on your browser.\
You are ready to start contributing.

Next: Read the [Contributing Guidelines](contributing_guidelines.md) before you begin!
