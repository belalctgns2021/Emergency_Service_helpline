# Emergency Service Directory (Bangladesh)

A responsive, single-page site showing key emergency hotlines. Users can like services, make “calls” (deducts coins), copy hotline numbers, and view a dynamic Call History.

## Tech
- HTML + Vanilla JavaScript
- Tailwind CSS + DaisyUI (CDN)
- No JS frameworks or libraries

## Features
- Navbar shows: Heart count, Coins (start 100), Copy count
- Gradient hero with crest, title, slogan
- Cards grid (≥6) with icon, Bangla/English names, number, category badge, Copy & Call buttons, heart button
- Call History panel with timestamps and Clear button
- Fully responsive

## How to Run
Open `index.html` in any modern browser.

## Q&A
1. **getElementById vs getElementsByClassName vs querySelector/querySelectorAll**  
   - `getElementById(id)` → single element (or `null`) by unique `id`.  
   - `getElementsByClassName(cls)` → *live* HTMLCollection of matches.  
   - `querySelector(css)` → first match for a CSS selector.  
   - `querySelectorAll(css)` → *static* NodeList of all matches.

2. **Create & insert a DOM element**  
   ```js
   const box = document.createElement('div');
   box.textContent = 'Hello';
   document.querySelector('#container').appendChild(box);

Event Bubbling
Event travels from the actual target up through ancestors (child → parent → document). Unless stopped, each ancestor’s listener receives the event.

Event Delegation
Attach one listener on a common ancestor and handle events from children by checking event.target (or closest). Saves memory and works for elements added later.

preventDefault vs stopPropagation

preventDefault() blocks the browser’s default action (e.g., form submit, link navigation).

stopPropagation() prevents the event from bubbling to ancestor elements.

Copy button behavior
Uses navigator.clipboard.writeText(number), shows an alert, and increments the Copy count. Fallback uses a temporary <textarea> + document.execCommand('copy').

Timestamp in history
Uses new Date().toLocaleString() with hours, minutes, seconds and date.