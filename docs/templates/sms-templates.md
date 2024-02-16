---
title: SMS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

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



[comment]: <> (may have to make a general templates docs so I do not repeat myself.)

[comment]: <> (REMEMBER TO MENTION - PLACEHOLDERS WILL BE FILLED BY CONTACT ATTRIBUTES in yabbr chat or contact files for campaigns)


# SMS Templates

Templates are message scaffolds. Here, you can create a body of text and replace some words with placeholders. These placeholders can than be filled in later with relevant information for specific uses.

## Creation

To create a template, navigate to 'Templates' in your workspace, and then click the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Template</Tag> button.

![Create Template Button](/img/template-creation.png)

Then, a small menu will appear when you can start to customise your template:

![Create Template Menu](/img/template-menu.png)

## Friendly Name

Give your template a name to identify it within your workspace. Enter the desired name into the text box under 'Friendly Name'.

## Product

This drop-down determines the type of messaging you are using the template for. Each option requires specific configuration that is explored below. Select the desired template type using the drop-down menu under 'Product'.

### General

Depending on the template type you select in 'Product', a different menu will appear with different options. The 'Campaigns' type has no exclusive features.

#### Message Text

This text box appears in all template types. This is the actual content of your message scaffold. You can type both normal text, but also placeholders. Placeholders are like variables. When you use your template in messages elsewhere in your workspace, you can replace these placeholders with the necessary relevant information to make the template a fully complete message. To create a placeholder, enclose the name of the placeholder in double parentheses. For example, a placeholder called 'client_name' would look like &#123;&#123;client_name&#125;&#125;. Below is a full example Campaigns Template with Message Text outlined in red.

![Template Message Text](/img/template-message-text.png)


### Yabbr Chat

#### Keyword Tags



### Express Message

#### Categories

#### Default Sender

#### Merge Field Configurations

#### Off the Record




## Enable Template

Enable (green) / Disable (grey) the template by toggling the switch under 'Enable Template'.
