# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/screenshot2023-04-03.png)

### Links

- Solution URL: [https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/interactive-card-details-form-main](https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/interactive-card-details-form-main)
- Live Site URL: [https://leandr0sms.github.io/Frontend-Mentor-Projects/interactive-card-details-form-main/index.html](https://leandr0sms.github.io/Frontend-Mentor-Projects/interactive-card-details-form-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

Set Gradient Borders:

```css
  &:focus {
      outline: none;
      background: linear-gradient($White, $White) padding-box,
      linear-gradient($linear-gradient) border-box;
      border: 1px solid transparent;  
      opacity: 1;
  }
```
```css
    transition: 0.2s linear;
    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 25px 1px rgba(0,0,0,0.25);
    }
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