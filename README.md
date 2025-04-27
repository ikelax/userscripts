# Userscripts

Userscripts to add functionality to pages of the Saarland University.

## Installation

1. Make sure you have user scripts enabled in your browser
   (these instructions refer to the latest versions of the
   browser):

   - [Tampermonkey](https://www.tampermonkey.net/) (proprietary)
   - [Violentmonkey](https://violentmonkey.github.io/get-it/)
   - [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)

2. Get information or install:

   - Learn more about the userscript by clicking on the
     named link. You will be taken to the specific
     documentation page.
   - Install a script directly from GitHub by clicking on
     the "install" link in the table below.
   - Install a script from
     [GreasyFork](https://greasyfork.org/en/users/24847-mottie)
     (GF) from the userscript site page
   - Or, install the scripts from
     [OpenUserJS](https://openuserjs.org/users/Mottie/scripts)
     (OU).<br><br>

   | Userscript Documentation            |   Direct Install    |            Sites            |
   | ----------------------------------- | :-----------------: | :-------------------------: |
   | [Mensaar Navbar UdS HTW][mnuh-docs] | [install][mnuh-raw] | [GF][mnuh-gf] [OU][mnuh-ou] |
   | [Mensaar Show Next Day][msnd-docs]  | [install][msnd-raw] | [GF][msnd-gf] [OU][msnd-ou] |
   | [CMS Navbar Materials][cnm-docs]    | [install][cnm-raw]  |  [GF][cnm-gf] [OU][cnm-ou]  |

[mnuh-docs]: docs/Mensaar_Navbar_UdS_HTW.md
[msnd-docs]: docs/Mensaar_Show_Next_Day.md
[cnm-docs]: docs/CMS_Navbar_Materials.md
[mnuh-raw]: https://github.com/ikelax/userscripts/raw/refs/heads/main/userscripts/mensaar-add-uds-htw.user.js
[msnd-raw]: https://github.com/ikelax/userscripts/raw/refs/heads/main/userscripts/mensaar-show-next-day-when-closed.user.js
[cnm-raw]: https://github.com/ikelax/userscripts/raw/refs/heads/main/userscripts/uds-cms-add-materials.user.js
[mnuh-gf]: https://greasyfork.org/en/scripts/533937-mensaar-navbar-uds-htw
[msnd-gf]: https://greasyfork.org/en/scripts/533989-mensaar-show-next-day
[cnm-gf]: https://greasyfork.org/en/scripts/533938-cms-navbar-materials
[mnuh-ou]: https://openuserjs.org/scripts/ikelax/Mensaar_Navbar_UdS_HTW
[msnd-ou]: https://openuserjs.org/scripts/ikelax/Mensaar_Show_Next_Day
[cnm-ou]: https://openuserjs.org/scripts/ikelax/CMS_Navbar_Materials

## Updating

Userscripts are set up to automatically update. You can
check for updates from within the Greasemonkey or
Tampermonkey menu, or click on the install link again to get
the update.

## Issues

Please report any userscript issues within this repository's [issue section](https://github.com/Mottie/GitHub-userscripts/issues).

## Contributions

If you would like to contribute to this repository, please...

1. Fork
2. Make changes
3. Create a pull request!

### Markdownlint

To run `markdownlint` locally, you have to install
[`markdownlint-cli2`](https://github.com/DavidAnson/markdownlint-cli2)
and run

```sh
markdownlint-cli2 --fix "**/*.md" "#node_modules"
```
