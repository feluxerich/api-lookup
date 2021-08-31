import constants from "$lib/constants";

const hypixelAPIKey = constants.HYPIXEL_API_KEY

export async function get({ query }) {
    const name = query.get('name');

    var data = await (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).json();
    var uuid = data?.id;

    var params = {
        "key": hypixelAPIKey,
        "uuid": uuid,
    };
    params = `key=${params.key}&uuid=${params.uuid}&player=${params.uuid}`;

    var player = await (await fetch(`https://api.hypixel.net/player?${params}`)).json();
    var status = await (await fetch(`https://api.hypixel.net/status?${params}`)).json();
    var guild = await (await fetch(`https://api.hypixel.net/guild?${params}`)).json();

    var data = {
        "name": data?.name,
        "id": uuid,
        "rank": (player.player?.newPackageRank),
        "status": status.session?.online,
        "guild": guild?.guild.name,
    };


    return {
        body: {
            data,
        }
    };
}