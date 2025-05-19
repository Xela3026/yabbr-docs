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

A campaign is a personalised message that is sent out to a large group of people all at once. After reading this general documentation, it is recommended to read the documentation for your desired campaign type for more information.


---

## Setup

### Create

Firstly, select your desired campaign type:

<CustomisableImage alt="Campaign Sidebar"  width="300"  src="/img/campaign-sidebar.png"/>

<br/>

:::note Note
Validation campaigns do not send a message. They are used to validate a list of phone numbers. Voice campaigns are used to call the contacts.
:::

<br/>



---

Next, create a new campaign with the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Campaign</Tag> button. 

<CustomisableImage alt="Campaign Create Button"  src="/img/campaign-create.png"/>


---

Then, give your campaign a name and click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.

<CustomisableImage alt="Campaign Naming"  src="/img/campaign-name.png"/>


Some campaign types like [SMS](./sms-campaigns.md) and [Voice](./voice-campaigns.md) will ask you to select a more specific campaign type. These will be covered in their respective sections.

---

### Audience

Your campaign needs an audience. This will take the form of a list of contacts. This contact list must be either CSV or XLS format. It must also contain one column with the contact information of all desired recipients of your campaign. 

Each contact will either be:
- an email (e.g. abc123@example.com)
- or a mobile number. This can be in any form (e.g. 0400000000, +61400000000)

Below is an example of what this file may look like for mobile numbers:

<CustomisableImage alt="Example Numbers"  src="/img/numbers-example.png"/>

---

#### Placeholders

In your audience file, you can also include additional information about each contact such as their name or age. Each column will store a different category of information (eg age, name, address). Each row will store a different contact. If you wish to include column names, they must go in the first row.

Below is an example audience file that stores the email and name of each contact:

<CustomisableImage alt="Example Emails"  src="/img/emails-example.png"/>

Your campaign message can include placeholders for certain personalised information like names. A placeholder is just one of the column names in your audience file surrounded by curly braces (eg &#123;&#123;names&#125;&#125;). When contacts receive the campaign message, the placeholder will be replaced by the corresponding value for each contact in the audience file.

<!-- This additional information can be used to personalise the campaign message for each contact. This is achieved via **placeholders**. A placeholder represents a piece of information from your audience file like contacts' names. When you include one in your campaign message, it will be automatically replaced with the corresponding value for each contact. To use a placeholder, surround the desired column name in curly braces. For example, "Hello &#123;&#123;names&#125;&#125;.." would use the value stored in the `names` column for each contact. -->


#### Upload

To upload your contact list, go to the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">👤Audience</Tag> section and click <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#000000">Upload Contact List</Tag>.

<CustomisableImage alt="Upload Contacts"  src="/img/audience-upload-tutorial.png"/>

If the file contains multiple columns, select the column name that contains the actual contacts (phone number/email): 

<CustomisableImage src="/img/campaign-audience-field.png" alt="Field Selection"/>





---

### Opt-Out Config

Configure which contacts you would like to exclude from the campaign. You may also nominate a list to store the contacts of any recipients who opt-out of your campaign. This section is optional. 


#### Opt-Out List

Contacts in the opt-out list will be excluded from the campaign. If a campaign-recipient opts out of your campaign, they will be added to the opt-out list. Learn more about the opting out process below.

##### Opt-Out List Name

Select your opt-out list from the drop-down menu. You can choose a list that already exists in your workspace, or create a new one. Learn more about your workspace's contact lists [here](../contacts/opt-out-lists.md).

<CustomisableImage src="/img/opt-out-dropdown-two.png" alt="Opt-Out List Drop-down"/>

If you nominate for a new opt out list, you must give it a name.

<CustomisableImage src="/img/opt-out-list-name.png" alt="New Opt-Out List Name"/>

After selecting an opt-out list, an extended menu will appear (as below) to customise the opt-out process for campaign-recipients. Some features may not be available depending on campaign type.

<CustomisableImage src="/img/opt-out-extended.png" alt="Extended Opt-Out Options"/>


##### Opt-Out Keywords

Opt-Out Keywords are the words or phrases that campaign-recipients must respond with to opt-out of your campaign. They are case insensitive.

To create one of these phrases, enter the desired opt-out phrase into the 'Opt-Out Response Keywords' text box, and then click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button. The phrase can be just one word, or it can be multiple. You can repeat this process to add several different opt-out phrases. You can disable opt-out keywords all together by disabling the check box.

<CustomisableImage src="/img/opt-out-keywords.png" alt="Add Opt-Out Keywords"/>

Alternatively, you can click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">Use Default Keywords</Tag> button, and several standard opt-out phrases will be added to this list of keywords. 


##### Opt-Out Message

The Opt-Out Message is the message campaign-recipients will receive after a successful opt-out. Enter this message in the text-box below.

<CustomisableImage src="/img/opt-out-message.png" alt="Opt-Out Message"/>

##### Opt Out Link

If you include an &#123;&#123;opt-out&#125;&#125; placeholder in your **campaign** message, the placeholder will be replaced with an opt-out link. If a recipient clicks this link, they will be opted out of the campaign.

For example:

'...
To opt-out of this campaign, follow this link: &#123;&#123;opt-out&#125;&#125;'

<br/>


#### Exclusion Lists

Exclusion lists are **only** used to exclude contacts from the campaign. They will not store opt-outs. Select a contact list to exclude in the drop-down below. You can select multiple if necessary.

<CustomisableImage src="/img/opt-out-dropdown.png" alt="Exclusion Lists Drop-down"/>


---

### Message

The Message is the content that will be sent to your audience.

#### Templates

You can use a pre-made message template by selecting one from the drop-down menu. Learn more about templates [here](../templates/general). 

<CustomisableImage src="/img/message-template.png" alt="Message Template Drop-down"/>


#### Message Content

For most campaigns, this is just a simple text-editor to compose your message in. This message may also contain placeholder values. Click [here](#placeholders) to learn more about placeholders. For specifics about each message type, read the relevant [Message Type](../message-types/general) documentation.

#### Link Tracking

By selecting the 'Automatically Shorten Links' checkbox at the bottom, any URL that appears in your message will be automatically shorten. This will also enable link tracking. If a campaign-recipient clicks on a link in your message, it will be recorded in the [Campaign Results](#campaign-results) file. [Campaign Results](#campaign-results) will record the first and last time a link is clicked, and the first and last link in the Message that was clicked.



---

### Send Config

The final step in most campaigns is to configure the send conditions of the campaign. Below is what this menu will look like.

<CustomisableImage src="/img/campaign-send-config.png" alt="Campaign Send Config"/>

#### Sending From

This drop-down menu is where you select the sender of your campaign. This is the contact that recipients will receive the campaign from. New contacts can be created through [Channels](../category/channels). They are either [Virtual Numbers](../channels/virtual-numbers.md) or [Sender IDs](../channels/sender-ids.md) for phones, or [Email](../channels/email.md) for an email address.

#### Messages Per Hour

"Messages Per Hour" determines how quickly the campaign will be distributed. It is the number of contacts that will receive the campaign in the span of one hour. If you select 100, the program will send the campaign to a new contact in your audience every 36 seconds. If you have 200 contacts in your file and you select a rate of 100 messages/hour, the campaign will be finished being sent out to everyone in 2 hours. Select an option from the drop-down menu.

<CustomisableImage src="/img/messages-per-hour.png" alt="Messages Per Hour" width="400"/>

Alternatively, you can select a 'Custom' amount that doesn't appear in the drop-down.

<CustomisableImage src="/img/custom-messages-per-hour.png" alt="Custom Messages Per Hour" width="500"/>

#### Timezone

Select the timezone you are using for scheduling the campaign.

<CustomisableImage src="/img/timezone-campaign.png" alt="Timezone Selection" width="500"/>

#### Schedule

This is where you specify when you want your campaign to run and be distributed. It works by creating time periods during which the campaign will distribute itself.

<CustomisableImage src="/img/campaign-schedule.png" alt="Campaign Schedule" width="500"/>

Here are step by step instructions for creating these time periods:
1. Select a desired start time and end time during the day. E.g. 12:00pm to 5:30pm. This will be referred to as your 'daily time period' in the following steps.

<CustomisableImage src="/img/campaign-start-time.png" alt="Campaign Start Time" width="300"/>

2. Select the dates you want your daily time period to be active for by choosing a start and end date. E.g. 14th of January 2024 to the 18th of January 2024.

<CustomisableImage src="/img/campaign-start-date.png" alt="Campaign Start Date" width="250"/>

3. Select the days of the week within the given date range when you want your daily time period to be active. E.g. Monday, Tuesday, and Wednesday. 

<CustomisableImage src="/img/day-selection-campaign.png" alt="Campaign Day Selection" width="400"/>

- If no days are selected, it will select 'Daily' by default, in which case your daily time period will run everyday within the date range.

- You can select the checkbox 'Restrict sending times to today' so your daily time period runs only today.

- If no dates are selected for your schedule, the campaign will just run during the days you selected in step 3 until everyone has received the campaign.

4. Click the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#1582d8">+</Tag> button next to the schedule to add this entire time period into the campaign's run times. You can add multiple time periods. Remove a time period with the 'X' on the far right of the time period's label.

<CustomisableImage src="/img/campaign-remove-date.png" alt="Campaign Remove/Add Date"/>

###### Summary

A time period specifies a sending schedule across a set of dates, during specific days of the week, and only during specific times of the day. The campaign schedule consists of one or more of these time periods. The campaign will only be distributed during its allocated schedule.

Below is an example send config. Every weekend from the 15th of January 2024 to the 29th of January 2024, from 12pm to 3pm, the campaign will be distributed to new contacts in the file at a rate of 100 contacts every hour, from a mobile number named 'Demo'. If there were 1200 contacts, this schedule would send out the campaign to the first half of the contacts on the first weekend, and then the second half of the contacts on the second weekend.

<CustomisableImage src="/img/example-campaign-schedule.png" alt="Example Campaign Schedule"/>

Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create and Review</Tag>.

<CustomisableImage src="/img/create-and-review-campaign.png" alt="Create and Review Campaign"/>




---

## Management

### Editing Campaign Options

After creating your campaign, if you want to change one of the options you have selected, navigate to the option you wish to change and click <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">🖉</Tag>.

<CustomisableImage src="/img/campaign-editing.png" alt="Campaign Editing Button"/>

Once you have changed what you desire, click <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Update</Tag> to save your changes.

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