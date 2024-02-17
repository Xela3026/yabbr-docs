---
title: General
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

# Templates

Templates are message scaffolds. Here, you can create a body of text and replace some words with placeholders. These placeholders can than be filled in later with relevant information for specific uses. It is recommended you read this general documentation first before you read the specific documentation for each message type.

## Creation

To create a template, navigate to the 'Templates' in your workspace, or the 'Audio' section for an audio template. This 'General' documentation primarly focuses on the 'Templates' section. See [Audio](./audio-templates.md) for more specific guides for the 'Audio' section of templates.

<img src="/img/template-navigation.png" alt="Template Navigation Bar" width="300"/>

To navigate between different message types (Messaging and Email), use the tabs at the top of the page and outlined below.

<img src="/img/template-nav-nav.png" alt="Template Tabs" width="500"/>

Then, to create a new template, click the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Template</Tag> button.

![Create Template Button](/img/template-creation.png)

Then, a small menu will appear when you can start to customise your template:

![Create Template Menu](/img/template-menu.png)

- **Name**: Give your template a display name to identify it within your workspace. Enter the desired name into the text box under 'Friendly Name' or 'Name'.

- **Product**: This drop-down determines the type of messaging you are using the template for. Each option requires specific configuration that is explored below. Select the desired template type using the drop-down menu under 'Product'.

Then, you will need to create the actual content of the template. This message composing is different for each message type. See specific template documentations for a more detailed explanation.

Finally, once you have finished creating your message template, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag> to add it to your workspace.

## Management

All of your templates are displayed in the template overview section outlined below. This overview will store the 'enabled' status of the template (Enabled), the template's display name (Template), and the product it is for (Product).

<img src="/img/template-overview.png" alt="Template Overview" width="500"/>

Here, you can view all of your templates.

### Actions

You can also modify each template. To edit a template, click on the pencil icon. Make your modifications to the template and then click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag> to save the changes.

To delete a template, click on the trash icon and then click 'Confirm'.

<img src="/img/groups-actions.png" alt="Template Actions" width="500"/>

### Filters

If you have a lot of templates, it may be difficult to find them here. To find a specific template, you can either use the search filter, or the order filter.

#### Search Filter

The search filter is the 'Filter' text box at the top of the page and outlined below. Use this to search for the template using text. Only the templates that match the text you input into the search filter will appear. The template could match the searched text with either its display name, message content, or product type. For example, you could search for all Yabbr Chat messages by using 'Yabbr Chat' in the search filter. You could search for all templates that mention success by using 'success' in the search filter.

<img src="/img/template-filter.png" alt="Search Filter" width="500"/>

#### Order Filter

<img src="/img/template-order.png" alt="Order Filter" width="500"/>

The order filter is the little arrows next to each column title and outlined below. By default, the templates are ordered in alphabetical order. You can change how they are ordered using the order filter. 



To order the templates by a specific property:
1. Click on the arrow next to the column title of the specific property.
2. Click on the up arrow to order by alphabetical order. Click on the bottom arrow to order in reverse alphabetical order.

For example, to order the templates by their product in reverse alphabetical order (eg Yabbr Chat first, then Campaigns next), click on the bottom arrow next to the 'Product' column title.







