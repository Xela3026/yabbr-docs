---
title: Chat Settings
sidebar_position: 2
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

# Chat Settings

Here you can configure various settings and options that appear in the [Yabbr Chat](./chat.md).

## Create

Firstly, to access chat settings, navigate to the Chat Settings section on the navbar:

<img src="/img/chat-settings-navbar.png" alt="Chat Settings Navbar" width="336"/>

Then, to navigate between different chat settings, select the different tabs outlined below. In the screenshot, 'Chat Tags' is currently selected.

<img src="/img/chat-settings-tabs.png" alt="Chat Setting Selection" width="500"/>

---



## General

Missing documentation. Work in progress.



## Chat Tags

### Create

Chat tags are used to record and document the outcomes of various chat sessions. Read more about the use of chat tags [here](./chat.md#concluding-a-session).

To create a new chat tag, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Chat Tag</Tag> button. 

<img src="/img/chat-tags-create.png" alt="Chat Tags Creation"/>

---

Next, a small menu will appear where you can create the new chat tag. Enter the name of the new tag in the text box outlined below. You can enable/disable this chat tag from being active in the workspace by toggling the 'Enable Tag' button. 


<img src="/img/chat-tags-menu.png" alt="Chat Tags Menu"/>

Then, to add the chat tag to the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::info Remember
Chat tags are used to indicate outcomes of a conversation. For example, if a problem was solved during the conversation, then 'Resolved' would be an appropriate tag.
:::

---

### Manage

All of your chat tags will appear here:

<img src="/img/chat-tags-overview.png" alt="Chat Tags Overview"/>

#### Filter

To search through your chat tags, type into the 'Filter' (outlined below). Only the chat tags that have the searched text in their name will appear. In the below example, only the five chat tags that appear have 're' in either their title or message.

<img src="/img/chat-tags-filter.png" alt="Chat Tags Search"/>

#### Actions

To edit any of the chat tags, click on the pencil icon. To delete a chat tag, click on the trash icon and then click 'Confirm'.

<img src="/img/chat-tags-actions.png" alt="Chat Tags Actions"/>

#### Settings

To configure the minimum and maximum required chat tags on a concluded session, click on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Settings</Tag> button.

<img src="/img/chat-tags-settings.png" alt="Chat Tags Settings"/>

This will bring up a small menu like the one below. 'Minimum' is the smallest number of chat tags needed on a concluded chat, and 'Maximum' is the largest number.

<img src="/img/chat-tags-settings-menu.png" alt="Chat Tags Settings Menu"/>

Finally, to apply the settings to the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.



## Contact Menu



## Routing


