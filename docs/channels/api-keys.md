---
title: API Keys
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';

import Tag from '@site/src/components/Tag';
import BrandName from '@site/src/components/BrandName';

# API Keys

<BrandName type="name"/> has APIs for all of the features in your workspace. These APIs need some authentication. One method of authenticaion is using an API Key. This is where you create new API keys to use in the <BrandName type="name"/> API.

## Setup

To find the API Keys section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'API Keys'.

<CustomisableImage src="/img/api-keys-nav.png" alt="API Keys on the Sidebar" width="300" />

### Create

Then, to create a new API Key, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Key</Tag>.

<CustomisableImage src="/img/api-keys-new.png" alt="New API Keys" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<CustomisableImage src="/img/api-keys-menu.png" alt="API Keys Configuration" width="450" />

These are the settings and configurations of your new API Key. They are the:
- **Name**: the display name of your API Key to identify it within your workspace.
- **POSTback URL**: some <BrandName type="name"/> endpoints deliver live events via a POST request to a nominated URL. This is that URL. It is most commonly used for message receipts from outbound messages on the messages endpoint.
- **Allowed CIDRs**: these are the range of IP addresses that are permitted to access and use this API Key. Only requests originating from these IP addresses are permitted. Type in the CIDR into the text box, and then click <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> to add it to the 'Allowed CIDRs' list. Click the 'X' next to a CIDR in this list to remove it from the list.
- **Off the Record**: <BrandName type="name"/> logs every logs every request made with the <BrandName type="name"/> API in a database. Enabling 'Off the Record' means that any request made with this API will not be logged.
- **Enabled**: this enables/disables the functionality of the API Key.

#### Finalisation

Next, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

Then, a small menu will appear like the one below. This will show you your API Key. Your API Key will be located where the redacted text is in the screenshot below. Copy and store this API Key in some place safe. Once you have confirmed that you have saved the API Key by selecting the checkbox outlined in the screenshot below, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Close</Tag> to close the menu and finish the API Key creation process.

<CustomisableImage src="/img/api-keys-copy.png" alt="API Keys Save Key" width="450" />

:::warning Warning
You cannot find your API Key ever again once you have closed this menu.
:::

## Management

All of your workspace's API Keys will appear here:

<CustomisableImage src="/img/api-keys-overview.png" alt="API Keys Menu" width="550" />

This overview will display the enabled status of the API Key, then the key's name. 

To edit an API Key and all of its configurations, click the pencil icon on the right of the API Key:

<CustomisableImage src="/img/api-keys-edit.png" alt="API Keys Edit" width="550" />

:::tip TIP
You can search the API Keys by name using the 'Filter' text box.
:::







