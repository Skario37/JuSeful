# JuSeful
Useful functions for JS

# Installation
Download [folder JuSeful](https://github.com/Skario37/JuSeful/archive/master.zip) or clone and add it to your project.

### Configuration
In importer.js set path to your JuSeful forlder and add script to your HTML file.
Example :
importer.js
```js
// SET path to useful js files
const __path_useful = './js/JuSeful' // MODIFY YOUR_PATH
[...code]
```
HTML file
```html
<script src="./js/JuSeful/importer.js"></script>
```
### Logger
Usage :
```js
log('Cat')
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [log] : Cat

cmd('Cat eating' + food)
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [cmd] : Cat eating fish

warn('Cat looking at dangerous dog')
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [warn] : Cat looking at dangerous dog

error('Cat', 'biten by', 'dog')
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [error] : Cat bitten by dog

debug('Cat receive care')
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [debug] : Cat receive care

ready('Cat is in good shape!')
// Output : [Fri, 05 Jun 2020 12:59:53 GMT] [ready] : Cat is in good shape!
