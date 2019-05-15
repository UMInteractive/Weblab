

[Media Query Web Slides](https://docs.google.com/presentation/d/18lylN9PDPGNQlfykhu9IDg4vQbw9f_d3cQ5I1x9KrxQ/edit?usp=sharing)

CSS had built in function that let you decide what CSS to display. There are 2 ways to activate responsive styles. You can select styles to load within the style tag or you can use link tags to load CSS documents

```HTML

<!DOCTYPE html><!--The doctype sets the -->
<html>
  <head>
    <title>This is my first webpage!</title>
    <style>
      body{
        background-color: blue;
        font-family: sans-serif;
        color: #ffffff;
        font-size: 20px;
      }
      h1{
        color: pink;
      }
      @media only screen and (min-width: 480px) {
        body {background-color: orange;}
      }

      @media only screen and (max-width: 400px) {
        body {background-color: green;}
      }

    </style>

  </head>
  <body>
    <h1>This is a header 1 tag</h1>

  </body>
</html>

```

Here we use the @media CSS variable to change a CSS tag. It is always useful to have a default tag style. In our case our default state will be a background of blue. When the website is larger then 480px it turns orange, if it is under 400px it is green. Between 480px and 400px it is blue.

### LOADING DIFFERENT CSS DOCUMENTS

Here was are using the media variable in the link tag allowing you to load different css documents depending on size.

```HTML

<!DOCTYPE html>

<html>


<head>
<title>Basic responsive site</title>

<!-- Media query for narrow browser width -->
<link rel="stylesheet" media="only screen and (max-width: 480px)" href="css/mobile.css">

<!-- Media query for medium browser width -->
<link rel="stylesheet" media="only screen and (min-width: 481px) and (max-width: 960px)" href="css/tablet.css">

<!-- Media query for full browser width -->
<link rel="stylesheet" media="only screen and (min-width: 961px)" href="css/desktop.css">

<!-- Prevent smartphones from scaling pages down -->
<meta name="viewport" content="initial-scale=1">

</head>


<body>
<div id="container">

    <div id="col1"></div>
    <div id="col2"></div>
    <div id="col3"></div>

    <div class="clear"></div>

</div>


</body>



</html>

```


### IMPORT FROM ANOTHER CSS DOCUMENT

```CSS
@import "desktop.css";
```
