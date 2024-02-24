---
title: Sender IDs
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';

import Tag from '@site/src/components/Tag';

# Sender IDs

The Sender ID is the sender of a phone message. For example, when you get called, the Sender ID is what is calling you. The Sender ID is essentially the 'from' of a phone message. In the context of Yabbr, the Sender IDs are what you use to send outbound messages. You must register a Sender ID with Yabbr to then use it to send outbound phone messages elsewhere in your workspace. A Sender ID can come in three forms in Yabbbr: [Virtual Numbers](./virtual-numbers.md), Alpha Codes, or personal 'BYO' numbers. This documentation is about Alpha Codes and personal numbers.

See Virtual Numbers for an explanation of them, but essentially you rent them from Yabbr and you can use them for both outbound and inbound functionality which is required for use in Yabbr Chat.

An Alpha Code is a string of text. Usually it is a word or words relating to your brand like 'Brand Name'. Then, when you use this Sender ID, customers will receive a message from a number called 'Brand Name'. However, Alpha Codes have no inbound functionality. Customers cannot respond to messages sent by an Alpha Code.

A personal 'BYO' number is a real existing phone number that you have access to. You can import it into your workspace to use it as a Sender ID. However, whlilst customers can respond to this Sender ID, Yabbr cannot access these responses to a personal number and thus there is no inbound functionality for this type of Sender ID in the workspace.

:::info Important
Alpha Codes and personal numbers have to be verified by Yabbr before you can use them in your workspace.
:::

## Setup

To find the Sender IDs section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'Sender IDs'.

<img src="/img/sender-id-nav.png" alt="Sender IDs on the Sidebar" width="300" />

### Create

Then, to create a new Sender ID, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Sender ID</Tag>.

<img src="/img/sender-id-create.png" alt="New Sender ID" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

**Menu 1 - Alpha Code**

<img src="/img/sender-id-config.png" alt="Sender IDs Configuration Alpha Code" width="450" />

**Menu 2 - Mobile Number**

<img src="/img/sender-id-mobile.png" alt="Sender IDs Configuration Mobile Number" width="450" />


These are the settings and configurations of your new Sender ID. They are the:
- **Sender ID Type**: this is where you select between the different types of Sender IDs explained [earlier](#sender-ids). Obviously, select 'Alpha Code' to create an Alpha Code Sender ID. Select 'Mobile Number' to create a personal 'BYO' number Sender ID.
- **Alpha Code**: this is the name of the Sender ID you want to create. For example, you may want to create a Sender ID called 'Brand Name News' that contacts customers about new information, promotions, or updates related to your brand or products. 
- **Mobile Number**: this must be a phone number that you have access to and want to use as a Sender ID within your workspace. Select the region of the phone number using the drop-down menu. Then, enter the actual number in the rest of the text box.

Then, to add the new Sender ID to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::info Important
These types of Sender IDs need approval before they can be used elsewhere in your workspace.
:::

## Approval and Verification

Once you create a Sender ID using an Alpha Code or a Mobile Number, Yabbr needs to make sure you have a right to use it.

For an Alpha Code, Yabbr needs to make sure that the name aligns with your brand or business in some way.

For a Mobile Number, Yabbr needs to send the number a message and receive a message back from it confirming that they would like it to be used within a Yabbr workspace.

Once this process has been completed, the Sender ID will be approved and verified and can then be used throughout your workspace.

## Management

All of your workspace's Sender IDs will appear here:

<img src="/img/sender-id-menu.png" alt="Sender ID Menu" width="550" />

This overview will display the approved status of the Sender ID, then the Sender ID. 

To remove a Sender ID from your workspace, click the trash icon on the right of the Sender ID:

<img src="/img/sender-id-delete.png" alt="Sender ID Delete" width="550" />

:::tip TIP
You can search the Sender IDs by name using the 'Filter' text box.
:::


