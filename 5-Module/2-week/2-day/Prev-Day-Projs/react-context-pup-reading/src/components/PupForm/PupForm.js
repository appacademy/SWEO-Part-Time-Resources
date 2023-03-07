import { useState } from 'react';
//!!START SILENT
import { usePuppyType } from '../../context/PupContext';
//!!END
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';
import speedy from '../../pups/speedy-pup.jpg';

function PupForm() {
  //!!START SILENT
  const { puppyType, setPuppyType } = usePuppyType();
  const [selectedPup, setSelectedPup] = useState(puppyType);
  //!!END
  //!!ADD
  // const [selectedPup, setSelectedPup] = useState('select');
  //!!END_ADD

  const onSubmit = (e) => {
    e.preventDefault();
    //!!START SILENT
    setPuppyType(selectedPup);
    //!!END
  }

  return (
    <form onSubmit={onSubmit}>
      <select
        name="pup"
        onChange={e => setSelectedPup(e.target.value)}
        value={selectedPup}
      >
        <option value="select" disabled>Select a pup!</option>
        <option value={speedy}>Speedy Pup</option>
        <option value={banana}>Banana Pup</option>
        <option value={sleepy}>Sleepy Pup</option>
      </select>
      <button>
        Submit
      </button>
    </form>
  );
}

export default PupForm;
