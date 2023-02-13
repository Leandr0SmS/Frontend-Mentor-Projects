# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Use .map() to collect data from a obj.

```js

const data = [
    {
        main: {
            id: "01",
            heading: "Equilibrium #3429",
            text: "Our Equilibrium collection promotes balance and calm.",
        },
        footer: {
            id: "02",
            author: "Leandro Simões"
        },
        price_time: {
            id: "03",
            price: 0.041,
            time: 3
        },
        avatar: {
            id: "04",
            avatarName: "Jules Wyvern"
        }
    }
]

//extract data creating jsx Price_Time element
const priceTimeData = data.map((obj) => {
    return <Price_Time 
                key={obj.price_time.id}
                price={obj.price_time.price}
                time={obj.price_time.time}    
            />
});

//extract data creating jsx Main element using {obj}
const mainData = data.map((obj) => {
    return <Main
                key={obj.main.id}
                item={obj}/>
});

```

- Adjacent sibling selector, selects all elements that are the adjacent siblings of a specified element.

```CSS

.nft-img:hover + .nft-icon {
    visibility: visible;
} 

```

### Continued development

Leranig more about react.

### Useful resources

- [Example resource 1](Learn React for free) - This helped me to understand components and props in react. 

## Author

- Frontend Mentor - [@Leandr0SmS](https://www.frontendmentor.io/profile/Leandr0SmS)

## Acknowledgments

- (MDN)[https://developer.mozilla.org/]
- (W3School)[https://www.w3schools.com/]
- (FreeCodeCamp)[https://www.freecodecamp.org/]
- (CodeCademy) [https://www.codecademy.com/]
