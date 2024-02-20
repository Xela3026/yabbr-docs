---
title: MMS Campaigns
toc_min_heading_level: 2
toc_max_heading_level: 6
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


# MMS Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to MMS campaigns. It is recommended to read the general documentation first. 

:::info Important
MMS Campaigns can only be sent to MMS-enabled phone numbers
:::

---

## Setup

The only feature unique to the setup of an MMS Campaign is your Message. 

### Message

UNavigate to the [MMS Message Type](../message-types/mms.md) documentation for an explanation of message-construction here.

---

## Management

### Actions

#### Preview Campaign

Below is an example of what the preview of an MMS Campaign could look like. The contact of the preview is listed at the top as '400000000'. Then, at the top of the phone, it displays the number that is sending the campaign. Here the campaign is being sent by +61 400 000 001. Next it displays the actual message, with the subject up the top, the text content in the middle, and the attachment at the bottom. If there were any placeholders in the message, they would be replaced with the relevant information from the contacts file. You can see a preview for every single contact. Navigate between them using the 'Previous' and 'Next' buttons on the bottom of the preview.

![MMS Campaign Preview](/img/campaign-mms-preview.png)

#### Test Campaign

Below is an example of the Test Campaign menu for MMS Campaigns. As explained in the general [Test Campaign](./general.md#test-campaign) documentation, enter the mobile number that you would like to receive the test in the 'Recipient Phone No.' text box as well as the region of the phone number in the drop-down menu on the left. Then, you must fill in any placeholders you have included. They will be listed on the left under 'Template Fields', and highlighted in yellow on the preview on the right. Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Send</Tag> to send the test campaign.

![MMS Campaign Test](/img/campaign-mms-test.png)