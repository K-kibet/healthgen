import {useState } from "react";
import axios from "axios";

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
      if(e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, ' '); //remove all unwanted spaces from the tag
        if(tag.length > 1 && !tags.includes(tag)) {
          tag.split(',').forEach(tag => {
            tags.push(tag);
            console.log(tags)
          })
        }
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        //username: user.username,
        title,
        desc,
      };
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}
    };
    return (
    <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
          </div>
          <div className="writeFormGroup ">
            <div className="tagsWrapper">
            <div className="title">
              <h2>Tags</h2>
            </div>
            <div className="content">
              <p>Press enter or add a comma after each tag</p>
              <div className="tag-box">
              <ul>
                {
                  tags.map(tag => {
                    return <li>{tag}<i className="uit uit-multiply"></i></li>
                  })
                }
                <input type="text" onKeyUp={addTag}/>
              </ul>
              </div>
            </div>
            <div className="details">
              <p>
                <span>10</span>
                tags are remaining
              </p>
              <button>Remove all</button>
            </div>
            </div>

          </div>
          <button className="writeSubmit" type="submit">Publish <i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    );
}

export default Write;
