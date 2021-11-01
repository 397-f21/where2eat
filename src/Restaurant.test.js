import React from "react";

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Restaurant from './components/Restaurant';
import App from "./App";

const chosenObject = {
    "rating": 4.5,
    "price": null,
    "url": "https://www.yelp.com/biz/alcove-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
    "name": "Alcove Evanston ",
    "location": {
        "address1": "1625 Maple Ave"
    },
    "categories": [
        {
            "title": "American (New)"
        }
    ],
    "reviews": [
        {
            "text": "I dined at Alcove Evanston last week with some friends who live in Evanston. We walked over from their condo and as we entered a parking lot and went under...",
            "rating": 5,
            "time_created": "2021-09-23 13:50:44",
            "url": "https://www.yelp.com/biz/alcove-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=mJL_7RhEPHYJzRURytHXcA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        },
        {
            "text": "The address on Maple is a crummy entrance, but don't let that stop you.\nAlcove is the best fine dining restaurant in Evanston, if not the north shore!\nThe...",
            "rating": 5,
            "time_created": "2021-09-02 13:47:28",
            "url": "https://www.yelp.com/biz/alcove-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=zTrX9YKrpAUW93WKrqjDKg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        },
        {
            "text": "Well, a true fine-dining, delicious and delicate food, good environment, perfect service at a reasonable price(~$40). \nWould go again to try some new...",
            "rating": 5,
            "time_created": "2021-09-01 10:11:59",
            "url": "https://www.yelp.com/biz/alcove-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=4Z1J2a3lKPDOsUeLQab6Ow&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        }
    ]
}

const newObject = {
    "rating": 4.5,
    "price": "$$",
    "url": "https://www.yelp.com/biz/ovo-frito-cafe-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
    "name": "Ovo Frito Cafe",
    "location": {
        "address1": "1936 Maple Ave"
    },
    "categories": [
        {
            "title": "Breakfast & Brunch"
        },
        {
            "title": "Cafes"
        }
    ],
    "reviews": [
        {
            "text": "I love ovo frito so much that it's one of the only places that could inspire me to write a review, much less a glowing review. It's one of the first places...",
            "rating": 5,
            "time_created": "2021-09-21 07:40:06",
            "url": "https://www.yelp.com/biz/ovo-frito-cafe-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=U534Rs_VdrVPXmEfOxlblQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        },
        {
            "text": "Super friendly and fast service, the menu is unique and large and the the food is amazing. I'm in town for work and me and all my coworkers didn't even...",
            "rating": 5,
            "time_created": "2021-09-16 09:21:45",
            "url": "https://www.yelp.com/biz/ovo-frito-cafe-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=vr_rjHOUISU5pkwyk7bleQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        },
        {
            "text": "5 stars only because of food. 9 stars for food and 1 for service 10/2 = 5.\n\nInteresting menu, we tried Roberto 's french toast sandwich, hay mama estos...",
            "rating": 5,
            "time_created": "2021-10-24 21:22:20",
            "url": "https://www.yelp.com/biz/ovo-frito-cafe-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=XAYfyeCOhweQ-yuxY4Me1g&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
        }
    ]
}

const categories = {
    "American (New)": [chosenObject, newObject]
}

test("Restaurant page should render category, name, yelp, map, back button, and generate new restaurant button", async () => {
    render(<Restaurant categories={categories} selected={"American (New)"} setSelected={()=>{}}/>)
    const btn = await screen.findByRole("button", {name:"Back"});
    expect(await screen.findByText(/Alcove Evanston/i)).toBeVisible();
    expect(await screen.findByText("American (New)")).toBeVisible();
    expect(await screen.findByText(/1625 Maple Ave/i)).toBeVisible();
    expect(await screen.findByText("View on Yelp")).toBeVisible();
    expect(await screen.findByRole("button", {name:"Back"})).toBeVisible();
    expect(await screen.findByRole("button", {name:/Suggestion/i})).toBeVisible();
})

test("Generate new restaurant button should select a new restaurant", async() => {
    render(<Restaurant categories={categories} selected={"American (New)"} setSelected={()=>{}}/>);
    const newRestaurantBtn = await screen.findByRole("button", {name:/Suggestion/i});
    expect(await screen.findByText(/Alcove Evanston/i)).toBeVisible();
    expect(await screen.findByText("American (New)")).toBeVisible();
    expect(await screen.findByText(/1625 Maple Ave/i)).toBeVisible();
    fireEvent.click(newRestaurantBtn);
    expect(await screen.findByText(/Ovo Frito Cafe/i)).toBeVisible();
    expect(await screen.findByText("American (New)")).toBeVisible();
    expect(await screen.findByText(/1936 Maple Ave/i)).toBeVisible();

})

