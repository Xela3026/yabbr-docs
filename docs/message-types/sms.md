---
title: SMS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5

---

<link rel="stylesheet" type="text/css" href="/src/components/css/custom.css" />


[comment]: <> (sms message - unicode, message)

import UnitCounter from '@site/src/components/UnitCounter';

import TextEditor from '@site/src/components/TextEditor';

export const Tag = ({children, colour, borderColour, fontColour}) => (
<span
style={{
    backgroundColor: colour,
    borderRadius: '4px',
    color: fontColour,
    padding: '0.1rem 0.5rem',
    whiteSpace: 'nowrap',
    border: '0.5px solid',
    borderColor: borderColour,
    }}>
{children}
</span>
);



# SMS

The SMS Message type only includes the text editor and its SMS Units. It is recommended you read the [General](./general.md) documentation before this one.

## Message Composer

The Message Composer for SMS does not have many specific features. The main Message Content is the same as the one in General, except it just has an extra property called [SMS Units](#sms-units).

### Unicode Characters

A Unicode character is a character that you can't type directly from your keyboard, like emojis (😊❤️✨➡️) or special symbols (▧◁◆◓).

Unicode characters are known as non GSM characters and increase the number of SMS Units that your message costs. Read more about SMS Units and their importance [here](#sms-units). 

Above your SMS Message Content, you will see:

<input type="checkbox"/> **Replace Unicode Characters**

Checking this box will replace all of the unicode characters in your message into '#'. This will reduce the SMS Unit cost of your message. Test it out with the [Unit Calculator](#unit-calculator).

### Message Content

The Message Content text editor for SMS is just the one seen in General:

<TextEditor/>

## SMS Units

As you may notice when creating your SMS message, there is a counter in the bottom right for how many characters your message has, but also how many 'SMS Units' it costs. 


<img src="/img/message-types-sms-units.png" alt="SMS Units" width="450"/>

Yabbr charges you per SMS unit, not per message. Thus, it is ideal to reduce your SMS Usage.
A message with more SMS units costs more money to send, so it is ideal to reduce them. They are calculated based on GSM characters. A table of all GSM characters is provided below. Most common characters are GSM characters. However, non-GSM characters include [unicode characters](#unicode-characters) and emojis.

<img src="/img/gsm.png" alt="All GSM Characters" width="400"/>


If a message consists only of GSM characters, then a unit will consist of 160 characters. If there is more than one unit, then each unit will consist of 153 characters.

If a message contains any non-GSM characters, then a unit will consist of 70 charactres. If there is more than one unit, then each unit will consist of 67 characters. 

Yabbr supports messages up to 10 units. That means a character cap of 1530 for all GSM characters or 670 for not all GSM characters.

Use the unit calculator provided below to test out unit calculations and your SMS messages.

### Unit Calculator

<UnitCounter/>
