---
title: 'Identity and access management in Google Cloud Platform'
date: '2020-01-10'
field: google-cloud
area: fundamentals
slug: identity-access-management
category:
tags:
draft: true
---

Three parts: "who", "can do what", "on which resource"

Who: google account, google group, service account, etc.

Roles:
Primitive roles: owner, editor, viewer, billing administrator. Primitive roles
affect all resources in a GCP project, meaning that they are applied at the project
level.

Owner lets you set us billing.
Billing administrator can manage billing but not change project.

Predefined roles: provided by each GCP service and contain a series of permissions
specific to a resource.
