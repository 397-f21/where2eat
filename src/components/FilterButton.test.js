import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from "./FilterButtons";

const sorted_categories = {
    "American (New)": [{
        "rating": 4.5,
        "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
        "price": "$",
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
    }],
    "American (Traditional)": [{
        "rating": 4,
        "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
        "price": '$$',
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
    }]
}

const filtered_categories = {
    "American (New)": [{
        "rating": 4.5,
        "photos": ["https://s3-media2.fl.yelpcdn.com/bphoto/FTi5rxWJ5VK6q4aeiYza4Q/o.jpg"],
        "price": "$",
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
    }]
}
test('renders homepage with buttons', async () => {
    render(<FilterButtons categories={sorted_categories} setFilteredCategories={()=>{return filtered_categories}} currDistance={0.5} setCurrDistance={() => {return 0.5}} />);
    expect(await screen.findByRole("button", { name: "$" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "$$" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "$$$" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "$$$$" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "≤ 0.5 Miles" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "≤ 1 Mile" })).toBeVisible();
    expect(await screen.findByRole("button", { name: "≤ 3 Miles" })).toBeVisible();
    fireEvent.click(await screen.findByRole("button", { name: "$" }))
  });

