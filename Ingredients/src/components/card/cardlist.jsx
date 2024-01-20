import Card from "./card";





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

