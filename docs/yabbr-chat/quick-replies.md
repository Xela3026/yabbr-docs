---
title: Quick Replies
sidebar_position: 3
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

# Quick Replies

Quick Replies are message templates that you can use in the [Yabbr Chat](./chat.md). They are most useful for messages that are commonly sent, but are also very long. For example, you may set up a quick reply that outlines some lengthy terms and conditions. Then, you wouldn't have to type them out everytime in the chat, and could instead just use the quick reply.

## Create

Firstly, to create a quick reply, navigate to the Quick Replies section on the navbar:

<img src="/img/quick-reply-navbar.png" alt="Quick Reply Navbar" width="336"/>

There are two types of quick replies - for Messaging (MMS and SMS) and for Email. Email quick replies can only be used for SMS conversations in Yabbr Chat, and the same applies to Messaging. Pick your desired quick reply message type using the tabs outilned below.


<img src="/img/quick-reply-type.png" alt="Quick Reply Type Selection" width="500"/>

---

Then, to create a new quick reply for that message type, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Template</Tag> button. 

<img src="/img/quick-reply-create.png" alt="Quick Reply Creation"/>

---

Next, a small menu will come up where you create your quick reply. The 'Friendly Name' is just the title of the quick reply and is used to distinguish between different quick replies in your workspace.

<img src="/img/quick-reply-menu.png" alt="Quick Reply Menu"/>

Finally, you create the actual message for the quick reply. For details on message creation for each message type, see [Templates](../category/templates/). Click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag> button to finalise and add the quick reply to the workspace.

## Manage

All of your quick replies will appear here:

<img src="/img/quick-reply-overview.png" alt="Quick Reply Overview"/>

To search through your quick replies, type into the 'Filter' (outlined below). Only the quick replies that have the searched text in their title or their message content will appear. In the below example, only the three quick replies that appear have 'hi' in either their title or message.

<img src="/img/quick-reply-filter.png" alt="Quick Reply Search"/>

To edit any of the quick replies, click on the pencil icon. To delete a quick reply, click on the trash icon and then click 'Confirm'.

<img src="/img/quick-reply-actions.png" alt="Quick Reply Actions"/>



