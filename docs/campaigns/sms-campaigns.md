---
title: SMS Campaigns
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';
import BrandName from '@site/src/components/BrandName';


# SMS Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to SMS campaigns. It is recommended to read the general documentation first. 

---

## Setup

### Create

When you are first creating an SMS campaign, you must also choose from one of the three specific types of email campaign: Broadcast, Interactive Broadcast, and Poll. Simply click on the relevant option outlined below and create the campaign as normal.

<CustomisableImage src="/img/campaign-sms-type.png" alt="SMS Campaign Type Selection" width="550"/>

- [**Broadcast**](#broadcast): one-way outbound message sent using a registered alpha code or sender ID. It automatically disables inbound capabilities.
- [**Interative Broadcast**](#interactive-broadcast): message sent using a virtual number. These allow two-way communication so that other systems like <BrandName/> Chat can interact with responses.
- [**Poll**](#poll): Currently functionally the same as Interactive Broadcast.

#### Message

Navigate to the [SMS Message Type](../message-types/sms.md) documentation for an explanation of message-construction here.





---

## Management

### Actions

#### Preview Campaign

Below is an example of what the preview of an SMS Campaign could look like. The contact of the preview is listed at the top as '61400000000'. Then, at the top of the phone, it displays the number/sender ID that is sending the campaign. Here the campaign is being sent by Demo. Next it displays the actual text content of the message. If there were any placeholders in the message, they would be replaced with the relevant information from the contacts file. You can see a preview for every single contact. Navigate between them using the 'Previous' and 'Next' buttons on the bottom of the preview.

<CustomisableImage src="/img/campaign-sms-preview.png" alt="SMS Campaign Preview" width="300"/>


#### Test Campaign

Below is an example of the Test Campaign menu for SMS Campaigns. As explained in the general [Test Campaign](./general.md#test-campaign) documentation, enter the mobile number that you would like to receive the test in the 'Recipient Phone No.' text box as well as the region of the phone number in the drop-down menu on the left. Then, you must fill in any placeholders you have included. They will be listed on the left under 'Template Fields', and highlighted in yellow on the preview on the right. Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Send</Tag> to send the test campaign.

<CustomisableImage src="/img/campaign-sms-test.png" alt="SMS Campaign Test" width="500"/>


---

## Type-Specific Features

### Broadcast

There are no features unique to a broadcast SMS Campaign.

### Interactive Broadcast

Interactive broadcasts have inbound functionality. These are: [Contact Import](#contact-import) and [Keyword Replies](#keyword-replies)


#### Contact Import

If a campaign-recipient responds to your SMS Campaign, the chat and its details will be imported into [<BrandName/> Chat](../category/yabbr-chat). There, you can start and continue an interaction with a campaign-recipient. The contact import helps this process. 

Contact Import is all the information about the campaign-recipient that will be imported into [<BrandName/> Chat](../category/yabbr-chat) if they respond. As mentioned in [General](./general.md), your contacts file may contain information about each contact such as their name. This information is also stored under column headings in the contacts file. 

Under each drop-down in the Contact Import, you can optionally select one of these column headings. Then, if a campaign-recipient responds, the information stored about them in the contacts file under the selected column header will be imported into [<BrandName/> Chat](../category/yabbr-chat) under the title you selected.

In the example below, the contacts file has two columns: 'name' and 'phone'. 'phone' stores the phone number of the contact, and 'name' stores their corresponding full name. The 'Name' attribute has been connected to the 'name' column heading, and 'Phone' has connected to 'phone'. 

If a campaign-recipient responds, their information will be imported into [<BrandName/> Chat](../category/yabbr-chat). It will list their 'Phone' as the information stored under 'phone' in the contacts file, and will list their 'Name' as the information stored under 'name' in the contacts file.

<CustomisableImage src="/img/campaign-sms-contact-import.png" alt="Contact Import Example"/>


#### Keyword Replies

If a user responds to the campaign with an SMS, you can use this section to detect certain words in their reply and then trigger different responses automatically and accordingly. These words are called keywords. To add a new one of these, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Add Keyword</Tag> button outlined below.

<CustomisableImage src="/img/campaign-voice-keywords.png" alt="Add New Keyword Reply"/>

Clicking on this will bring up a menu like the one below:

<CustomisableImage src="/img/campaign-voice-keywords-menu.png" alt="Add New Keyword Reply Menu" width="500"/>

##### Keyword

In this text box, type a word or a phrase to detect in the campaign-recipient's reply. Then, to add and register this keyword(s) in the program, click the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">+</Tag> button outlined below.

<CustomisableImage src="/img/campaign-voice-add-keywords.png" alt="Keyword Phrase Adding" width="500"/>

:::tip Tip
You can add multiple keywords to the same keyword reply. You can keep adding more keywords with the + button, or delete some with the X button on the right of the keyword.
:::

##### Type

Campaign-recipients may not use the exact keyword in their reply. In the above example, someone might reply with "Ok! Sounds good - keyword phrase" or "Keyword Phrase". Depending on the settings chosen here, the program can still detect them. 

By default, a keyword is case **in**sensitive. This means that it will still detect the keyword regardless of letter capitalisation. This means "keyword phrase", "Keyword Phrase", and "kEyWoRd PhRaSE" would all be detected by default in the above example. You can disable this option and make the keyword case **sensitive** by selecting the checkbox outlined below.

<CustomisableImage src="/img/campaign-voice-case-sensitive.png" alt="Case Sensitivity on Keywords" width="500"/>

The drop-down menu is used to customise how the keyword needs to appear in the reply to be detected. For example, the keyword may have to be the only thing in the reply, or maybe it must appear at the end of the reply. Below is all the options you can select, and what each of them specify.

<CustomisableImage src="/img/campaign-voice-keyword-type.png" alt="Keyword Inclusion Selection"/>

- **Equals**: the reply only includes the keyword.
- **Includes**: the keyword appears somewhere in the reply
- **Begins with**: the keyword appears at the start of the reply.
- **Ends with**: the keyword appears at the end of the reply.
- **Not equal**: the keyword does not appear somewhere in the reply.
- **Less than**: the value of the reply is less than the value of the keyword.
- **Greater than**: the value of the reply is greater than the value of the keyword.

[comment]: <> (may have to check the accuracy of some of those explanations above)



##### Message

If the program detects the keyword reply, this is the SMS that will be sent to them. Enter the desired message in the text box under 'Message'.

##### Schedule

The keyword reply will only be detected within this schedule. See [Schedule](./general.md#schedule) for how the schedule works. The schedule is also optional. No schedule specified means the keyword reply will always work.


##### Call Me

When a keyword reply is detected, you can choose to link the campaign-recipient to a call with one of your employees or agents using the 'Call Me' functionality. When one of the keyword replies is detected, the program will call the 'Call Me Destination' that you enter into the text box below that title. If the recipient of this call - usually an employee or agent - presses '1', they will be redirected to a call with the campaign-recipient. 

This field is completely optional, but if you choose to fill it, a menu will appear to customise the 'Call Me' similar to the one pictured below.

<CustomisableImage src="/img/campaign-voice-keywords-call-me.png" alt="Keyword Call Me Menu" width="500"/>

###### Call Me Attempts

The first step in connecting with an agent is getting them to accept the incoming call triggered by the campaign-recipient. The number you enter in this text box determines how many times the program will try and call the 'Call Me Destination' for a response before giving up.

###### Call Me Whisper Attempts

The next step in connecting an agent with the campaign-recipient is getting them to accept the redirection. If the 'Call Me Destination' accepts the incoming call from the program, the program will play a short message (customised below) providing some context to the agent. This is known as a 'Call Me Whisper'. If the agent presses '1' on their call, it will successfully redirect the agent and connect them to a call with the campaign-recipient. The number you enter in the 'Call Me Whisper Attepmts' text box determines how many times the program will try to get the agent to accept the redirection.

###### Call Me Audio Message

This is the message that is played to the 'Call Me Destination' when they accept the incoming call. Usually it provides context about some information surrounding the campaign-recipient. The creation of this audio message is identical to the process outlined in [Message](#message).

###### Failed Call Me Message

This is the SMS that is sent to the campaign-recipient if the program is unsuccessful in connecting them with the 'Call Me Destination'. Enter the desired message in the text box under 'Failed Call Me Message'.

##### Enabled

Toggling this switch will enable/disable the functionality of the keyword reply you have set up. Green = enabled, Grey = disabled.

Finally, to add this keyword reply to your campaign, click <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Create</Tag>.

##### Overview

After a keyword is added, it will display an overview of all your keyword replies. This overview will briefly summarise the information about each keyword reply: the keyword(s), the Message, and a Call Me Destination if one was given. To edit a keyword reply, click the 🖉 button. To delete a keyword reply, click the ✕ button. 

##### Keyword Replies Example

Here is an example SMS sent by the campaign:

"You have a debt that needs paying. Reply 'PAY' if you'd like to pay it now, or 'CALL ME' if you would like an agent from our team to give you a call"

This example requires two keyword replies to be setup - 'PAY' and 'CALL ME'.

**'PAY' Keyword:**

<CustomisableImage src="/img/campaign-voice-keywords-example-one.png" alt="PAY Keyword Example" width="500"/>

In the above example, the keyword that the program is trying to detect in the campaign-recipient's SMS is 'pay'. The word will only be detected if is the only content in the SMS. If it is detected, the campaign recipient will be sent the message: "That's great! Follow this link to login and pay: placeholder.com". In this example, placeholder.com would direct the campaign-recipient to a login address where they can pay. 

**'CALL ME' Keyword:**

The 'CALL ME' example requires two keyword replies to be setup - one during employee hours, and one outside. Below is for the reply during employee hours.

<CustomisableImage src="/img/campaign-voice-keywords-example-two.png" alt="CALL ME Keyword Example" width="500"/>

If the program detects an SMS with JUST the words 'call me' - or any other capitalisations of the phrase - it will go to the next step. If the time of the reply falls within the designated schedule - 8am to 6pm on weekdays - then the campaign will send the campaign recipient an SMS saying "An agent will call you in a minute". Then, the program will try and call 0400 000 000 and give up if that one attempt fails. If the number picks up, it will send the text-to-speech audio message "Connecting you with a client. Press 1 to accept.". If the 'Call Me Destination' clicks '1', the program will connect them to a call with the campaign-recipient, otherwise the program will give up. If the program ever gives up after exhausting any of its attempts, it will send an SMS to the campaign recipient notifying them: "Unable to connect you with an agent."

<CustomisableImage src="/img/campaign-voice-keywords-example-three.png" alt="CALL ME Keyword Example 2" width="500"/>

This keyword reply is identical in detection to the previous example. However, this keyword reply is for the case where the campaign-recipient requests a call outside of employee hours. Thus, the schedule here is set for 6:01pm - 7:59am Mon-Fri, and for the whole day on Sat-Sun. If the 'call me' keyword is detected in this time frame, the campaign-recipient will be sent an SMS notifying them that "We are currently offline, please try again between 8am and 6pm Monday-Friday.".

Below is what this entire keyword reply setup would look like:

<CustomisableImage src="/img/campaign-voice-keywords-example-four.png" alt="Full Keyword Example"/>

#### Duplicate Campaign

When you duplicate an interactive campaign and select a new contacts file, it will ask if you would like to map the data in the file to Contact Attributes. If you toggle this option (outlined in red) on (green), a new menu will appear. This is identical to the [Contact Import](#contact-import) menu. See [Contact Import](#contact-import) documentation for an explanation. 

<CustomisableImage src="/img/campaign-sms-duplicate.png" alt="Duplicate Campaign Contact Import" width="350"/>


---

### Poll

Currently this is functionally the same as an [Interactive Broadcast](#interactive-broadcast).


