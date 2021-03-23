if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const form = document.querySelector('form')
const input = document.querySelector('input')
const resultBox = document.getElementById('resultBox')
const artistBox = document.getElementById('artistBox')
const numResults = document.getElementById('numResults')

// Submit form
form.addEventListener('submit', e => {
    e.preventDefault()
    resultBox.innerHTML = ''
    artistBox.innerHTML = ''
    resultBox.style.display = 'grid'

    const searchTerm = input.value.split(' ').join('+')
    search(searchTerm)
})

// Change these to your own Client ID and Client Secret
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

// Search API
function search(searchTerm) {
    // Get access to API
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientID}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    })
        .then(response => response.json())
        .then(auth => {
            // Search for artists
            fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.access_token
                }
            })
                .then(res => res.json())
                .then(data => {
                    // Display artists found
                    const artists = data.artists.items
                    if (artists.length > 1 || artists.length < 1) {
                        numResults.innerHTML = `We found ${artists.length} artists with similar names`
                    } else {
                        numResults.innerHTML = `We found ${artists.length} artist with a similar name`
                    }

                    artists.forEach(artist => {
                        let link = document.createElement('a')
                        link.setAttribute('onclick', `displayGenre('${artist.id}')`)

                        let name = document.createElement('h2')
                        name.innerHTML = `${artist.name} `

                        let img = document.createElement('img')
                        if (artist.images[0]) {
                            img.src = `${artist.images[0].url} `
                        } else {
                            img.src = '/images/no-image.png'
                        }
                        link.appendChild(img)
                        link.appendChild(name)
                        resultBox.appendChild(link)
                    })
                })
        })
}

// Display genre from chosen artist
function displayGenre(id) {
    // Get access to API
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientID}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    })
        .then(response => response.json())
        .then(auth => {
            console.log(auth)
            // Find artist by ID
            fetch(`https://api.spotify.com/v1/artists/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.access_token
                }
            })
                .then(res => res.json())
                .then(artist => {
                    console.log(artist)
                    // Display artist information and genres
                    artistBox.innerHTML = ''
                    document.getElementById('numResults').innerHTML = ''
                    resultBox.style.display = 'none'
                    artistBox.style.display = 'flex'

                    let img = document.createElement('img')
                    if (artist.images[0]) {
                        img.src = `${artist.images[0].url}`
                    } else {
                        img.src = '/images/no-image.png'
                    }
                    artistBox.appendChild(img)

                    let a = document.createElement('a')
                    a.href = artist.external_urls.spotify

                    let h2 = document.createElement('h2')
                    h2.innerHTML = artist.name
                    a.appendChild(h2)
                    artistBox.appendChild(a)

                    let ul = document.createElement('ul')
                    if (artist.genres[0]) {
                        artist.genres.forEach(genre => {
                            let li = document.createElement('li')
                            li.innerHTML = genre.toUpperCase()
                            ul.appendChild(li)
                        })
                        artistBox.appendChild(ul)
                    } else {
                        let p = document.createElement('p')
                        p.id = 'no-genres'
                        p.innerHTML = 'This artist does not have any genres connected to them. You can click their name to listen to their music.'
                        artistBox.appendChild(p)
                    }
                })
        })
}