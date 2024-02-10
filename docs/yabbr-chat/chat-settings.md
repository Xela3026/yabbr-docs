---
title: Chat Settings
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

[comment]: <> (i want to add more stuff like this throughout the docs:)

export const CustomDiv = ({ children, width, colour, height, textColour }) => (
  <div
    style={{
      width: width || '100%',
      backgroundColor: colour || 'transparent',
      height: height || '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <span
      style={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: textColour || 'white',
      }}
    >
      {children}
    </span>
  </div>
);



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

#

<CustomDiv colour="#1582d8">Chat Settings</CustomDiv>

<br/>
Here you can configure various settings and options that appear in the [Yabbr Chat](./chat.md).

## Create

Firstly, to access chat settings, navigate to the Chat Settings section on the navbar:

<img src="/img/chat-settings-navbar.png" alt="Chat Settings Navbar" width="336"/>

Then, to navigate between different chat settings, select the different tabs outlined below. In the screenshot, 'Chat Tags' is currently selected.

<img src="/img/chat-settings-tabs.png" alt="Chat Setting Selection" width="500"/>

---



## General

Missing documentation. Work in progress.



## Chat Tags

### Create

Chat tags are used to record and document the outcomes of various chat sessions. Read more about the use of chat tags [here](./chat.md#concluding-a-session).

To create a new chat tag, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Chat Tag</Tag> button. 

<img src="/img/chat-tags-create.png" alt="Chat Tags Creation"/>

---

Next, a small menu will appear where you can create the new chat tag. Enter the name of the new tag in the text box outlined below. You can enable/disable this chat tag from being active in the workspace by toggling the 'Enable Tag' button. 


<img src="/img/chat-tags-menu.png" alt="Chat Tags Menu"/>

Then, to add the chat tag to the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

:::info Remember
Chat tags are used to indicate outcomes of a conversation. For example, if a problem was solved during the conversation, then 'Resolved' would be an appropriate tag.
:::

---

### Manage

All of your chat tags will appear here:

<img src="/img/chat-tags-overview.png" alt="Chat Tags Overview"/>

#### Filter

To search through your chat tags, type into the 'Filter' (outlined below). Only the chat tags that have the searched text in their name will appear. In the below example, only the five chat tags that appear have 're' in either their title or message.

<img src="/img/chat-tags-filter.png" alt="Chat Tags Search"/>

#### Actions

To edit any of the chat tags, click on the pencil icon. To delete a chat tag, click on the trash icon and then click 'Confirm'.

<img src="/img/chat-tags-actions.png" alt="Chat Tags Actions"/>

#### Settings

To configure the minimum and maximum required chat tags on a concluded session, click on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Settings</Tag> button.

<img src="/img/chat-tags-settings.png" alt="Chat Tags Settings"/>

This will bring up a small menu like the one below. 'Minimum' is the smallest number of chat tags needed on a concluded chat, and 'Maximum' is the largest number.

<img src="/img/chat-tags-settings-menu.png" alt="Chat Tags Settings Menu"/>

Finally, to apply the settings to the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.



## Contact Menu

### Changing the Order

In the Yabbr Chat, there is information stored about every customer. In the Yabbr Chat, this information is listed under [Details](./chat.md#details). The information that is stored there can be configured under [Contact Attributes](../contacts/attributes). 

You can change the order in which customer information appears in the Details section here. All of your workspace's registered Contact Attributes will be listed. They will also be listed in the order that they appear in the Chat Details section. To change this order, hover over the six dots ⠿ (outlined below) and then drag and drop the contact attribute to the new desired spot. The first contact attribute in the order will be the display name of the chat.

<img src="/img/contact-menu-drag.png" alt="Contact Menu Drag and Drop"/>

Then, to confirm this new order, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Save Order</Tag> button that will appear on the bottom.

### Updating Attributes

You can modify certain properties of each attribute as well, such as where they appear and if they are editable.

To modify an attribute, click on the pencil icon to the right of its name:

<img src="/img/contact-menu-edit.png" alt="Contact Menu Edit"/>

This will bring up a small menu where you can configure the properties of the attribute:

<img src="/img/contact-menu-edit-menu.png" alt="Contact Menu Edit Menu" width="400"/>

- **Field Visibility**: where the contact attribute will appear. If it appears in Widget, then it will be editable by default.
- **Required Field**: does the attribute have to be filled for the contact to be valid?
- **Make this field Read-Only in Yabbr Chat**: enabling this will disable the editing of this contact attribute in Yabbr Chat.


---

## Routing

Using routing, you can automatically isolate a customer to a group of agents if a set of conditions are met. Read more about groups [here](../members/groups.md). 

If an agent belongs to a group, and a customer is routed to that group, then the customer's contact will then appear in a new queue for that agent. The name of this new queue will be the name of the route's assigned group.

This documentation will be referring to the 'Advanced View' of the Routing outlined and selected below:

<img src="/img/routing-advanced.png" alt="Routing Advanced View"/>

---

### Routes

The first step is to create a route. A route consists of a group, and a set of rules. If a customer appears in the [Yabbr Chat queue](./chat#queue), and they adequately meet all of the rules of a route, then they will activate the route. When a customer activates a route, their contact is automatically redirected to a new queue for all the agents in the group. 

---

#### Creating a Route

To create a new route, click on the <Tag colour="#ced4da" borderColour="#ced4da" fontColour="#414143">**New Route**</Tag> button under 'Inbound Chat Routing' and outlined below.

<img src="/img/routing-new-route.png" alt="New Route"/>


Clicking this button will bring up a small menu like the one below:

<img src="/img/routing-new-route-menu.png" alt="New Route Menu" width="400"/>

- **Route Name**: the display name of the route to identify it within your workspace.
- **Assigned Group**: the [group](../members/groups.md) that will receive the customer's contact.
- **Enable Route**: enable/disable the functionality of the route.

Finally, to create the new route, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

---

#### Managing Routes

All of your routes that you have created will appear here:

<img src="/img/routing-overview.png" alt="Route Overview"/>

---

##### Applying Rules

As mentioned earlier, each route has a set of rules. When these rules are met, the route is activated. Read more about rules [here](#rules). Below is what the rule configuration menu looks like.

<img src="/img/routing-apply-rules.png" alt="Apply Rules"/>

To configure the rules in a route:
1. Select a route by clicking on it.
2. Add a rule to the route by clicking on one in the the 'Rules' section.
3. Remove a rule from the route by clicking on it in the 'Assigned Rules' section.

You can search the rules by name by typing the name of the rule in the 'Filter' text box.

---

##### Ordering Routes

Routes that appears higher up in this list will have higher priority than routes beneath it. Routes with higher priority will be activated first. For example, if a customer's contact meets the rules for two different routes, then the route with higher priority will be activated. You can reorganise this order by holding down the six dots ⠿ (outlined below) and dragging and dropping each route into the new desired location.

<img src="/img/routing-overview-drag.png" alt="Route Overview Drag and Drop" width="500"/>

---

##### Actions

You can edit a route by clicking the pencil icon, and you can delete a route by clicking the trash icon.

<img src="/img/routing-overview-actions.png" alt="Route Overview Actions" width="500"/>

#### Saving Changes

You need to save any changes made to your routes (this includes adding new routes and modifying old routes). You can do this by clicking the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Publish Changes</Tag> button outlined below.

<img src="/img/routing-publish-changes.png" alt="Publish Changes"/>

---

### Rules

As previously mentioned, a customer will activate a route and be redirected to a new queue if a set of rules is met. These rules can be about the customer's details (name, date of birth etc), or a message that they have sent to a registered contact in your workspace. 

#### Creating a Rule

Firstly to create a new rule, click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">New Rule</Tag> button underneath 'Routing Rules' and outlined below. Then, select the type of rule you want to create:

<img src="/img/routing-rule-create.png" alt="Create New Rule"/>

- **Field**: checks the contact attributes of the customer (eg name and date of birth).
- **SMS**: checks the details of a customer's SMS message.
- **Web**: checks the details of a customer's Web message.
- **Email**: checks the details of a customer's Email.


After selecting a rule type, a small menu will appear like the one below:

<img src="/img/routing-rule-menu.png" alt="New Rule Menu"/>


**Rule Properties**:
- **Rule Name**: the display name of the rule. This is used to identify the rule within the workspace.
- **Rule Operator**: you can have multiple conditions for one rule. Selecting 'OR' means at least one of the conditions has to be satisfied for the whole rule to be satisfied. Selecting 'AND' means all of the conditions must be satisfied for the whole rule to be satisfied.

**Condition Properties**:
A condition compares two values - a property and a value. The value is fixed. If the customer's property (eg name, contact number, message content) meets a specific criteria, then the condition is satisfied.

- **Property to check**: this refers to the specific customer attribute or characteristic being evaluated by the condition. For example, it could be the customer's name, contact number, or the content of their message.
- **Comparison type**: this indicates how the property is being compared to the 'Content to match'. For instance, 'includes' would mean that the 'Content to match' appears somewhere within the 'Property to check'.
- **Content to match**: this is what the 'Property to check' is compared against. 
- **Case sensitive**: enabling this will make the comparison case **sensitive** - this means that two strings are **not** identical if they have different capitalisations.
- **Add Condition**: This will add the condition to the rule.

:::note Note
You can edit a rule after it has been added. You can also remove a rule by clicking the 'X' on its right.
:::

Finally, to add the new rule, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

In the below example, the rule is satisfied when:
The customer's name is exactly John **AND** the customer's birthday is in February.

<img src="/img/routing-rule-example.png" alt="Rule Creation Example"/>

---

#### Managing Rules

All of your rules that you have created will appear here:

<img src="/img/routing-rule-overview.png" alt="Rules Overview"/>

You can edit a rule by clicking the <Tag colour="#ced4da" borderColour="#ced4da" fontColour="#414042">Edit</Tag> button, and you can delete a rule by clicking the <Tag colour="#d92b04" borderColour="#d92b04" fontColour="#FFFFFF">Delete</Tag> button.







