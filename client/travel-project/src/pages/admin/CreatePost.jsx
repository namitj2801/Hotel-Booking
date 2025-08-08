import axios from "axios";
import React, { useEffect, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [hotelLocation, setHotelLocation] = useState("");
  const [nearArea, setNearArea] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [images, setImages] = useState([]);
  const [guest, setGuest] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  console.log("all categories:", category);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/category/get-category`
      );
      setCategory(response.data);
      //   console.log("CATEGORY: ", response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return <div>Create Post</div>;
};

export default CreatePost;
