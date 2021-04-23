import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({setSelectedImage}) => {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div className='imagegrid'>
            { docs && docs.map(doc=>(
                <div className="image-wrap" key={doc.id}
                    onClick={()=>setSelectedImage(doc.url)}
                >
                    <img src={doc.url} alt="Uploaded Pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;