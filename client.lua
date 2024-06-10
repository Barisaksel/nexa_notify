Citizen.CreateThread(function()
end)

RegisterNetEvent('nexa_notify:showNotification')
AddEventHandler('nexa_notify:showNotification', function(type, title, message, duration)
    notify(type, title, message, duration)
end)

function notify(type, title, message, duration)
    SendNUIMessage({
        action = 'showNotification',
        type = type,
        title = title,
        message = message,
        duration = duration
    })
end

RegisterCommand("success",  function()
    notify("success", "Nexa Notify", "Nexa Development", 5000)
end)

RegisterCommand("error",  function()
    notify("error", "Nexa Notify", "Nexa Development", 5000)
end)

RegisterCommand("info",  function()
    notify("info", "Nexa Notify", "Nexa Development", 5000)
end)