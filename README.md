# KDE Scratchpad

This plugin allows for a functionality similar to i3's scratchpads

## Installation

First, clone it

```
git clone https://github.com/kde-scratchpad
cd kde-scratchpad
```

Then, discover what is the class of your scratchpad windows

open the kde interactive console with Alt+F2 "wm console"

Type in the following

```
for(var i = 0; i < workspace.stackingOrder.length; i++){

    window = workspace.stackingOrder[i];
    print(window.resourceClass)
}
```
Execute it and run the following to see a list of all your window's classes

```
journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting
```

Afterwards, edit /contents/code/main.js on the bottom to customize your shortcuts and window classes

Then, install

```
kpackagetool6 --type=KWin/Script -i ./
```

And activate it through Kwin scripts setting

![image](https://github.com/user-attachments/assets/ec87813e-f861-48ea-802b-7b5aafab8ece)

Enjoy your scratchpads on kde!
