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
Primitive roles: owner, editor, viewer, billing administrator. Primitive roles affect all resources in a GCP project, meaning that they are applied at the project level.

Owner lets you set us billing.

Billing administrator can manage billing but not change project.

Predefined roles: provided by each GCP service and contain a series of permissions specific to a resource.

# Compute Engine Instance roles
## InstanceAdmin role
Can perform the following actions on virtual machines:
* Listing instances
* Reading and changing instances
* Starting and stopping them 

The scope of these rules depend on where they are applied. For example, if they are applied to a single instance, the admin role will be applied only to that instance. If, however, they are applied to a group within a whole project, everyone who is part of that group will be able to perform these actions within any virtual machine inside of the project.

## InstanceOperator role
Allows users to start and stop virtual machines, but not to modify them.

Custom roles can only be used at the project or organization levels. They cannot be used at the folder level. 

# Service Accounts
Used for controlling server-to-server interactions. For example, a virtual machine that needs to perform an operation to store data in Google Cloud Storage. We would create a service account to authenticate the VM in the Cloud Storage. Service accounts authenticate through keys.

Service accounts are also resources, which means that we can attach policies to them. For example, we can allow certain members of our organization to have editor rights to that service account, while others may have only viewer privileges. This is just like granting roles for any other GCP resource. 