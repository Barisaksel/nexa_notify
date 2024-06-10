# nexa_notify
### Fivem Notify Script

![image](https://github.com/Barisaksel/nexa_notify/assets/71844178/98ccf58b-362d-43f4-a4fe-3589dba778bc)

### This is a free and open-source FiveM notification script that provides an easy-to-use and configure resource. You can modify and use it as you wish, and share it with credit to Nexa Development
# Help

### If you need any help, you can join on my [Discord](https://discord.gg/GVS5eVbZm5)

# Download & Installation

 - Download https://github.com/Barisaksel/nexa_notify/

 - Put it in your resources directory

 - Add this in your ```server.cfg```:

```
ensure nexa_notify
```

# Usage
| Variable    | What it does |
| ---------  | ------- |
| type       | For which status the notification is sent. It can be success or error or info.        |
| title      | The title that will appear in the notification.        |
| message    | The message that will appear on the screen.       |
| duration   | How long should the notification be on the screen in milliseconds. |

Using export
```
exports["nexa_notify"]:notify("success", "Nexa Notify", "Nexa Development", 7000)
```
Using Client Event

```
TriggerClientEvent("nexa_notify:showNotification", "success", "Nexa Notify", "Nexa Development", 7000)
```
