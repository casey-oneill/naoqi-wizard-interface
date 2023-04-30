# NAO Wizard Interface

Using ReactJS with a Flask server to provide a simple graphical interface for controlling the NAO robot. Uses the `naoqi` python library.

## My steps for setup

_Note: Tested on Windows 10 and 11 OS._

### Install Python

1. Install Python 2.7: [release](https://www.python.org/downloads/release/python-2718/)

2. Add the following directories to PATH:
   ```
   path\to\Python27
   path\to\Python27\Scripts
   ```

3. Download the `Python 2.7 SDK` for NAO robots: [download](https://www.aldebaran.com/en/support/nao-6/downloads-softwares)

4. Unzip and save the SDK folder

5. Set the following environment variables:
   ```
   PYTHONPATH = path\to\python-sdk\lib
   ```

### Install Node.js and npm
1. Follow steps to install Node.js and npm: [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Configure data files
1. Copy `/server/.env.template` to a new file and rename it `.env`. Update file with correct NAO configuration. To debug the system without connection to a NAO robot, set `MODE=console`. To run the system with a NAO robot, set `MODE=naoqi`.

2. `/naoqi-web/src/data/data.js`: Contains pre-defined dialogue options and actions for the robot. Options are dynamically rendered as UI buttons, meaning that new options will be automatically added to the interface when this file is updated. To add a new pre-defined robot action, use the type constant `ACTION` and add the action's name to the `ACTIONS` constant. In `App.js`, update the `doAction` function to handle the new action.

3. `/server/data.py` contains introduction dialogue to be repeated when the robot's head is touched. To change the dialogue that is repeated, update the `version` global variable in `script.py`.

## My steps for running
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
