---
title: Sender IDs
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import BrandName from '@site/src/components/BrandName';
import Tag from '@site/src/components/Tag';

# Sender IDs



Sender IDs are like email addresses, but for phone messages instead of emails. They send and receive phone messages like calls or texts. In <BrandName type="name"/>, Sender IDs are necessary for outbound messaging. They need to be registered within the platform before you can use them across your workspace.

<BrandName type="name"/> offers three main forms of Sender IDs:

Virtual Numbers: These are rented from <BrandName type="name"/>. They offer both inbound and outbound functionality. This is the only Sender ID type with inbound functionality. Therefore, they are the only Sender IDs you can use in Chat. Refer to our documentation on Virtual Numbers for comprehensive details.

Alpha Codes: Alpha Codes are alphanumeric (numbers and letters) strings typically representing your brand. These are special because recipients receive phone messages from an alphanumeric string rather than a phone number. However, it's important to note that Alpha Codes lack inbound functionality; recipients cannot respond to messages sent via Alpha Codes.

Personal 'BYO' Numbers: This option involves using your existing personal phone numbers as Sender IDs within your workspace. While recipients can respond to messages sent from these numbers, these responses will only appear on your personal phones. <BrandName type="name"/> cannot access these responses, rendering inbound functionality unavailable.

:::info Important
Alpha Codes and personal numbers have to be verified by <BrandName type="name"/> before you can use them in your workspace.
:::

## Setup

To find the Sender IDs section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'Sender IDs'.

<CustomisableImage src="/img/sender-id-nav.png" alt="Sender IDs on the Sidebar" width="300" />

### Create

Then, to create a new Sender ID, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Sender ID</Tag>.

<CustomisableImage src="/img/sender-id-create.png" alt="New Sender ID" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

**Menu 1 - Alpha Code**

<CustomisableImage src="/img/sender-id-config.png" alt="Sender IDs Configuration Alpha Code" width="450" />

**Menu 2 - Mobile Number**

<CustomisableImage src="/img/sender-id-mobile.png" alt="Sender IDs Configuration Mobile Number" width="450" />


These are the settings and configurations of your new Sender ID. They are the:
- **Sender ID Type**: this is where you select between the different types of Sender IDs explained [earlier](./sender-ids). Obviously, select 'Alpha Code' to create an Alpha Code Sender ID. Select 'Mobile Number' to create a personal 'BYO' number Sender ID.
- **Alpha Code**: this is the name of the Sender ID you want to create. For example, you may want to create a Sender ID called 'Brand Name News' that contacts customers about new information, promotions, or updates related to your brand or products. 
- **Mobile Number**: this must be a phone number that you have access to and want to use as a Sender ID within your workspace. Select the region of the phone number using the drop-down menu. Then, enter the actual number in the rest of the text box.

Then, to add the new Sender ID to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::info Important
These types of Sender IDs need approval before they can be used elsewhere in your workspace.
:::

## Approval and Verification

Once you create a Sender ID using an Alpha Code or a Mobile Number, <BrandName type="name"/> needs to make sure you have a right to use it.

For an Alpha Code, <BrandName type="name"/> needs to make sure that the name aligns with your brand or business in some way.

For a Mobile Number, <BrandName type="name"/> needs to send the number a message and receive a message back from it confirming that they would like it to be used within a <BrandName type="name"/> workspace.

Once this process has been completed, the Sender ID will be approved and verified and can then be used throughout your workspace.

## Management

All of your workspace's Sender IDs will appear here:

<CustomisableImage src="/img/sender-id-menu.png" alt="Sender ID Menu" width="550" />

This overview will display the approved status of the Sender ID, then the Sender ID. 

To remove a Sender ID from your workspace, click the trash icon on the right of the Sender ID:

<CustomisableImage src="/img/sender-id-delete.png" alt="Sender ID Delete" width="550" />

:::tip TIP
You can search the Sender IDs by name using the 'Filter' text box.
:::



