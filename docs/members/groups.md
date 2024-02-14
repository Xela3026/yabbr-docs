---
title: Groups
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';

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

# Groups

Groups are a collection of members that are used in the [Bookings](../yabbr-chat/chat.md#bookings) and [Chat Routing Systems](../yabbr-chat/chat-settings.md#routing). Usually, these groups are assigned to a singular customer through one of these systems so all of the agents can interact with the customer at once. It is recommended you read the [Member List](./member-list.md) documentation before this for a general overview of Members.

## Group Creation

To create a group, you need to give it a name. This will be the display name of the group so you can identify it within the workspace. Enter the name in the text box outlined below and then click the '+' button to add the group to the workspace. 

<img src="/img/groups-create.png" alt="Create a Group" width="600"/>

This group will just start as an empty shell. You then need to add members to it.

:::important Remember
Any changes made here in the Groups section must be saved by clicking <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Publish Changes</Tag>.
<img src="/img/groups-save.png" alt="Save Changes" width="550"/>
:::

### Modifying Groups

To select a Group for modification, click on it in the outlined 'Groups'. A selected group will be highlighted in blue.

<img src="/img/groups-select.png" alt="Select a Group" width="450"/>

Members in the group will appear under 'Members'. Members not in the group will appear under 'Unassigned'. To add a member to the group, click on the member in 'Unassigned'. To remove a member from the group, click on the member in 'Members'. If there are too many members, you can search through them by name using the 'Filter' text box above each section:


<img src="/img/groups-modify.png" alt="Add and Remove Members" width="550"/>

---

To delete a group from the workspace, click on the trash icon next to its name as outlined below.

<img src="/img/groups-delete.png" alt="Delete a Group" width="400"/>

Then, click the <Tag colour="#FFFFFF" borderColour="#d92b04" fontColour="#d92b04">Delete</Tag> button in the menu that appears to confirm the delete:

<img src="/img/groups-delete-confirm.png" alt="Confirming the Delete of a Group" width="400"/>





## Group Management

Missing documentation. Work in Progress.

[comment]: <> (what does the order of the groups mean? Add the docs here when you here back from Alex 1 about this.)