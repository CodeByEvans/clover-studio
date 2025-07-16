import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function uploadImageToCloudinary(
  fileBuffer: Buffer,
  folder: string
) {
  const base64 = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder,
  });

  return {
    thumbnail: cloudinary.url(result.public_id, {
      width: 150,
      height: 150,
      crop: "fill",
      gravity: "auto",
      quality: "auto",
      fetch_format: "auto",
    }),
    medium: cloudinary.url(result.public_id, {
      width: 500,
      height: 500,
      crop: "scale",
      quality: "auto",
      fetch_format: "auto",
    }),
    large: cloudinary.url(result.public_id, {
      width: 1000,
      height: 1000,
      crop: "scale",
      quality: "auto",
      fetch_format: "auto",
    }),
  };
}
