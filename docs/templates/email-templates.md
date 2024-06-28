---
title: Email
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import BrandName from '@site/src/components/BrandName';
import Tag from '@site/src/components/Tag';

# Email Templates

Email templates are templates that can be used in any feature where you are sending an email (eg Campaigns, Chat quick replies). It is recommended you read the [General](./general) template documentation before this one.


## Creation

### Product

There are four different types of Email templates you can create. Select the desired type using the 'Product' drop-down outlined below.

<CustomisableImage src="/img/template-email-product.png" alt="Email Template Products" width="600"/>

- **Chat**: used for Email quick replies in Chat. This template allows you to include 'Keyword Tags' so that this quick reply can be automaticallly suggested to an agent in Chat when certain words appear in the chat. You can also specify BCC recipients.
- **Express Message**: used for Email Express Messages. This template allows you to specify a 'Category' where the template will be stored in Express Message. You can also specify the sender of the message template, any BCC recipients, and whether the message sent using the template is recorded by a transcript.
- **Email Signatures**: this is a signature that can appear at the end of emails sent by [email aliases](../channels/email.md) registered in your workspace.
- **Campaigns**: used for Email Campaigns.


Selecting any option will bring up the following options for your Email Template:

<CustomisableImage src="/img/template-email-settings.png" alt="Email Template Options" width="500"/>

:::note Note
Some product types may have extra features that are not shown here.
:::

### Default Subject

This is will be the subject of your email. This subject can be modified when the template is used later, but this will be the subject's default value.

### Edit Email Template in HTML

See the [Email Message Type](../message-types/emails.md) documentation for an explanation of Email HTML.

### Message Text

This is the actual content of your message. This is the message that will be sent when you use this template. It is an Email message composer and a rich text editor. For more details about how this [message composer](../message-types/emails.md#message) and [placeholders](../message-types/general#placeholders), see the documentation for the [Email Message Type](../message-types/emails.md) and [General Message Types](../message-types/general).

### Merge Fields

These are placeholders that are built into your workspace already. They are properties of the 'Product' you selected. For example, a built-in Campaign placeholder would be the opt-out link. A built-in Chat placeholder would be one of your workspace's [Contact Attributes](../contacts/attributes.md). Since these placeholders are already defined for the 'Product' type you selected, you will not need to specify their value when you use the template.

### Enable Template

This togglable button will enable/disable the template's functionality in your workspace. If the button is on and green, the template will appear elsewhere in your workspace for use. If it is off and grey, the template will not appear elsewhere in your workspace for use.

Finally, to add the template to the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.


### Product-Specific Features

#### Chat

##### BCC Recipient

Your emails can also include a BCC. You may want to include a BCC in your emails so you can ensure that the email sent without problems. Enter the email address of the desired BCC recipient of this email template in the 'BCC Recipient' text box.

##### Keyword Tags

Chat has an extra feature called 'Keyword Tags' outlined below.

<CustomisableImage src="/img/template-email-keyword.png" alt="Chat Template Options" width="500"/>


Chat has a feature where it will auto-suggest quick replies to an agent. If a customer says a trigger word or trigger words, then the agent will automatically be suggested a response. The trigger word is this keyword tag, and the suggested response is this messaging template. 

Input your desired keyword tag into this text box. When a customer sends a message to an agent in Chat that contains this keyword tag, this messaging template will be suggested to the agent as a quick reply.

[comment]: <> (I do not really know how this feature works, I'm just guessing)



#### Express Message

Express Messages have a few extra specifications. Since they are designed to be quickly sent to a customer with as little input as possible, all of the configuration has to be done prior in the template itself. This includes the location of the message template, the BCC recipient of the email, and whether a transcript is created.

These extra options are outlined below:

<CustomisableImage src="/img/template-email-express.png" alt="Express Email Template Options" width="500"/>

##### Categories

In Express Message, all of the message templates are stored in 'folders'. A message template can also appear in multiple folders. For example a message template that talks about a new product may appear in a folder called 'Advertisements'. These folders are the categories of your Express Message.

To store the message template in the correct Express Message location:
1. Select a category from the drop-down menu. The 'Home' category will not store the template in a folder and the template will just be displayed by itself oustide any folder.
2. Click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button next to the drop-down menu to add this category to the template.
3. Repeat this process for all the categories you want this message template to appear under.



##### Off the Record

Sending an Express Message will create a [Transcript](../transcripts.md) of the message. You can disable this feature by enabling 'Off the Record'.

<CustomisableImage src="/img/template-message-express-record.png" alt="Express Message Template Transcript Options" width="500"/>

### Email Signature

Email Signature Email Tempaltes have no specific features.

### Campaigns

Campaign Email Tempaltes have no specific features.







