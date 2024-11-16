import React from "react";
import useFirestore from "../hooks/useFirestore"
import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="row">
            {docs && docs.map(doc => (
                <motion.div className="column" key={doc.id}
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt='pic' />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
