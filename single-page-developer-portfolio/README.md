# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Links

- Solution URL: [https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/single-page-developer-portfolio](https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/single-page-developer-portfolio)
- Live Site URL: [https://leandr0sms.github.io/Frontend-Mentor-Projects/single-page-developer-portfolio/starter-code/index.html](https://leandr0sms.github.io/Frontend-Mentor-Projects/single-page-developer-portfolio/starter-code/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use of "ex":
```css
  .profile-img {
      height: 100ex;
      object-fit: fill;
      width: auto;
  }
```

Use of window.innerWidth to render based on screen width.
```js
const screenWidth = window.innerWidth;
    if (screenWidth < 1211) {
        return (
            <div className="project--div">
                <div 
                    className="my-image-container"
                >
                    <img
                        className="project--img"
                        src={`./assets/images/${props.img}`}
                        alt={props.title}
                        aria-hidden="false"
                        role="img"
                        id={props.id}
                    />
                </div>          
                <h3>{props.title}</h3>
                <div className="tool--div">{props.tools}</div>
                <View 
                        live={props.live}
                        code={props.code}
                        Ishovered={true}
                />
            </div>
        )
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
