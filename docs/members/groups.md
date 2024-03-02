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

<CustomisableImage src="/img/groups-create.png" alt="Create a Group" width="600"/>

This group will just start as an empty shell. You then need to add members to it.

:::important Remember
Any changes made here in the Groups section must be saved by clicking <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Publish Changes</Tag>.
<CustomisableImage src="/img/groups-save.png" alt="Save Changes" width="550"/>
:::

### Modifying Groups

To select a Group for modification, click on it in the outlined 'Groups'. A selected group will be highlighted in blue.

<CustomisableImage src="/img/groups-select.png" alt="Select a Group" width="450"/>

Members in the group will appear under 'Members'. Members not in the group will appear under 'Unassigned'. To add a member to the group, click on the member in 'Unassigned'. To remove a member from the group, click on the member in 'Members'. If there are too many members, you can search through them by name using the 'Filter' text box above each section:


<CustomisableImage src="/img/groups-modify.png" alt="Add and Remove Members" width="550"/>

---

To delete a group from the workspace, click on the trash icon next to its name as outlined below.

<CustomisableImage src="/img/groups-delete.png" alt="Delete a Group" width="400"/>

Then, click the <Tag colour="#FFFFFF" borderColour="#d92b04" fontColour="#d92b04">Delete</Tag> button in the menu that appears to confirm the delete:

<CustomisableImage src="/img/groups-delete-confirm.png" alt="Confirming the Delete of a Group" width="400"/>





## Group Management

All of your groups can be found in the section outlined below.

<CustomisableImage src="/img/groups-overview.png" alt="Groups Overview" width="550"/>

In this section, the groups will have a specific order of priority. The groups at the top have higher priority than the groups at the bottom. If there are group assigning conflicts in [Chat Routing](../yabbr-chat/chat-settings.md#routing), then the group with the higher priority will be selected for routing. To change this order, hover over the six dots ⠿ (outlined below) and then drag and drop the group to the new desired spot in the order.

<CustomisableImage src="/img/groups-change-order.png" alt="Groups Change Order" width="550"/>