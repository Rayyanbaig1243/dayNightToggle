#Day/Night Toggle Switch

This project creates a toggle switch with icons which can switch between states. Easily reusable. Built using HTML, CSS with JavaScript.

Constructing this project has helped me to better learn and practice the following:
1) Creating custom CSS elements
2) checkbox:checked
3) DOM manipulation

The JavaScript for this project is deemed self-explanatory by myself.
```JavaScript
const checkbox = document.getElementById('checkbox');
const paragraph = document.getElementById('p');
const anchor = document.getElementById('a');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    paragraph.classList.toggle('light');
    anchor.classList.toggle('light');

})
```

