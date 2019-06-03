# part0

## 0.1 - HTML

- read

## 0.2 - CSS

- read

## 0.3 - HTML Forms

- read

## 0.4 - New Note

1. User navigates to website. Browser GETs https://fullstack-exampleapp.herokuapp.com/notes
2. server returns https://fullstack-exampleapp.herokuapp.com/notes html, css, and javascript
3. User types something into box and the application uses the following methods for each file:
	1. new_note -> POST https://fullstack-exampleapp.herokuapp.com/new_note -> Action that adds the users inputs to the data.json on the server
	2. notes -> GET https://fullstack-exampleapp.herokuapp.com/notes -> brings back the updated application with the new entry. 
	3. main.css -> GET https://fullstack-exampleapp.herokuapp.com/main.css -> Needed for styling
	4. main.js -> GET https://fullstack-exampleapp.herokuapp.com/main.js -> Needed for functionality
	5. data.json -> GET https://fullstack-exampleapp.herokuapp.com/data.json -> needed to display the new data now posted and stored on the server

## 0.5 - Single page app. 

User experiences the same as the regular HTML page and the difference is how new notes are fetched and stored on the server. 



## 0.6 - New Note

1. Only file used is *new_note_spa* -> POST https://fullstack-exampleapp.herokuapp.com/new_note_spa no new HTTP requests instead using javascript from the server. 
