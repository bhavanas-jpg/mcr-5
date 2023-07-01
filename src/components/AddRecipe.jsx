import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../context/DataContext";

const AddRecipe = () => {
  const [formValues, setFormValues] = useState({
    id: uuid(),
    recipeName: "",
    cuisineType: "",
    ingredients: [],
    instructions: [],
    img: "",
  });
  const { dispatch } = useData();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: formValues });
  };
  console.log(formValues);

  const changePictureHandler = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/")) {
      if (file.size < 10 * 1024 * 1024) {
        setFormValues((prev) => ({
          ...prev,
          img: URL.createObjectURL(file),
        }));
      } else {
        alert("file must be less than 10mb");
      }
    } else {
      alert("file must be an image (JPEG/PNG)");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)} className="recipe__form">
        <input
          type="text"
          value={formValues.recipeName}
          onChange={(e) =>
            setFormValues({ ...formValues, recipeName: e.target.value })
          }
          placeholder="recipe name"
        />
        <input
          type="text"
          value={formValues.cuisineType}
          onChange={(e) =>
            setFormValues({ ...formValues, cuisineType: e.target.value })
          }
          placeholder="cusine type"
        />
        <textarea
          placeholder="Ingredients"
          cols="30"
          rows="10"
          value={formValues.ingredients.join(", ")}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              ingredients: e.target.value.split(","),
            })
          }
        />

        <textarea
          placeholder="Instructions"
          cols="30"
          rows="10"
          value={formValues.instructions.join(", ")}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              instructions: e.target.value.split(","),
            })
          }
        />
        <input
          onChange={changePictureHandler}
          type="file"
          
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRecipe;
