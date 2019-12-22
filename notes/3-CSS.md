# CSS

[CSS Slides](https://docs.google.com/presentation/d/1uGclhzfMkr0daXyP56A07KdOZzSQPDhWK29lBRQZOKM/edit?usp=sharing)

[CSS Reference](https://css-tricks.com/almanac/)

[CSS Snippets](https://css-tricks.com/snippets/css/)

[&#x1f453; How CSS Works](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

[Web Colors](WebColors)


CSS works by using selectors. Selectors are the ways you target elements on the page.

### The Declaration Block

Basic Structure

![Basic CSS Declaration](https://raw.githubusercontent.com/UMInteractive/Weblab/master/images/basic-structure.png)

Multiple Selectors

![Multiple selectors](https://raw.githubusercontent.com/UMInteractive/Weblab/master/images/multiple-selectors.png)

A Declaration

![CSS Declaration](https://raw.githubusercontent.com/UMInteractive/Weblab/master/images/declaration.png)

Declaration Blocks

![CSS Declaration Blocks](https://raw.githubusercontent.com/UMInteractive/Weblab/master/images/declaration-blocks.png)

## Selectors

### Element Selectors

Element selectors can be applied to HTML elements (tags) in your document.

Here is some HTML:

```html
<p>all the paragraphs are orange</p>
<div>all the divs must be green</div>
```

Here is some CSS:

```css
p {
   color: orange;
}
div {
   color: green;
}
```

#### Common CSS Properties

For a list of more properties visit the [mozilla css reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

###### Text

* [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
* [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
* [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
* [text-declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
* [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
* [list-styles](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)
* [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
* [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
* [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)



###### Grid and Position

* [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
* [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
* [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
* [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
* [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
* [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
* [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
* [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
* [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)


## CSS can be written using three methods:

### External Stylesheet

An external stylesheet is when you have your CSS written in a separate file with a .css extension, and you reference it from an HTML <link> element. This is the preferred method of loading your styles.

```<link rel="stylesheet" type="text/css" href="mystyle.css">```

### Internal Stylesheet (AVOID)

An internal stylesheet is where you don't have an external CSS file, but instead place your CSS inside a <style> element, contained inside the HTML <head>. Use this only in single page sites or when you want to overwrite a linked stylesheet called before. The HTML would look like this:

```html
<head>
 <style>
  p{
   color: green;
  }

 </style>

<head>
```

### Inline Style (AVOID)

Inline styles are CSS declarations that affect one element only, contained within a style attribute:

```
<h1 style="color:blue;margin-left:30px;">This is a heading.</h1>
```

## CSS Basics

### Box Model

![Box Model](https://mdn.mozillademos.org/files/8685/boxmodel\-(3).png)

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

## LOADING AN EXTERNAL FONT

If you want custom fonts on your page you will need to add a custom font to your design. The easiest way to do this is with [Google Fonts](https://fonts.google.com/)

### Step 1: Select Fonts
Go to [Google Fonts](https://fonts.google.com/) and select one or more fonts.  

![Google fonts](https://github.com/UMInteractive/Weblab/blob/master/images/gfonts.png?raw=true)

You can select by clicking on the red "+"sign above each font.

![Google font select](https://github.com/UMInteractive/Weblab/blob/master/images/gfonts-select.png?raw=true)

### Step 2: Copy code
Once you selected the fonts you need click on the bottom bar to view your library.

![Font bar](https://github.com/UMInteractive/Weblab/blob/master/images/gfonts-bar.png?raw=true)

This panel will provide you with all the code you need to embed custom fonts.

![Google Fonts Panel](https://github.com/UMInteractive/Weblab/blob/master/images/gfonts-panel.png?raw=true)

### Step 3: Paste Code

Here is an example of a google Font used in a web page:

```HTML
<html>
  <head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family= Lobster">
    <style>
      body {
        font-family: 'Lobster', cursive;
        font-size: 48px;
      }
    </style>
  </head>
  <body>
    <div>Love my Web Lab class!</div>
  </body>
</html>
```

The end result would look like:

![Web Lab Love](https://github.com/UMInteractive/Weblab/blob/master/images/loveweblab.png?raw=true)

### Here's a breakdown:

1) Add a stylesheet link to request the desired web font(s)

```HTML
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Font+Name">
```

2) Style an element with the requested web font, either in a stylesheet:

```CSS
.css-selector {
  font-family: 'Font Name', serif;
}
```

Complete documentation on how to embed and customize fonts can be found [here](https://developers.google.com/fonts/docs/getting_started).

### IMPORT FROM ANOTHER CSS DOCUMENT

```CSS
@import "desktop.css";
```
