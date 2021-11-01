import React from "react";
import { render, screen } from '@testing-library/react';
import Selectors from "./Selectors";

const mock_categories = {
    "Chicken Shop": [
        {
            "rating": 4.5,
            "price": "$$",
            "url": "https://www.yelp.com/biz/10q-chicken-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "10Q Chicken",
            "location": {
                "address1": "816 Church St"
            },
            "categories": [
                {
                    "title": "Chicken Shop"
                },
                {
                    "title": "Korean"
                }
            ],
            "reviews": [
                {
                    "text": "was in town while touring northwestern and was looking for a good asian place to eat..10q chicken was highly rated on yelp and did not disappoint!\n\nyou...",
                    "rating": 5,
                    "time_created": "2021-10-11 13:20:03",
                    "url": "https://www.yelp.com/biz/10q-chicken-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=SvfZlYf8gMxZtHRi-_oV0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Wow. Wow. Wow. What can I say about this chicken? It was spectacular. I can't wait to come back and try another flavor.\n\nFood: I had the Kangnam style...",
                    "rating": 5,
                    "time_created": "2021-08-25 16:04:42",
                    "url": "https://www.yelp.com/biz/10q-chicken-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=RPTDmEgv8TmLhYyjsnhkwQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "I've been coming here for a few years now and they have great food. I usually get the bowls, the Korean bbq one is my favorite. The Wings are huge, and the...",
                    "rating": 5,
                    "time_created": "2021-06-21 20:39:08",
                    "url": "https://www.yelp.com/biz/10q-chicken-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=tdujz5uJr-mtIZ6i5hdd4w&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "American (New)": [
        {
            "rating": 4,
            "price": "$$$",
            "url": "https://www.yelp.com/biz/next-of-kin-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Next of Kin Restaurant",
            "location": {
                "address1": "625 Davis St"
            },
            "categories": [
                {
                    "title": "American (New)"
                }
            ],
            "reviews": [
                {
                    "text": "I have to say, everything about this restaurant is beautiful. Beautiful dining rooms, beautiful patio, beautiful food, and beautiful menu options. I'm a bit...",
                    "rating": 5,
                    "time_created": "2021-10-11 12:29:54",
                    "url": "https://www.yelp.com/biz/next-of-kin-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=-kskNWmIJdJJuO6NahpPoA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "With The Cellar and Stained Glass now closed, I figured Next of Kin would be a decent option for a meal. Maybe weekend brunch isn't the right time to visit,...",
                    "rating": 3,
                    "time_created": "2021-08-22 18:37:07",
                    "url": "https://www.yelp.com/biz/next-of-kin-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=fR3QwdCxV5i8xDDgJkX3Pg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "first, the name of the place drew me in... and, I discovered a welcoming reception, a friendly, knowledgeable & accommodating bar staff (Lauren & Rinn), and...",
                    "rating": 5,
                    "time_created": "2021-05-28 16:41:50",
                    "url": "https://www.yelp.com/biz/next-of-kin-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=AnbYCWjJjsoKPTZP8-0JQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        },
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/bat-17-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Bat 17",
            "location": {
                "address1": "1709 Benson Ave"
            },
            "categories": [
                {
                    "title": "American (New)"
                },
                {
                    "title": "Breakfast & Brunch"
                },
                {
                    "title": "Bars"
                }
            ],
            "reviews": [
                {
                    "text": "Decided to try it on our way to Northwestern football game after seeing reviews on Campus Eats. \n\nOne of the best burgers I've ever had... anywhere. Burger...",
                    "rating": 5,
                    "time_created": "2021-10-30 17:25:06",
                    "url": "https://www.yelp.com/biz/bat-17-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=T6LlPBDVQ0RMR0xd1_h21w&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "First visit - excellent. Came over move in week @ NU but still managed to snag an outdoor spot for an early dinner. Interestingly, the menu stated how the...",
                    "rating": 5,
                    "time_created": "2021-10-19 20:15:28",
                    "url": "https://www.yelp.com/biz/bat-17-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=tLmF5thtjKOml-LtAwh0pg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Needed a simple dinner and the staff were happy to oblige helpfully. Seems studenty but it wasn't too loud and people were polite. \nNice turkey Swiss and...",
                    "rating": 5,
                    "time_created": "2021-09-14 18:13:45",
                    "url": "https://www.yelp.com/biz/bat-17-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=lOXqwCMt64RbWti3LMj6wg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Mediterranean": [
        {
            "rating": 5,
            "price": null,
            "url": "https://www.yelp.com/biz/habibi-in-mediterranean-grill-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Habibi In Mediterranean Grill",
            "location": {
                "address1": "825 Church St"
            },
            "categories": [
                {
                    "title": "Mediterranean"
                }
            ],
            "reviews": [
                {
                    "text": "I'll be the first to admit that I didn't think Evanston needed another Mediterranean restaurant, but I'm glad that Habibi In proved me wrong. This is the go...",
                    "rating": 5,
                    "time_created": "2021-09-27 11:05:36",
                    "url": "https://www.yelp.com/biz/habibi-in-mediterranean-grill-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=CvpdcK3ubiIA77HBZNR4AQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "It took a little bit longer for the gyro to come out than I'd expect, but can't complain at all about the quality of the meal. Had a lovely amount of food...",
                    "rating": 4,
                    "time_created": "2021-10-08 20:48:36",
                    "url": "https://www.yelp.com/biz/habibi-in-mediterranean-grill-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=QQ4PY-vbSSuKqQQXJINpSw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Totally delicious!  We had the beef and chicken shawarma sandwiches. And a bowl of lentil soup. So tasty and fresh.",
                    "rating": 5,
                    "time_created": "2021-10-26 13:48:45",
                    "url": "https://www.yelp.com/biz/habibi-in-mediterranean-grill-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=fHkbCDPyAt5S8DvKkIt0Ig&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Breakfast & Brunch": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/mid-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "MID KITCHEN",
            "location": {
                "address1": "1512 Sherman Ave"
            },
            "categories": [
                {
                    "title": "Breakfast & Brunch"
                },
                {
                    "title": "Gluten-Free"
                },
                {
                    "title": "Vegan"
                }
            ],
            "reviews": [
                {
                    "text": "Super menu, food, and staff, but often long wait times because it's tiny and very popular! The manager is an absolute DOLL!!!",
                    "rating": 5,
                    "time_created": "2021-10-09 09:44:55",
                    "url": "https://www.yelp.com/biz/mid-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=A-fcHVj9AuEycbZ4NG2HQw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Oh my gosh. Food is amazing here! They offer many options of food that fit whatever dietary restrictions that you are on. I had their Turkish breakfast and...",
                    "rating": 3,
                    "time_created": "2021-06-25 20:16:43",
                    "url": "https://www.yelp.com/biz/mid-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=Lb_u5gP370fYu9UfJJSlfQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Mid Kitchen was an impromptu stop for us after a nice workout.  I wanted to eat something not too light but not too heavy...some where in the mid.....wait!...",
                    "rating": 4,
                    "time_created": "2021-10-04 15:36:08",
                    "url": "https://www.yelp.com/biz/mid-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=vveUdXeWO63kX-_6ngh6WQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        },
        {
            "rating": 4.5,
            "price": "$$",
            "url": "https://www.yelp.com/biz/fridas-breakfast-and-lunch-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Frida's Breakfast & Lunch",
            "location": {
                "address1": "618 Church St"
            },
            "categories": [
                {
                    "title": "Breakfast & Brunch"
                },
                {
                    "title": "Mexican"
                },
                {
                    "title": "Sports Bars"
                }
            ],
            "reviews": [
                {
                    "text": "Shortly after writing a review the first time I was contacted by staff which revealed that this IS the group behind Danny's egghead diner! (Of Lincoln...",
                    "rating": 5,
                    "time_created": "2021-10-24 21:14:43",
                    "url": "https://www.yelp.com/biz/fridas-breakfast-and-lunch-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=NHxeSlMa5WP5Tf_xDjpe8Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Frida's was ok-the service was great, especially considering how busy it was. My friend is very, very picky and had a lot of asks-the server was extremely...",
                    "rating": 3,
                    "time_created": "2021-10-17 15:09:13",
                    "url": "https://www.yelp.com/biz/fridas-breakfast-and-lunch-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=of5mx_yqQhcEr__W8ocIVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Had a fantastic breakfast at Fridas. We arrived around 10:45 on a Sunday morning and was told the wait would be about 15 minutes.  We were seated within 10...",
                    "rating": 5,
                    "time_created": "2021-09-19 19:56:48",
                    "url": "https://www.yelp.com/biz/fridas-breakfast-and-lunch-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=ro-9D9lv9NePgtgqhPSx0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        },
        {
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
    ],
    "Chinese": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/shang-noodle-and-chinese-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Shang Noodle & Chinese",
            "location": {
                "address1": "608 Davis St"
            },
            "categories": [
                {
                    "title": "Chinese"
                },
                {
                    "title": "Noodles"
                },
                {
                    "title": "Bubble Tea"
                }
            ],
            "reviews": [
                {
                    "text": "This is one of the best restaurants in Evanston hands down! Every time I'm in town I have to stop by. Highly recommend their beef noodle soup with hand...",
                    "rating": 5,
                    "time_created": "2021-09-18 18:31:37",
                    "url": "https://www.yelp.com/biz/shang-noodle-and-chinese-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=-sTcDJQq4Rtqxr8kV0CTMg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Do yourself a favor. Go to this place immediately.\n\nThe crispy chicken sizzling pot is something I dream about on a weekly basis. It is the only thing I...",
                    "rating": 5,
                    "time_created": "2021-08-20 14:10:00",
                    "url": "https://www.yelp.com/biz/shang-noodle-and-chinese-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=dRI1u8QfX0tQ75qZBaIOZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Came here for the first time on a whim for a Saturday night dinner around 6 PM.  Got lucky because it was not full and we were seated immediately and were...",
                    "rating": 4,
                    "time_created": "2021-09-03 17:38:11",
                    "url": "https://www.yelp.com/biz/shang-noodle-and-chinese-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=b2e6EBbFFjrKk2mzOBZjPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Sushi Bars": [
        {
            "rating": 4.5,
            "price": null,
            "url": "https://www.yelp.com/biz/shinsen-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Shinsen Evanston",
            "location": {
                "address1": "1322 Chicago Ave"
            },
            "categories": [
                {
                    "title": "Sushi Bars"
                },
                {
                    "title": "Thai"
                },
                {
                    "title": "Japanese"
                }
            ],
            "reviews": [
                {
                    "text": "THIS LIL GEM.., what a surprise.. we happened upon it.. Was so pleasantly surprised..\nBYOB. Yay!! I mistakenly erased the photos!!\nBUT GO AND ENJOY! Service...",
                    "rating": 5,
                    "time_created": "2021-10-07 10:29:55",
                    "url": "https://www.yelp.com/biz/shinsen-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=-e7RrdgfmPDtjs5NRbjlMw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "This place is tiny but delicious! Everything right down to the soy sauce is made in house. \n\nWe ordered sashimi, edamame, pork skins, chicken gizzards and...",
                    "rating": 5,
                    "time_created": "2021-09-19 18:51:11",
                    "url": "https://www.yelp.com/biz/shinsen-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=7BnPolXw20zh2nbGZ7F9gA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Simply amazing sushi!  My wife and I enjoyed lunch here on a Sunday and in a whim and we are SO glad we did. \n\nThe atmosphere is very chill. Very cool decor...",
                    "rating": 5,
                    "time_created": "2021-08-22 10:42:55",
                    "url": "https://www.yelp.com/biz/shinsen-evanston-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=qVYXuI5RuTZb2209bnf6UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Ramen": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/table-to-stix-ramen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Table To Stix Ramen",
            "location": {
                "address1": "1007 Davis St"
            },
            "categories": [
                {
                    "title": "Ramen"
                }
            ],
            "reviews": [
                {
                    "text": "Birthday dinner carryout - absolutely GREAT  \nRamen and Seaweed salad  \nSuperb!",
                    "rating": 5,
                    "time_created": "2020-12-24 09:50:38",
                    "url": "https://www.yelp.com/biz/table-to-stix-ramen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=gOJRveydG6ngQNEMU3ATbw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "More of a 3.5 star ramen place, located in downtown Evanston. Meter parking. No wait but service is not the quickest. The place lacks a bit of personality....",
                    "rating": 3,
                    "time_created": "2021-08-27 18:36:17",
                    "url": "https://www.yelp.com/biz/table-to-stix-ramen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=sVc0xI-Idlmdd3TW2GNKNw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Very nice staff! The ramen was okay, not as good as I excepted but I would definitely go back and try it again!",
                    "rating": 3,
                    "time_created": "2020-11-23 16:38:38",
                    "url": "https://www.yelp.com/biz/table-to-stix-ramen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=ABJsjZzRkOjY7fq3uzDHNw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Latin American": [
        {
            "rating": 4.5,
            "price": "$",
            "url": "https://www.yelp.com/biz/tomate-fresh-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Tomate Fresh Kitchen",
            "location": {
                "address1": "914 Noyes St"
            },
            "categories": [
                {
                    "title": "Latin American"
                },
                {
                    "title": "Mexican"
                }
            ],
            "reviews": [
                {
                    "text": "Ordered catering for a small outdoor retirement party.  The empanadas were delicious even after sitting outside for a bit. Everyone raved about the tacos....",
                    "rating": 5,
                    "time_created": "2021-09-30 19:33:19",
                    "url": "https://www.yelp.com/biz/tomate-fresh-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=jQWcEa1nqSNC4Y2jwgOjVg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "I really like Tomate Fresh and we eat there regularly. However, we've noticed that their order of guacamole ($9 Mayan style) isn't as plentiful as it used...",
                    "rating": 4,
                    "time_created": "2021-09-07 17:25:43",
                    "url": "https://www.yelp.com/biz/tomate-fresh-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=DPC8PH3EHl8vbqyNv-0-6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "I placed an online order on a Saturday afternoon and it was ready for pickup within ~15 minutes. Upon ordering I was confused because the website still...",
                    "rating": 3,
                    "time_created": "2021-05-16 10:16:20",
                    "url": "https://www.yelp.com/biz/tomate-fresh-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=ndmsVCQdPdGzpu1wgxM3wg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Mexican": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/taco-diablo-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Taco Diablo",
            "location": {
                "address1": "1026 Davis St"
            },
            "categories": [
                {
                    "title": "Mexican"
                },
                {
                    "title": "Bars"
                }
            ],
            "reviews": [
                {
                    "text": "Our favorite place. \nFriendly and quick service, great food. \nHighly recommend their tortas, every time they are better and better. \nThey have good...",
                    "rating": 5,
                    "time_created": "2021-10-28 18:10:08",
                    "url": "https://www.yelp.com/biz/taco-diablo-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=qRW18BCQr3enwqGbJOPFww&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Quick quibble--like its sister store Lulu's, I sometimes feel like the food is overpriced. That said, those jalapeños are terrific (quick tip: add a bit of...",
                    "rating": 4,
                    "time_created": "2021-10-10 17:20:18",
                    "url": "https://www.yelp.com/biz/taco-diablo-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=v1vtJ4U-JFUtTjKaJE2hkQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "My husband and I tucked in at the bar for margaritas and sharing an order of tacos. Day 2 of the reopening and the place was hopping. \n\nBartenders Rachel...",
                    "rating": 5,
                    "time_created": "2021-06-12 17:37:37",
                    "url": "https://www.yelp.com/biz/taco-diablo-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=ikZ6LWGaVaD5E9VPKyt4uQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Thai": [
        {
            "rating": 5,
            "price": null,
            "url": "https://www.yelp.com/biz/yasotorn-thai-cusine-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Yasotorn Thai Cusine",
            "location": {
                "address1": "809 Dempster St"
            },
            "categories": [
                {
                    "title": "Thai"
                }
            ],
            "reviews": [
                {
                    "text": "Just tried this new restaurant for lunch.\nThe staff is delightful. Mimi waited on us and was so sweet and full of information. We ordered delicious Pad...",
                    "rating": 5,
                    "time_created": "2021-10-28 15:00:57",
                    "url": "https://www.yelp.com/biz/yasotorn-thai-cusine-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=L3Px-oMpKbHPdyWe_XYveA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "This restaurant has filled the space of the recently closed Siam Pasta, and all I can say is, WELCOME TO THE NEIGHBORHOOD!!\n\nThe new owners have put a lot...",
                    "rating": 5,
                    "time_created": "2021-10-25 12:59:19",
                    "url": "https://www.yelp.com/biz/yasotorn-thai-cusine-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=DVxJhz603XggmNmBTjwY1Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Last week my friends and I, have the opportunity to try this Thai restaurant in Evanston and let me told you, a very solid restaurant. Fantastic authentic...",
                    "rating": 5,
                    "time_created": "2021-10-23 15:00:52",
                    "url": "https://www.yelp.com/biz/yasotorn-thai-cusine-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=oSi7LkMiUklzUjirqID9Qw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "American (Traditional)": [
        {
            "rating": 4,
            "price": "$",
            "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Chicken Shack",
            "location": {
                "address1": "1925 Ridge Ave"
            },
            "categories": [
                {
                    "title": "American (Traditional)"
                },
                {
                    "title": "Chicken Wings"
                },
                {
                    "title": "Fish & Chips"
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
                    "text": "This is always a visit for me when I am back in town. \nThere is always the same menu for the last 30+ years, and I like that.\nThe Bit Dinner.\nYes extra...",
                    "rating": 5,
                    "time_created": "2021-06-07 20:07:19",
                    "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=R6uUUbUOKaBrx83Uozsbmw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Chicken is one of my favorite foods, so when I find a recommended place, I'm always excited! Chicken was delicious! Fries were crispy! And the biscuits and...",
                    "rating": 5,
                    "time_created": "2021-10-29 13:02:09",
                    "url": "https://www.yelp.com/biz/chicken-shack-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=rmSR9fwI0Y3wVVyD2irVdA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Poke": [
        {
            "rating": 4.5,
            "price": "$$",
            "url": "https://www.yelp.com/biz/pono-ono-poke-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Pono Ono Poke",
            "location": {
                "address1": "1630 Chicago Ave"
            },
            "categories": [
                {
                    "title": "Poke"
                },
                {
                    "title": "Hawaiian"
                },
                {
                    "title": "Seafood"
                }
            ],
            "reviews": [
                {
                    "text": "Great food, amazing ambiance, fresh fish, crisp vegetables. WAY BETTER than that other place in town. Best fast-casual lunch in downtown Evanston. Staff is...",
                    "rating": 5,
                    "time_created": "2021-09-08 10:38:41",
                    "url": "https://www.yelp.com/biz/pono-ono-poke-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=042sdAWEizw77uhNZ-8pEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "WOW Pono Ono blew me away! The fish was fresh, the price was reasonable, and the service was quick. I literally went twice this week because it was THAT...",
                    "rating": 5,
                    "time_created": "2021-10-09 13:59:01",
                    "url": "https://www.yelp.com/biz/pono-ono-poke-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=SG8L57JXmDo7Wx6U7QPd-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "The students in my office recommended that I try out Pono Ono. Boy, they were right. I can't believe I haven't been here sooner!\n\nI ordered a customized...",
                    "rating": 5,
                    "time_created": "2021-10-04 21:41:11",
                    "url": "https://www.yelp.com/biz/pono-ono-poke-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=MgB11ZDsPhxEXTpr7pDSbw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Venezuelan": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/la-cocinita-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "La Cocinita Restaurant",
            "location": {
                "address1": "1625 Chicago Ave"
            },
            "categories": [
                {
                    "title": "Venezuelan"
                },
                {
                    "title": "Food Trucks"
                },
                {
                    "title": "Mexican"
                }
            ],
            "reviews": [
                {
                    "text": "Amazing \nPabellon Incrsdible the creamy sauce w the rich deep brisket and bright plantain \nOne of the best things I have eaten ever \nDelicious \nEmpanadas...",
                    "rating": 5,
                    "time_created": "2021-07-03 09:09:32",
                    "url": "https://www.yelp.com/biz/la-cocinita-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=5pWT9ypvroEZDA32p-Vh8w&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "We ordered for take out. I am partly of Colombian descent and saw arepas and got excited!  We figured we'd give it a shot. Husband and I ordered: \nEl...",
                    "rating": 4,
                    "time_created": "2021-08-15 19:01:08",
                    "url": "https://www.yelp.com/biz/la-cocinita-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=8oRWDfJp5fA45sWJE3MQKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Wow wow wow! I tried La Cocinita for the first time last night and it was AMAZING! The flavors oh my! I really don't have words to express how much I loved...",
                    "rating": 5,
                    "time_created": "2021-10-28 14:09:22",
                    "url": "https://www.yelp.com/biz/la-cocinita-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=iiULcFI-JNmCD0JtEVf35Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Szechuan": [
        {
            "rating": 3.5,
            "price": "$$",
            "url": "https://www.yelp.com/biz/peppercorns-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Peppercorns Kitchen",
            "location": {
                "address1": "620 Davis St"
            },
            "categories": [
                {
                    "title": "Szechuan"
                }
            ],
            "reviews": [
                {
                    "text": "Lately, on the rare occasions that I order food in, I have been leaning towards very spicy fare such as delicious Szechwan cooking.\nThis was my second time...",
                    "rating": 4,
                    "time_created": "2021-09-20 17:29:04",
                    "url": "https://www.yelp.com/biz/peppercorns-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=hijdUwr1odcvpGpGC_55vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "This is the real deal, folks.\n\nYour lips will tingle, your tongue will numb, everything will taste funny but still amazingly delicious. We ordered: \n\n1)...",
                    "rating": 5,
                    "time_created": "2021-09-17 15:45:52",
                    "url": "https://www.yelp.com/biz/peppercorns-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=Luiqg1XWsW0uu7OpcBrC_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "My husband and I had never been here. He got the hot & sour soup and the popular popcorn chicken, while I just got the vegetarian dry pot tofu (which also...",
                    "rating": 3,
                    "time_created": "2021-08-30 18:48:48",
                    "url": "https://www.yelp.com/biz/peppercorns-kitchen-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=LcFoIcB322FkHDaFpcMUBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Asian Fusion": [
        {
            "rating": 3.5,
            "price": "$$",
            "url": "https://www.yelp.com/biz/lulus-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Lulu's",
            "location": {
                "address1": "1026 Davis St"
            },
            "categories": [
                {
                    "title": "Asian Fusion"
                },
                {
                    "title": "Dim Sum"
                },
                {
                    "title": "Thai"
                }
            ],
            "reviews": [
                {
                    "text": "We have been ordering delivery from Lulu's forever. It's a favorite of our Labor and Delivery night team. The food is always wonderful, the service is...",
                    "rating": 5,
                    "time_created": "2020-04-05 18:18:32",
                    "url": "https://www.yelp.com/biz/lulus-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=dpYy18wRTcCr8JsNTR_8ig&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "Interesting menu, to be honest, but too pricey for what you're getting. A $17 dollar salad is a bit much.",
                    "rating": 2,
                    "time_created": "2021-08-29 15:46:41",
                    "url": "https://www.yelp.com/biz/lulus-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=8fkVkdnkMtvclaXR3B1oww&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "I just finished eating my take out from Lulu's and it was so, good I had to just jump on Yelp to let people know!\n\nRight now you can order for pick up...",
                    "rating": 5,
                    "time_created": "2020-03-28 17:17:23",
                    "url": "https://www.yelp.com/biz/lulus-evanston-2?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=KA7q9Wyl9c7nBu32ucu7_Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Coffee & Tea": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/cupitol-coffee-and-eatery-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Cupitol Coffee & Eatery",
            "location": {
                "address1": "812 Grove St"
            },
            "categories": [
                {
                    "title": "Coffee & Tea"
                },
                {
                    "title": "Breakfast & Brunch"
                },
                {
                    "title": "Bakeries"
                }
            ],
            "reviews": [
                {
                    "text": "Great coffee house breakfast/lunch spot to meet with friends. Fresh made breads and desserts.",
                    "rating": 5,
                    "time_created": "2021-09-19 07:39:51",
                    "url": "https://www.yelp.com/biz/cupitol-coffee-and-eatery-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=7pjOAKx4WskYOPOFrNRvSA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "This was one of the best croissants I've had -- I had the pistachio croissant and was surprised by the cream filling. I wasn't expecting it, but inside the...",
                    "rating": 4,
                    "time_created": "2021-09-24 12:24:46",
                    "url": "https://www.yelp.com/biz/cupitol-coffee-and-eatery-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=RXECU5zRmuTZ8RNlF07g8Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "The restaurant is extremely aesthetic and spacious. You order at the counter then sit and wait with your number, and pickup your drinks right away. It keeps...",
                    "rating": 3,
                    "time_created": "2021-07-23 12:40:01",
                    "url": "https://www.yelp.com/biz/cupitol-coffee-and-eatery-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=Ku81c3Vr_kv24bM9EMCmSA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ],
    "Indian": [
        {
            "rating": 4,
            "price": "$$",
            "url": "https://www.yelp.com/biz/mt-everest-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA",
            "name": "Mt. Everest Restaurant",
            "location": {
                "address1": "630 Church St"
            },
            "categories": [
                {
                    "title": "Indian"
                },
                {
                    "title": "Himalayan/Nepalese"
                },
                {
                    "title": "Buffets"
                }
            ],
            "reviews": [
                {
                    "text": "Always love Mt. Everest Restaurant.\nThe food is early and hot and delicious. The delivery pepole are courteous.  \nI have tried many things from Mt. Everest...",
                    "rating": 5,
                    "time_created": "2021-09-02 09:49:16",
                    "url": "https://www.yelp.com/biz/mt-everest-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=grS-mGbJDeMoKWrW51tVVg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "This is the first time I ordered from this restaurant. I got aloo gobi and pea pilau rice for pickup. I only specified for them to go easy on the oil/ghee....",
                    "rating": 4,
                    "time_created": "2021-08-01 16:48:02",
                    "url": "https://www.yelp.com/biz/mt-everest-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=hP32k8a09Bhy4GhLUb-mNQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                },
                {
                    "text": "I've always been a fan of exceptional Indian food, so I was delighted to discover Mt. Everest Restaurant!\n\nThe venue is fairly basic, with the focus more on...",
                    "rating": 5,
                    "time_created": "2021-06-03 11:16:40",
                    "url": "https://www.yelp.com/biz/mt-everest-restaurant-evanston?adjust_creative=IrU6LbqHUMMEiqemD9YDLA&hrid=z6xl8PfGVppBf2ii6ITaYw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=IrU6LbqHUMMEiqemD9YDLA"
                }
            ]
        }
    ]
}

test('renders homepage with buttons', async () => {
  render(<Selectors categories={mock_categories} setSelected={() => {}}/>);
  expect(await screen.getByTestId("homepage")).toBeVisible();
  Object.keys(mock_categories).forEach(async (category) => {
      expect(await screen.getByText(category)).toBeVisible();
  })
});
