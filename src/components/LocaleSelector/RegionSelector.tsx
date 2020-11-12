import { RegionId, regions } from 'src/data/region';

interface IRegionSelector {
  regionId: RegionId;
  onChange(selectedRegionId: RegionId): void;
}
const RegionSelector = ({ onChange, regionId }: IRegionSelector) => {
  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegionId = e.target.value as RegionId;
    onChange(selectedRegionId);
  };

  return (
    <select value={regionId} onChange={handleChangeRegion}>
      {regions.map((region) => {
        return (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        );
      })}
    </select>
  );
};
export default RegionSelector;
