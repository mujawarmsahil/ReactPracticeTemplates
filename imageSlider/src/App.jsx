import { useState } from 'react'
import './App.css'

function App() {
  let [imagesPath,setImagesPath] = useState([]);
  let [imgPath,setImgPath] = useState("");

  let showText = (e) => {
      setImgPath(e.target.value);
  }

  let addImages = () => {
    if(imgPath !== '')
    {
      setImagesPath([...imagesPath,imgPath]);
    }
    setImgPath("");
  }

  let showImages = () => {
    let imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
    imagesPath.forEach((imagePath) => {
      let img = document.createElement("img");
      img.src = imagePath;
      imageContainer.appendChild(img);
    });
  }
  return (
    <>
      <div className="container">
        <section id="inputContainer">
          <input type="text" name="imgPath" id="imgInput" value={imgPath} onChange={showText} />
        </section>

        <section id="buttonContainer">
          <button type="button" className="addImage" onClick={addImages}>Add image</button>
          <button type="button" className="showImage" onClick={showImages}>Show Images</button>
        </section>

        <section id="imageContainer">

        </section>
      </div>
    </>
  )
}

export default App
