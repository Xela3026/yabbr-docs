---
title: Email
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tag from '@site/src/components/Tag';

import TextEditor from '@site/src/components/TextEditor';

# Email

Emails are slightly different. They include additional features like [attachments](#attachments) and a [subject](#subject). However, the text editor has some differences like the [Rich-Text Editor](#rich-text-editor) and [Email HTML](#email-html).

## Message

### Subject

Firstly, for an email, you are required to add a subject. Simply enter the text you want to appear as the subject in the outlined text box below.

![Email Subject](/img/campaign-email-subject.png)

### Email HTML

For the actual content of the email, you can simply use the 'Rich-Text Editor' provided. 

The Email text editor is similar to the General text editor, just with some extra functionality like in Microsoft Word with bolding, font size etc. This is called the Rich-Text Editor:

![Rich Text Editor](/img/message-types-rich-text.png)

Alternatively, you can create your email using HTML by toggling the switch above the text editor as outlined below. 

![Enable HTML Editing](/img/campaign-email-html.png)

After enabling this option, use the same text box to create your message. The content entered in here will then be interpreted as HTML. Toggle the above switch again to disable this option.

### Links

To imbed links into the email, you cannot simply type out the link in the rich text editor or the HTML editor.

#### Rich Text Editor

To imbed a link in the rich text editor, you must first highlight the text that you want to turn into the clickable link. Then, click the button highlighted below (or use Ctrl+K) to bring up a small menu. Enter the full link into the text box that appears and click 'Save' to imbed this link onto the word you highlighted.

![Link Creation](/img/campaign-email-links.png)

The example above will direct users to google.com when they click on the word 'link'.

#### HTML Editor

You can simply imbed your links the same as you would with any other link in HTML as exemplified below.

```HTML title="Example HTML Link"
<a href="google.com">google.com</a>

<!-- or -->

<a href="google.com">Google</a>

```


### Attachments

In a standard email, you can attach certain files to be sent with the email. Thus, you can upload files that will be sent with your email by clicking the button outlined below and selecting your desired files.

![Add Attachments to Email](/img/campaign-email-attachments.png)

Remove an attachment by clicking the bin icon on the right of the attachment name.

![Delete Attachments from Email](/img/campaign-delete-attachment.png)



