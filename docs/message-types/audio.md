---
title: Audio
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 5
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

# Audio


## Message

Firstly, you must select what type of message you want to send - a pre-recorded audio file (Audio File), or a text-to-speech bot reading out a typed message (Text to Speech). To do this, select the bubble on the left of the message type you want to use. The selection is outlined below.

![Voice Campaign Message Type Selection](/img/campaign-voice-message-type.png)

### Audio File

Here, you must select one or more audio files that will be stitched together into one larger audio message that will be sent to your campaign recipients. On the left is your Library where you select the audio files you want to add. These audio files will then appear on the right in the Message Composer.

#### Library

Here you will find all of your audio files that you can add to be part of your message. You can add new audio files to the library by clicking <Tag colour="#FFFFFF" borderColour="#1582d8" fontColour="#1582d8">Upload Audio File</Tag> outlined below and selecting your desired audio file.

![Upload New Audio to Library](/img/campaign-voice-library-upload.png)

Once uploaded to your library, it will be displayed as shown below. From left to right:
- **Checkbox**: Selecting this will add this audio file to the Message Composer on the right. Unselect the checkbox to remove it from the Message Composer.
- **File Name**
- **File Length**: This is displayed as minutes:seconds
- **Play Button**: Clicking the play button will start/stop the audio file, giving you a preview of what it sounds like before you add it to the Message Composer.

![Annotation of Audio Files in Library](/img/campaign-voice-files.png)

:::tip Tip
You can add every audio file in your library to the Message Composer by selecting the checkbox in the first row where it says 'Title'. 
:::


#### Message Composer

Audio files will be played in order from top to bottom as they appear here. You can rearrange each file's location in this order by dragging and dropping them into the desired location. You can listen to the whole message by clicking on the <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">&#x25B7; Preview Message</Tag> button. Click this button again to pause it. On the right of this button, you can click <Tag colour="#FFFFFF" borderColour="#d8dde1" fontColour="#77828a">⇓ Download</Tag> to download one full audio message with all of the files stitched together in order. Finally, click the 'X' button on the right of any audio file to remove it from the Message Composer.

![Annotation of Message Composer](/img/campaign-voice-message-composer.png)


### Text to Speech

By selecting this option, a robot text-to-speech voice will read out your typed message as audio to campaign recipients.

#### Content

In the text box outlined below, type out the words you want the text-to-speech bot to read out.

![Text Editor for Text-to-Speech](/img/campaign-voice-text-to-speech-content.png)

#### Pronunciation

By adding certain tags to words in the text box above, you can get the text-to-speech bot to pronounce certain text differently.

##### SSML Configuration

For the text-to-speech bot to interpret text differently, you must enclose the the desired text in the following tag:
```HTML SSML Configuration
<say-as interpret-as="insert-here">Example Text</say-as>
```
Then, depending on how you want it interprted, replace 'insert-here' with the relevant property listed below.

- **Spell Out Characters**: spells out each individual letter. Use 'characters'
- **Cardinal Numbers**: reads a number as a cardinal number (e.g. 113 -> one hundred and thirteen). Use 'cardinal'
- **Ordinal Numbers**: reads a number as an ordinal number/ordered number (e.g. 2 -> second). Use 'ordinal'
- **Digits**: reads a number as individual digits (e.g. 1342 -> one three four two). Use 'digits'
- **Fractions**: reads two numbers separated by '/' as a fraction (e.g. 3/4 -> three quarters). Works with improper fractions (e.g. 4 1/3 -> four and one third). Use 'fraction'

[comment]: <> (need to confirm how the fractions are pronounced for more accurate guides)

- **Units**: reads a number followed by text as a measurement (e.g. 7kg -> seven kilograms). Use 'unit'
- **Dates**: reads a series of numbers as a date. (e.g. 2024-01-01 -> first of january two thousand and twenty four). The format of the date must be specified using the format attribute as below. Use 'date'
```HTML SSML Configuration Dates
<say-as interpret-as="date" format="YYYY-MM-DD">2024-01-01</say-as>
```

[comment]: <> (need to confirm how the dates are pronounced for more accurate guides)

- **Times**: read a series of numbers as a time. (e.g. 11:16 -> eleven sixteen). The format of the time must be specified using the format attribute as below. Use 'time'
```HTML SSML Configuration Time
<say-as interpret-as="time" format="HH:mm">11:16</say-as>
```

[comment]: <> (need to confirm how the times are pronounced for more accurate guides)

- **Addresses**: reads text as an address. Use 'address'
- **Expletives**: Censors/bleeps out the text. Use 'expletive'
- **Phone Numbers**: reads a series of numbers as a phone number. Use 'telephone'

##### Speech Rate

You can specify how fast the text-to-speech bot reads the text with this option. Enclose the desired text with the prosody tag as shown below, and replace 'insert-here' with your desired speed.

```HTML Speech Rate
<prosody rate="insert-here">Example Text</prosody>
```

The valid rates you can use, in order from fastest to slowest, are:

1. x-fast
2. fast
3. medium
4. slow
5. x-slow

#### Voice

Customise what the voice sounds like with this option. Select the voice you want the text-to-speech bot to use from the drop-down menu outlined below:

![Voice Selector for Text-to-Speech](/img/campaign-voice-text-to-speech-voice.png)

