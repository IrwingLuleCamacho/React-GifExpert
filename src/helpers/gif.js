
export const getGifs = async (category, limit) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&&api_key=4JZwqp4PPkhuBhYO5ivz61jxNukAaPpw`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs;
}