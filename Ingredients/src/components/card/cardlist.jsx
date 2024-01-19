import Card from "./card";



// export const recipes = [
//     {
//       "id": 1,
//       "image": "https://www.hotelphotographers.eu/wp-content/uploads/2015/11/Food-photo-11-1200x1800.jpg",
//       "name": "Steak",
//       "tag": "Protein",
//       "time": 10
//     },
//     {
//       "id": 2,
//       "image": "https://th.bing.com/th/id/R.07e97b36a3262b43d3b186d62b0d51f7?rik=N7UOmR90N1rKgQ&pid=ImgRaw&r=0",
//       "name": "Chicken Breast",
//       "tag": "Protein",
//       "time": 20
//     },
//     {
//       "id": 3,
//       "image": "https://th.bing.com/th/id/OIP.phrgfaZx-HVg267zB-LTIwHaJ4?rs=1&pid=ImgDetMain",
//       "name": "Pasta",
//       "tag": "Carbohydrate",
//       "time": 10
//     },
//     {
//       "id": 4,
//       "image": "https://th.bing.com/th/id/R.9a35dfc7105173091fdae214d739a73c?rik=%2faNmbJrv3IN2jA&riu=http%3a%2f%2fwdy.h-cdn.co%2fassets%2f16%2f20%2f1463410343-wdy070113ezday-02.jpg&ehk=WBLxuBfjw5D%2fuds6L1%2bwjZ9QS7BE%2bVD6ESTqaGd4OUk%3d&risl=&pid=ImgRaw&r=0",
//       "name": "Fish",
//       "tag": "Ocean Food",
//       "time": 12
//     },
//     {
//         "id": 5,
//         "image": "https://th.bing.com/th/id/OIP.V_pjHTPvf5CxB3mCy8LuIAHaJ3?rs=1&pid=ImgDetMain",
//         "name": "Avocado",
//         "tag": "Fruit",
//         "time": 3
//     },
//     {
//         "id": 6,
//         "image": "https://th.bing.com/th/id/OIP.1A662vk-5-xAVFxO8Lr6vgHaLH?rs=1&pid=ImgDetMain",
//         "name": "Wine",
//         "tag": "Drink",
//         "time": 50
//     },
//     {
//         "id": 7,
//         "image": "https://th.bing.com/th/id/R.62e821c34ec97d127e17e5de5bb922e3?rik=fiCmRioGbsrunw&pid=ImgRaw&r=0",
//         "name": "Chicken wing",
//         "tag": "Protein",
//         "time": 15
//     },
//     {
//         "id": 8,
//         "image": "https://th.bing.com/th/id/OIP.4Y26opFf5tv69jQk_2b1qAHaK2?rs=1&pid=ImgDetMain",
//         "name": "Starbucks cake",
//         "tag": "Appetizer",
//         "time": 25
//     },
//     {
//         "id": 9,
//         "image": "https://th.bing.com/th/id/OIP.KLL9PMF41-bEwyfIZGXGdQHaKa?rs=1&pid=ImgDetMain",
//         "name": "oatmeal",
//         "tag": "Appetizer",
//         "time": 10
//     },
//     {
//         "id": 10,
//         "image": "https://th.bing.com/th/id/OIP.VzL6Z2iho7frndV6ApoQagHaLH?rs=1&pid=ImgDetMain",
//         "name": "Chicken Curry",
//         "tag": "Protein",
//         "time": 30
//     },
//     {
//         "id": 11,
//         "image": "https://th.bing.com/th/id/R.6b6c0a1095df22fbacf533ca41fcdec6?rik=jx%2fbEO8XjEaK0g&pid=ImgRaw&r=0",
//         "name": "Egg",
//         "tag": "Protein",
//         "time": 5
//       },
//       {
//         "id": 12,
//         "image": "https://th.bing.com/th/id/OIP.ZIeDiqbpG1mvYLPPgSyIbQHaJ4?rs=1&pid=ImgDetMain",
//         "name": "Chinese Food",
//         "tag": "Protein, Carbohydrate",
//         "time": 20
//       },
//       {
//         "id": 13,
//         "image": "https://th.bing.com/th/id/R.c77c6e35e5fd94339931b86ff0d907b3?rik=vt%2fyL3G9Bf5HTw&pid=ImgRaw&r=0",
//         "name": "Snack",
//         "tag": "Carbohydrate",
//         "time": 8
//       },
//       {
//         "id": 14,
//         "image": "https://th.bing.com/th/id/OIP.4LyJ-zFChn39BWHHPkEqYgHaLH?rs=1&pid=ImgDetMain",
//         "name": "Vegetarian Dinner",
//         "tag": "Vegetable",
//         "time": 12
//       },
//       {
//           "id": 15,
//           "image": "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/22_35576_30W_376_013x.jpg?width=545&height=597&quality=80&auto=webp&auto=webp&optimize={medium}",
//           "name": "Double-Cut Lamb Chops",
//           "tag": "Protein",
//           "time": 24
//       },
//       {
//           "id": 16,
//           "image": "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/15_1082_SYa_01ex.jpg",
//           "name": "The Ultimate Meat Collection - USDA Prime",
//           "tag": "Protein",
//           "time": 40
//       },
//       {
//           "id": 17,
//           "image": "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/18_32649_30J_02ex.jpg?quality=80&auto=webp&optimize={medium}",
//           "name": "Apple Sausage Walnut Stuffing",
//           "tag": "Appetizer",
//           "time": 15
//       },
//       {
//           "id": 18,
//           "image": "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/18_27431_30J_01ex.jpg",
//           "name": "Chicken Pot Pie",
//           "tag": "Appetizer",
//           "time": 15
//       },
//       {
//           "id": 19,
//           "image": "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_28386_30W_01exlx.jpg",
//           "name": "Sausage Sampler",
//           "tag": "Protein",
//           "time": 17
//       },
//       {
//           "id": 20,
//           "image": "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/17_346_30XP_02ex.jpg?quality=80&auto=webp&optimize={medium}",
//           "name": "Create Your Own Ham Feast",
//           "tag": "Protein",
//           "time": 30
//       },
//   ]


export default function Cardlist ({recipes}) {


    return(
        <section style={{marginTop:'10rem'}} className="w-75 CardList d-flex flex-wrap mx-auto gap-4">
            {recipes.map((recipe) => {
                return(
                    <Card 
                    key={recipe.id}
                    recipe={recipe}
                    className="d-flex flex-row mx-auto"/>
                )
            })}
        </section>
    );
}

