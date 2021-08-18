let BASE = 'https://themealdb.com/api/json/v1/1';

export default {
  getCategories: async () => {
    const cat = await fetch(BASE + '/categories.php')
    const json = await cat.json();
    return json;
  },

  getRecipes: async (search, category) => {

    let nameRecipe = 's=' + search;
    let nameCategorie = 'c=' + category;

    if (nameRecipe !== 's=') {

      const res = await fetch(BASE + '/search.php?' + nameRecipe);
      const json = await res.json();
      return json;

    } else if (nameCategorie !== 'c=' && category !== 'Todas as categorias') {

      const res = await fetch(BASE + '/filter.php?' + nameCategorie);
      const json = await res.json();
      return json;

    }

    const res = await fetch(BASE + '/search.php?' + nameRecipe);
    const json = await res.json();
    return json;

  }

};
