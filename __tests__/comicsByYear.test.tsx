import { one, two, four} from '../data/testData';
import comicsByYear from '../helpers/comicsByYear';

describe("comicsByYear Indexing Function", ()=>{
  it('Returns empty object if comics length is 0', () => {
    expect(comicsByYear([])).toEqual({})
  })

  it('Returns an object with comics indexed by year', () => {
    expect(comicsByYear([one, two, four])).toEqual({
      "21": [one],
      "22": [two, four]
    })
  })
})