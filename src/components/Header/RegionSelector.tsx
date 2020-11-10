import { RegionId, regions } from 'src/data/region';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from 'src/store/settingsSlice';
import { RootState } from 'src/store';

const RegionSelector = () => {
  const dispatch = useDispatch();
  const { regionId } = useSelector((state: RootState) => state.settings);

  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegionId = e.target.value as RegionId;
    dispatch(changeRegion(selectedRegionId));
  };

  return (
    <select value={regionId} onChange={handleChangeRegion}>
      {regions.map((region) => {
        return <option value={region.id}>{region.name}</option>;
      })}
    </select>
  );
};
export default RegionSelector;
