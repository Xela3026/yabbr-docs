---
title: Transcripts
sidebar_position: 12
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';

# Transcripts

For the purposes of the documentation, the person sending outbound messages using Yabbr will be referred to as an ‘agent’, and the recipients of these messages will be called ‘customers’.

Transcripts are records of conversations you have with customers through either [Yabbr Chat](./yabbr-chat/chat-settings.md#chat-tags) or responses to [Campaigns](./campaigns/general.md). An agent will start a conversation with a customer with an outbound message, and when the agent decides to end the conversation in the chat, a transcript is created for the conversation. The whole duration of that conversation then is called a ‘session’. Everything recorded by the transcript will be stored in one of the columns outlined below:

<CustomisableImage src="/img/transcripts-columns.png" alt="Transcript Column Names" width="800" />

- **Date**: the start time of the session in the UTC timezone.
- **Contact**: the contact information of the customer.
- **Engaging Via**: the contact that the agent(s) used to talk to the customer.
- **Agents**: all of the agents that were present at any point throughout the session. 
- **Conclusions**: all of the [Chat Tags](./yabbr-chat/chat-settings.md#chat-tags) associated with the session.
- **Messages**: the number of messages in the session.
- **Type**: the medium of conversation (eg email, MMS, SMS).

---

## Transcript Menu
When you click on a transcript here, it will open an extended menu of that transcript. The top of the page will have the message type, the start time of the session, and the number of the customer. The main view of the transcript will display every message sent during the session. Messages sent by the agent will be in blue on the right, and messages sent by the customer will be in grey on the left. The below transcript has recorded a session between an agent and the number +61 400 000 000. The session started at 3/2/24 at 4:29am, and only one message was said in the session: the agent said "Hello! This is an example message for Documentation!"

<CustomisableImage src="/img/transcript-annotation.png" alt="Transcript Expanded View Annotation" width="500" />

Obviously, you can have multiple sessions with a single customer. You can navigate between transcripts of sessions with the same customer using the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Previous Interaction</Tag> and <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Next Interaction</Tag> buttons.

Finally, in the top right of the menu, clicking <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Transcript ˅</Tag> and then 'Print to PDF' will open a menu where you can print the whole transcript as a PDF.

---

## Transcript Navigation

By modifying various settings, you can locate any specific transcript you desire.

---

### Filters

To apply any of the filters below, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">🔍 Search</Tag> button.


#### Properties

Each transcript has certain properties like the customer's contact, and the type of message. You can sort through these properties using the filters. For example, if you only want to view transcripts of SMS messages, you would select 'SMS' in the 'Chat Type' filter. The property filters are outlined below.

<CustomisableImage src="/img/transcript-filters.png" alt="Transcript Filters" width="800" />


- **Contact**: the contact information of the customer. 
- **Agents**: the agent(s) that participated in the session.
- **Chat Tags**: the chat tags associated with the session.
- **Type**: the medium of conversation (eg email, MMS, SMS).


#### Dates

Each session has a specific start time recorded by the transcript. You can sort through the transcripts by when they occur. For example, if you only want to view the transcripts of sessions from New Years Day 2024, you would select the date 1/1/24. The date filter is outlined in red below. 

<CustomisableImage src="/img/transcript-date.png" alt="Transcript Date Selection" />


Additionally, by clicking the button outlined in black above, you can expand the date filter to a date range. Selecting this option will reveal the selection of two dates as outlined in red below. The first date selection is for the start of the date range. The second date selection is for the end of the date range. You can also specify a time within the date to filter with. Applying this date filter will show you any transcripts that occur between the two selected dates. 

<CustomisableImage src="/img/transcript-date-expand.png" alt="Transcript Date Selection Expanded" />


:::tip Tip
Clicking the button outlined in black again will revert the date filter to a single date selection.
:::


---

### General Navigation

After doing a search for transcripts, you should get several results. Sometimes there are too many results to display on one screen. Thus, Yabbr will automaticaly separate the transcripts into pages. You can specify how many transcripts appear on each page with the drop-down menu outlined below.

<CustomisableImage src="/img/transcript-pages.png" alt="Transcript Pages" />

You can navigate between pages using the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Previous</Tag> and <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Next</Tag> buttons.

---

## Export

You can export transcripts to a different format, but only those that meet the current filters will be exported. Clicking the <Tag colour="#ced4da" borderColour="#ced4da" fontColour="#414042">**⭳ Exports**</Tag> will bring up a menu like the one below where you specify how you want to export the transcripts' information. 

<CustomisableImage src="/img/transcript-export.png" alt="Transcript Export Menu" />


---

### Export Options

- **Export Destination**: select where you want to export the information to. 'Clipboard' will copy all the information to your clipboard. 'CSV' will download the information as a csv file to your device.
- **Properties to Include**: select everything recorded by the transcript that you wish to include in the export. 'Metadata' is the properties of the transcript -> the start date, the message type, the contact of the customer, and the contact of the agent. 'Transcript' is the actual conversation -> everything said by either the customer or the agent. 'Contact Attributes' are the contact attributes associated with the customer's contact in [Yabbr Chat](./yabbr-chat/chat-settings.md#chat-tags).

Finally to finish the export, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Export</Tag>.

