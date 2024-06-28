---
title: Attributes
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---


import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';
import BrandName from '@site/src/components/BrandName';

# Attributes

Within your workspace, you will be dealing with several different contacts, especially in Chat. To effectively keep track of each of these contacts and their details, you can create Contact Attributes. A contact attribute is a piece of information you can store about a contact (eg name, date of birth, phone number). Then, when your agents are communicating with contacts in Chat, all relevant contact information will then be readily available, providing agents with a comprehensive understanding of the contact's profile. These contact attributes can also be used as placeholders in [Quick Replies](../chat/quick-replies).

## Setup

To find the Contact Attributes section in your workspace: 
1. On the left sidebar, navigate to 'Contacts'
2. Once the 'Contacts' page is open, find the 'Attributes' tab at the top of the page.

<CustomisableImage src="/img/contact-attributes-nav.png" alt="Navigation to Contact Attributes" width="600" />

### Create

Then, to create a new Contact Attribute, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Attribute</Tag>.

<CustomisableImage src="/img/contact-attributes-new.png" alt="New Contact Attribute" width="550" />

#### Configure

Clicking on this button will bring up a small menu like the one below:

<CustomisableImage src="/img/contact-attributes-menu.png" alt="Contact Attribute Configuration" width="450" />


Use these options to configure your new Contact Attribute:
- **Field Name**: the name of the contact attribute. Eg 'Phone Number', 'Name', 'DOB'.
- **Field Type**: Each contact attribute will initially be empty. They must be manually filled out by an agent. The 'Field Type' will specify how the information must be formatted and stored:
    - **Text**: standard string of characters: 'John Smith', 'apples', etc.
    - **Email**: must be formatted like an email address.
    - **Number**: only numeric characters (0-9). Letters are not permitted.
    - **Phone**: must be formatted like a phone number.
    - **Date**: must be formatted as a specific date in the calendar.
    - **Dropdown**: must be selected from a list of options. For example, you may have an attribute called 'Subscription Status' with the options 'Active' and 'Inactive'.
        - selecting this option will add a new option 'Dropdown Options': <CustomisableImage src="/img/contact-attributes-dropdown.png" alt="Contact Attribute Dropdown Options" width="450" />
        - to add an option, type the name of the option in the text box and then click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button.
        - to delete an option, click the 'X' button on the right of the option: <CustomisableImage src="/img/contact-attributes-dropdown-delete.png" alt="Contact Attribute Delete Option" width="450" />

Finally, to add the Contact Attribute to your workplace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

## Management

All of your workspace's Conact Attributes will appear here:

<CustomisableImage src="/img/contact-attributes-overview.png" alt="Contact Attributes Menu" width="550" />

This overview will display the name of the attribute, then the attribute's type. 

To edit an attribute and all of its configurations, click the pencil icon. To delete an attribute, click the trash icon:

<CustomisableImage src="/img/contact-attributes-edit.png" alt="Contact Attributes Management" width="550" />

:::tip TIP
You can search the Contact Attributes by name using the 'Filter' text box.
:::