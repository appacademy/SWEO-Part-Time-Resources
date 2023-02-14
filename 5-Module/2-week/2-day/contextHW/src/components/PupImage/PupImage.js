import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';
import { useContext } from 'react';
import { PupContext, usePuppyType } from '../../context/PupContext';

const PupImage = () => {
  // const { puppyType } = useContext(PupContext); // classic version
  const { puppyType } = usePuppyType(); // custom context hook
  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;