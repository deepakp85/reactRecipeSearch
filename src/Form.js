export default function Search(props) {
  return (
    <form class="form-inline" onSubmit={props.recipe}>
  
  <div class="form-group mb-2">
    <input type="text" class="form-control" name='recipeName' placeholder="Type an Ingredient" />
  </div>
  <button type="submit" class="btn btn-primary mt-3">Search</button>
</form>
  );
}
