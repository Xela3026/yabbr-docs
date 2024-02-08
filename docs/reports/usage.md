---
title: Usage
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 6
---

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

# Usage

Here you can view a graphical summary of message usage. It is separated into each medium of messages - SMS, MMS, Email, Validation, and Voice. It is also separated by monthly usage. 

---

## Message-Type Navigation

Click on the message type that you would like to view the usage of. The navigation menu for message types is outlined below. SMS usage is currently selected.

![Usage Navigation](/img/report-usage-nav.png)

---

## Usage Summary

After selecting a message type, you will see a bar graph that represents the usage at different points during the month. The x-axis represents time and is divided into days of the month. The y-axis represents usage, usually measured in either 'Messages' or 'Units' (see [Message Mediums](../message-types/sms.md) documentation for an explanation of 'Units'). The total usage for the month is labelled in the top left of the graph. Finally, a legend for the bar graph is directly above the graph in the middle.

Below is an example usage summary for SMS. In this month, there were 12 messages total, and 14 total units. The blue columns represent the number of messages, and the red columns represent the number of units. On the 12th of January, there were 2 messages, and 4 units used. 

![Usage SMS Example](/img/report-usage-example.png)

Below is an annotated version (annotations are in green to avoid confusion with red bar graph):

![Usage SMS Example Annotation](/img/report-usage-annotation.png)

---

## Date Selection

Each month has its own usage summary. Navigate between the months using the <Tag colour="#FFFFFF" borderColour="#dadfe3" fontColour="#96989b">˂</Tag> button to go to the previous month and <Tag colour="#FFFFFF" borderColour="#dadfe3" fontColour="#96989b">˃</Tag> button to go the the next month. Select 'Use UTC' to use UTC timezone for the date selector. The selector is outlined in green below.

![Usage SMS Date Selector](/img/report-usage-date.png)

---

## Filters

Each usage record has particular properties. For example, some usage may come from campaigns, some from surveys. You can filter through these properties using the drop-down menus outlined below. 

![Usage SMS Filters](/img/report-usage-filters.png)

- **Products**: where the usage occurred. For example, an SMS may have been used in a campaign, in a survey, or just in general chat.
- **Numbers**: (only for Voice) which number was calling. For example, 'Demo 1' may have had 10 minutes of usage in January, whilst 'Demo 2' only had 3.
- **Types**: (only for Validation and Voice) the type of the communication device. Usage may be different across landline, mobile, and FLRN.


---

## Export

You can export usage summaries to a CSV file, but only the summary that meets the current filters will be exported. Clicking the <Tag colour="#ced4da" borderColour="#ced4da" fontColour="#414042">**⭳ Export**</Tag> will download the CSV file onto your device.
