# DPDLocalPrinter

A small utility that enables sending Citizen Label printer PRN data directly to the printer.
Designed to be connected to from a webpage using websockets or another utility running on the computer with the ability to connect to a websocket.

## Getting Started

This utility runs on Node.js installed on the local computer running windows 7 or higher.
This must be the same computer that the printer is plugged into.

### Prerequisites

Administrator privilages are required to install this utility.
You will need to download and install Node.js locally.
Follow the instructions at https://nodejs.org/en/download/

### Installing

Download this repository (as a zip file is fine, you don't have to have Git installed)
Extract the files to C:\Program Files\DPDLocalPrinter\
You must use that exact path or edit install.js and change the paths.

Create a printer share for the local Citizen label printer and give it the share name "CITIZEN"
If you want to use a different share name, then edit citizen.js and change the name in the exec() line

Run command prompt as Administrator, navigate to the install directory and install the node prerequisites and Windows service

    cd "C:\Program Files\DPDLocalPrinter\"
    npm install
    node install.js

### Usage

Once installed, you can connect using any websocket client at ws://localhost:4000 and send the PRN data as a text stream.
See example-client.js for a JavaScript client example.

### Editing files

I have written this utility on Linux, so editing these files in notepad on Windows won't work. Either use Notepad++, antoher IDE such as Atom or a Linux machine to edit the code.

## License

BSD 2-Clause License - See LICENSE.
