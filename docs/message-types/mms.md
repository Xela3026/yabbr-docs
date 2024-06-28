---
title: MMS
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tag from '@site/src/components/Tag';
import BrandName from '@site/src/components/BrandName';
import TextEditor from '@site/src/components/TextEditor';

# MMS



MMS is a Multimedia Messaging Service. It is sort of like an upgraded of an SMS. You still send the messages to a phone number, except instead of just plain text like in an SMS, you can add images, subjects, titles etc. It is sort of like a combination between an email and an SMS. It is recommended you read the [General](./general) documentation before this one.

## Subject and Attachments

Your MMS messages must have a subject like in an email. You can also choose to give them attachments like an image, video, or another file type. See the email message type documentation of [Subjects](./emails.md#subject) and [Attachments](./emails.md#attachments) for more info.

However, attachments are slightly limited for MMS. You are only permitted 1 attachment per message.

Additionally, this file must be in the format of:

.jpg, .jpeg, .png, .gif, .wav, .mp3, .3gp, .mp4, .mpg, .mpeg, .avi, .pdf, .vcf, .vcard, .cal

Finally, there is a size limit on the file. <BrandName type="name"/> will automatically compress files that are too large, however it should be noted that if the file is too large, this compression can make the content unrecognisable.


## Message

Besides a subject and attachments, an MMS message just consists of the actual message content. This is simply created using the General text editor. An MMS message cannot exceed 4096 characers.

<TextEditor/>

