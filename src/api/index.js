export function fetchData () {
  return fetch('https://www.reddit.com/r/aww/top.json?t=all', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      return res.data.children
      .filter(({ data }) => {
        return data.preview.images[0].resolutions[3]
      })
      .map(({ data }) => {
        return {
          thumbnail: (data.preview.images[0].resolutions[3]).url.replace(/&amp;/g, '&'),
          title: data.title,
          score: data.score,
          id: data.id
        }
      })
    })
}
