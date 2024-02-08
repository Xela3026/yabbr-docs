---
title: SMS Surveys
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# SMS Surveys

SMS Surveys are surveys that occur via SMS. The system sends the questions via SMS, and the respondents give their answers to the system via SMS. It is recommended you read the [General](./general.md) documentation first before reading the specific SMS documentation

---

## Unrecognised Response Fallback Message

If a respondent's answer to a question is unrecognisable as one of the predetermined answers, they will receive this 'Unrecognised Response Fallback Message'. Simply enter the text you would like to appear in the SMS in the outlined text box. In the example below, if a survey respondent gives an invalid answer, they will receive the SMS 'Sorry we do not recognise that response.'

![SMS Fallback Message](/img/survey-sms-fallback.png)


---

## Questions

### Question Content

Survey respondents will receive an SMS from the survey asking them a question and providing them a list of valid recognised answers. You must configure this message yourself in the question content. The question content is the first customisable option in the New Question menu. Simply entire the desired 'question' SMS into the outlined textbox. A detailed example can be found below in [Example SMS Question](#example-sms-question).

![SMS Question Curation](/img/survey-sms-question.png)

---

### Response Handlers

Response handling is identical to [General](./general.md#response-handlers). Here, the 'Matching-on' words you are looking for in respondent's responses are text-based SMS's. 

---

### Example SMS Question

Below is a full example of an SMS Question using the New Question menu. 

![Example New SMS Question](/img/survey-example.png)

In the above example, when survey respondent's reach Q2 in the decision tree, they will receive an SMS that says: "What is your favourite ice-cream flavour? Type 'chocolate' for Chocolate, 'vanilla' for Vanilla, or 'strawberry' for Strawberry."
If the survey respondent responds to the SMS with and SMS saying 'choco' or 'chocolate', their answer will be recorded as 'Chocolate', and they will be directed to the next question. If they respond with 'vanilla', their answer will be recorded as 'Vanilla', and they will be directed to the next question. If they respond with 'strawberry', their answer will be recorded as 'Strawberry', and they will be directed to the next question.


---

## Virtual Number Assignment

You can automatically allocate a survey to one or more of your virtual numbers you have set up. If a survey has been assigned to a virtual number - WIP





[comment]: <> (include an example of a question, an example of a fallback message etc.)
[comment]: <> (include virtual number assignment)