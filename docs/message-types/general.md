---
title: General
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---


import CustomisableImage from '@site/src/components/CustomisableImage';

import TextEditor from '@site/src/components/TextEditor';
import BrandName from '@site/src/components/BrandName';
import Tag from '@site/src/components/Tag';


# General

<BrandName type="name"/>'s communications services can use four different message types: SMS, Email, MMS, and Voice. Each of these message types has its own rules and properties. For example, an SMS message costs 'SMS Units', and an Email can be edited using HTML. The message creation process for each message type is also different. For example, creating an SMS message using <BrandName type="name"/> is very different to creating an Audio message for a call. It is recommended you read this General documentation first before you read the documentation for the specific message types.

---

## Message Composer

Every single message type has its own 'Message Composer'. This is where you create the actual content of the message you want to send. For example, this is where you create the audio clip to be sent in an Audio messsage call. Or, this is where you would type out your SMS message to be sent to a customer.

### Text Editor

Most of these message composers have some type of text editor. Whilst the specifics of this text editor differ slightly for each message type, they all share: text input, placeholders, and templates. Below is an example of one of these text editors.

<TextEditor class="auto-height" />

This text editor is often referred to as either the 'Message Content' of your message or the 'Message Text'. It just acts as a normal text box. You simply type the text content of your message into the text box. Then, when you send out your whole message, the recipient will receive the text you wrote in the box. 

### Placeholders

As you may have noticed above, the prompt in the text editor had some strange notation on its text like &#123;&#123;client_name&#125;&#125; and &#123;&#123;case_number&#125;&#125;. These are called placeholders. A placeholder is an indcator for where specific information will be inserted automatically. It's like leaving a blank space to be filled in with relevant details automatically. So for example, using &#123;&#123;client_name&#125;&#125; in a message to a client will automatically fill replace &#123;&#123;client_name&#125;&#125; in the message with the actual client's name.

However, this placeholder must have a predetermined value. For example, if you are sending a message in Chat with the &#123;&#123;client_name&#125;&#125; placeholder, but you have not specified what client_name is in your workspace's [Contact Attributes](../contacts/attributes.md), then the value will not be replaced.

Let's use the text editor prompt as an example:

"Hello &#123;&#123;client_name&#125;&#125;, would you like to discuss &#123;&#123;case_number&#125;&#125;?"

If client_name and case_number have been defined somewhere in the workspace - either in Contact Attributes or somewhere else - then the program will search for the registered client_name of the contact being sent the message and their registered case_number. The example client here has had client_name registered as 'John' and their case number as 'our new product'. So, when they receive the message, it will look like:

"Hello John, would you like to discuss our new product?"

:::note Note
Placeholders don't only have to be the properties of a message recipient. You will see that each features has its own compatability with different placeholders and properties. For example, it could be the agent's name, or a completely custom value that's set in a CSV file.
:::

### Templates

For each message type, you can also create a [Template](../templates/general). A template is a message scaffold. It is essentially a pre-made message that you can insert into most places in your workspace to save time typing out the same message multiple times. You can also include placeholders in these templates that can be filled in at their later use.


---

## Workspace Contacts

All of your messages need to be sent **by** something or someone. Thus, in your workspace, you can setup some contacts that you can use to send messages to your customers. For phone numbers, these are [Virtual Numbers](../channels/virtual-numbers.md) and [Sender IDs](../channels/sender-ids.md). For emails, these are [Emails](../channels/email.md). 

Then, when you are creating your message, you select one of these contacts. This will be the contact that the customers receive your message from.

