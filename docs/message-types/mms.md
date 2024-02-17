---
title: MMS
sidebar_position: 5
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

# MMS


MMS is like a combination of emails and SMS.

The MMS message creator has a subject and attachments (reference emails) and an SMS message composer (see SMS).