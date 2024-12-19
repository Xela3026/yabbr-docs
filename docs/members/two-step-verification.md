---
title: Two-Step Verification
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';

import Tag from '@site/src/components/Tag';

# Two-Step Verification

You may want members of your workspace to re-authenticate occasionally. Here, you can specify how long a member's session in the workplace can last before they have to re-authenticate themselves. 

[comment]: <> (ask about two-step verification because I'm unsure if that is a feature and if so I do not know how to document it.)

---

## New Verification Type

To modify the specifics of your workspace's re-authentication, click on <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">New Verification Type</Tag> as outlined below. Then, you need to select the verification type you want to modify out of 'SMS Verification' and 'Google Authenticator (TOTP)'.

<CustomisableImage src="/img/tsv-new.png" alt="New Verification Type" width="450"/>

### Verification Configuration

[comment]: <> (I don't really know what I'm talking about this section. Review and modify it to be more accurate when you hear back from Logan.)

When you select a verification type, a small menu will appear like the one below. This menu is identical for both verification types.

<CustomisableImage src="/img/tsv-menu.png" alt="Verification Modification Menu" width="450"/>

- **Max Member Session Length**: after how many minutes in the workspace should a member be timed out and forced to log in again.
- **Require authentication with every login**: enabling this will force members to go through the authentication process every time they log in.

[comment]: <> (this will definitely need to be reviewed and changed because this is not descriptive and I do not know what I am talking about.)

Then, to save these changes, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.

:::tip Tip
You can use the 'Suggested Timeouts' buttons to automatically set the Max Member Session Length to specific time intervals like an hour or a week.
:::



