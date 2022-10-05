import { usePuppyType } from '../../context/PupContext';

const PupImage = () => {
    const { puppyType, name } = usePuppyType();

    return (
        <div>
            {name}
            <img src={puppyType} alt="pup" />{' '}
        </div>
    );
};

export default PupImage;
