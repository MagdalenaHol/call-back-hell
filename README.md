# Callback Hell

## Story

We have a huge problem, the Callback Hell of JavaScript has opened up and it is threatening the developer world with total destruction! We can already see the Pyramid of Doom down there, so this is no joke. You have to pick up some explosives and blow the whole thing out of existence to save our precious world (and StackOverflow)!

The task is easy, you need to deploy a bomb and notify others when it is going to blow up.
You can communicate through a website with a terminal-like view
and update it with the countdown in real time: "3... 2... 1... Boom!"

## What are you going to learn?

- Understand the essential features of the JavaScript execution flow.
- Structure JavaScript code and make sense of callbacks when using `setTimeout` and event handlers.
- Understand the event-driven nature of JavaScript.
- Passed functions inside other functions as arguments.
- Use JavaScript Promise basics

## Tasks

1. Implement a real-time countdown by using `setTimeout()` and callbacks.
    - The countdown sequence is shown in real time in the following way.
  - print "The bomb goes off in..."
  - wait 1s
  - print "3..."
  - wait 1s
  - print "2..."
  - wait 1s
  - print "1..."
  - wait 1s
  - print "Boom!"

2. [OPTIONAL] Implement the same task, but this time using JavaScript Promises.
    - The countdown sequence is shown in real time, and the execution flow is controlled by Promises.

## General requirements

- Only `printText()` and `clear()` from `common.js` are used for DOM manipulation.

## Hints

- Open the `index.html` by starting a small HTTP server. For details, see the Background materials section.

## Background materials

- <i class="far fa-exclamation"></i> [What is a callback?](project/curriculum/materials/pages/javascript/what-is-callback.md)
- <i class="far fa-exclamation"></i> [How to start a local HTTP server](project/curriculum/materials/pages/tools/serve-files.md)
- <i class="far fa-exclamation"></i> [Demolish the Callback Hell: a step-by-step project guide](project/curriculum/materials/pages/javascript/demolish-callback-hell.md)
- <i class="far fa-candy-cane"></i> [Demolish the Callback Hell code examples hosted online](https://repl.it/@szrudi/JS-Callback-hell-tutorial)
- <i class="far fa-exclamation"></i> [Another callback hell example and how to fix it](http://callbackhell.com/)
- <i class="far fa-book-open"></i> [JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
- <i class="far fa-book-open"></i> [More in depth reading on callbacks with some mind-bending examples](https://javascript.info/callbacks)
- <i class="far fa-book-open"></i> [Serving a Burger - How to avoid callback hell](https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/)
- <i class="far fa-exclamation"></i> [JavaScript Promises for dummies](https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies)
- <i class="far fa-candy-cane"></i> [Promise basics](https://javascript.info/promise-basics)
- <i class="far fa-candy-cane"></i> [MDN – Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- <i class="far fa-candy-cane"></i> [MDN – Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- <i class="far fa-candy-cane"></i> [Promise tutorial code](https://repl.it/@szrudi/Promise-to-wake-Neo)
