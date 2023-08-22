export const getGits = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3wlToXzJ3FkWEA06zAOKC0hvX0A8r3Oc&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gits = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gits;
}