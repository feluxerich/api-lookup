export async function get({ query }) {
    const name = query.get('name');

    var data = await (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).json()

    return {
        body: {
            "name": data?.name,
            "id": data?.id
        }
    };
}