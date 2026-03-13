# sp2obsidian
A little web app to convert Simply Plural Exports into Obsidian vaults that can be used as a system journal.

This is my first time developing in the open from the beginning. Here goes!

### What I am planning to do

- [ ] Determine the structure of the simply plural export data. Aparylis does not publish any JSON schema for the exported data. I will instead need to reconstruct this from the code in https://github.com/ApparyllisOrg/SimplyPluralApi.git and https://github.com/ApparyllisOrg/simply_sdk.git what I discover will be documented in the docs directory.
- [ ] build a SPA web application that takes the exported SP data and builds a zip file of a obsidian vault.
- [ ] all data processing happens locally in javascript in the user's browser. 
- [ ] at completion of the process a log will be displayed. The user will be able to save the .zip to their computer. 
- [ ] if there is an error, the user will have the opportunity to upload their log if they wish.  
- [ ] personally identifable information like the details of system members is masked in the log file.
- [ ] display a Microsoft format GUID that identifies the specific run of the tool, this can be quoted in github issues if there is an error to help me find the log upload. 

### what type of Obsidian Vault structure will I get?
```
root/
├── Alters/
|   ├── member1.md
|   ├── member2.md
|   ...
├── Groups/
├── Notes/
├── Polls
├── FrontHistory
    ├── YYYY-MM-DD.md (a file for each day)
├── Comments
    ├── ???
├── ChatMessages
|   ├── Channel 1
    |   ├── YYYY-MM-DD.md 
    |      ...
    ├── Channel 2
        ├──YYYY-MM-DD.md
└── Board Messages
    ├── YYYY-MM-DD.md
    ....
```

custom feilds are simply added to the 
particular alter's document along with the other information. When I can determine how subsystems are represented in the JSON export, I may change the directory structure so that each subsystem has it's own directory for alters. If you know, please send a PR with as much information as you have in a .md file in the docs directory. 

### Can I contribute?

Eventually, but not yet. At this early stage trying to contribute code will create a lot of merge conflicts I will have to resolve manually, except for the things I specifically asked for help with.

### FAQs
Q: Are you a system? 
A: Yes. Diagnosed DID

Q: Do you or did you use Simply Plural
A: No. I am not a fan of apps in general to manage my DID. I prefer more free form journals and notes on what is known about our alters or the structure of the system. 

Q: Why are you making this?
A: isaquest on tumblr had the idea of exporting SP to a spreadsheet to make it human readable. I was inspired to make something that would be useful to me if I used SP.

Q: I don't want to pay for Obsidian Sync!!!!
A: For android you can download the application OneSync and sync the directory your vault is in to OneDrive for free. OneDrive free accounts give 5Gb which is plenty for this purpose. Offline/self hosted solutions that work between devices/computers on the same wifi are possible too, but I am unfamilar with these, so I can't recommend any (if you know, you may submit a PR to update this information).

Apple: ??? (If you know, you may submit a PR to update this information if you wish).

Q: Tech Stack?
A: Vue, Ionic Framework, Typescript and Azure Static Websites. Simple blob storage is used for logs, there is no need for a database. 

