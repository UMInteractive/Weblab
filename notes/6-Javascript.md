Javascript is a programming language primarily used to interact with elements of the DOM (Document Object Model). The DOM is how website structure is broken up in to a tree hierarchy.

![Document Object Model](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/500px-DOM-model.svg.png)

[Author: Birger Eriksson](https://en.wikipedia.org/wiki/Document_Object_Model)

## Javascript can be placed:

* In your html file inside script tags in the
  * body
  * head
* Can be placed externally

## WHAT IS JQUERY?

jQuery is a library (collection of code) designed to facilitate working with the DOM. To work with jquery you need to include the jquery library in your html code using the <script> tag and then write your own javascript/jquery commands inside another script tag.

## 2 WAYS TO USE JQUERY

### Local Version

Using a local version you are going to use a relative link to link your jquery file. The advantage of using a local version is that you have control of what version of jquery your website uses. It also ensures that your website has its own hosted version of jquery on your server.

```HTML
<script src="js/jquery-3.3.1.min.js"></script>
```

Download and place in your js folder

[Right click and save link as to download jQuery](https://code.jquery.com/jquery-3.3.1.min.js)


### Remote Version

You can use a absolute link to link your jquery file to a hosted jquery version. The advantage of remotely linking to jquery is that it allows you to easily upgrade to newer versions of jquery. Your setup is much easier. A disadvantage is if the server where the jquery file is hosted goes down, then your jquery will not work.

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

### Getting Started

The placement of the your jquery version and your own script should be placed in the head or right before the body tag closes.

```HTML

<script src="js/jquery-3.3.1.min.js"></script>

<script type="text/javascript">
    $(document).ready(function(){
          //all js goes in here

        });
</script>
```
### .css();

```javascript
$(".box").css("background-color", "blue");
```
Allows you to change the style of a given element

### .addClass();

```javascript
$("#myId").addClass( "yourClass" );

//multiple classes
$("#myId").addClass( "yourClass anotherClass" );

```
Allows you to append a class to a given element

### .removeClass();

```javascript
$("#myId").removeClass( "yourClass" );

//add and remove at the same time
$("#myId").addClass( "yourClass" ).removeClass( "anotherClass" );

```
Allows you to remove a class from a given element

### .html();

```javascript
$("#replace").html("<p>More information #1</p>");

```

Replaces a given tags html content

### .show() .hide();

```javascript

$("#clickBox").show();

$("#clickBox").hide();

```

### .toggle();

```javascript


$("#toggleBox").toggle(1000);

```
Display or hide the matched elements

### .click();

```javascript
$( "#target" ).click(function() {
  console.log(“hello”);
});
```

### .fadeOut() & .fadeIn()

```javascript
 $("#myDiv").fadeOut(1000);
```
Fades out in 1000 milliseconds.
