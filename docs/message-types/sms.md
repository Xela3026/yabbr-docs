---
title: SMS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

[comment]: <> (sms message - unicode, message)

import UnitCounter from '@site/src/components/UnitCounter';

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

SMS messages are one of the most common message types.

## Message Composer

### Unicode Characters

### Message Content

## SMS Units

As you may notice when creating your text message, there is a counter in the bottom right for how many characters your message has, but also how many 'SMS Units' it costs. 

![SMS Units](/img/message-types-sms-units.png)

A message with more SMS units costs more money to send, so it is ideal to reduce them. They are calculated based on GSM characters. A table of all GSM characters is provided below. Most common characters are GSM characters. However, non-GSM characters include emojis, unicode characters, and symbols like ~ and ^.

![All GSM Characters](/img/gsm.png)

If a message consists only of GSM characters, then a unit will consist of 160 characters. If there is more than one unit, then each unit will consist of 153 characters.

If a message contains any non-GSM characters, then a unit will consist of 70 charactres. If there is more than one unit, then each unit will consist of 67 characters. 

Yabbr supports messages up to 10 units. That means a character cap of 1530 for all GSM characters or 670 for not all GSM characters.

Use the unit counter provided below to test out unit calculations and your SMS messages.

<UnitCounter/>