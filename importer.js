// SET path to useful js files
const __path_useful = 'YOUR_PATH' // MODIFY YOUR_PATH

// SET array of js files
// Add new js files
const __array_useful = [ 
  'color.js', 
  'logger.js', 
]
for (let jsfile of __array_useful)
  document.write(`<script src='${__path_useful}/${jsfile}'></script>`);