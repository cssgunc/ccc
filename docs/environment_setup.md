# Setting up your environment

## Cloning the repository

1. [Clone the repository](https://github.com/git-guides/git-clone) into a local workspace. Avoid folders that have cloud sync services, such as Microsoft OneDrive.

## Installing Node

1. Check if you have node and npm install by running `node -v` and `npm -v`. If both are installed, skip this section.
2. Download node from https://nodejs.org/en/download. Follow the steps as shown.
3. Ensure that you have everything downloaded by repeating Step 1. You will need node to run the React server, and npm in order to install the React Native dependencies in the next section.

## Installing Dependencies

Open the repository in an IDE of your choice, preferably VSCode.

### Starting your Project

1. Open a new terminal for the project and run `cd ccc`. You should now be in `TODO`. This is where the React code is located.
2. Run `npm install`. You will get many warnings and vulnerabilities. Ignore these. If you get errors, you will have to debug.
3. Run `npm start`. This will be the command you need to run to start the project most of the time.
4. You have succeeded if you can open the browser version without errors (hit w, or go to http://localhost:8081). Open the developer console. There should be no errors.

### Stopping the Project

1. Close the running app with Ctrl + C.

## Updating Dependencies and Running the Project Regularly

You do not need to go through all these steps every time. For regular usage and development:

1. Run `npm start` in the `TODO` directory as done previously.
2. If this fails, double check that your terminal is in the right directory.

Very rarely, we may update the dependencies required for this projects.\
Update dependencies after pulling from the remote repository by running `npm install` in the folder. You can refer back to the Installing Dependencies section.

## Conclusion

By the end of this, you should have an interactive app running on your browser.\
You are ready to start contributing.

Next: Read the [Contributing Guidelines](contributing_guidelines.md) before you begin!
