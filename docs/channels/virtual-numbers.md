---
title: Virtual Numbers
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';

import Tag from '@site/src/components/Tag';


# Virtual Numbers

Read [Sender ID](./sender-ids.md#sender-ids) documentation for an in-depth explanation of Sender IDs and their differen types. A Virtual Number (VN) is just one type of Sender ID in Yabbr. It is a phone number that you can rent from Yabbr to use in your workspace as a Sender ID. Messages sent using Virtual Numbers can be responded to, and these responses can be recorded and accessed by Yabbr. Thus, Virtual Numbers are the only Sender IDs that can have inbound functionality in your workspace. Therefore, they are the only phone numbers you can use in Yabbr Chat.

## Setup

To find the VNs section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'Virtual Numbers'.

<CustomisableImage src="/img/vn-nav.png" alt="Virtual Numbers on the Sidebar" width="300" />

### Create

Then, to create a new VN, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Number</Tag>.

<CustomisableImage src="/img/vn-create.png" alt="Virtual Number ID" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<CustomisableImage src="/img/vn-menu.png" alt="Virtual Numbers Configuration" width="450" />

This is where you select VNs to add to your workspace. This is what each section does:
- **Country**: the region the VN belongs to.
- **Capabilities**: which message types the VN supports. The options are SMS, MMS, and Voice. You can select multiple message types from the drop-down menu. To delete a message type from your selection, either click it again in the drop-down menu, or click on the 'X' that appears next to its name:
- <CustomisableImage src="/img/vn-menu-delete.png" alt="Virtual Numbers Remove Message Type" width="300" />
- **Number Selector**: select the available VNs you want to add to your workspace. Each VN costs a certain amount per month to rent. To select a number, click the circle in the first column of the VN's details. Click it again to unselect it. You can select multiple VNs at once. The second column 'Number' is the actual phone number of the VN. The third column 'Feature' is all the message types that the VN can use. The final column 'Cost' is the renting price of the VN. VNs must be paid for to stay active in your workplace.

Then, to add the new VNs to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Add</Tag>.


## Management

All of your workspace's VNs will appear here (numbers have been redacted for documentation):

<CustomisableImage src="/img/vn-overview.png" alt="VN Menu" width="650" />

:::tip TIP
You can search the Sender IDs by name using the 'Filter' text box.
:::

### Number Options

The 'Number Options' can be used to create and edit an 'alias' for your VNs. This alias is the name of the VN and can be used to help identify certain VNs in your workspace. The alias is the string of text that appears in parentheses after the VNs phone number. For example, in "61000000000 (Demo Number)", the alias is "Demo Number".

To create and edit this alias:
1. Click on the <Tag colour="#FFFFFF" borderColour="#69747d" fontColour="#69747d">Number Options</Tag> button outlined below.
<CustomisableImage src="/img/vn-number-options.png" alt="VN Number Options" width="650" />
2. Select a VN to create/edit the alias of.
3. Click on the pencil icon outlined below.
<CustomisableImage src="/img/vn-edit-alias.png" alt="VN Edit Alias" width="650" />
4. Enter the new desired Alias in the text box outlined below, and then click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.

<CustomisableImage src="/img/vn-new-alias.png" alt="VN Configure Alias" width="650" />

### Feature Configuration

The next step in making your VNs fully functioning throughout your workspace is to configure them for different features. All of the features are layed out into different tabs outlined below. To configure a set of VNs for a certain feature:
1. Select the feature in the tabs outlined below.
2. Select all the VNs you would like to configure for this feature. Click on a VN in the menu to select it. Click it again to unselect it. You can select multiple VNs at once. A selected VN will be highlighted blue.

<CustomisableImage src="/img/vn-tabs.png" alt="VN Feature Tabs" width="650" />


#### SMS Auto-Replies



#### Keyword Auto-Replies

#### SMS Forwarding

#### MMS Forwarding

#### Voice Forwarding