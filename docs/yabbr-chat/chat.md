---
title: Chat
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
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

# Chat

Chat is where you handle communications with customers. When a customer contacts you, they will be added to the queue in this Chat service, and will then need to wait for an agent to contact them and begin a conversation.

In the chat, you can take a customer out of the queue to start a conversation with them. Then once you end the conversation or leave the page, the whole conversation will be recorded as session. You can add notes or tags on the outcome of the session or the topic of conversation (eg Dispute, No resolution, Transferred).

The documentation for Yabbr Chat will be separated into the three main sections as they appear on the screen: the left sidebar, the main middle section, and the right sidebar.


## Left Sidebar

Below is a screenshot of the left sidebar.

<img src="/img/chat-left-sidebar.png" alt="Chat Left Sidebar" width="336"/>

### Queue

When a customer contacts one of your registered company contacts, they will be put into a queue whilst they await contact from one of the company's agents. To pull a customer out of the queue to begin a conversation with them, simply click on the category of the queue you wish to pull from. 

The queue works on a 'first come first served' basis. Thus, you cannot choose which contact you pull from the queue. When you pull someone from a queue, it will always be the person who has been waiting in the queue for the longest - the first person in the queue.

Clicking on a queue and pulling a customer out will move them to the 'Active' section on the left sidebar.

Below is an example of what this queue might look like:


<img src="/img/chat-queue.png" alt="Chat Queue" width="336"/>

- **Next Waiting**: will pull the absolute first person; the one person who has been waiting the longest in any category. 
- **General**: this is a compiled queue of all the message mediums. In the above image, there are 5 in the General queue because there are 4 in the SMS queue and 1 in the Email queue, and 4 + 1 = 5.

All other queue types that appear are for different message mediums: SMS, MMS, Email, Voice, and Web.

:::info Information
The queue for MMS and Web is not pictured above.
:::

### New Chat

To start a new chat with any customer irregardless of queues, click on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">🗪 New Chat</Tag> button outlined below.

<img src="/img/chat-new-chat.png" alt="New Chat Button" width="336"/>

This will bring up a small menu like the one below.

![New Chat Menu](/img/chat-new-chat-menu.png)

- **Message Type**: the message medium the new chat will start in. This can either be 'SMS' or 'Email'. Select an option from the drop-down menu.
- **From**: the Virtual Number or Email that the agent will contact the customer through. 
- **Recipient**: the contact of the customer you want to start a chat with.

### Active Chats

When you pull a customer from the queue, or start a new chat with a customer, they will appear under the "Active Chats" display outlined below. Each customer is designated their own chat with you - the agent. The chat you are currently in is highlighted blue. The rest of the active chats that you are not currently in are grey. The contact of the customer is listed at the top of the chat name. The contact that the agent is using to talk to the customer is listed at the bottom of the chat name.

<img src="/img/chat-active-chats.png" alt="Active Chats" width="336"/>

Clicking the ↦ button (outlined below) on one of these active chats will [Conclude the Session](#concluding-a-session).
Clicking the 📌 button when hovering over an active chat (as outlined below) will move the chat to a 'Pinned' section that appears above the 'Active Chats'.

<img src="/img/chat-active-chats-annotation.png" alt="Active Chats Actions Annotation" width="336"/>

**Example Pinned Chat**

<img src="/img/chat-pinned.png" alt="Pinned Chats" width="336"/>


### Bulk Actions

If you have several 'Active Chats', it can be tedious to individually conclude each one and add the relevant chat tags and notes for each session. 'Bulk Actions' allows you to conclude several sessions/chats at once. 

**To use bulk actions:**
1. Click the hamburger icon outlined below. This will enter you into 'selection mode'. Exit selection mode at any time by clicking the hamburger icon again. 
2. Select all the chats you want to apply the action to. Do this by clicking the round green circle that appears on the left of the chat in selection mode. In the example below, 61400000000 has been selected. Unselect a chat at any time by clicking the round green circle again.
3. Select the action you wish to perform on all selected chats using the drop-down menu outlined below. Currently, the only action supported is 'Conclude'.

<img src="/img/chat-bulk-actions.png" alt="Bulk Actions Annotation" width="336"/>


### Filters

Your 'Active Chats' displays all of the customers that you have an active session with - this is everyone you are currently talking to. If you have multiple session running concurrently, the active chats display might get a bit crowded. The search filter allows you to sort through all of the chats in 'Active Chats'. You just need to type in any text into the filter box outlined below. 

<img src="/img/chat-filter.png" alt="Chat Filter" width="336"/>

Then, only the chats that have this text somewhere in its name (either in the customer contact or the agent contact) will be displayed. An example is shown below. "Demo 3" has been entered into the search filter. Then, only the chat with "Demo 3" in its name (here it is in the agent's contact name) appears.


<img src="/img/chat-filter-example.png" alt="Chat Filter Example" width="336"/>

### Group By

If you have multiple session running concurrnently with different customers, the 'Active Chats' display can be hard to navigate and find the right customer. Using the 'Group By' functionality, you can separate the 'Active Chats' display into multiple sections or 'groups'. The chats are divided into different groups based on different properties they have. You can select which property you want to group by using the drop-down menu outlined below.

<img src="/img/chat-group-by.png" alt="Chat Group By" width="336"/>

- **Default**: ungroups all the chats. All chats appear under 'Active Chats'.
- **Medium**: groups chats into sections based on the type of message being used (eg SMS, Email).
- **Group**: groups chats into sections based on which queue they are from (eg General, SMS).
- **Waiting**: group chats into sections based on how long they have been in the 'Active Chats' (eg < 5 minutes, < 10 minutes).

Below is an example. The 'Active Chats' have been grouped by their 'Medium'. All the current active chats in the example use SMS, so they all appear in the 'SMS' group.

<img src="/img/chat-group-by-example.png" alt="Chat Group By Example" width="336"/>











## Main Chat (Middle)

### The Chat

(new message, message compose, conclude chat, transcript)
 
### History








## Right Sidebar

### Replies



### Info

#### Details

#### Notes



#### Recent Bookings



### Actions

#### Opt Out



### Calendar

## Concluding a Session
conclusion conclusion

