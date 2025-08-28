1. What is the difference between getElementById, getElementsByClassName, and querySelector/ querySelectorAll?**

getElementById`: Selects an element by its ID attribute. Returns a single DOM Element.
getElementsByClassName`: Selects elements by their class name. Returns a live HTMLCollection, which updates as the document changes.
querySelector`: Selects the first matching element using a CSS selector. Returns a single DOM Element.
querySelectorAll`: Selects all matching elements using a CSS selector. Returns a static NodeList.



2. How do you create and insert a new element into the DOM?**

Create a new element with `document.createElement()`, set its attributes or inner content, and insert it using `appendChild()`, `insertBefore()`, `append(), prepend()`, etc.


3. What is Event Bubbling and how does it work?**

Event bubbling refers to the process in which an event propagates from the target element up through its ancestors in the DOM tree hierarchy. The event starts at the target and goes up through each parent node to the root.



4. What is Event Delegation in JavaScript? Why is it useful?**

Event delegation is a JavaScript technique for managing events efficiently. Instead of adding event listeners to multiple child elements, a single listener is added to a parent element. This approach is efficient for performance and allows for easy handling of dynamically added or removed child elements.



5. What is the difference between `preventDefault()` and `stopPropagation()` methods?**

preventDefault: Prevents the default action or behavior of an event from occurring (e.g., stopping a link from navigating).
stopPropagation: Stops the event from propagating further in the capturing or bubbling phase, preventing parent listeners from being notified.