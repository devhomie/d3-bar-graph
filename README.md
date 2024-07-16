# Creating a Bar Graph | With D3.js
  - We'll be creating a bar graph that visualizes the frequency of characters
    in a text box.
    - The bar graph will update as new text is typed or pasted into the box.
    - Creating this visualization will aid in practicing data joins, teach
      new techniques like drawing axes to contextualize the data.

### Styling with CSS and Regular Expressions
 - Next we're going to better differentiate the types of characters, we'll give 
   different colors to the bars depending on whether they're lowercase letters,
   uppercase letters, numbers, or any orhter character.
 - To do this, we'll need a function that can distinguish between these types of
   characters.
    - The function will use **regular expressions**, which are a way of specifying
      patterns in strings of text and then determining if other strings match those
      patterns.
    - JavaScript has a regular expression literal syntax that is delimited by forward
      slashes.
       - For example, /hi/ is a regular expression literal that matches any string
         containing the sequence of characters 'hi'.
       - The 'hi' can occur anywhere in the string.
       - Narrowly define a regular expression's pattern by adding special characters,
         for example, a caret (^) at the start of an expressions indicates the character
         sequence should occur at the start of a string, so /^hi/ matches any string that
         starts with 'hi'.
       - Similarly, a dollar sign at the end of an expression indicates the character
         sequence should occur at the end of a string, so /hi$/ matches any string that
         ends with 'hi'.
       - To match a range of characters instead of a single character, use square brackets
         and a hyphen to describe the range.
          - For example, /[a-z]/ matches any lowercase character from a to z.