[comment]: <> (placeholders, templates, message type applications, where to find each message type. Also: here in MMS and Audio Text to Speech you need to include extra message composer documentation because they don't have their own templates section)

# General

## Text Editor

This is used in every single one - SMS, MMS, Email, Voice Text to Speech

Each version just has extra considerations. Email - Email HTML. Voice - 'say as' + audio composer. SMS & MMS - units.

You can also put placeholders in the text editor

### Placeholders

A placeholder is simply a marker used to reserve space or indicate where specific information will be inserted later on. It's like leaving a blank space to be filled in with relevant details at a later time.

### Templates

Placeholders are created in a template, and then filled in when the template is used.





[comment]: <> (just gonna leave this here.)

#### Message Text

This text box appears in all template types. This is the actual content of your message scaffold. You can type both normal text, but also placeholders. Placeholders are like variables. When you use your template in messages elsewhere in your workspace, you can replace these placeholders with the necessary relevant information to make the template a fully complete message. To create a placeholder, enclose the name of the placeholder in double parentheses. For example, a placeholder called 'client_name' would look like &#123;&#123;client_name&#125;&#125;. Below is a full example Campaigns Template with Message Text outlined in red.

![Template Message Text](/img/template-message-text.png)