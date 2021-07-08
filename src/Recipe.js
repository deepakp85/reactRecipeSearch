export default function Recipe(props) {
  return (
    <div className="row">
      {props.data.map((recipe) => {
        return (
            <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className="card m-4" style={{ width: "20rem" }}>
            <img
              className="card-img-top"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.recipe.label.length < 24 ? recipe.recipe.label : 
              `${recipe.recipe.label.substring(0,21)}...`}</h5>
              <p className="card-text">
                Cuisine type - {recipe.recipe.cuisineType}
              </p>
              <p className="card-text">
                Meal type - {recipe.recipe.mealType}
              </p>
              <p className="card-text">
                Dish type - {recipe.recipe.dishType}
              </p>
              <p className="card-text">
                Energy in KCal - {Math.floor(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
              </p>
              <a href={recipe.recipe.url} target='_blank' rel="stylesheet" className="btn btn-success">
                View Recipe
              </a>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
