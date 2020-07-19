module.exports = client => {
    console.log(`${client.user.tag} is Online\nIn ${client.guilds.cache.size}`)
    client.user.setActivity("Development Mode", {type: "PLAYING"})
}