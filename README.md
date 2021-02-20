## Notes

### Date
February 20 2021
### Instructions for how to build & run the app
The app is built using [React Native](https://reactnative.dev/) platform.

#### Environment setup
* [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) steps to setup the development environment.
* Install [yarn](https://classic.yarnpkg.com/en/docs/install) 1.19.1 or above

#### Build & Run

##### Installing dependencies
Run `yarn` in project directory

##### iOS dependencies
`cd ios`

`pod install`

##### iOS - run on simulator
Run `yarn ios` in project directory. This will run on the current running simulator or will start the new one.

##### iOS - run on device
- Open `WeatherApp` workspace from `./ios` directory with **XCode**
- Select a developer certificate in *Build Settings*
- Select device to run on
- Run

##### Android - run on simulator
To run the app on Android emulator, please make sure you have emulator running.

To build and start the app:
`yarn android` in project directory

##### Android - run on device
To run the app on Android device, have the device connected to the computer, enable *adb debug* in developer settings.

To build and start the app:
`yarn android` in project directory


### Time spent
10 hours
### Assumptions made
- As a location selection use search by city name.
- No need to show name of current location.
- Favourite locations are the last selected cities.
- No multilingual support needed, use default provided data by the service.
- Project structure should support work with small / medium team or multiple squads.
### Shortcuts/Compromises made
- Strings/captions for UI elements are hardcoded in the code. 
- No localization support based on device or user selected language.
- No accessibility concerns are addressed.
- API URLs are in the code, should be in some config file
- API keys are in the code, should be remotely configurable 
- No test are implemented. But the structure and RN supports high unit test coverage. Also E2E and functional tests can be implemented.
- JavaScript is used for the development. TypeScript would be better to maintainability and dev experience.
- Very basic UI for the functionality is implemented. For the production readiness need to be polished.
### Why did you choose the technology/framework you used?
React Native is one of the most popular cross platform frameworks for mobile app development. It renders native UI components to meet performance and quality goals. There is a very large open source community supporting the framework and variety of libraries.
### Stretch goals attempted
The stretch goals are accomplished with assumptions stated above.
### What did you not include in your solution that you want us to know about?
- Tests - Unit, Integration and UI functional tests could've been implemented.
- Building pipeline with CI/CD integration

### Other information about your submission that you feel it's important that we know if applicable.
This is demo/educational project, not production ready. No commercial creatives, assets and code snippets are used. Although can be coincidental matches with public things.
### Your feedback on this technical challenge
It was a fun task to complete. Although, to demonstrate an ability to structure and design a project I would prefer to use other approaches. As doing boilerplate work takes too much time.
