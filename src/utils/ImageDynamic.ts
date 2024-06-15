import type { ImageMetadata } from 'astro';

// interface Props {
//     imagePath: string;
// }

export const loadImage = async (imagePath: string) => {
    const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpeg,jpg,png,gif}');
    if (!images[imagePath]) throw new Error(`"${imagePath}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif}"`);

    const { default : imageInfo } = await images[imagePath]();
    return imageInfo ;
};
