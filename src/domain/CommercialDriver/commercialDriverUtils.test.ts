import { RegionId } from 'src/data/region';
import { localeToTranslations } from './commercialDriverUtils';
import { RegionTranslations, Translations } from 'src/types/translations';

test('localeStringToTranslation - Only danish regions with only, has only danish language', async () => {
  const localeString: RegionTranslations<string> = {
    _type: 'localeString',
    dk: { da: 'DK danish' },
  };
  const result = localeToTranslations<string>(localeString, RegionId.Dk);
  const expected: Translations<string> = {
    da: 'DK danish',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - Only danish regions with da, en - has DA and EN ', async () => {
  const localeStringDTO: RegionTranslations<string> = {
    _type: 'localeString',
    dk: { da: 'DK danish', en: 'DK english' },
  };
  const result = localeToTranslations(localeStringDTO, RegionId.Dk);
  const expected: Translations<string> = {
    da: 'DK danish',
    en: 'DK english',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - DK and NA region with DK only DA and using NA En', async () => {
  const localeStringDTO: RegionTranslations<string> = {
    _type: 'localeString',
    dk: { da: 'DK danish' },
    na: { en: 'NA english' },
  };
  const result = localeToTranslations(localeStringDTO, RegionId.Dk);
  const expected: Translations<string> = {
    da: 'DK danish',
    en: 'NA english',
  };

  expect(result).toMatchObject(expected);
});
