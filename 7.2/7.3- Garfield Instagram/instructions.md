 

## 06.3 Input.val() Practice: Instagram

1. **Create an** `<input>` **tag and give it a class on Line 26**
2. **Create a click handler for** **`button`** **in JavaScript.**
3. **Inside your click handler, declare a variable called** **_message_** **to hold the value of input.**
4. **Select the** `<input>`**'s class in the click handler, and then get the value using** **`.val()`. Store this value in your** **_message_** **variable.**
- Remember, you can use `**console**.log` to double check that everything is working properly! `**console**.log(**input**)`
1. **Display your input to the screen by selecting the** **`div`** **with the class** **_comments_** **and using .text() to attach your message!**
2. Now change .text() to .append() and see what happens
3. **Add style to the comment by adding a new** `<div>` **for each new comment inside the .append()**
- You can do this by adding the code after // inside your .append()
- ex: 📷

**BONUS:** Add another line of code in your click handler that will empty the `<input>` value so that the text is no longer there after you click on the button. ex: `$("input").val("")`