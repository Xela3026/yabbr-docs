---
title: API Keys
sidebar_position: 1
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

# API Keys

Yabbr has APIs for all of the features in your workspace. These APIs need some authentication. One method of authenticaion is using an API Key. This is where you create new API keys to use in the Yabbr API.

## Setup

To find the API Keys section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'API Keys'.

<img src="/img/api-keys-nav.png" alt="API Keys on the Sidebar" width="300" />

### Create

Then, to create a new API Key, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Key</Tag>.

<img src="/img/api-keys-new.png" alt="New API Keys" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<img src="/img/api-keys-menu.png" alt="API Keys Configuration" width="450" />

These are the settings and configurations of your new API Key. They are the:
- **Name**: the display name of your API Key to identify it within your workspace.
- **POSTback URL**: API Keys can be used to POST and send outbound messages using the Yabbr API. Some of these outbound messages also have inbound functionality. When one of these outbound messages receives an inbound message response, the data of that response is sent to this URL.
- **Allowed CIDRs**: these are the range of IP addresses that are permitted to access and use this API Key. Only requests originating from these IP addresses are permitted. Type in the CIDR into the text box, and then click <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> to add it to the 'Allowed CIDRs' list. Click the 'X' next to a CIDR in this list to remove it from the list.
- **Off the Record**: all messages and received using the Yabbr API are recorded in a transcript. You can disable this function for this API key by enabling this option.
- **Enabled**: this enables/disables the functionality of the API Key.

Finally, to add the API Key to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

## Management

All of your workspace's API Keys will appear here:

<img src="/img/api-keys-overview.png" alt="API Keys Menu" width="550" />

This overview will display the enabled status of the API Key, then the key's name. 

To edit an API Key and all of its configurations, click the pencil icon on the right of the API Key:

<img src="/img/api-keys-edit.png" alt="API Keys Edit" width="550" />

:::tip TIP
You can search the API Keys by name using the 'Filter' text box.
:::







