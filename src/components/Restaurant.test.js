import React from "react";

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Restaurant from './Restaurant';
import App from "../App";

const chosenObject = {
    "rating": 4.5,
    "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
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
    "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
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

const chosenObject2 = {
        "rating": 4,
        "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
        "price": '$',
        "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
        "name": "Chicken Shack",
        "location": {
            "address1": '1925 Ridge Ave'
        },
        "categories": [
            {
                "title": "American (Traditional)"
            }
        ],
        "reviews": [
            {
                "text": "I called ahead, at 6p for 7p pickup. Got there at 7 and it wasn't ready. I was expecting my food to be packaged and ready for pay and pickup on a side table...",
                "rating": 5,
                "time_created": "2021-10-02 07:00:30",
                "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=J_i5y78xiezoOqmEVD_V3A&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
            },
            {
                "text": "This is always a visit for me when I am back in town. There is always the same menu for the last 30+ years, and I like that.The Bit Dinner.Yes extra...",
                "rating": 5,
                "time_created": "2021-06-07 20:07:19",
                "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=R6uUUbUOKaBrx83Uozsbmw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
            },
            {
                "text": "Chicken is one of my favorite foods, so when I find a recommended place, I'm always excited! Chicken was delicious! Fries were crispy! And the biscuits and...",
                "rating": 5,
                "time_created": "2021-10-29 13:02:09",
                "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
            }
        ]
}

const categories = {
    "American (New)": [chosenObject, newObject],
    "American (Traditional)": [chosenObject2],
    "Only One Option": [chosenObject]
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

test("Generate new restaurant button should be disabled if there is only one restaurant in the category", async() => {
    render(<Restaurant categories={categories} selected={"Only One Option"} setSelected={()=>{}}/>);
    expect(await screen.findByText(/Alcove Evanston/i)).toBeVisible();
    expect(await screen.findByText("Only One Option")).toBeVisible();
    expect(await screen.findByText(/1625 Maple Ave/i)).toBeVisible();
    const newRestaurantBtn = await screen.findByRole("button", {name:/Suggestion/i});
    expect(newRestaurantBtn).toBeDisabled();

})



test("Yelp anchor tag should contain href with restaurant link", async () => {
    render(<Restaurant categories={categories} selected={"American (Traditional)"} setSelected={()=>{}}/>);
    expect(await screen.getByText('View on Yelp').closest('a')).toHaveAttribute('href', 'https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA');
})

test("Yelp anchor tag should contain href with restaurant link", async () => {
    render(<Restaurant categories={categories} selected={"American (New)"} setSelected={()=>{}}/>);
    expect(await screen.getByText('View on Yelp').closest('a')).toHaveAttribute('href', 'https://www.yelp.com/biz/alcove-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA');
})

test("Google anchor tag should contain href", async () => {
    render(<Restaurant categories={categories} selected={"American (New)"} setSelected={()=>{}}/>);
    expect(await screen.getByText('1625 Maple Ave').closest('a')).toHaveAttribute('href');
    render(<Restaurant categories={categories} selected={"American (Traditional)"} setSelected={()=>{}}/>);
    expect(await screen.getByText('1925 Ridge Ave').closest('a')).toHaveAttribute('href');
})

test('Ratings and Distance is rendered', async () => {
    render(<Restaurant categories={categories} selected={"American (New)"} setSelected={()=>{}}/>);
    expect(await screen.getByTestId(/ratings/i)).toBeTruthy();
    expect(await screen.getByTestId(/ratings/i)).toBeVisible();
    expect(await screen.getByTestId(/distance/i)).toBeTruthy();
    expect(await screen.getByTestId(/distance/i)).toBeVisible();
})

test("Ratings and Distance is rendered", async () => {
    render(<Restaurant categories={categories} selected={"American (Traditional)"} setSelected={()=>{}}/>);
    expect(await screen.getByTestId(/ratings/i)).toBeTruthy();
    expect(await screen.getByTestId(/ratings/i)).toBeVisible();
    expect(await screen.getByTestId(/distance/i)).toBeTruthy();
    expect(await screen.getByTestId(/distance/i)).toBeVisible();
})
