jQuery wScrollspy
=================

jQuery wScrollspy is a plugin that listens to the page's scroll position and clicks to activate links.

(c) 2013 Willian Costa Souza - [willian.93.costa@gmail.com](willian.93.costa@gmail.com)

Released under The MIT License.

Example:
===

[http://codepen.io/anon/pen/fHJuA](http://codepen.io/anon/pen/fHJuA)

Source:
===

Hosted at GitHub, or clone from:

git://github.com/willianis4w/jQuery-wScrollspy.git


Usage:
===

Insert the necessary elements in your document, after `</body>`, e.g.:

```html

<script src="assets/js/jQuery.wScrollspy.min.js"></script>

```

Remember to include after including the main jQuery library.

Initialise:

```javascript

// your links' wrapper
$( '#main-header' ).wScrollspy();

```

Then, all your links beginning with `#` are being watched.


Options:
===

```javascript

classActive: (string) 'active' // class name for your active links

```