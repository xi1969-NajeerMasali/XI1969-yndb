// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.youneedabudget.com/v1',
  baseUrlCategory : 'https://api.youneedabudget.com/v1/budgets/4dd5b504-888b-4050-9831-6186f5bc8902/categories',
  baseUrlBudget: 'https://api.youneedabudget.com/v1/budgets?include_accounts=true',
  baseUrlAllAccounts: 'https://api.youneedabudget.com/v1/budgets/4dd5b504-888b-4050-9831-6186f5bc8902/accounts',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
