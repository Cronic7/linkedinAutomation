import {test,expect} from '@playwright/test';

test('Open Linkedin',async({page})=>{
  await page.goto('/')
  const pageTitle=await page.title();
  console.log(pageTitle)
  //expect(page).toHaveURL('https://www.linkedin.com')
   await page.close()
})