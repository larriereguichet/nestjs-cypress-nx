# nx-nestjs-cypress

This is a minimum reproducible example attempting to run **Cypress** e2e tests against a **nestjs** api
which uses a `dto` annotated with an `@ApiProperty()` decorator from `@nestjs/swagger` in an `nx` repository.

```
npm install
npx nx run my-nest-app-cypress:e2e
```

## Resources
- https://github.com/nestjs/nest/issues/11531
- https://github.com/larriereguichet/nestjs-cypress
