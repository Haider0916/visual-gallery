import Image from "next/image";
import React, { Fragment } from "react";

async function Gallery() {
    const photosBlob = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
    const photosData = await photosBlob.json();

    return (
        <div>
            {
                photosData.map((photoData: any) => {
                    return (
                        <Fragment key={photoData.id}>
                            <Image
                                src={photoData.url}
                                alt={"dummy photo url"}
                                width={400}
                                height={400}
                            />
                        </Fragment>
                    )
                })
            }
        </div>
    );
}

export default Gallery;
