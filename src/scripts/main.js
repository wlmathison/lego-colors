// console.log("hello")
const displayContainer = document.querySelector("#display-container");

let formHtml = `<fieldset>
<label for="lego__creator">Creator:</label>
<input id="lego__creator" name="lego__creator" type="text" autofocus />
</fieldset>
<select id="lego__color">
    <option value="1">Red</option>
    <option value="2">Green</option>
    <option value="3">Yellow</option>
    <option value="4">Blue</option>
    <option value="5">Orange</option>
    <option value="6">Black</option>
</select>
<fieldset>
<label for="lego__shape">Shape:</label>
<input id="lego__shape" name="lego__shape" type="text" autofocus />
</fieldset>
<fieldset>
<label for="lego__creation">Creation:</label>
<input id="lego__creation" name="lego__creation" type="text" autofocus />
</fieldset>

<button class="btn lego__save">Save Lego Creation</button>`;

displayContainer.innerHTML = formHtml;

// Factory function to create a lego brick
const createLegoBrick = (creator, color, shape, creation) => {
  return {
    creator: creator,
    color: parseInt(color),
    shape: shape,
    creation: creation
  }
}

// Some starter code
document.querySelector(".lego__save").addEventListener("click", event => {
  const creatorToSave = document.querySelector("#lego__creator").value;
  const colorToSave = document.querySelector("#lego__color").value;
  const shapeToSave = document.querySelector("#lego__shape").value;
  const creationToSave = document.querySelector("#lego__creation").value;

  // Once you have collected all the values, build your data structure
  // const legoToSave = {
  //   creator: creatorToSave,
  //   color: colorToSave,
  //   shape: shapeToSave,
  //   creation: creationToSave
  // };

  // console.log("clicked", legoToSave);
  postLego(createLegoBrick(creatorToSave,colorToSave,shapeToSave,creationToSave));
});
