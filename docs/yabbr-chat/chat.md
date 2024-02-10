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

When you pull a customer from the queue, or start a new chat with a customer, they will appear under the "Active Chats" display outlined below. Each customer is designated their own chat with you - the agent. The chat you are currently in is highlighted blue. To enter a different active chat, just click on it in this menu. The rest of the active chats that you are not currently in are grey. The contact of the customer is listed at the top of the chat name. The contact that the agent is using to talk to the customer is listed at the bottom of the chat name.

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

This is the main functionality of Yabbr Chat. The middle of your screen is the actual chat itself. This is where you and your agents can communicate with your customers.

### The Chat

The chat works like most chat platforms online. Messages from the customer appear on the left of the screen with a grey background. Messages from any of the agents appear in blue on the right of the screen. 

:::tip Tip
Multiple agents can interact with the same customer. Multiple agents can also be in the same chat with a customer at once.

For example, Agent 1 may send some introductory messages like 'Hi, thank you for your interest', and then Agent 2 may interject or take over with some negotiations like 'You have three overdue payments'. From the point of view of the customer, all these messages are coming from the same contact.
:::

[comment]: <> (I don't know how to word this multiple agents thing. Currently it is not well explained.)

To send a new message to the customer, just type the message in the text box at the bottom of the screen and hit enter. Some extra annotations are shown below.

---

![Chat Annotation](/img/chat-annotation.png)

---

:::tip Tip
You can add emojis to your message by clicking the emoji icon on the right of the message text box, and then selecting your desired emoji:
<img src="/img/chat-emoji.png" alt="Chat Emojis" width="336"/>
:::

---

#### Message Composing Mode

Toggling this option will make the above text box a lot larger. Use this option when you want to create a large message. In Message Composing Mode, click 'Enter' will not send the message. Instead, it will start a new line. This is useful for larger messages. Instead, to send the message once you have finished composing it click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Send</Tag> button (outlined below) that appears in the bottom right of the screen.

---

![Message Composer](/img/chat-message-compose.png)

---

#### Redacting a Message

You can choose to redact messages sent by the customer by clicking the 'X' on the left of the message. This will remove the message contents from chat records.

---

<img src="/img/chat-redact.png" alt="Chat Redact" width="336"/>

---

This will bring up a small confirmation menu. Click <Tag colour="#FFFFFF" borderColour="#dc3d19" fontColour="#dc3d19">Redact Message</Tag>

---


<img src="/img/chat-redact-confirm.png" alt="Confirm Redaction" width="336"/>


---

:::caution Caution
Redacting a message does not completely eliminate its existence from any records. A message still appears as being 'sent'. Only the contents of the message is redacted:
<img src="/img/chat-redact-example.png" alt="Example Redaction" width="336"/>
:::

---

#### Message Emotion Analysis

As you will notice, every message sent by the customer has an emoji underneath it. Each message can have one of three emojis: 😀, 😐, 😞. 
All text usually has some connotation from positive to neutral to negative. This emoji is the 'mood' that the message portrays. An algorithm reads the message and then determines its tone. Then, it allocates an emoji that relates to that tone.

- 😀: indicates the message is positive
- 😐: indicates the message is neutral
- 😞: indicates the message is negative

---

**Examples of Emotions**:
<img src="/img/chat-emotion.png" alt="Emotions Example" width="336"/>

---



#### Transcripts

Every chat session automatically records a full [Transcript](../transcripts.md) of the session. You can also download a transcript of the current session by click on the ˅ on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">&#10697; Transcript ˅</Tag> button, and then click 'Print to PDF'. This will download a PDF of a transcript of the current chat session to your device.

---

![Chat Transcripts](/img/chat-transcripts.png)


---

#### Extra Actions

In the top right of the screen, there are two actions you can perform on the current chat: [Conclude](#concluding-a-session) or Pin. These have already been explained under [Active Chats](#active-chats). 

---

![Chat Extra Actions](/img/chat-actions.png)

---


 
### History

Missing Documentatoin. Work in Progress.




## Right Sidebar

To navigate between sections of the right sidebar, click on the different tabs shown below. In the example, 'Replies' is currently selected.

---

<img src="/img/chat-right-sidebar.png" alt="Chat Right Sidebar" width="500"/>

---

### Replies

The first tab on the right sidebar is the Replies. These are all of your enabled [Quick Replies](./quick-replies.md). They are useful for long messages that are commonly sent to customers.

#### Using Quick Replies

To use a quick reply, just click on the desired quick reply on the right sidebar (outlined below). Then, the quick reply message will be automatically pasted into your message to the customer. 

---

<img src="/img/chat-quick-reply.png" alt="Chat Quick Replies" width="500"/>

---

Some quick replies also use a template. When you select one of these quick replies, a small menu will come up where you need to enter the value for the templates before the quick reply is pasted into your message.

The example below has a placeholder for the customer's email. Under the 'Template Fields' section, one of the fields is this 'email'. Then, in the 'email' text box, the customer's email is inputted. This then autmoatically inserts the customer's email into the quick reply message that you can view on the right.

---

<img src="/img/chat-quick-reply-placeholder.png" alt="Input Placeholder Quick Reply"/>

---

Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag> to paste the quick reply into your message.

---

#### Filtering Quick Replies

If you have a lot of quick replies setup, it may be difficult to find the one you want to use. You can sort through all of your quick replies using the 'Filter Quick Replies' text box. This acts like a search function. 

---

<img src="/img/chat-quick-reply-filter-by.png" alt="Quick Reply Filter"/>

---

Enter the text you want to search for in the text box. Then, only the quick replies with that text in its title or message will appear.

In the below example, 'hi' is being searched for. The three quick replies that appear either have 'hi' in their title or their message.

---

<img src="/img/chat-quick-reply-filter.png" alt="Filter Quick Replies Example"/>

---

#### Adding Quick Replies

You can temporarily add a new quick reply to appear here. Just type the message content of the new quick reply in the text box outlined below. Then, to add it to the list, click the grey <Tag colour="#d8dde1" borderColour="#d8dde1" fontColour="#414042 ">+</Tag> button.

<img src="/img/chat-new-quick-reply.png" alt="Add New Quick Reply"/>

---


### Info

Navigate between different sections of 'Info' using the tabs outlined below. In the example, 'Details' is currently selected.

---

<img src="/img/chat-info-nav.png" alt="Info Nav Bar"/>

---

#### Details

This is every single recorded detail about the client. It includes their name, email, phone number, date of birth and more. In this menu, you can view and edit any of this information.

#### Notes

You can add little comments or notes to the chat. These notes are stored, recorded, and created in this tab. Any agent can make a note, and all agents can see all other agents' notes.

In the below example a note has been made on the chat that says 'This is a test note'.

---

<img src="/img/chat-notes.png" alt="Example Chat Notes"/>

---

To add a new note, type the text content of the note into the text box 'Add note...' (outlined below), and then click the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+</Tag>.

---

<img src="/img/chat-notes-add.png" alt="Chat Notes Add" width="600"/>

---


#### Recent Bookings

Any recent bookings that have occured with this contact will appear here. See [Bookings](#bookings) for more info about booking.

Missing Documentation. Work In Progress.



### Actions

The only current action is adding the contact to an 'Opt Out' list (opt-out lists are used elsewhere to exclude a group of people from receiving an outbound message). Just click on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Add to List</Tag> button next to 'Opt Out'. 

---

<img src="/img/chat-opt-out.png" alt="Chat Opt Out" width="600"/>

---

Then a small menu will appear where you select which opt-out list to add the contact to.

---

<img src="/img/chat-opt-out-menu.png" alt="Chat Opt Out Menu" width="600"/>

---

In the drop-down menus, you need to select the:

- **List**: the specific opt-out list to add the contact to.
- **Message Type**: missing documentation. Work in progress.
- **Destination**: missing documentation. Work in progress.

Once you have configured all of these, add them to the list by clicking <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Submit</Tag>.


### Bookings

This calendar icon is where you create bookings. 

<img src="/img/chat-booking-icon.png" alt="Booking Icon" width="600"/>

A booking is a new session between a customer and a group of agents. All of the agents in the group will interact with the one customer through a single contact, and in a single chat. You configure the booking using the inputs outlined below.

---

<img src="/img/chat-booking.png" alt="Booking Creation" width="600"/>

---

- **Chat Type**: the message medium. Either SMS, MMS, or Phone.
- **Chat via**: the contact that the agents will talk to the customer through.
- **Assigned Group**: the group of agents that will be in the chat. Read more about groups [here](../members/groups.).
- **Contact**: the contact of the customer you want to start a booking with.


## Concluding a Session

After using any of the various methods of concluding a chat/session, you will see a small menu appear. For the purposes of records and transcripts, it is important to give a short description of what happend in the chat session and what was achieved. This description can be through using tags or a note.

---

<img src="/img/chat-conclude.png" alt="Conclude Chat Menu" width="600"/>

---

- **Conversation Outcome**: the final result of the conversation. This result/outcome is indicated using a tag. Select a tag by clicking on it, and unselect it by clicking it again. You must select a tag. Eg - if the customer did not cooperate with the agent, then an appropriate tag to select would be 'Dispute'. Read more about chat tags [here](./chat-settings.md#chat-tags).
- **Add a note**: this is optional. This note is just any extra comments about the conversation that may be important for the record.

Finally, to conclude the chat, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Submit</Tag>.

