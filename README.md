# Yet Another Notes App

This project was developed as part of the Patika Front End Bootcamp Week 10 assignment.

## About the Project

Yet Another Notes App is an interactive application that allows users to create, complete, and delete notes. Users can also filter their notes and pick colors for better organization. The app's notes are saved in local storage, ensuring persistence across sessions.

## Live Demo

You can check out the live demo of this project [here](https://yet-another-notes-app.pages.dev).

![Screen Recording](screen_recording.gif)

## Features

- Create and delete notes with a simple interface.
- Search functionality to filter notes by text.
- Color picker to customize note colors.
- Completed notes can be toggled for better visibility.
- Stable note identities keep filtered actions correct even when notes share the same text.
- Existing saved notes migrate automatically, while malformed browser data recovers safely.

## Verified behavior

The dependency-free rule suite covers legacy storage migration, malformed-data recovery, duplicate-text filtering, targeted completion/deletion, input trimming, and blank-note rejection.

```sh
npm ci
npm test
npm run lint
npm run build
```

## Technologies Used

- React
- Tailwind CSS
