---
title: Audio
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import CustomisableImage from '@site/src/components/CustomisableImage';
import BrandName from '@site/src/components/BrandName';
import Tag from '@site/src/components/Tag';


# Audio Templates

Audio templates can be used anywhere when you are making an outbound call. They are slightly different to Messaging and Email templates in functionality. Instead of creating text templates with extra properties surrounding them like an Email Subject or a <BrandName/> Chat Keyword Tag, you upload audio files and then stitch them together to create an audio template. It is recommended you read the [General](./general.md) template documentation before this one.

## Creation

There are two ways you can add a new audio template to your workspace. You can either upload an audio file, or you can stitch multiple audio files together.

### Upload File

To upload a new audio file and add it to the workspace as an audio template, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">+ Upload</Tag> button. Then, select the desired audio file from your device to upload it to the workspace.

<CustomisableImage src="/img/template-audio-upload.png" alt="Audio Upload" width="600"/>

### Audio Compiler

To stitch together multiple audio files into a new audio template, click on the <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">˅</Tag> button next to the upload button, and then click 'Audio Compiler'.

<CustomisableImage src="/img/template-audio-compiler.png" alt="Audio Compiler" width="600"/>

This will open a small menu like the one below.

<CustomisableImage src="/img/template-audio-compiler-menu.png" alt="Audio Compiler Menu" width="600"/>

Here you can create a new audio template for your workspace by stitching together multiple audio files. The 'Name' will be the display name of this audio template so you can identify it within the workspace. The rest of the menu here is the [Audio Message Composer](../message-types/audio.md). Click on that link for a detailed explanation of how it works.

Then, to add this new audio clip to your workspace, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Create</Tag>.


## Management

In the overview of all of your audio templates, there is some extra information that doesn't appear for other template types. Firstly, it displays the length of each audio clip:

<CustomisableImage src="/img/template-audio-time.png" alt="Audio Template Overview" width="600"/>

Additionally, when you click on an audio template in this menu, an audio player will appear at the top of the page for that audio clip. It will also include a transcript of what is said in the audio clip.

<CustomisableImage src="/img/template-audio-player.png" alt="Audio Template Audio Player" width="600"/>

