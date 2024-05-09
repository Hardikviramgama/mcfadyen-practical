# Magento

This repository contains a custom theme for Magento, based on the Luma parent theme. The theme includes a new design for the Product Detail Page (PDP), featuring a redesigned media gallery and tabbed product details.

## Installation

To set up the Magento Vue Storefront, follow these steps:

1. Clone this repository to your local machine.
2. Clear the Magento cache.
3. Log in to the Magento admin panel and navigate to **Content > Design > Configuration**.
4. Select your store view and click on **Edit**.
5. Under **Themes**, select the newly added theme and save the configuration.
6. Clear the Magento cache again.

## Changes Made

The following changes have been made to the default Luma theme:

- Redesigned Product Detail Page (PDP) with a new media gallery and tabbed product details.

## Commands

To create a new setup and understand the changes made in the product, use the following commands:

- `composer install`: Install the required dependencies.
- `bin/magento setup:upgrade`: Upgrade the Magento installation.
- `bin/magento setup:static-content:deploy`: Deploy static view files.
- `bin/magento cache:flush`: Flush the Magento cache.

Please note that these commands assume you have the necessary permissions and have already set up your Magento environment.