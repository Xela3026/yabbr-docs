---
title: Chat Stats
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import BrandName from '@site/src/components/BrandName';
import Tag from '@site/src/components/Tag';
import CustomisableImage from '@site/src/components/CustomisableImage';

# Chat Stats

Here you can view a graphical summary of Chat metrics. It is separated into monthly metrics.

---

## Metrics Summary

When you first open Chat Stats, you will see two graphs: a scatter plot for duration metrics, and a line graph for quantity metrics. Each graph's x-axis represents time, and is divided into days of the month. Thus, the graphs measure the metrics at different points during the month.

---

### Durations

This metric measures the time spent in each stage of a chat: response time (red), wait time (orange), and session duration (green). 

- **Response Time**: the time it takes for an agent to respond to a customer's message
- **Wait Time**: the time it takes for a customer to get the first response from an agent. This is usually the same as the customers' time spent in the queue.
- **Session Duration**: the length of a conversation between an agent and customer from beginning to end.

Each metric is measured as an average for each day. Here, the y-axis represents time in seconds. The total of each metric for the whole month is labelled in the top left of the graph. Finally, a legend for the scatter plot is directly above the plot in the middle. 

Below is an example duration summary. In this month, there were 12 messages total, and 14 total units. On the 17th of August, the average wait time was 1,121,541 seconds.

<CustomisableImage src="/img/report-stats-example.png" alt="Stats Duration Example"/>

:::tip Tip
Hovering over a point on the plot will show the exact number of seconds.
:::

Below is an annotated version (annotations are in blue to avoid confusion with other points):

<CustomisableImage src="/img/report-stats-example-annotation.png" alt="Stats Duration Example Annotation"/>



---

### Quantity

By scrolling down, you will see the next graphical summary of metrics. This one is a line graph that represents the quantity of sessions for each day of the month (A session is a small conversation between an agent and a customer). Here, the y-axis represents number of sessions. The total session quantity for the month can be found in the above graph in [Duration](#durations).

Below is an example session-quantity summary. On the 17th of August, there was 1 session.

<CustomisableImage src="/img/report-stats-quantity-example.png" alt="Stats Duration Example" width="550"/>

Below is an annotated version (annotations are in red to avoid confusion with green line):

<CustomisableImage src="/img/report-stats-quantity-example-annotation.png" alt="Stats Duration Example Annotation" width="550"/>

---

### Extra Functionality

By clicking on the name of a data set in the key (eg 'Average Response Time' or 'Session Count'), you can remove a data set from the graph. In the below example, the 'Average Wait Time' has been removed.

<CustomisableImage src="/img/report-stats-remove.png" alt="Remove Data From Graph" width="550"/>

---

## Date Selection

Each month has its own chat metrics. Navigate between the months using the <Tag colour="#FFFFFF" borderColour="#dadfe3" fontColour="#96989b">˂</Tag> button to go to the previous month and <Tag colour="#FFFFFF" borderColour="#dadfe3" fontColour="#96989b">˃</Tag> button to go the the next month. The selector is outlined in blue below.

<CustomisableImage src="/img/report-stats-date.png" alt="Metrics Date Selector"/>

---

## Filters

Each chat metric has particular properties. For example, some chats may be on SMS, or some may be with a particular agent. You can filter through these properties using the drop-down menus outlined below. Then, it will only show the chat metrics for chats that statisfy that filter.

<CustomisableImage src="/img/report-stats-filters.png" alt="Stats Filters" width="600"/>

- **Types**: the medium that the chat was using. The type can either be 'Web' or 'SMS'.
- **Conclusions**: the chat tag associated with the session.
- **Users**: the agent that was communicating with the customer during the session.


