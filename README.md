# Product preview card component solution

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic real world projects. 

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](/images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/UbaidRussell/product-preview-card)
- Live Site URL: [Add live site URL here](https://ubaidrussell.com/product-preview-card/)

## My process
I began with a just do it attitude, as we can see, it paid off. I surprised myself.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

What have we learned?

The challenge didn't require any javascript however I personally wanted to have some more fun and add some myself, I found the code below to be quite interesting.
```js
let button = document.querySelector('button');

function changeColor(event){
    event.target.style.backgroundColor = "hsl(212, 21%, 14%)"
}
function returnColor(event){
    event.target.style.backgroundColor = ''
}

button.addEventListener('mouseover', changeColor)
button.addEventListener('mouseout', returnColor)
```

### Continued development

We're going to use this website to get better at making even more impressive websites

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) - This helped me with getting an idea of what I was going to do with handling the font weights

## Author

- Website - [UbaidRussell](https://ubaidrussell.com/)
- Frontend Mentor - [@UbaidRussell](https://www.frontendmentor.io/profile/UbaidRussell)
- Twitter - [@ubaidrussell](https://www.twitter.com/ubaidrussell)


## Acknowledgments

