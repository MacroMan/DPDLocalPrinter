
# DPDLocalPrinter

A program that enables sending Citizen Label printer PRN data directly to the label/barcode printer.
Designed to be connected to from a webpage using websockets or another utility running on the computer with the ability to connect to a websocket.

## Getting Started

This program runs on the local computer running windows 7 or higher.
This must be the same computer that the printer is plugged into.

### Installing

 - Create a printer share for the local Citizen label printer and give it the share name "CITIZEN"
 - Download and run "DPD Label Printer.exe" to perform the installation: https://github.com/MacroMan/DPDLocalPrinter/releases/download/v1.0/DPD.Local.Printer.exe
 - Let the installer run test.html to print a test label

### Usage
Once installed, you can connect using any websocket client at ws://localhost:4000 and send the PRN data as a text stream.
See example-client.js for a JavaScript client example.

## Installing from source

### Installation
 - Clone or download this repo
 - Download portable node: https://nodejs.org/dist/v10.15.2/win-x86/node.exe
 - This must be saved as "node.exe" in the source directory
 - Run `npm install`
 - Install the service by running `node.exe service.js install`
 - Uninstall by running `node.exe service.js uninstall`
 - If you are going to compile the final executable, you need to have Inno Setup installed: http://www.jrsoftware.org/isinfo.php

## License

BSD 2-Clause License - See LICENSE.
