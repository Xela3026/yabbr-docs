---
title: Email Campaigns
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


# Email Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to email campaigns. It is recommended to read the general documentation first. 

---

## Setup

The only feature unique to the setup of an Email Campaign is your Message. 

### Message

#### Subject

Firstly, for an email campaign, you are required to add a subject to your email. Simply enter the text you want to appear as the subject in the outlined text box below.

![Email Subject](/img/campaign-email-subject.png)

#### Email HTML

For the actual content of the email, you can simply use the text editor provided as outlined in [General](./general.md). Alternatively, you can create your email using HTML by toggling the switch above the text editor as outlined below. 

![Enable HTML Editing](/img/campaign-email-html.png)

After enabling this option, use the same text box to create your campaign message. The content entered in here will then be interpreted as HTML. Toggle the above switch again to disable this option.

#### Links

To imbed links into the email, you cannot simply type out the link in the rich text editor or the HTML editor.

##### Rich Text Editor

To imbed a link in the rich text editor, you must first highlight the text that you want to turn into the clickable link. Then, click the button highlighted below (or use Ctrl+K) to bring up a small menu. Enter the full link into the text box that appears and click 'Save' to imbed this link onto the word you highlighted.

![Link Creation](/img/campaign-email-links.png)

The example above will direct users to google.com when they click on the word 'link'.

##### HTML Editor

You can simply imbed your links the same as you would with any other link in HTML as exemplified below.

```HTML title="Example HTML Link"
<a href="google.com">google.com</a>

<!-- or -->

<a href="google.com">Google</a>

```

##### Link Tracking

To enable the Link Tracking option detailed [here](./general.md#link-tracking), links must follow the appropriate formatting described above, and the 'Automatically Shorten Links' checkbox must be selected.

#### Attachments

In a standard email, you can attach certain files to be sent with the email. Similarly here with an email campaign, you can upload files that will be sent with your email campaign by clicking the button outlined below and selecting your desired files.

![Add Attachments to Email](/img/campaign-email-attachments.png)

Remove an attachment by clicking the bin icon on the right of the attachment name.

![Delete Attachments from Email](/img/campaign-delete-attachment.png)



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


