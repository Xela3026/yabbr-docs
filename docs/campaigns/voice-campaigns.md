---
title: Voice Campaigns
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import Tag from '@site/src/components/Tag';


# Voice Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to voice campaigns. It is recommended to read the general documentation first. 

A Voice Campaign will send out an audio message to a list of phone numbers through call or voicemail.

---

## Setup

### Create

When you are first creating an SMS campaign, you must also choose from one of the three specific types of email campaign: Broadcast, Interactive Broadcast, and Poll. Simply click on the relevant option outlined below and create the campaign as normal.

<CustomisableImage src="/img/campaign-voice-type.png" alt="Voice Campaign Type Selection" width="500"/>

- [**Broadcast**](#broadcast): Calls campaign-recipients and plays a one-way customisable audio message.
- [**Interative Call**](#interactive-broadcast): Handles outbound functionality like a normal broadcast campaign. Can also handle inbound functionality if the campaign-recipient responds verbally to the system in the call, or if the campaign-recipient calls the campaign number back after the call.
- [**Direct to Voicemail**](#poll): Does not call campaign-recipients, and instead sends a customisable audio message straight to their voicemail.

---

### Message

Navigate to the [Audio Message Type](../message-types/audio.md) documentation for an explanation of message-construction here.


---

### Voicemail

If the call fails, you can choose to leave a voicemail for the campaign recipient. Choose from the three options outlined below by selecting the bubble next to the option you want.

<CustomisableImage src="/img/campaign-voice-voicemail.png" alt="Voicemail Options" width="300"/>

- **Leave no message**: will not leave a voicemail if the call fails.
- **Use the same message**: will leave a voicemail that is identical to the message created in [Message](#message)
- **Use a unique message**: create a new audio message to be used as the voicemail. The creation of this message is identical to the process above in [Message](#message)





---

### Send Config

#### Calling From

When campaign-recipients receive the call from your voice campaign, this is the number that will be displayed as the caller ID. Select it using the drop-down menu under 'Calling From'. Additionally, you have the option to hide the caller ID entirely by toggling the switch to the right of the drop-down menu.

<CustomisableImage src="/img/campaign-voice-calling-from.png" alt="Select Caller ID of Campaign"/>

#### Attempts

Some campaign-recipients may not immediately accept the call from the incoming voice campaign. This section will try and call the campaign-recipients multiple times. If a human answers the call, the program will stop trying to call them. Enter the number of times you would like the program to attempt to call the campaign-recipient in the textbox under 'Attempts'. There cannot be more than 5 attempts. 

If you include more than one attempt, you also need to specify an attempt interval. This is the time - in minutes - between the failure of a call and the next attempted call. Enter your desired attempt interval into the textbox under 'Attempt Interval'. This can be no shorter than 5 minutes.

In the example below, the program will try to call the campaign-recipient a maximum of 3 times before giving up. If a call fails, a new call will be attempted in 15 minutes.

<CustomisableImage src="/img/campaign-voice-attempts.png" alt="Attempt and Attempt Interval Example"/>


---

### Follow Ups

Depending on the success of the call, you can choose to send a different SMS to the campaign-recipient. The three conditions are listed below. Enter your desired SMS message into the textbox underneath the relevant condition listed below.

- **Human Pickup SMS**: a human has accepted and picked up the call from your voice campaign.

- **Voicemail Left SMS**: the program has successfully left a voicemail to the campaign recipient.

[comment]: <> (question: are voicemails only left after the last attempt? 'after failure to contact the campaign-recipient')

- **Call Failed SMS**: all call attempts to the campaign-recipient failed.






---

### Keyword Replies

If a user responds to the campaign with an SMS, you can use this section to detect certain words in their reply and then trigger different responses automatically and accordingly. These words are called keywords. To add a new one of these, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Add Keyword</Tag> button outlined below.

<CustomisableImage src="/img/campaign-voice-keywords.png" alt="Add New Keyword Reply"/>

Clicking on this will bring up a menu like the one below:

<CustomisableImage src="/img/campaign-voice-keywords-menu.png" alt="Add New Keyword Reply Menu" width="450"/>

#### Keyword

In this text box, type a word or a phrase to detect in the campaign-recipient's reply. Then, to add and register this keyword(s) in the program, click the <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">+</Tag> button outlined below.

<CustomisableImage src="/img/campaign-voice-add-keywords.png" alt="Keyword Phrase Adding" width="500"/>

:::tip Tip
You can add multiple keywords to the same keyword reply. You can keep adding more keywords with the + button, or delete some with the X button on the right of the keyword.
:::

#### Type

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



#### Message

If the program detects the keyword reply, this is the SMS that will be sent to them. Enter the desired message in the text box under 'Message'.

#### Schedule

The keyword reply will only be detected within this schedule. See [Schedule](./general.md#schedule) for how the schedule works. The schedule is also optional. No schedule specified means the keyword reply will always work.


#### Call Me

When a keyword reply is detected, you can choose to link the campaign-recipient to a call with one of your employees or agents using the 'Call Me' functionality. When one of the keyword replies is detected, the program will call the 'Call Me Destination' that you enter into the text box below that title. If the recipient of this call - usually an employee or agent - presses '1', they will be redirected to a call with the campaign-recipient. 

This field is completely optional, but if you choose to fill it, a menu will appear to customise the 'Call Me' similar to the one pictured below.

<CustomisableImage src="/img/campaign-voice-keywords-call-me.png" alt="Keyword Call Me Menu" width="500"/>

##### Call Me Attempts

The first step in connecting with an agent is getting them to accept the incoming call triggered by the campaign-recipient. The number you enter in this text box determines how many times the program will try and call the 'Call Me Destination' for a response before giving up.

##### Call Me Whisper Attempts

The next step in connecting an agent with the campaign-recipient is getting them to accept the redirection. If the 'Call Me Destination' accepts the incoming call from the program, the program will play a short message (customised below) providing some context to the agent. This is known as a 'Call Me Whisper'. If the agent presses '1' on their call, it will successfully redirect the agent and connect them to a call with the campaign-recipient. The number you enter in the 'Call Me Whisper Attepmts' text box determines how many times the program will try to get the agent to accept the redirection.

##### Call Me Audio Message

This is the message that is played to the 'Call Me Destination' when they accept the incoming call. Usually it provides context about some information surrounding the campaign-recipient. The creation of this audio message is identical to the process outlined in [Message](#message).

##### Failed Call Me Message

This is the SMS that is sent to the campaign-recipient if the program is unsuccessful in connecting them with the 'Call Me Destination'. Enter the desired message in the text box under 'Failed Call Me Message'.

#### Enabled

Toggling this switch will enable/disable the functionality of the keyword reply you have set up. Green = enabled, Grey = disabled.

Finally, to add this keyword reply to your campaign, click <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Create</Tag>.

#### Overview

After a keyword is added, it will display an overview of all your keyword replies. This overview will briefly summarise the information about each keyword reply: the keyword(s), the Message, and a Call Me Destination if one was given. To edit a keyword reply, click the 🖉 button. To delete a keyword reply, click the ✕ button. 

<CustomisableImage src="/img/campaign-voice-keywords-overview.png" alt="Keyword Reply Overview"/>

#### Keyword Replies Example

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












[comment]: <> (go back through this above section and link related content to the general documentation like the Message and Schedule sections of the keyword replies)


---

## Management

### Actions

#### Test Campaign

Below is an example of the Test Campaign menu for Voice Campaigns. As explained in the general [Test Campaign](./general.md#test-campaign) documentation, enter the mobile number that you would like to receive the test in the 'Recipient Phone No.' text box as well as the region of the phone number in the drop-down menu on the left. Then, you must fill in any placeholders you have included. They will be listed on the left under 'Template Fields'. Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Send</Tag> to send the test campaign.

<CustomisableImage src="/img/campaign-voice-test.png" alt="Voice Campaign Test" width="500"/>



---

## Type-Specific Features

### Broadcast

There are not features unique to a broadcast Voice Campaign.




---

### Interactive Call


#### Survey Connections

You can optionally connect an interactive voice campaign to one of your [Surveys](../surveys/general.md). 

##### Survey Connection

The Survey Connection is the outbound survey. Campaign-recipients will receive the call from your voice campaign, they will hear your curated audio message from earlier in the campaign-creation process, and then the relevant connected survey will commence. Just select your desired outbound survey in the drop-down menu underneath 'Survey Connection'.

##### Inbound Call Survey Connection

The Inbound Call Survey Connection is the inbound survey. After a campaign-recipient has received your voice campaign, and depending on the information you gave them, they may choose to call the campaign's number back. This inbound call can be handled with an Inbound Call Survey Connection. When the system receives an inbound call from a campaign-recipient, it will commence the survey selected here. Just select your desired inbound survey in the drop-down menu underneath 'Inbound Call Survey Connection'.

In the below example, 'Docs Eg' will start after the outbound audio message of the campaign has stopped playing. If a campaign-recipient calls the number back, 'Docs Eg 2' will commence.

<CustomisableImage src="/img/campaign-voice-survey-example.png" alt="Example Survey Selection"/>

##### Completion Questions

The survey respondent must answer all of these questions before they have completed the survey. You can select multiple questions in the drop-down menu under 'Completion Questions'. For each survey you have selected, the completion questions selectoin will appear on their right.

<CustomisableImage src="/img/campaign-voice-survey-completion.png" alt="Survey Completion Questions Annotation"/>

##### Inbound Call Survey Connection Timeout

It is most likely that you do not want to keep the inbound functionality on the campaign enabled forever. You may not want a campaign-recipient calling back the campaign years later and still responding to the same inbound campaign. You can restrict the inbound survey functionality with this text box. In the text box underneath 'Inbound Call Survey Connection Timeout', insert the amount of hours you would like to keep inbound surveys active for after the campaign has ended.

##### Target Survey Responses

You may desire a specific amount of data from your surveys. You can choose to automatically pause your campaign after receive a certain amount of completed responses. In the text box underneath 'Target Survey Responses', enter the number of completed responses you desire from your campaign before it is automatically paused.

#### Duplicate Campaign

When you duplicate an interactive campaign and select a new contacts file, it will ask if you would like to map the data in the file to Contact Attributes. If you toggle this option (outlined in red) on (green), a new menu will appear. This is identical to the [Contact Import](./sms-campaigns.md#contact-import) menu. See [Contact Import](./sms-campaigns.md#contact-import) user guides for an explanation. 

<CustomisableImage src="/img/campaign-sms-duplicate.png" alt="Duplicate Campaign Contact Import" width="400"/>




---

### Direct to Voicemail

#### Survey Connections

See [Survey Connections](#survey-connections)

#### Duplicate Campaign

See [Duplicate Campaign](#duplicate-campaign)