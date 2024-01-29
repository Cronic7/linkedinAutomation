import {test,expect} from '@playwright/test';

test('Open Linkedin',async({page})=>{
  await page.goto('https://www.linkedin.com/')
})