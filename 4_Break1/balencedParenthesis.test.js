import { checkBalancedBraces as balancedBraces } from './balencedParenthesis';

describe('check for isomorphicsm tests', () => {
  it('should test if values are isomorphic', () => {
    expect(
      balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')
    ).toBe(true);
    expect(
      balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')
    ).toBe(false);
  });
});
