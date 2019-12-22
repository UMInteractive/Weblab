### DISPLAY:INLINE-BLOCK VS FLOAT

#### Display

Using inline-block it only affects the elements the display property is applied to.

* allow other elements to sit to their left and right
* respect top & bottom margins and padding
* respect height and width

## Grid

Allows you to layout sections of your page. CSS grid looks at your content containers and places them in rows and columns you designate through a grid template. When a parent is set as a grid element, it counts the number of children and places them in order in the rows and columns.

#### [Grid Example](https://codepen.io/uminteractive/pen/abzWyvV)

![Grid](https://github.com/UMInteractive/Weblab/blob/master/images/grid.jpg)

```HTML
    <div class="grid1">
      <section>Grid 1 Section 1</section>
      <section>Grid 1 Section 2</section>
      <section>Grid 1 Section 3</section>     
    </div>

    <div class="grid2">
      <section>Grid 2 Section 1</section>
      <section>Grid 2 Section 2</section>
      <section>Grid 2 Section 3</section>     
    </div>

```

```CSS

.grid1{
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 200px 200px 200px;
}

.grid2{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

section{
  border-width: 1px;
  border-style: solid;
}
```

### Grid properties

display: grid;

This setups the container as a grid element.

### Grid Sizing

* px - Sets the exact pixel dimensions of your grid column or row
* fr - The fr looks at the size of your content and will determine the column or row based on that.

You can setup the sizes of rows and columns using 1fr (frame) or pixel dimensions. If you add a space between dimensions it sets the amounts of rows or columns.

##### grid-template-rows:
Determines the amount of rows your grid will have.

##### grid-template-columns:
Determines the amount of columns

##### grid-template-areas: "header" "main" "footer";

[grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

This labels 3 rows. Each quotes represents a row, then you name each column.

##### grid-template-areas: "col1 col2";

This labels a one rows columns.

### Grid Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

http://learncssgrid.com/

http://cssgrid.io
