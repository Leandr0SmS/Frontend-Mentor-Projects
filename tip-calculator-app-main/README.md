# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/Screenshot%202023-05-01-tip-calculator.png)

### Links

- Solution URL: [https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/tip-calculator-app-main](https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/tip-calculator-app-main)
- Live Site URL: [https://leandr0sms.github.io/Frontend-Mentor-Projects/tip-calculator-app-main/index.html](https://leandr0sms.github.io/Frontend-Mentor-Projects/tip-calculator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This logic to toglle between values of a object

```js
        setTipSelected(prevState => ({
            ...Object.fromEntries(
                Object.entries(prevState).map(
                    ([key, value]) => [key, 
                                          key === name 
                                          ? !value 
                                          : false
                                      ]
                ))
        }));
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

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
