---
title: 'How to best structure workflows in Google Cloud Platform'
date: '2020-01-10'
field: google-cloud
area: fundamentals
slug: gcp-structure
category: no category
draft: True
tags: []
---

Projects to organize work: use them to group together related resources with a common business objective.

Google Cloud Identity and Access Management

Several interfaces to connect

Principle of least privilege: each user should have only those privileges needed to do their jobs.

Organization node -> Folders -> Projects -> Resources

We can set policies at each of these levels, and policies are inherited downwards

Projects can have different owners and users: the are built separately and the're managed separately.

We can use folders to represent different departments, teams, applications, etc.

The resources in a folder inherit IAM policies from the folder, so if there is a group of developers working on several projects, we could put the IAM policies at a folder level.

The organization node is the top of the resources hierarchy.

Resources inherit the policies of their parent resources. This is transitive, meaning that a child inherits privileges from all its parents.

Rule: policies implemented at a higher levels cannot take away privileges granted at a lower level. The more general policy is the one that takes effect.
