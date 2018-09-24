export function fetchData () {
  return fetch('https://www.reddit.com/r/aww/top.json?t=all', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      return res.data.children.map(({ data }) => {
        const resolutions = data.preview.images[0].resolutions
        return {
          thumbnail: (resolutions[1] || resolutions[0]).url.replace(/&amp;/g, '&'),
          title: data.title,
          score: data.score,
          id: data.id
        }
      })
    })
}
