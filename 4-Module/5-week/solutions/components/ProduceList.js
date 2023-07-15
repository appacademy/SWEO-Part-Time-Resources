import { useSelector } from 'react-redux';
import { getAllProduce } from '../../store/produce';
//!!END
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';

function ProduceList() {
  //!!START SILENT
  const produceArr = useSelector(getAllProduce);
  //!!END
  //!!ADD
  // const produce = {};
  
  // const produceArr = Object.values(produce);
  //!!END_ADD

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;