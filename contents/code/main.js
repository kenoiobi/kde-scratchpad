function scratch(className){

    winWidth = 1440;
    winHeight = 900;
    scrWidth = 1920;
    scrHeight = 1080;

    function show(className){
        for(var i = 0; i < workspace.stackingOrder.length; i++){

            window = workspace.stackingOrder[i];

            // checks if window of current iteration is the desired one
            if(window.resourceClass == className){

                // pull to active workspace
                if(window.desktops.length == 1){

                    desktop = workspace.currentDesktop;
                    window.desktops[0] = desktop;

                    window.frameGeometry.width = winWidth;
                    window.frameGeometry.height = winHeight;

                    window.frameGeometry.x = (scrWidth - winWidth) / 2;
                    window.frameGeometry.y = (scrHeight - winHeight) / 2 - 15;// 100 is the taskbar

                    workspace.activeWindow = window;
                }
            }
        }
    }

    function hide(className){
        for(var i = 0; i < workspace.stackingOrder.length; i++){
            window = workspace.stackingOrder[i];

            if(window.resourceClass == className){
                desktop = workspace.desktops[4];
                window.desktops[0] = desktop;
                window.minimized = true;
                break;
            }
        }
    }

    if(workspace.activeWindow.resourceClass == className){
        hide(className);
        return;
    }

    show(className);
}

// First string is for kglobalconfigrc, second is for shortcuts config menu

registerShortcut("Scratchpad 1", "Scratch - Quick", "Alt+Q", () => {scratch("st-256color");});
registerShortcut("Scratchpad 2", "Scratch - Whatsapp", "Alt+W", () => {scratch("whatsapp");});
registerShortcut("Scratchpad 3", "Scratch - Dolphin", "Alt+E", () => {scratch("org.kde.dolphin");});
registerShortcut("Scratchpad 4", "Scratch - Slack", "Alt+S", () => {scratch("Slack");});
registerShortcut("Scratchpad 5", "Scratch - Discord", "Alt+D", () => {scratch("discord");});
