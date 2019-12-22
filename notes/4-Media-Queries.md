# Media Queries

CSS has built in function that let you decide what CSS to display. There are 2 ways to activate responsive styles. You can select styles to load within the style tag or you can use link tags to load CSS documents. Breakpoints are how the browser chooses to load css to modify your page.

### Breakpoints

Breakpoints can load css by:

* screen
* print
* dimension
* browser type

[Breakpoints](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Responsive_Web_Design_for_Desktop%2C_Notebook%2C_Tablet_and_Mobile_Phone.png/800px-Responsive_Web_Design_for_Desktop%2C_Notebook%2C_Tablet_and_Mobile_Phone.png)

### LOADING DIFFERENT CSS DOCUMENTS

Here was are using the media variable in the link tag allowing you to load different css documents depending on size.

```HTML

<!DOCTYPE html>
<html>
  <head>
    <title>Basic responsive site</title>

    <!-- Media query for narrow browser width -->
    <link rel="stylesheet" media="only screen and (max-width: 480px)" href="css/mobile.css">

    <!-- Media query for full browser width -->
    <link rel="stylesheet" media="only screen and (min-width: 961px)" href="css/desktop.css">

    <!-- Prevent smartphones from scaling pages down -->
    <meta name="viewport" content="initial-scale=1">
  </head>
  <body>
    <div class="container">

        <section class="col1"></section>
        <section class="col2"></section>
        <section class="col3"></section>

    </div>
  </body>
</html>

```

### MEDIA QUERY IN STYLE TAG

Here we use the @media CSS variable to change a CSS tag. It is always useful to have a default tag style. In our case our default state will be a background of blue. When the website is larger then 480px it turns orange, if it is under 400px it is green. Between 480px and 400px it is blue.


```HTML

<!DOCTYPE html>
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
