---
slug: how-i-hacked-freecodecamp
title: How I hacked freecodecamp
description: A few days, I was feeling bored so I went to freecodecamp.org to learn some new stuff. I looked in to the Machine Learning course, did a few problems and started fiddling ...
date: 6-September-2021
---

## The Idea

A few days, I was feeling bored so I went to [freecodecamp.org](www.freecodecamp.org) to learn some new stuff. I looked in to the Machine Learning course, did a few problems and started fiddling with the Chrome devtools when I saw a big JSON object with almost 1700 items and each had a similar structure like so:

```json
{
    "id": "some_id",
    "fields": {
        "blockName": "Basic HTML and HTML5"
    }
}
```

I noticed that the property blockName referred to the course I was learning at that time and I thought that the id would refer to the particular challenge that i was solving. I opened the dev tools, and I was right ! freecodecamp was making requests to their API for solving challenge and that id corresponded to the id of the large JSON object.

## The execution

After finding out this information ,I stored the JSON object in a file and create a small script to request freecodecamp's server to mark that particular challenge with the id as "solved".

```js
import fetch from "node-fetch";
import data from "./fcc.js";

const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

const main = async () => {
    for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const name = data[i].blockName;
        console.log("Completed : ", name);
        const req = await fetch(
            "https://api.freecodecamp.org/modern-challenge-completed",
            {
                headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
                    "content-type": "application/json",
                    "csrf-token": "KnGyNtQH-GFyuak6u5gqPa8sV8169vx6PRyY",
                    "sec-ch-ua":
                        '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    cookie: "_ga=GA1.2.77626633.1630911571; _gid=GA1.2.1022758339.1630911571; connect.sid=s%3AmzxmMJhhS3UygaVt56wWqUMZ1lJFYOK3.89U9HgtTOpVIrD7UGsUIBk7GvMfLY3u0RT20VkiQPEI; _csrf=BfCbbYVYFZh225oox9s649yq; csrf_token=KnGyNtQH-GFyuak6u5gqPa8sV8169vx6PRyY; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IkpZS0FFQ2FWUWZJaktUOW1oTFVFc3pqbG40WklBbENBRm5udTd1N0Y0YTA2Nnd3dE5MRmt2U0ZMaHI2cVh5b1oiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyMS0wOS0wNlQwNzowMToxNC4zMjRaIiwidXNlcklkIjoiNWViNTdiNjUxMGRlYmZiNTY5YTQ1MjgwIn0sImlhdCI6MTYzMDkxMTY3NH0.B0FQCuTN3mooMqtUdSRLBF45CZ1p2UDy-Xhxuua-Jh4.eGmppMiVVauAbwvjgJtE7Vkh9gdnI5lw%2Bc988agg2oY; _gat=1",
                },
                referrer:
                    "https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements",
                referrerPolicy: "no-referrer-when-downgrade",
                body: JSON.stringify({ id, files: {} }),
                method: "POST",
                mode: "cors",
            }
        );
        const json = await req.json();
        console.log("Completed : " + i + "challenges");
        console.log(json);
    }
};
main();
```

To use this script, just change the cookie field with your cookie. To find that cookie, just complete a simple problem and you will find in the chrome devtools, that requests are made with a cookie field. Just copy that and paste it into this code.

## The Conclusion

In the end, I feel really bad for overloading freecodecamp's server just for fun. It could have cost them a lot of damage. If you want to try this out, I suggest only making 2-3 requests. You might think that your profile might spruce up because you completed all the problems but on your profile, it shows that you completed all the problems in one day, which is a clear indication of cheating. I will post the source code to Github in a few days and add the link here.
