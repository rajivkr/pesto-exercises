import { checkBalancedBraces as balancedBraces } from './balencedParenthesis';

describe('check for balanced braces', () => {
  it('should test if braces are balanced', () => {
    expect(
      balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')
    ).toBe(true);
    expect(
      balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')
    ).toBe(false);
  });
});
