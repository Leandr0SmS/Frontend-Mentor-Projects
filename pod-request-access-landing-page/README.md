# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Links

- Solution URL: [https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/pod-request-access-landing-page](https://github.com/Leandr0SmS/Frontend-Mentor-Projects/tree/main/pod-request-access-landing-page)
- Live Site URL: [https://leandr0sms.github.io/Frontend-Mentor-Projects/pod-request-access-landing-page/starter-code/index.html](https://leandr0sms.github.io/Frontend-Mentor-Projects/pod-request-access-landing-page/starter-code/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use React to handle form data, email validation and create a error msg.

To see how you can add code snippets, see below:

```js
//State to get email and error/ok email validation
const [formData, setFormData] = React.useState(
        {
            email: "",
            error: false,
            ok: false
        });
//handle function to change form event
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
                error: false,
                ok: false
            }
        })
    }
  //Prevent to reload form at submit
    function handleSubmit(event) {
        event.preventDefault();
    }
  //email validation with RegExp, test condition and setState function
    function emailValidation() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(formData.email) ) {
            setFormData(prevFormData => {
                return{
                    ...prevFormData,
                    ok: true
                }
            })
        }
        else {
            setFormData(prevFormData => {
                return{
                    ...prevFormData,
                    error: true
                }
            })
        }
    }
```
### Continued development

I will continue my study about React.

### Useful resources

- [Example resource 1](https://scrimba.com/learn/learnreact) - Great course about React.

## Author

- Frontend Mentor - [@Leandr0SmS](https://www.frontendmentor.io/profile/Leandr0SmS)

## Acknowledgments

- (MDN)[https://developer.mozilla.org/]
- (W3School)[https://www.w3schools.com/]
- (FreeCodeCamp)[https://www.freecodecamp.org/]
- (CodeCademy) [https://www.codecademy.com/]
- (Scrimba) [https://scrimba.com/learn/learnreact]