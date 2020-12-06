# Deepfake Video Analysis and Reporting

**Problem Statement**: Real Time image processing and forensic verification of Fake Videos.


This problem statement was assigned by Bureau of Police Research and Development in order to classify videos as deepfake or not. The project was submitted in Smart India Hackathon(SIH) 2020, where our team bagged a spot in the grand finale. We divided the project into 3 parts as:
 1. [React Web App](https://github.com/akashlende/Deepfake-Recognition-React) 
 2. [Flutter App for Android](https://github.com/richa7maurya/deepfake_app)
 3. [Express server](https://github.com/akashlende/Deepfake-Recognition-Server-Node)

## 1. The Website - ReactJS Application

We followed the standard procedure for developing the web application which consisted of the following steps: 
  1. Design the Adobe XD designs for all the pages. 
  2. Decide upon the common libraries, font styles and icon sets. 
  3. Code the static web pages. 
  4. Create of list of APIs required to serve the frontend for the backend team.
  5. Integrate the APIs to make the web pages dynamic. 

Our SIH team came up with creative ideas for the page designs. Every minute details of each and every component were discussed and we fixed on a react template to get started with the implementation part. We used [Font Awesome Icons](https://fontawesome.com/v4.7.0/icons/) and libraries like [React Dropzone](https://www.npmjs.com/package/react-dropzone), [React PDF](https://www.npmjs.com/package/react-pdf), and many more. 

### The Designs
The comparisons between the designs we created and the web pages we coded are:

1. Home Page
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/HOME.png" width="45%" alt="Design of Home page" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_194115.png" width="45%" alt="Screenshot of Home page" />
 
2. Classify Page:
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/CLASSIFY.png" width="45%" alt="Design of Classify page" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_194231.png" width="45%" alt="Screenshot of Classify page" />
 
3. History Page:
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/HISTORY.png" width="45%" alt="Design of History page" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_194905.png" width="45%" alt="Screenshot of History page" />

### Multi-Lingual
The react application was made available in English and 7 Indian languages viz. Hindi, Gujarati, Marathi, Bangla, Malayalam, Punjabi and Telugu.
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_201821.png" width="95%" alt="Home page in hindi" />

To make content translation easier, we wrote all the static content in a single json file which contained the text in all 8 languages. The content.json file looks something like this:
```{
    "en": {
        "home": {
            "title1": "What are we solving?",
            "para1": "Cyber Criminals are using Image processing tools and techniques for producing the...",
            "title2": "Our Approach",
            "para2": "Our method is based on the observations that current DeepFake algorithm can only generate ...",
            "para3": "The models are deployed on the node-based web-app which ...",
            "title3": "Technology Stack",
            "para4": "PyTorch / OpenCV",
            "para5": "Python",
            "para6": "Microsoft Azure",
            "para7": "ReactJS",
            "para8": "Flutter",
            "title4": "Performance History",
            "title5": "Start Classifying"
        },
        "classify": {
            "title6": "DRAG 'N' DROP FILE HERE, OR CLICK TO SELECT FILE"
        },
        "about": {
            "title6": "Sakshi Doshi",
            "title7": "Team Leader",
            "title8": "Parag Ghorpade",
        ...
        ...
        ...
```

### Dark/Light Mode
Who doesn't like dark mode nowadays? We gave an option for user to choose between the light and dark mode. 

<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_201926.png" width="45%" alt="Home page - light" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Screenshot%202020-12-06_194115.png" width="45%" alt="Home page - dark" />

## 2. Flutter App for Android

Our main challenge was to design the flutter app to match the web application. Hence, we used same color chart for the flutter app as the react web app and had to implement all the features in the flutter as the react app. We followed the same procedure while creating the flutter app: 
  1. Design the Adobe XD designs for all the screens. 
  2. Decide upon the common libraries, font styles and icon sets. 
  3. Code the static screens. 
  4. API calls to make the screens dynamic. 

Here, are the designs of the screens we created in Adobe XD before starting the coding part: 

<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Design_Login.png" width="18%" alt="Login screen design" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Design_Signup.png" width="18%" alt="Signup screen design" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Design_Classify.png" width="18%" alt="Classify screen design" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Design_Home.png" width="18%" alt="Home screen design" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/Design_History.png" width="18%" alt="History screen design" />

<br />

<br />


And, the screenshots of actual flutter app: 

<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/login.jpeg" width="18%" alt="Login screen" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/signup.jpeg" width="18%" alt="Signup screen" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/home_screen_dark.jpeg" width="18%" alt="Home screen" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/classify_screen.jpeg" width="18%" alt="Classify screen" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/history_screen.jpeg" width="18%" alt="History screen" />

**Note:** The designs has app drawer but later we decided to drop the app drawer and use a bottom navigation bar instead. 

### Multi-Lingual 
The app was translated into 8 languages for localization. We used [Convert Package](https://pub.dev/packages/convert) by flutter itself for displaying the text in various languages. Again, to ease the task of conversion to new languages, we kept the entire content in files renamed with respective languages. 
```
.
└── lang
    ├── en.json
    ├── hi.json
    ├── bn.json
    ├── gu.json
    ├── ml.json
    ├── mr.json
    ├── te.json
    └── pa.json
```
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/languages.jpeg" width="20%" alt="Home screen in hindi language" />


### Dark/Light Mode
We also added the all time user favorite light/dark mode switch in the flutter app from the react website.

<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/home_screen_light.jpeg" width="30%" alt="Home screen light" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/home_screen_dark.jpeg" width="30%" alt="Home screen dark" />

## 3. The Node-Express Server

The express server was the heart of our project as it contained the important logic to fuel our entire project. And at the core of express server was the machine learning model which classified the videos and images as deepfake or not. The coding of the server was divided into two parts viz. APIs to serve the frontend, automated scripts to classify realtime tweets. 

**Salient features of the Express server:**
 1. Secured by bearer token.
 2. Rate limited APIs.
 3. Reusable code.
 4. Encapsulated code for database. 

### 1. The common API interface
Created a common interface consisting of 11 APIs to serve the frontend. The APIs allows our application to be integrated in any portal. We used passport.js for user authentication. Used Mongoose Object Data Modelling(ODM) for connecting to and performing various operations on the MongoDB. The list of APIs that we created is available here at [Postman Collection](https://documenter.getpostman.com/view/9427742/TVmQdvvp#07ad27c8-f4bf-417c-9ccb-eeec83b7b7f0) published publicly. The API calls obviously won't work because the server isn't running. 

### 2. Real-time tweet classifier
The server sweeps twitter for new tweets that has mentioned our bot. The tweets which have video or images in them are fetched. The videos or images in the tweets are scraped with the help of [Twitter APIs](https://developer.twitter.com/en/docs/api-reference-index). This media is fed to our machine learning model to get binary classification as deepfake or not. The result is then commented back to the tweet. If, the user tries to overuse our application, then he/she will be notified regarding rate limit in direct messaging as well. 

<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/tweet_dm.png" width="40%" alt="Rate limit direct message" />
<img src="https://github.com/akashlende/DeepFake-Recognition-React/blob/master/readme/tweet_comment.png" width="45%" alt="Classification result comment" />
