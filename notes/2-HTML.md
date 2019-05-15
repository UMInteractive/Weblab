# Intro to HTML

### [Slides](https://docs.google.com/presentation/d/1ycveBTmap2rG-v4u8br47lPXIT2Ay9yLnSyEOOdNJk8/edit?usp=sharing)

```html

<!DOCTYPE html>

<html>

   <head>
       <title>My super awesome website!!!</title>
   </head>

   <body>
       <h1>Hello World!!!!</h1>
   </body>


</html>

```

## HTML & CSS Related Chapters

Chapters 1-5

## [HTML Validator](https://jsonformatter.org/html-validator)

### Important HTML Tags

For an in depth overview of HTML5 tags visit the [HTML5 Doctor](http://html5doctor.com/)


#### Head

[doctype](http://html5doctor.com/element-index/#doctype) - Defines the document type
```html
<!DOCTYPE HTML>
```

[html](http://html5doctor.com/element-index/#html) - Defines an HTML document
```html
<html></html>
```

[head](http://html5doctor.com/element-index/#head) - Defines information about the document
```html
<!DOCTYPE html>

<html>

   <head>
       <title>My super awesome website!!!</title>
   </head>

   <body>
       <h1>Hello World!!!!</h1>
   </body>


</html>
```

[title](http://html5doctor.com/element-index/#title) - Defines a title for the document
The title is visible when someone bookmarks a page, on the tab and as the main link in Google's search results page.

```html
<title>This is the title of the page</title>
```


[link](http://html5doctor.com/element-index/#link) - Defines the relationship between a document and an external resource

[meta](http://html5doctor.com/element-index/#meta) - Defines metadata about an HTML document

[style](http://html5doctor.com/element-index/#style) - Defines style information for a document i.e. CSS

[script](http://html5doctor.com/element-index/#script) - Defines a client-side script

[noscript](http://html5doctor.com/element-index/#noscript) - Defines an alternate content for users that do not support client-side scripts

#### Comments

[```<!-- ... -->```](http://www.w3schools.com/tags/tag_comment.asp)  - Defines a comment

#### Sections

[body](http://html5doctor.com/element-index/#body) - Defines the document's body

[article](http://html5doctor.com/element-index/#article) - Defines an article

[nav](http://html5doctor.com/element-index/#nav) - Defines navigation links

[aside](http://html5doctor.com/element-index/#aside) - Defines content aside from the page content section

[header](http://html5doctor.com/element-index/#header) - Defines a header for a document or section

[footer](http://html5doctor.com/element-index/#footer) - Defines a footer for a document or section

[h1-h6](http://html5doctor.com/element-index/#h1-h6) - Defines HTML headings

[main](http://html5doctor.com/element-index/#main) - Specifies the main content of a document

[address](http://html5doctor.com/element-index/#address) - Defines contact information for the author/owner of a document/article

[br](http://html5doctor.com/element-index/#br) - Inserts a single line break

#### Grouping

[p](http://html5doctor.com/element-index/#p) - Defines a paragraph

[blockquote](http://html5doctor.com/element-index/#blockquote) - Defines a section that is quoted from another source

[ol](http://html5doctor.com/element-index/#ol) - Defines an ordered list

[ul](http://html5doctor.com/element-index/#ul) - Defines an unordered list

[li](http://html5doctor.com/element-index/#li) - Defines a list item

[figure](http://html5doctor.com/element-index/#figure) - Specifies self-contained content

[figcaption](http://html5doctor.com/element-index/#figcaption) - Defines a caption for a ```<figure>``` element

[div](http://html5doctor.com/element-index/#div) - Defines a section with no special meaning in a document. Often used for children of a defined parent.

#### Tables

[table](http://html5doctor.com/element-index/#table) - Defines a table

[tr](http://html5doctor.com/element-index/#tr) - Defines a row in a table

[th](http://html5doctor.com/element-index/#th) -Defines a header cell in a table

[td](http://html5doctor.com/element-index/#td) - Defines a cell in a table

#### Forms

[form](http://html5doctor.com/element-index/#form) - Defines an HTML form for user input

[fieldset](http://html5doctor.com/element-index/#fieldset) - Groups related elements in a form

[label](http://html5doctor.com/element-index/#label) - Defines a label for an <input> element

[input](http://html5doctor.com/element-index/#input) -Defines an input control

[button](http://html5doctor.com/element-index/#button) - Defines a clickable button

[select](http://html5doctor.com/element-index/#select) - Defines a drop-down list

[option](http://html5doctor.com/element-index/#option) - Defines an option in a drop-down list

[textarea](http://html5doctor.com/element-index/#textarea) - Defines a multiline input control (text area)

####Embedded

[img](http://html5doctor.com/element-index/#img) - Represents an image

[iframe](http://html5doctor.com/element-index/#iframe) - Defines an inline frame

[embed](http://html5doctor.com/element-index/#embed) - Defines a container for an external (non-HTML) application

[object](http://html5doctor.com/element-index/#object) - Defines an embedded object

[video](http://html5doctor.com/element-index/#video) - Defines a video or movie

[audio](http://html5doctor.com/element-index/#audio) - Defines sound content

[canvas](http://html5doctor.com/element-index/#canvas) - Used to draw graphics, on the fly, via scripting (usually JavaScript)

#### Text-level

[a](http://html5doctor.com/element-index/#a) - Defines a hyperlink

[em](http://html5doctor.com/element-index/#em) - Defines emphasized text

[strong](http://html5doctor.com/element-index/#strong) - Defines important text

[i](http://html5doctor.com/element-index/#i) - Defines a part of text in an alternate voice or mood

[b](http://html5doctor.com/element-index/#b) - Defines bold text

[u](http://html5doctor.com/element-index/#u) - Underline

[s](http://html5doctor.com/element-index/#s) - Defines text that is no longer correct

[small](http://html5doctor.com/element-index/#smaller) - Defines smaller text

[abbr](http://html5doctor.com/element-index/#abbr) - Defines an abbreviation or an acronym

[q](http://html5doctor.com/element-index/#q) - Defines a short quotation

[cite](http://html5doctor.com/element-index/#cite) -  tag defines the title of a work (e.g. a book, a song, a movie, a TV show, a painting, a sculpture, etc.)

*From html5 doctor*

#### SPECIAL CHARACTERS

[Symbols](http://www.w3schools.com/html/html_symbols.asp)

[Entities](http://www.w3schools.com/html/html_entities.asp)

### Relative vs Absolute links

When you link an image (img tag) with the src attribute or a hyperlink (a tag), their are 2 options for linking documents or image files.

```html

<img src="">

<a href="">Click here</a>

```

#### Absolute links

These links locate the exact location of a file on a server.

https://github.com/zevenrodriguez/Weblab/blob/master/images/loveweblab.png

In the above example, after top level domain (.com) the slash indicates to the server to search subsequent folders till it finds the file you are looking for. In this case, github server looks for a zevenrodriguez folder, then in that folder it look for the Weblab folder, etc.

#### Relative links

When a server opens a document that contains a relative link, it starts searching through folders starting from the folder where the open document is opened from.

```html
<img src="images/loveweblab.png">
```

For example, if in your index.html file you reference an image in a tag like above, the server looks for an images folder where the index.html is located. Then it finds the file inside that images folder.

For more info [read](https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)



### Image Width and Height attributes

```html
<!-- If just width attribute is set on an image, the image will scale the height proportionally based on the width size-->

<img src="images/penguin.jpg" width="320">

<!-- If just height attribute is set on an image, the image will scale the width proportionally based on the height size-->

<img src="images/penguin.jpg" height="320">

<!-- If a width and height is set on an image, the image will scale to the exact pixel size entered-->

<img src="images/penguin.jpg" width="320" height="320">

```

### Meta tags

##### Define keywords for search engines:

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
```

##### Define a description of your web page:

```html
<meta name="description" content="Free Web tutorials on HTML and CSS">
```
##### Define the author of a page:

```html
<meta name="author" content="John Doe">
```

##### Setting the viewport to make your website look good on all devices:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### SECTIONS VS ARTICLES

Think of sections like chapters of a book. They all have something to do with each other. Articles are stories, blog posts, or piece that can stand on there own.

#### [About Semantic Elements: Read Structural Semantic Elements and The Difference Between Sections and Articles](http://vanseodesign.com/web-design/html5-semantic-elements/)
