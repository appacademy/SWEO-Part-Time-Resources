//!!ADD
// import speedy from '../../pups/speedy-pup.jpg';
// import banana from '../../pups/banana-pup.jpg';
// import sleepy from '../../pups/sleepy-pup.jpg';
//!!END_ADD
//!!START SILENT
import { usePuppyType } from '../../context/PupContext'
//!!END

const PupImage = () => {
  //!!START SILENT
  const { puppyType } = usePuppyType();
  //!!END
  return (
    //!!START SILENT
    <img src={puppyType} alt="pup" />
    //!!END
    //!!ADD
    // <img src={speedy} alt="pup" />
    //!!END_ADD
  );
};

export default PupImage;
