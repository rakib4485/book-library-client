import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddBooks = () => {

  const { user } = useContext(AuthContext)
  const [categoriyName, setCategoryName] = useState(['ARTS & PHOTOGRAPHY BOOKS'])

  // const [books, setBooks] = useState([]);
  

  const updateCategory = (event) =>{
    const id = event.target.value;
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategoryName(data.name));
  }

  // console.log(books);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const category_id = form.categories.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const sellerName = user.displayName;
    const location = form.location.value;
    const resaleP = form.resaleP.value;
    const orginialP = form.orginalP.value;
    const used = form.used.value;
    const posted = form.posted.value;
    const name = categoriyName;
    // setCategory(categories);

    const imageHostKey = process.env.REACT_APP_imageHostKey; 
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(imageData => {
      if(imageData.success){
        console.log(imageData.data.url)

        const book = {
          category_id, name, title, img:imageData.data.url, sellerName, location, resaleP, orginialP, used, posted, 
          }

        console.log(book);
        fetch(`http://localhost:5000/books/`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(book),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.acknowledged){
                toast.success("Product Uploaded Successfully")
               }
               else{
                toast.error(data.message);
               }
            })
            .catch((err) => console.error(err));
        
      }
    })

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body bg-white md:w-[70%] lg:w-[70%] mx-auto rounded-md">
        <div className="text-center">
          <h1 className="text-xl font-bold md:text-3xl uppercase">
            Add Products
          </h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <select name="categories" onChange={updateCategory} className="input input-bordered">
            <option value="01">ARTS & PHOTOGRAPHY BOOKS</option>
            <option value="02">CHILDREN’S BOOKS</option>
            <option value="03">BIOGRAPHIES BOOKS</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Img Url</span>
          </label>
          <input
            type="file"
            name="image"
            placeholder="Image Url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="text"
            name="resaleP"
            placeholder="Resale Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            name="orginalP"
            placeholder="Original Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Used</span>
          </label>
          <input
            type="text"
            name="used"
            placeholder="Used"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Posted</span>
          </label>
          <input
            type="text"
            name="posted"
            placeholder="Posted"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;