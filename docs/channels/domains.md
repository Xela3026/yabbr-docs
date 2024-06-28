---
title: Domains
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---


import BrandName from '@site/src/components/BrandName';
import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';

# Domains

To send outbound emails using <BrandName type="name"/>, you need an [Email Alias](./email.md#email-aliases) to send the email with. This email alias also needs a Domain (eg 'example.com' is the domain in 'abc123@example.com'). You must register these domains with <BrandName type="name"/> before you can use them for emails within your workspace. Here is where you register your domains with <BrandName type="name"/>.


## Setup

To find the domains section in your workspace: on the left sidebar, navigate to 'Channels', and then find 'Domains'.

<CustomisableImage src="/img/domains-nav.png" alt="Domains on the Sidebar" width="300" />

### Create

Then, to register a new Domain, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Domain</Tag>.

<CustomisableImage src="/img/domains-new.png" alt="New Domain" width="600" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<CustomisableImage src="/img/domains-menu.png" alt="Domain Configuration" width="450" />

These are the settings and configurations of the domain. They are the:
- **Friendly Name**: the display name of your domain to identify it within your workspace.
- **Domain**: the name of your domain. For example, the domain in the email address 'abc123@example.com' would be 'example.com'.

Then, to register your domain in your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::important Important
These domains will not be immediately ready for use. <BrandName type="name"/> must verify that you own and have access to a domain before you can use it in your workspace.
:::

### Verification

Once you have added a domain for registration, it will be listed in a menu similar to the one shown below:

<CustomisableImage src="/img/domains-overview.png" alt="Domains Menu" width="550" />

To verify the domain with <BrandName type="name"/>:

1. Click on the domain to access the DNS records that <BrandName type="name"/> automatically generated for the domain. The records have been outlined below (details have been redacted for documentation):

<CustomisableImage src="/img/domain-record.png" alt="Domain Records" width="550" />

2. Copy and save these DNS records. The <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Copy</Tag> button will copy the DNS records to your clipboard.

3. Navigate to the DNS settings of your domain and insert the copied DNS records.

Once the records have been added, the domain is automatically verified and enabled within your workspace.


## Management

To delete a domain from your workspace, click on the trash icon on the right of the domain:

<CustomisableImage src="/img/domains-delete.png" alt="Delete Domains" width="550" />

:::tip TIP
You can search the domains by name using the 'Filter' text box.

<CustomisableImage src="/img/filter.png" alt="Search Domains" width="400" />

:::




