---
title: Domains
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

# Domains

To send outbound emails using Yabbr, you need an [Email Alias](./email.md#email-aliases) to send the email with. This email alias also needs a Domain (eg 'example.com' is the domain in 'abc123@example.com'). Here is where you create the domains that are registered for use in your workspace.

## Setup

To find the domains section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'Domains'.

<img src="/img/domains-nav.png" alt="Domains on the Sidebar" width="300" />

### Create

Then, to create a new Domain, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Domain</Tag>.

<img src="/img/domains-new.png" alt="New Domain" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<img src="/img/domains-menu.png" alt="Domain Configuration" width="450" />

These are the settings and configurations of your new domain. They are the:
- **Friendly Name**: the display name of your domain to identify it within your workspace.
- **Domain**: the name of the new domain. For example, the domain in the email address 'abc123@example.com' would be 'example.com'.

Then, to add the new domain to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::important Important
Your domains will not be immediately ready for use. They have to be verified by Yabbr before you can use them in your workspace.
:::

## Management

### Overview

All of your workspace's domains will appear here:

<img src="/img/domains-overview.png" alt="Domains Menu" width="550" />

To delete a domain from your workspace, click on the trash icon on the right of the domain:

<img src="/img/domains-delete.png" alt="Delete Domains" width="550" />

:::tip TIP
You can search the domains by name using the 'Filter' text box.
:::

### Details

Clicking on a domain in this menu will open an expanded view of the domain's details. This includes the domain's verification status.

Missing Documentation. Work in Progress.

