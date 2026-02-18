import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "comfyui.exit",
    commands: [
        {
            id: "Comfy.Exit",
            label: "Exit",
            menubarLabel: "Exit",
            icon: "pi pi-power-off",
            function: async () => {
                if (confirm("Shut down ComfyUI?")) {
                    await fetch("/shutdown", { method: "POST" }).catch(() => {});
                }
            }
        }
    ],
    menuCommands: [
        {
            path: ["File"],
            commands: ["Comfy.Exit"]
        }
    ]
});
