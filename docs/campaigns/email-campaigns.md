---
title: Email Campaigns
toc_min_heading_level: 2
toc_max_heading_level: 6
---


import Tag from '@site/src/components/Tag';


# Email Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to email campaigns. It is recommended to read the general documentation first. 

---

## Setup

The only feature unique to the setup of an Email Campaign is your Message. 

### Message

Navigate to the [Email Message Type](../message-types/emails.md) documentation for an explanation of message-construction here.

##### Link Tracking

To enable the Link Tracking option detailed [here](./general.md#link-tracking), links must follow the appropriate formatting described above, and the 'Automatically Shorten Links' checkbox must be selected.




---

## Management

### Actions

#### Preview Campaign

Below is an example of what the preview of an email campaign could look like. The contact of the preview is listed at the top as 'abc123@example.com'. Then, moving down, it shows the subject of the email, the sender, and then the content of the email. If there were any placeholders in the message, they would be replaced with the relevant information from the contacts file. You can see a preview for every single contact. Navigate between them using the 'Previous' and 'Next' buttons on the bottom of the preview.

![Email Campaign Preview](/img/campaign-email-preview.png)

#### Test Campaign

Below is an example of the Test Campaign menu for emails. As explained in the general [Test Campaign](./general.md#test-campaign) documentation, enter the email that you would like to receive the test in the 'Recipient Email' text box. Then, you must fill in any placeholders you have included. These will be listed on the left under 'Template Fields', and highlighted in yellow on the preview on the right. Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Send</Tag> to send the test campaign.

![Email Campaign Test](/img/campaign-email-test.png)

#### Completion Notification

There is an extra option under <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag> for emails called 'Completion Notification'. Enabling this option will automatically send a notification to a desired email address upon the completion of the campaign (all contacts have received the campaign). Clicking on this will bring up a menu like the one below. Simply enter the email address you would like to receive the completion notification in the text box outlined below, and then click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Apply</Tag>.

![Completion Notification Menu](/img/campaign-completion-notification.png)


