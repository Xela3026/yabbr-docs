---
title: Validation Campaigns
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


# Validation Campaigns

Most of the documentation for this campaign type can be found in [General](./general.md). This page is for features specific to validation campaigns. It is recommended to read the general documentation first. 

A Validation Campaign is used to validate phone numbers. Just upload a contact list, and when you run the campaign it will give you a status of every contact in the [Campaign Results](./general.md#campaign-results) file. In the [Campaign Results](./general.md#campaign-results) file, under the 'Content' column, you will find the status of each number. 

---

## Connection Status

- **Connected**: If the number is valid for contact, it will read 'Connected', along with the Mobile Network Code and carrier name of the phone number. E.g. Connected 505-01 (Telstra)
- **Indeterminate**: The connection status of the number is unable to be determined.
- **Disconnected**: This means the number is not valid for contact.

---

## Receipts

Whilst your validation campaign runs and validates every contact in your file, you will receive receipts for each validation in real time. It will show you how many contacts, and what percentage of all contacts, fall under each connection status. An example is shown below.

![Validation Campaign Receipts](/img/campaign-validation-receipts.png)


---

## Test Campaign

Below is the Test Campaign menu for a Validation Campaign. First, select the region of the number you want to validate, then enter the mobile number you want to validate. Finally, click <Tag colour="#1582d8" borderColour="#1582d8" fontColour="#FFFFFF">Validate</Tag> button to validate the inputted number.

![Validation Campaign Test Menu](/img/campaign-validation-test.png)

After a short period, you should receive a notification on the right hand side of the screen near the top like the one below.

![Validation Campaign Test Notification](/img/campaign-validate-test-two.png)

A valid connected number will be indicated by a green tick on the left of the notification as above. It also provides a status of the number that is explained in [Connection Status](#connection-status).