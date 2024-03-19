import React from "react";
import Image from "next/image";
import path from "path";
import fs from "fs/promises";

function UploadFile() {

    const handleFormSubmission = async (formData: FormData) => {
        'use server'
        const video = formData.get("video")! as File;
        const videoArrayBuffer = await video.arrayBuffer();
        const videoBuffer = Buffer.from(videoArrayBuffer);
        const dateId = Date.now();
        fs.mkdir(`public/${dateId}/`)
        const videoPath = path.join(`public/${dateId}/`, `video.mp4`)
        const imagePath = path.join(`public/${dateId}/`, `image.png`)
        await fs.writeFile(videoPath, videoBuffer)
    }

    return <div className="">
        <form
            className="w-full h-32 flex flex-wrap items-center justify-center bg-blue-50"
            action={handleFormSubmission}
        >
            <label htmlFor="uploadVideo">
                <Image
                    src={"/images/upload_icon.jpg"}
                    alt="Upload file image"
                    width={40}
                    height={40}
                    className="mt-2"
                />
            </label>
            <input
                accept="video/*"
                name="video"
                type="file"
                id="uploadVideo"
                className="hidden"
            />
            <br />
            <button
                type="submit"
                className="cursor-pointer w-24 h-9 bg-white text-black flex justify-center rounded-md items-center ml-2 border border-[#0B0705] hover:bg-black hover:text-white"
            >
                Upload
            </button>
        </form>
    </div>
}

export default UploadFile;
