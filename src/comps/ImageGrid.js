import React, { useEffect } from "react";
import { motion } from "framer-motion"
import {
    ref,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import { storage } from "../firebase/config";

const ImageGrid = ({ setSelectedImg, imageUrls, setImageUrls }) => {
    const imagesListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="row">
            {imageUrls && imageUrls.map((imageUrl, index) => {
                return (
                    <motion.div className="column" key={imageUrl + index}
                        layout
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImg(imageUrl)}
                    >
                        <img src={imageUrl} alt='pic' />
                    </motion.div>
                )
            })}
        </div>
    )
}


export default ImageGrid;
