import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
	images: string[];
	startChanging?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
	images,
	startChanging = true,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		if (startChanging) {
			const interval = setInterval(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
			}, 5000); // Change image every 5 seconds

			return () => clearInterval(interval);
		}
	}, [startChanging, images.length]);

	return (
		<div className="w-full h-full relative">
			{images.map((src, index) => (
				<Image
					key={src}
					src={src}
					alt={`Project image ${index + 1}`}
					layout="fill"
					objectFit="cover"
					className={`transition-opacity duration-500 ${
						index === currentImageIndex ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}
		</div>
	);
};

export default ImageCarousel;
