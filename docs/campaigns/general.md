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






# General

A campaign is a personalised message that is sent out to a set of specified locations all at once. After reading the general documentation, it is recommended to find the documentation for your specific desired campaign type for any extra details.



---

## Setup

### Create

Firstly, on the sidebar, navigate to the type of campaign you desire to create:

[comment]: <> (I want to do this for all the images:)

<CustomisableImage alt="Campaign Sidebar"  width="300"  src="/img/campaign-sidebar.png"/>



---

Once selected, to create a new campaign of that type, select the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Campaign</Tag> button. If no campaigns of that type currently exist, you can just click the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">New Campaign</Tag> button. 

![Campaign Create Button](/img/campaign-create.png)

---

Next, you will want to give your campaign a 'Friendly Name' which will be the display name of the campaign to everyone in your workspace. Then, <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag> your campaign.

![Campaign Naming](/img/campaign-name.png)

Some campaign types like [SMS](./sms-campaigns.md) and [Voice](./voice-campaigns.md) will ask you to select a more specific campaign type. These will be covered in their respective sections.

---

### Audience

Your campaign requires an audience for it to be sent to. Here it will take the form of a contact list. This contact list must be either CSV or XLS format. The file must contain a column with the contact information of all desired recipients of your campaign. The type of  contact information will be determined by your campaign type (e.g. emails for [Email Campaigns](./email-campaigns.md) and phone numbers of [SMS Campaigns](./sms-campaigns.md))

Your contact will either be:
- an email (e.g. abc123@example.com)
- a mobile number. This can be in any form (e.g. 0400000000, +61400000000)

Below is an example of what this file may look like for mobile numbers:

![Example Numbers](/img/numbers-example.png)

---

#### Placeholders

In this document, you can also include additional information about each contact such as their name or age. To achieve this, the first row of information in your file must be dedicated to column names. Then, list the corresponding information beside each contact.

:::info Important
All of your column titles must be in the same row and above all other information.
:::

Below is an example of what this file may look like for emails:

![Example Emails](/img/emails-example.png)

:::tip Tip
The location of the information in the file is irrelevant; it does not have to start in the first row and column. All that is necessary is that relevant and related information is aligned vertically and horizontally. 
:::

These placeholders can then be used later on to personalise your message to the contacts in your campaign. In your message, you can include the title of the column that contains your desired information, and enclose it in curly braces to be personalised for each user. In the above example, your message could start with 'Hello &#123;&#123;names&#125;&#125;...'. This will be discussed further in the [Message](#message) section.

---

#### Upload

Finally, to upload your contact list, simply navigate to the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">👤Audience</Tag> section, click on <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">Upload Contact List</Tag>, and select your contact list file.

![Upload Contacts](/img/audience-upload-tutorial.png)


After uploading your contacts file, if it contains multiple columns of information, click on the drop-down menu outlined below. Then, you must select the title of the column in your contacts file that contains the actual contact. In the example below, the 'phone' column contains all the phone numbers.

![Field Selection](/img/campaign-audience-field.png)








---

### Opt-Out

#### Exclusion Lists

There are two list selections here - your 'Opt-Out List' and your 'Exclusion Lists'. Your Exclusion Lists include all the lists of contacts you do not want to receive the campaign. The documentation for lists and how to create them can be found [here](../contacts/opt-out-lists). To add one of your lists to the Exclusion Lists for this campaign, simply click on the drop-down box under 'Exclusion Lists', and click the desired list as below:

![Exclusion Lists Drop-down](/img/opt-out-dropdown.png)

To remove a list from your Exclusion Lists, either click on the 'X' next to its name, or navigate back to the drop-down menu and reselect the list you wish to remove.

![Exclusion Deletion](/img/exclusion-deletion.png)

:::tip Tip
You can add multiple lists to your Exclusion Lists
:::


#### Opt-Out List

##### Opt-Out List Name

You may give the recipient of your campaign the option to opt-out. For this functionality, you first have to select a list from the drop-down underneath 'Opt-Out List'.

![Opt-Out List Drop-down](/img/opt-out-dropdown-two.png)

This will be your 'Opt-Out List', and all recipients of the campaign that opt-out will be added to this list. You can also choose to create a new list for this by selecting '-- New Opt-Out List --', and entering the new list's name in the text box as shown below.

![New Opt-Out List Name](/img/opt-out-list-name.png)

Once you have selected a list for opt-out contacts to be added to, an extended menu will appear (as below) to customise this opt-out process for campaign-recipients. Some features may not be available depending on campaign type.

![Extended Opt-Out Options](/img/opt-out-extended.png)

---

##### Opt-Out Keywords

Opt-Out Keywords are the words or phrases that campaign-recipients must respond with to opt-out of your campaign. 

:::info Information
The phrases are case insensitive (e.g. 'stop' keyword will include 'Stop' and 'STOP')
:::

To add one of these to your campaigns, type your desired opt-out phrase into the text box under 'Opt-Out Response Keywords', and then click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button to the right of the text box or click 'Enter' on your keyboard. Alternatively, you can disable/enable Opt-Out Keywords by selecting the checkbox above the red box in the image below.

![Add Opt-Out Keywords](/img/opt-out-keywords.png)

Alternatively, you can click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">Use Default Keywords</Tag> button, and several standard opt-out phrases will be added to this list of keywords. You can add as many opt-out phrases as you desire, and you can remove an opt-out phrase by clicking the 'X' next to the phrase. 

![Remove Keywords](/img/remove-keywords.png)


If Opt-Out Keywords are not available for the selected campaign type or you have disabled them, you can instead use the &#123;&#123;opt-out&#125;&#125; placeholder in your Message. This will be replaced with an opt-out URL, that will opt-out the campaign-recipient if they click it. This is reiterated in the [Message](#message) section under [Opt-Out Link](#opt-out-link).


##### Opt-Out Message

The Opt-Out Message is the message campaign-recipients will receive after a successful opt-out. Enter the message you desire them to receive in this text box. 

![Opt-Out Message](/img/opt-out-message.png)

You can optionally replace unicode characters for mobile-number-recipients by selecting the checkbox above the text box as seen in the previous image. This will simply reduce the SMS character count and/or the SMS units if unicode characters are present.

:::tip Tip
Exclusion Lists and your Opt-Out List are both non-compulsary for your campaign and can be left empty.
:::



---

### Message

#### Templates

The Message is the actual content that the campaign-recipient will receive. You can use a pre-made message template by selecting one from the drop-down menu underneath 'Reuse a Template'. For template documentation and creation, go [here](../templates/sms-templates.md). 

![Message Template Drop-down](/img/message-template.png)

:::info Information
To shorten the URLs that appear in your message, select the checkbox seen at the bottom of the image. 
:::

#### Link Tracking
Enabling 'Automatically Shorten Links' as above will also enable Link Tracking - if a campaign recipient clicks on a link in your campaign message, it will be recorded in the [Campaign Results](#campaign-results) file. [Campaign Results](#campaign-results) will then include the first and last time a link is clicked, and the first and last link in the Message that was clicked (in case multiple links are in the email).

#### Message Content

You can create and edit your message by typing in the text box underneath 'Message Content'. [Email Campaigns](./email-campaigns.md) will have extra content here, so view its specific documentation for extra information.

![Campaign Message Content](/img/message-content-campaign.png)

As you can see in the image above, you can select a checkbox to replace unicode characters in messages to mobile numbers. This will reduce the SMS character and unit usage if unicode characters are present in your message.

[comment]: <> (might move this into specific SMS docs)

##### Placeholders

Along with normal text, this message also supports placeholders. Placeholders are enclosed in double braces like &#123;&#123;this&#125;&#125;. The name of the placeholder inside of the braces will be the name of the column inside your contact information file that you are pulling information from. For example, if your contact file had a column called 'client_name' connected to each contact, your message could start like:

'Hello &#123;&#123;client_name&#125;&#125;,
...'

When your campaign is sent out, this placeholder will be replaced with the contact's name that is listed in the contact information file. 

##### Opt Out Link

If you include an &#123;&#123;opt-out&#125;&#125; placeholder in your message, the placeholder will instead be replaced with an opt-out link for campaign-recipients that will opt them out of the campaign if they click it. 

An example of this may be:

'...
To opt-out of this campaign, follow this link: &#123;&#123;opt-out&#125;&#125;'



---

### Send Config

The final step in most campaigns is to configure the send conditions of the campaign. Below is what this menu should look like.

![Campaign Send Config](/img/campaign-send-config.png)

#### Sending From

This drop-down menu is where you select the sender of your campaign. This is the contact that your campaign-recipients will receive the campaign from. New contacts can be created through [Channels](../channels) - either [Virtual Numbers](../channels/virtual-numbers.md) or [Sender IDs](../channels/sender-ids.md) for a mobile number, or [Email](../channels/email.md) for an email address.

#### Messages Per Hour

This section determines how quickly the campaign will be sent out. Messages per hour is the number of contacts in your contact information file the program will send your campaign to in one hour. If you select 100, the program will send the campaign to a new contact in your file every 36 seconds. If you have 200 contacts in your file and you select a rate of 100/messages/hour, the campaign will be finished being sent out to everyone in 2 hours. Simply click on the drop-down menu, and select the rate you desire.

![Messages Per Hour](/img/messages-per-hour.png)

Alternatively, you can select a 'Custom' amount that doesn't appear in the drop-down, and you can specify it in a text box on the right. 

![Custom Messages Per Hour](/img/custom-messages-per-hour.png)

#### Timezone

This drop-down menu is simply to select the timezone you are using for scheduling in the next section. 

![Timezone Selection](/img/timezone-campaign.png)

#### Schedule

This is where you specify when you want your campaign to run and be sent out. To do this, you must add time periods in which the program will run and send out your campaign to your contacts.

![Campaign Schedule](/img/campaign-schedule.png)

Here are step by step instructions on how this works:
###### 1. Select a desired start time and end time during the day. E.g. 12:00pm to 5:30pm. This will be referred to as your 'hourly time period' in the following steps.

![Campaign Start Time](/img/campaign-start-time.png)

###### 2. Select the dates you want your hourly time period to be active for. Select a start and end date. E.g. 14th of January 2024 to the 18th of January 2024.

![Campaign Start Date](/img/campaign-start-date.png)

###### 3. Select the days within the above dates you want your hourly time period to be active for. E.g. Monday, Tuesday, and Wednesday. 

[comment]: <> (I need to fix the proportions of this image. It is way too big currently)
![Campaign Day Selection](/img/day-selection-campaign.png)

- You can delete selected days by reselecting them in the drop-down menu. Selected days will be bolded in the drop-down menu.

- If no days are selected, it will select 'Daily' by default, in which your hourly time period will run everyday within the dates.

- Otherwise, you can select the checkbox 'Restrict sending times to today' so your hourly time period only runs once today.

- If no dates are selected in the step 2, the campaign will just run during the days selected in step 3 until every contact has been contacted.

###### 4. Click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button next to the schedule to add this entire time period into the campaign's run times. Remove a time period with the 'X' on the far right of the time period's label.

![Campaign Remove/Add Date](/img/campaign-remove-date.png)

###### Summary
To create a new time period, select dates during the year, days during the dates, and a time during the days. Add this to your campaign's schedule. The program will send out the campaign during this time period and all other time periods you have added.

Below is what an example campaign schedule could look like. Every weekend from the 15th of January 2024 to the 29th of January 2024, from 12pm to 3pm, the campaign will be sent out to new contacts in the file at a rate of 100 contacts every hour, from a mobile number named 'YabbrDemo'. If there were 1200 contacts, this schedule would send out the campaign to the first half of the contacts on the first weekend, and then the second half of the contacts on the second weekend.

![Example Campaign Schedule](/img/example-campaign-schedule.png)

Finally, to create this campaign, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create and Review</Tag> button in the top right.


![Create and Review Campaign](/img/create-and-review-campaign.png)

[comment]: <> (Ask Logan about the screenshots with 'YabbrDemo' in them and if they need to be changed for other clients)


[comment]: <> (After this point, I need to check more to make sure this is 'General' because it is based off of email and SMS)

---

## Management

### Editing Campaign Options

After creating your campaign, if you want to change one of the options you have selected, navigate to the option you wish to change and click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">🖉</Tag> button in the top right of the option's box as outlined below.

![Campaign Editing Button](/img/campaign-editing.png)

Once you have changed what you desire, click the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Update</Tag> button to save your changes.

![Update Campaign Button](/img/campaign-update.png)

---

### Actions

[comment]: <> (I need to discuss bulk actions here as well)

Once a campaign has been created, within the campaign and in the campaign menu, a button will appear in the top right called <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag>. This will show you a set of actions you can perform on your campaign like in the menu below (Remember different campaign types may have more or less features. See relevant documentation for more specificity).

![Campaign Actions](/img/actions-campaign-manage.png)

#### Duplicate Campaign

This will create a copy of the current campaign and all the settings you have selected for it. When you select this option, a menu will show up like the one below. Firstly, you must give the duplicate a different name with the text box under 'Name'. Next, you need to decide if you want to keep the same audience or upload a new contact list by selecting your desired option under 'Use the same Recipient List?'. If you opt for a new audience, select the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">Upload Contact List</Tag> button outlined below and select your new contact list (and then if necessary select the column name that contains all the contacts). Then, select the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Duplicate</Tag> button to finish the duplication. You will automatically be navigated to the menu of the new duplicate.

[comment]: <> (need to fix the size/proportions of this image too. too big and too blurry)

![Duplicate Campaign Menu](/img/new-contact-duplicate-campaign.png)

:::info Information
Some campaign types may have extra options. See their relevant documentation for more specificity.
:::
[comment]: <> (specific campaign info will need interactive broadcast duplicate mapping)

[comment]: <> (need exclusion lists docs)

#### Terminate

Terminating the campaign will kill the campaign. You cannot start the campaign again after terminating it.

#### Archive

Archiving the campaign will store the campaign in a separate tab near the top of the screen called 'Archive'. Here, your campaigns cannot be run. They can be unarchived by repeating the archival process - selecting the desired campaign, clicking on <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag>, and selecting 'Remove from Archive'. 

[comment]: <> (need to fix the size/proportions of this image too. too big and too blurry)
![Campaign Archives](/img/archive-campaign.png)

#### Preview Campaign

This option will allow you to view examples of what your campaign will look like from the end of the user. It allows you to navigate through each contact in your file to see what the campaign looks like for each person, and any placeholders in the message will be replaced with the information relevant to the contact. Navigate through the preview for each contact using the 'Previous' and 'Next' buttons on the bottom. The contact of the preview currently being viewed is displayed above the preview. This preview will be different for each campaign type. See relevant documentation for more specificity.

#### Test Campaign

This option allows you to send an example 'test' campaign to a selected contact to test the functionality and to make sure everything works how you would like it to. Input the contact you want to send the test campaign to, and then you have to fill in any placeholders in your message. This test menu will be different for each campaign type. See relevant documentation for more specificity.

---

### Deduplication

Before you can run your campaign, the program may ask you about something called 'deduplication'. 

![Campaign Deduplication Options](/img/campaign-deduplicate.png)

Within your contact file, there maybe be duplicates of either your contacts or your placeholders. 
- **Don't Deduplicate:** This will run through the contact file in its current state and will send the campaign to the same contact multiple times if that contact appears multiple times.
- **Deduplicate records by Mobile Number:** The wording here will be different for each campaign type, but this second option will only send the campaign to each contact in the file once. If a single contact appears multiple times, only the first instance of the contact will be used.
- **Deduplicate by Message:** This option will only send different messages to the same contact. If a contact appears multiple times, with the same placeholders (and thus message), only the first instance will be used. However, if a contact appears multiple times with different placeholders, all instances will be used.

---

### Running the Campaign

If there are no errors or warnings that appear in your campaign, you can then click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button.

This will start your campaign, and it will send out your message to your contacts as per your selected schedule at the rate of messages/hour you selected. Clicking the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button will also automatically navigate you to a page where you can view the progress of your campaign as it is running. It will show you how many contacts have already been sent the campaign and how many are left to contact. To pause and temporarily stop the campaign from running, at any time you can simply click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Pause</Tag> button in the top right where the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button used to be.

![Running the Campaign](/img/campaign-running.png)

---

### Data collection

There are two files you can download for information about your campaign: 
- Campaign File
- Campaign Results

#### Campaign File

After your campaign is created, you can access this file before, during, or after you have run it. It includes the content of the original contacts file you uploaded, and a report on the validity of the contacts and other details from your campaign setup. If a listed contact is not valid, the report explains what is wrong. E.g. no contact or invalid contact. Click on the button outlined below to access this file.

![Download Campaign Info](/img/campaign-file-download.png)

The other downloadable file on the left is just a copy of your contacts file.

#### Campaign Results

At any point after the campaign has started and at least one contact has received the campaign, in the top right, on the left of the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag> button, a <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Download Reports ˅</Tag> button will appear as outlined below. Click on this drop-down and select 'Campaign Results' to download the current outcomes of the campaign. This will include which contacts have received the campaign, at what time were they received, did the recipient opt-out, and more depending on campaign type.

![Download Campaign Report](/img/campaign-download-reports.png)





[comment]: <> (Notes: Fix the images. They are too big and look bad.)
[comment]: <> (Need to review the 'Management' section to make sure it aligns with most campaign types.)
[comment]: <> (Need to update 'Duplicate Campaign' with the field/column drop-down for contacts)
[comment]: <> (Need to understand exclusion lists.)
[comment]: <> (Need to understand data collection. It can be vague though since this is just general)
[comment]: <> (Need to see if there are any more errors or warnings for campaign creation)
[comment]: <> (Need to check wording of docs)
[comment]: <> (Need to check accuracy of docs, specifically deduplication because that was an educated guess)
[comment]: <> (I need to be more specific about what each report/downloadable file auto-generated from running the campaign does. Currently I have no idea and it is bad unspecific docs.)






[comment]: <> (Might need to add docs about the different states of a campaign - e.g. validating, completed, inactive etc.)
[comment]: <> (Might need to add more details about the campaign files and reports and what each column means.)
[comment]: <> (I think I know how to fix images: don't turn them into behind the text in word)
[comment]: <> (Need to add user guides for the receipts under campaign managements. TBD if this will appear in general or in specific locations. Already appears under validation campaigns so this may have to be moved.)
[comment]: <> (Might also need more detail about characters and units in terms of unicode, MMS, and SMS)
[comment]: <> (Another note: I forgot to add bulk action documentation in the campaigns menu)
[comment]: <> (Alex 1 had a great idea: and that page - SMS unit calculations - would have an input you can enter a message in to calculate the number of units)







[comment]: <> (Things to work on today: try and finish as much of the specific docs for voice and SMS campaigns as possible. Proof read & remove exclusion lists in Actions from General. Fix all the images so they aren't blown up and grainy. Work on the home page. Work on other user guides if time is left. Add barriers and more obvious separators between sections. Setup version control. Add receipts user guides. Maybe make a new campaign docs or add section to general campaign docs for campaign file user guides. Maybe separate some things out of general campaign docs into separate pages when they repeat a lot - text boxes, messages, unicode, schedule, keyword replies, contact import etc. Basically reorganising stuff to make it easier for users. Replace all instances of 'Yabbr' with placeholders.)

[comment]: <> (ask Logan if I need to make receipt and campaign file user guides.)

[comment]: <> (figured out image thing. I was zooming in and out on chrome. To keep it consistent from now on, make it 67% zoom.)

[comment]: <> (may also need to still do user guides for the campaign overview menu etc.)

[comment]: <> (I NEED a separate section for text editors and unicode characters etc. AND I NEED a separate section for audio message creators because they are everywhere else in docs as well.)







[comment]: <> (definitive  things to do: proofread, add barrier between each section, make the templates and message mediums section and reference everything back to there, add receipts and campaign file and campaign overview documentation in campaigns, order all the items on the sidebar properly)

[comment]: <> (what I'm done: campaigns, surveys, transcripts, reports, half of templates)

[comment]: <> (to fix all the super enalrged grainy images in campaign docs: turn them into HTML images so you can specify an exact width that is smaller, so that it's not blown up and grainy, but rather high quality)




[comment]: <> (want to add more stuff to make it look better. More react components, tabs etc. I still also want to make the images look better. Maybe a border, some box shadow, hover shadow or border etc)

[comment]: <> (Once I right in the docs for everything, I need to go back and make sure everything is relevantly linked together - like transcripts, message types, virtual numbers etc)

[comment]: <> (also, a lot of pages feel very crowded. I need to add more negative space)

[comment]: <> (In surveys, quick replies, and campaigns, there are message composers for SMS, MMS, voice, email etc. I need to link all of these to the docs for templates so I don't have to keep repeating the message composing docs.)

[comment]: <> (I also need a dedicated section in the templates for each message type just called 'message composing' so I can link users directly to that section.)







