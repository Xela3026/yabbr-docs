---
title: General
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---


import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';


import BrandName from '@site/src/components/BrandName';



# Campaigns

A campaign is a personalised message that is sent out to a set of specified locations all at once. After reading the general documentation, it is recommended to find the documentation for your specific desired campaign type for any extra details.


---

## Setup

### Create

Firstly, on the sidebar, navigate to the type of campaign you desire to create:

[comment]: <> (I want to do this for all the images:)

<CustomisableImage alt="Campaign Sidebar"  width="300"  src="/img/campaign-sidebar.png"/>



---

Once selected, to create a new campaign of that type, select the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Campaign</Tag> button. If no campaigns of that type currently exist, you can just click the blue <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">New Campaign</Tag> button. 

<CustomisableImage alt="Campaign Create Button"  src="/img/campaign-create.png"/>


---

Next, you will want to give your campaign a 'Friendly Name' which will be the display name of the campaign to everyone in your workspace. Then, <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag> your campaign.

<CustomisableImage alt="Campaign Naming"  src="/img/campaign-name.png"/>


Some campaign types like [SMS](./sms-campaigns.md) and [Voice](./voice-campaigns.md) will ask you to select a more specific campaign type. These will be covered in their respective sections.

---

### Audience

Your campaign requires an audience for it to be sent to. Here it will take the form of a contact list. This contact list must be either CSV or XLS format. The file must contain a column with the contact information of all desired recipients of your campaign. The type of  contact information will be determined by your campaign type (e.g. emails for [Email Campaigns](./email-campaigns.md) and phone numbers of [SMS Campaigns](./sms-campaigns.md))

Your contact will either be:
- an email (e.g. abc123@example.com)
- a mobile number. This can be in any form (e.g. 0400000000, +61400000000)

Below is an example of what this file may look like for mobile numbers:

<CustomisableImage alt="Example Numbers"  src="/img/numbers-example.png"/>

---

#### Placeholders

In this document, you can also include additional information about each contact such as their name or age. To achieve this, the first row of information in your file must be dedicated to column names. Then, list the corresponding information beside each contact.

:::info Important
All of your column titles must be in the same row and above all other information.
:::

Below is an example of what this file may look like for emails:

<CustomisableImage alt="Example Emails"  src="/img/emails-example.png"/>

:::tip Tip
The location of the information in the file is irrelevant; it does not have to start in the first row and column. All that is necessary is that relevant and related information is aligned vertically and horizontally. 
:::

These placeholders can then be used later on to personalise your message to the contacts in your campaign. In your message, you can include the title of the column that contains your desired information, and enclose it in curly braces to be personalised for each user. In the above example, your message could start with 'Hello &#123;&#123;names&#125;&#125;...'. This will be discussed further in the [Message](#message) section.

---

#### Upload

Finally, to upload your contact list, simply navigate to the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">👤Audience</Tag> section, click on <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">Upload Contact List</Tag>, and select your contact list file.

<CustomisableImage alt="Upload Contacts"  src="/img/audience-upload-tutorial.png"/>



After uploading your contacts file, if it contains multiple columns of information, click on the drop-down menu outlined below. Then, you must select the title of the column in your contacts file that contains the actual contact. In the example below, the 'phone' column contains all the phone numbers.

<CustomisableImage src="/img/campaign-audience-field.png" alt="Field Selection"/>








---

### Opt-Out

#### Exclusion Lists

There are two list selections here - your 'Opt-Out List' and your 'Exclusion Lists'. Your Exclusion Lists include all the lists of contacts you do not want to receive the campaign. The documentation for lists and how to create them can be found [here](../contacts/opt-out-lists). To add one of your lists to the Exclusion Lists for this campaign, simply click on the drop-down box under 'Exclusion Lists', and click the desired list as below:

<CustomisableImage src="/img/opt-out-dropdown.png" alt="Exclusion Lists Drop-down"/>

To remove a list from your Exclusion Lists, either click on the 'X' next to its name, or navigate back to the drop-down menu and reselect the list you wish to remove.

<CustomisableImage src="/img/exclusion-deletion.png" alt="Exclusion Deletion"/>

:::tip Tip
You can add multiple lists to your Exclusion Lists
:::


#### Opt-Out List

##### Opt-Out List Name

You may give the recipient of your campaign the option to opt-out. For this functionality, you first have to select a list from the drop-down underneath 'Opt-Out List'.

<CustomisableImage src="/img/opt-out-dropdown-two.png" alt="Opt-Out List Drop-down"/>

This will be your 'Opt-Out List', and all recipients of the campaign that opt-out will be added to this list. You can also choose to create a new list for this by selecting '-- New Opt-Out List --', and entering the new list's name in the text box as shown below.

<CustomisableImage src="/img/opt-out-list-name.png" alt="New Opt-Out List Name"/>

Once you have selected a list for opt-out contacts to be added to, an extended menu will appear (as below) to customise this opt-out process for campaign-recipients. Some features may not be available depending on campaign type.

<CustomisableImage src="/img/opt-out-extended.png" alt="Extended Opt-Out Options"/>

---

##### Opt-Out Keywords

Opt-Out Keywords are the words or phrases that campaign-recipients must respond with to opt-out of your campaign. 

:::info Information
The phrases are case insensitive (e.g. 'stop' keyword will include 'Stop' and 'STOP')
:::

To add one of these to your campaigns, type your desired opt-out phrase into the text box under 'Opt-Out Response Keywords', and then click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button to the right of the text box or click 'Enter' on your keyboard. Alternatively, you can disable/enable Opt-Out Keywords by selecting the checkbox above the red box in the image below.

<CustomisableImage src="/img/opt-out-keywords.png" alt="Add Opt-Out Keywords"/>

Alternatively, you can click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">Use Default Keywords</Tag> button, and several standard opt-out phrases will be added to this list of keywords. You can add as many opt-out phrases as you desire, and you can remove an opt-out phrase by clicking the 'X' next to the phrase. 

<CustomisableImage src="/img/remove-keywords.png" alt="Remove Keywords" width="500"/>


If Opt-Out Keywords are not available for the selected campaign type or you have disabled them, you can instead use the &#123;&#123;opt-out&#125;&#125; placeholder in your Message. This will be replaced with an opt-out URL, that will opt-out the campaign-recipient if they click it. This is reiterated in the [Message](#message) section under [Opt-Out Link](#opt-out-link).


##### Opt-Out Message

The Opt-Out Message is the message campaign-recipients will receive after a successful opt-out. Enter the message you desire them to receive in this text box. 

<CustomisableImage src="/img/opt-out-message.png" alt="Opt-Out Message"/>

You can optionally replace unicode characters for mobile-number-recipients by selecting the checkbox above the text box as seen in the previous image. This will simply reduce the SMS character count and/or the SMS units if unicode characters are present.

:::tip Tip
Exclusion Lists and your Opt-Out List are both non-compulsary for your campaign and can be left empty.
:::



---

### Message

#### Templates

The Message is the actual content that the campaign-recipient will receive. You can use a pre-made message template by selecting one from the drop-down menu underneath 'Reuse a Template'. For template documentation and creation, go [here](../templates/general). 

<CustomisableImage src="/img/message-template.png" alt="Message Template Drop-down"/>

:::info Information
To shorten the URLs that appear in your message, select the checkbox seen at the bottom of the image. 
:::

#### Link Tracking
Enabling 'Automatically Shorten Links' as above will also enable Link Tracking - if a campaign recipient clicks on a link in your campaign message, it will be recorded in the [Campaign Results](#campaign-results) file. [Campaign Results](#campaign-results) will then include the first and last time a link is clicked, and the first and last link in the Message that was clicked (in case multiple links are in the email).

#### Message Content

Locate the [Message Type](../message-types/general) documentation for an explanation of message-construction. Navigate to the message type documentation for your specific campaign type (eg SMS, MMS, Voice) for more specific message-construction explanations.

##### Opt Out Link

If you include an &#123;&#123;opt-out&#125;&#125; placeholder in your message, the placeholder will instead be replaced with an opt-out link for campaign-recipients that will opt them out of the campaign if they click it. 

An example of this may be:

'...
To opt-out of this campaign, follow this link: &#123;&#123;opt-out&#125;&#125;'



---

### Send Config

The final step in most campaigns is to configure the send conditions of the campaign. Below is what this menu should look like.

<CustomisableImage src="/img/campaign-send-config.png" alt="Campaign Send Config"/>

#### Sending From

This drop-down menu is where you select the sender of your campaign. This is the contact that your campaign-recipients will receive the campaign from. New contacts can be created through [Channels](../category/channels) - either [Virtual Numbers](../channels/virtual-numbers.md) or [Sender IDs](../channels/sender-ids.md) for a mobile number, or [Email](../channels/email.md) for an email address.

#### Messages Per Hour

This section determines how quickly the campaign will be sent out. Messages per hour is the number of contacts in your contact information file the program will send your campaign to in one hour. If you select 100, the program will send the campaign to a new contact in your file every 36 seconds. If you have 200 contacts in your file and you select a rate of 100/messages/hour, the campaign will be finished being sent out to everyone in 2 hours. Simply click on the drop-down menu, and select the rate you desire.

<CustomisableImage src="/img/messages-per-hour.png" alt="Messages Per Hour" width="400"/>

Alternatively, you can select a 'Custom' amount that doesn't appear in the drop-down, and you can specify it in a text box on the right. 

<CustomisableImage src="/img/custom-messages-per-hour.png" alt="Custom Messages Per Hour" width="500"/>

#### Timezone

This drop-down menu is simply to select the timezone you are using for scheduling in the next section. 

<CustomisableImage src="/img/timezone-campaign.png" alt="Timezone Selection" width="500"/>

#### Schedule

This is where you specify when you want your campaign to run and be sent out. To do this, you must add time periods in which the program will run and send out your campaign to your contacts.

<CustomisableImage src="/img/campaign-schedule.png" alt="Campaign Schedule" width="500"/>

Here are step by step instructions on how this works:
1. Select a desired start time and end time during the day. E.g. 12:00pm to 5:30pm. This will be referred to as your 'hourly time period' in the following steps.

<CustomisableImage src="/img/campaign-start-time.png" alt="Campaign Start Time" width="300"/>

2. Select the dates you want your hourly time period to be active for. Select a start and end date. E.g. 14th of January 2024 to the 18th of January 2024.

<CustomisableImage src="/img/campaign-start-date.png" alt="Campaign Start Date" width="250"/>

3. Select the days within the above dates you want your hourly time period to be active for. E.g. Monday, Tuesday, and Wednesday. 

<CustomisableImage src="/img/day-selection-campaign.png" alt="Campaign Day Selection" width="400"/>


- You can delete selected days by reselecting them in the drop-down menu. Selected days will be bolded in the drop-down menu.

- If no days are selected, it will select 'Daily' by default, in which your hourly time period will run everyday within the dates.

- Otherwise, you can select the checkbox 'Restrict sending times to today' so your hourly time period only runs once today.

- If no dates are selected in the step 2, the campaign will just run during the days selected in step 3 until every contact has been contacted.

4. Click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button next to the schedule to add this entire time period into the campaign's run times. Remove a time period with the 'X' on the far right of the time period's label.

<CustomisableImage src="/img/campaign-remove-date.png" alt="Campaign Remove/Add Date"/>

###### Summary
To create a new time period, select dates during the year, days during the dates, and a time during the days. Add this to your campaign's schedule. The program will send out the campaign during this time period and all other time periods you have added.

Below is what an example campaign schedule could look like. Every weekend from the 15th of January 2024 to the 29th of January 2024, from 12pm to 3pm, the campaign will be sent out to new contacts in the file at a rate of 100 contacts every hour, from a mobile number named 'Demo'. If there were 1200 contacts, this schedule would send out the campaign to the first half of the contacts on the first weekend, and then the second half of the contacts on the second weekend.

<CustomisableImage src="/img/example-campaign-schedule.png" alt="Example Campaign Schedule"/>

Finally, to create this campaign, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create and Review</Tag> button in the top right.

<CustomisableImage src="/img/create-and-review-campaign.png" alt="Create and Review Campaign"/>




---

## Management

### Editing Campaign Options

After creating your campaign, if you want to change one of the options you have selected, navigate to the option you wish to change and click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">🖉</Tag> button in the top right of the option's box as outlined below.

<CustomisableImage src="/img/campaign-editing.png" alt="Campaign Editing Button"/>

Once you have changed what you desire, click the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Update</Tag> button to save your changes.

<CustomisableImage src="/img/campaign-update.png" alt="Update Campaign Button"/>

---

### Actions

[comment]: <> (I need to discuss bulk actions here as well)

Once a campaign has been created, within the campaign and in the campaign menu, a button will appear in the top right called <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag>. This will show you a set of actions you can perform on your campaign like in the menu below (Remember different campaign types may have more or less features. See relevant documentation for more specificity).

<CustomisableImage src="/img/actions-campaign-manage.png" alt="Campaign Actions"/>

#### Duplicate Campaign

This will create a copy of the current campaign and all the settings you have selected for it. When you select this option, a menu will show up like the one below. Firstly, you must give the duplicate a different name with the text box under 'Name'. Next, you need to decide if you want to keep the same audience or upload a new contact list by selecting your desired option under 'Use the same Recipient List?'. If you opt for a new audience, select the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">Upload Contact List</Tag> button outlined below and select your new contact list (and then if necessary select the column name that contains all the contacts). Then, select the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Duplicate</Tag> button to finish the duplication. You will automatically be navigated to the menu of the new duplicate.



<CustomisableImage src="/img/new-contact-duplicate-campaign.png" alt="Duplicate Campaign Menu" width="450"/>

:::info Information
Some campaign types may have extra options. See their relevant documentation for more specificity.
:::
[comment]: <> (specific campaign info will need interactive broadcast duplicate mapping)

[comment]: <> (need exclusion lists docs)

#### Terminate

Terminating the campaign will kill the campaign. You cannot start the campaign again after terminating it.

#### Archive

Archiving the campaign will store the campaign in a separate tab near the top of the screen called 'Archive'. Here, your campaigns cannot be run. They can be unarchived by repeating the archival process - selecting the desired campaign, clicking on <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag>, and selecting 'Remove from Archive'. 

<CustomisableImage src="/img/archive-campaign.png" alt="Campaign Archives" width="400"/>

#### Preview Campaign

This option will allow you to view examples of what your campaign will look like from the end of the user. It allows you to navigate through each contact in your file to see what the campaign looks like for each person, and any placeholders in the message will be replaced with the information relevant to the contact. Navigate through the preview for each contact using the 'Previous' and 'Next' buttons on the bottom. The contact of the preview currently being viewed is displayed above the preview. This preview will be different for each campaign type. See relevant documentation for more specificity.

#### Test Campaign

This option allows you to send an example 'test' campaign to a selected contact to test the functionality and to make sure everything works how you would like it to. Input the contact you want to send the test campaign to, and then you have to fill in any placeholders in your message. This test menu will be different for each campaign type. See relevant documentation for more specificity.

---

### Deduplication

Before you can run your campaign, the program may ask you about something called 'deduplication'. 

<CustomisableImage src="/img/campaign-deduplicate.png" alt="Campaign Deduplication Options" width="600"/>

Within your contact file, there maybe be duplicates of either your contacts or your placeholders. 
- **Don't Deduplicate:** This will run through the contact file in its current state and will send the campaign to the same contact multiple times if that contact appears multiple times.
- **Deduplicate records by Mobile Number:** The wording here will be different for each campaign type, but this second option will only send the campaign to each contact in the file once. If a single contact appears multiple times, only the first instance of the contact will be used.
- **Deduplicate by Message:** This option will only send different messages to the same contact. If a contact appears multiple times, with the same placeholders (and thus message), only the first instance will be used. However, if a contact appears multiple times with different placeholders, all instances will be used.

---

### Running the Campaign

If there are no errors or warnings that appear in your campaign, you can then click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button.

This will start your campaign, and it will send out your message to your contacts as per your selected schedule at the rate of messages/hour you selected. Clicking the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button will also automatically navigate you to a page where you can view the progress of your campaign as it is running. It will show you how many contacts have already been sent the campaign and how many are left to contact. To pause and temporarily stop the campaign from running, at any time you can simply click the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Pause</Tag> button in the top right where the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Go Live</Tag> button used to be.

<CustomisableImage src="/img/campaign-running.png" alt="Running the Campaign"/>

---

### Data collection

There are two files you can download for information about your campaign: 
- Campaign File
- Campaign Results

#### Campaign File

After your campaign is created, you can access this file before, during, or after you have run it. It includes the content of the original contacts file you uploaded, and a report on the validity of the contacts and other details from your campaign setup. If a listed contact is not valid, the report explains what is wrong. E.g. no contact or invalid contact. Click on the button outlined below to access this file.

<CustomisableImage src="/img/campaign-file-download.png" alt="Download Campaign Info" width="400"/>

The other downloadable file on the left is just a copy of your contacts file.

#### Campaign Results

At any point after the campaign has started and at least one contact has received the campaign, in the top right, on the left of the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Actions ˅</Tag> button, a <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Download Reports ˅</Tag> button will appear as outlined below. Click on this drop-down and select 'Campaign Results' to download the current outcomes of the campaign. This will include which contacts have received the campaign, at what time were they received, did the recipient opt-out, and more depending on campaign type.

<CustomisableImage src="/img/campaign-download-reports.png" alt="Download Campaign Report" width="400"/>







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

[comment]: <> (also i need to disable the dark mode functionality cuz it makes everything look bad.)

[comment]: <> (look at the chat settings docs for an idea of some banners to add throughout the docs)





[comment]: <> (the whole templates + message types documentation is really scuffed so it's going to need a lot of drafting, editing, refining, improving, and checking.)

[comment]: <> (I also need to add documentation for Express Messages I think because I mention them in messaging templates.)

[comment]: <> (Also, once I add the documentation for Sender IDs, emails, and Virtual Numbers, I need to reference them more throughout the docs because I talk about them alot)

[comment]: <> (To do: template docs, message types docs, channels docs, intro, getting started, Email2SMS docs, contacts docs)

[comment]: <> (I am happy with most of the explanations in the docs. However, the templates + message types docs I am not happy with. They seem clunky, janky, and incohesive. They will need extensive review. Additionally, I need to reference Sender IDs and Virtual Numbers more throughout the docs.)

[comment]: <> (when message type docs are done, I need to delete them from campaigns)



[comment]: <> (I am going to need more information about Yabbrs manual verification process of the API Keys, domains, emails, sender ids, and virtual numbers.)

[comment]: <> (also, what is an alpha code?)

[comment]: <> (also, i am going to need more information about the inbound functionality of the Email Alias. Is it configuring automatic forwarding to like your workspace id?)

[comment]: <> (I might also need to use Docusaurs tabs in some of my pages instead to break up the content. The general campaign docs could really use this.)




[comment]: <> (finish domain docs with the verificaiton and DNS stuff)

[comment]: <> (I need more information about DNS, and verification of domains, sender ids, and virtual numbers)





[comment]: <> (emails and api keys are good in channels. Domains I need to talk about verificaiton, management, dns etc.)

[comment]: <> (need to use css classes more often instead of hardcoding styling.)






[comment]: <> (finally figured out how to use the google fonts. I should now go and incorporate them throughout all the files.)




[comment]: <> (going back and reading some of these docs - poor quality, incohesive. For example, the keyword reply docs in sms campaigns. Needs work.)

[comment]: <> (If someone manages to make it this far down the dev logs here's just a note - the explanations I created earlier on in the project were way too detailed and convuluted. I explained what a drop down menu was at one point. Anyways I believe the newer docs have much better wording and explanations, so I will have to refine the older docs to match this.)



[comment]: <> (fix up the docsaurus.config.js file so that all information and links are accurate.)

[comment]: <> (in a future version of these docs, firstly I would personalise it more to Yabbr and have less of the default Docusaurus styling. I would also create a General section for all of Yabbr about creating new items, managing items in a menu, searching using a filter, ordering items by name, editing items, and deleting items.)




[comment]: <> (missing docs: virtual number assignment)




[comment]: <> (Do a search in VS Code for - Missing, WIP, Work in progress)

[comment]: <> (Fix up the homepage - don't make a landing page, just make it part of the docs. Take inspiration from the stripe docs and the octopus deploy docs - think getting started, introduction, tutorial, quick links etc.)

[comment]: <> (off the top of my head for a quick links getting started thing - you will probably want to organise and manage your workspace's members first, then setup some contacts like Emails or VNs. Then make some template messages to use, and finally use whatever product you like to contact your customers - campaign, chat, survey etc.)

[comment]: <> (ok that is step one. The next step is fixing up any missing documentation, inaccurate documentation, or WIP documentation)

[comment]: <> (then maybe you can think about doing some swizzling to make it more customised than just the default docusaurus layout. Once again take inspiriation from stripe docs and octopus deploy docs)

[comment]: <> (also fix the headings I think they look ugly.)

[comment]: <> (reorganise everything as well. For example, the general campaings page is HUGE. Separate pages like these out into multiple pages. Double-tiered collapsibility. So, for example, under the collapsible Campaign link, make another collapsible General link. This should also help with the ugly headings because you would only need to differentiate them by size because there is not too many layers. TLDR separate large pages into multiple pages.)

[comment]: <> (oh also while you're at it, fix the X button on the expandable images, it's really annoying that it does not have a hover effect. I need to get rid of the pseudo element and make it a real element so I can give it a hover effect.)

[comment]: <> (oh and also add a search bar)

[comment]: <> (some optional things to include here are a getting started page and introduction page. Then I can also optionally go over every single page and make sure all information is comprhensive, concise, cohesive, and accurate)

[comment]: <> (after all of that I need to get it ready for production - deleting all the comments, pushing all to master and remote branch, getting people to review it, and then maybe adding some placeholders for the white label clients)

[comment]: <> (then finally I can move on to the workflows docs)

[comment]: <> (refer back to this as the whole checklist of things to do.)








[comment]: <> (algolia search is broken and throws an error when you try to search for anything - investigate)






[comment]: <> (TODO: fix algolia search, fix the divs/styling, add aliasing/branded config, and try and fix the jitter effect when loading new images/navigating to anchor link on another page, and some small config changes)

[comment]: <> (given that the React Component CustomisableImages have to load, I think I've fixed the anchor link navigator jitter as best as possible. The jitter has been minimised as much as possible.)




[comment]: <> (added skeleton loaders for images, the anchor link jitter is basically fixed, algolia isn't crashign every time its used. Just need to add branded config now)

[comment]: <> (tried configuring some search priorities in algolia, but the default setting is the best I can get. Trying to get it to recognise page titles/names as searchable, but only < h2 gets registered for search. Works good enough though)

[comment]: <> (finished implementing branded config)