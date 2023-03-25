# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%202023-03-25%20081619.png)

### Links

- Solution URL: [https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/advice-generator-app-main](https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/advice-generator-app-main)
- Live Site URL: [https://leandr0sms.github.io/Frontend-Mentor-Projects/advice-generator-app-main/index.html](https://leandr0sms.github.io/Frontend-Mentor-Projects/advice-generator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

To use the useEffect hook: 

```js
  React.useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
          .then(res => res.json())
          .then(data => setData(data.slip))
  }, [get])
```


### Continued development

I need to improve and pratice React.

## Author

- Frontend Mentor - [@Leandr0SmS](https://www.frontendmentor.io/profile/Leandr0SmS)

## Acknowledgments

- (MDN)[https://developer.mozilla.org/]
- (W3School)[https://www.w3schools.com/]
- (FreeCodeCamp)[https://www.freecodecamp.org/]
- (CodeCademy) [https://www.codecademy.com/]
- (Scrimba) [https://scrimba.com/learn/learnreact]
- (Chat-GPT) [https://chat.openai.com]
