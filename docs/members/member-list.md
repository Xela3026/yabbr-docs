---
title: Member List
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 6
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

# Members

The 'Members' are all of the individuals in your workspace. You can organise and configure these members and their profiles by navigating to building icon on the top right of the page (outlined below), and selecting 'Members'.

---

<img src="/img/member-navigation.png" alt="Members Navigation"/>

---


Then, to navigate between the different 'Members' configuration options, click on the different tabs outlined below. In the below example, 'Member List' is currently selected:

---

<img src="/img/member-nav-nav.png" alt="Members Tab Navigation"/>

---


## Member List

Your 'Member List' is a record of all the members in your workspace. Here you can add members, delete members, and update any permissions or features each member has access to.

### Member Creation

To add a new member to the workspace, first click on the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Member</Tag> button outlined below.

---

<img src="/img/member-create.png" alt="Member Create"/>

---

Then, a small menu will appear like the one below.

---

<img src="/img/member-create-menu.png" alt="Member Create Menu" width="450"/>

---

- **Email**: the email address of the new member.
- **Role**: the role of the new member inside the workspace. New members can either be an 'Agent', 'Administrator', or 'Owner'. Agents can have their permissions modified.Administrators have all permissions.  Owners are the same as Administrators except their role cannot be changed and they cannot be removed.

Finally, to confirm and create the new member into the workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

### Member Management

All of your workspace's members will appear here:

<img src="/img/member-overview.png" alt="Member Overview"/>

This menu also details some information about each member:

- **Role**: the role of the member in the workspace.
- **Email**: the registered email address of the member.
- **Member Since**: when the user was added to the workspace.
- **Last Access**: when the user was last active in the workspace.
- **Status**: *no active functionality*.

---

To [update a member](#update-member), click on the pencil icon. To [change the permissions](#permissions) of a member, click on the key icon. To remove a member from the workspace, click on the trash icon and then click the <Tag colour="#f28d35" borderColour="#f28d35" fontColour="#FFFFFF">Confirm</Tag> button that will appear.

<img src="/img/member-management.png" alt="Member Management"/>

---



#### Update Member

When you update a member, you can change their role, status, and virtual number assignment for Email2SMS. You **cannot** change their registered email. After clicking on the button to update a member, a small menu will appear like the one below:

---

<img src="/img/member-update.png" alt="Member Update Menu" width="450"/>

---

You can change each option below by selecting a new option in the drop-down menus above.

- **Role**: the role of the member in the workspace.
- **Status**: whether the member's profile is enabled within the workspace. A disabled member's profile is not functional. This status can either be 'Enabled' or 'Disable'.
- **Virtual Number Assignment**: this is the [Virtual Number](../channels/virtual-numbers.md) registered in your workspace that this member will use for [Email2SMS](#email2sms) communications. To disable Email2SMS functionality for the member, just select 'Disabled' for this option.

Finally, to confirm and register the changes, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.

---

#### Permissions

Your workspace has hundreds of available functions. Administrators and Owners will always be able to access all functions. However, you can modify which functions Agents are allowed to use. These are the Agent's 'Permissions'. After clicking on the button to update permissions, a small menu will appear like the one below:

---

<img src="/img/member-permissions.png" alt="Member Permissions Menu" width="450"/>

---

Each permission is described by its title. For example, the 'Initiate SMS Chats' permission allows a member to start a new chat with a customer via SMS. Permissions under 'Permissions' are active for the member. Permissions under 'Unassigned' are inactive for the member. To switch permissions between categories, click on them. For example, to add a permission to 'Permissions', click on it in 'Unassigned'. To remove a permission from 'Permissions', click on it in 'Permissions'. You can also search permissions by their name by using the 'Filter' text box.


#### Actions

There are three actions you can perform on the 'Member List'. To access these, click on the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag> button outlined below.

---

<img src="/img/member-actions.png" alt="Member Actions"/>

---


This will give you three options:

---

<img src="/img/member-actions-extended.png" alt="Member Actions Options" width="450"/>

---

##### Export List to CSV

This will transfer all of the information listed here about each member into a CSV document. This CSV document will then be downloaded onto your device. When you click this option, a small menu will appear like the one below. Select the timezone you want the CSV file to use for dates and times, and then click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Get Report</Tag> to download the file.

---

<img src="/img/member-timezone.png" alt="CSV File Timezone Selection" width="450"/>

---

##### Bulk Upload New Members

You can add several members to the workspace at once. When you click this option, a small menu will appear like the one below. Click on 'Upload Member List' and select your CSV file with all the members you would like to add to the workspace. This document must be [formatted correctly](#formatting-member-list-file) and will be explained shortly. Alternatively, click 'Download Template (Bulk Upload)' for an example of correct formatting.

---

<img src="/img/member-upload-list.png" alt="Upload New Members" width="450"/>

---

###### Formatting Member List File

To be accurately read by the program, your member list must be formatted exactly as below. Replace the information in each column with the information of the new members you wish to add. You can also add more members to the file by adding a new row of information.

---

<img src="/img/member-list-format.png" alt="Member List Formatting"/>

---

Each column specifies a different property of each new member:

- **email**: the email address of the new member.
- **role**: the role of the new member.
- **name**: the display name of the new member within the workspace.
- **phone**: the phone number of the new member.
- **title**: the display title of the new member within the workspace.

###### Bulk Upload Configurations

Once you have uploaded your member list file and it is appropriately formatted, there are some final options you have to specify before completing the bulk upload. After uploading the file, the following options will appear:

<img src="/img/member-list-config.png" alt="Member List Configuration" width="450"/>

---

Enabling each option executes the bulk upload differently:

- **Create New Accounts**: if an email is not registered with a member (the member does not currently exist), a new member account will be created.
- **Set Member Profiles**: if an email is not registered with a member, it will be skipped in the bulk upload.
- **Both Enabled**: if an email is registered with a member (the member already exists), their current member account will be overwritten/updated with the new information.

If both options are enabled (green)




##### Bulk Apply Permissions







#### Email2SMS

