import { useState } from 'react';

const useImagesHandler = () => {
  const [imagesErrors, setImagesErrors] = useState({});
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');

  let imagesArray = [];
  let imagesConatiner = [];

  function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }

  const handleFileInputChange = (e) => {
    imagesArray = Array.from(e.target.files);
    let isValid = true;

    if (imagesArray.length > 3) {
      setImage1('');
      setImage2('');
      setImage3('');
      setImagesErrors({
        imagesRequiredError: 'You can only select at most 3 images',
      });
      isValid = false;
    }

    if (isValid) {
      for (let img = 0; img < imagesArray.length; img++) {
        if (imagesArray[img].size >= 10485760) {
          setImage1('');
          setImage2('');
          setImage3('');
          const imgSize = bytesToSize(imagesArray[img].size);
          setImagesErrors({
            imagesRequiredError: `Selected image is ${imgSize} (Maximum 10 MB)`,
          });
          isValid = false;
        }
      }
    }
    if (isValid) {
      setImage1('');
      setImage2('');
      setImage3('');
      setImagesErrors({
        imagesRequiredError: '',
      });

      for (let i = 0; i < imagesArray.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(imagesArray[i]);
        reader.onloadend = () => {
          if (i === 0) {
            setImage1(reader.result);
          }
          if (i === 1) {
            setImage2(reader.result);
          }
          if (i === 2) {
            setImage3(reader.result);
          }
        };
      }
    }
  };

  if (image1.length > 0) imagesConatiner.push(image1);
  if (image2.length > 0) imagesConatiner.push(image2);
  if (image3.length > 0) imagesConatiner.push(image3);

  return {
    handleFileInputChange,
    imagesConatiner,
    imagesErrors,
  };
};

export default useImagesHandler;
