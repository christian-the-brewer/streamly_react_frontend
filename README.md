
# Streamly Front-end

Streamly is a website that allows users to search for movies and tv shows and find out where they are available for streaming. Users can save content to a watch list.


## Demo

Insert gif or link to demo


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Tech Stack

**Client:** React, Vite, Bootstrap, dotenv, uuid, axios, react-router-dome

**Server:** Node, Express, MongoDB


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Roadmap

- Get Front end up and running

- Get server up and running

- Add watch list

- Add search




## Authors

- [@christian-the-brewer](https://github.com/christian-the-brewer)


## 🚀 About Me
I'm a Boston based full stack developer.


## Support

For support, email christian@thecodebrewer.com or message me on [blank].


## License

[MIT](https://choosealicense.com/licenses/mit/)

