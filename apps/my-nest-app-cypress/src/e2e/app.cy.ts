import { CatDto } from '@nestjs-cypress/models'

describe('my-nest-app', () => {
  it('should instantiate a new cat dto', () => {
    new CatDto();
  });
});
