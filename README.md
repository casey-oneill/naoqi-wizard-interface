# NAO Wizard Interface

The project uses a ReactJS webapp with a Flask server to provide a simple graphical interface for controlling the NAO robot.

## My steps for setup

### Install Python (MacOS)

1. Install Python 2.7: follow [this Stack Overflow advice](https://stackoverflow.com/a/76102931).

2. Unzip and save the SDK folder to a location on your device.

3. Set the following environment variables:
   ```
   export PYTHONPATH=${PYTHONPATH}:/path/to/python-sdk/lib/python2.7/site-packages
   export DYLD_LIBRARY_PATH=${DYLD_LIBRARY_PATH}:/path/to/python-sdk/lib
   export QI_SDK_PREFIX=/path/to/python-sdk
   ```

4. Open your `~/.zshrc` and `~/.zprofile` files and copy the commands:
   ```
   export PYTHONPATH=${PYTHONPATH}:/path/to/python-sdk/lib/python2.7/site-packages
   export DYLD_LIBRARY_PATH=${DYLD_LIBRARY_PATH}:/path/to/python-sdk/lib
   export QI_SDK_PREFIX=/path/to/python-sdk
   ```

5. Save the files and force execution to see the changes immediately:
   ```
   source ~/.zshrc
   source ~/.zprofile
   ```

### Install Python and NAO SDK (Windows 10/11)

1. Install Python 2.7: [release](https://www.python.org/downloads/release/python-2718/).

2. Add the following directories to PATH:
   ```
   path\to\Python27
   path\to\Python27\Scripts
   ```

3. Download the `Python 2.7 SDK` for NAO robots: [download](https://www.aldebaran.com/en/support/nao-6/downloads-softwares).

4. Unzip and save the SDK folder to a location on your device.

5. Set the following environment variables:
   ```
   PYTHONPATH = path\to\python-sdk\lib
   ```

### Install Node.js and npm
1. Follow steps to install Node.js and npm: [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Configure data files
1. Copy `/server/.env.template` to a new file and rename it `.env`. Update file with correct NAO configuration. To debug the system without connection to a NAO robot, set `MODE=console`. To run the system with a NAO robot, set `MODE=naoqi`.

2. `/naoqi-web/src/data/data.js`: Contains pre-defined dialogue options and actions for the robot. Options are dynamically rendered as UI buttons, meaning that new options will be automatically added to the interface when this file is updated. To add a new pre-defined robot action, use the type constant `ACTION` and add the action's name to the `ACTIONS` constant. In `App.js`, update the `doAction` function to handle the new action.

## My steps for local development
1. Run flask server:
     ```
     cd server
     flask run
     ```

2. Run React app:
   ```
   cd naoqi-web
   npm start
   ```
