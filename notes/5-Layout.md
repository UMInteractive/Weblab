### DISPLAY:INLINE-BLOCK VS FLOAT

#### Display

Using inline-block it only affects the elements the display property is applied to.

* allow other elements to sit to their left and right
* respect top & bottom margins and padding
* respect height and width

## Grid

http://learncssgrid.com/

http://cssgrid.io

## Grid properties

display: grid;

This setups the container as a grid element.

[grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

##### grid-template-areas: "header" "main" "footer";

This labels 3 rows. Each quotes represents a row, then you name each column.

##### grid-template-areas: "col1 col2";

This labels a one rows columns.

##### grid-template-rows:   1fr 1fr 1fr;
##### grid-template-columns:  960px;

You can setup the sizes of rows and columns using 1fr (frame) or pixel dimensions. If you add a space between dimensions it sets the amounts of rows or columns.
