**Phone Specifications API**

**The data is based on gsmarena site**

1. List Brands<br>
   [ENDPOINT] /v2/brands<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/brands<br>

2. List Phones<br>
   [ENDPOINT] /v2/brands/{brand_slug}<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2<br>

   Query params table:
   | params | desc | required |
   |--------|------------------|----------|
   | page | page of the data | no |

3. Phone Specifications<br>
   [ENDPOINT] /v2/brands/{brand_slug}/{phone_slug}<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/apple_iphone_12_pro_max-10237<br>

4. Search<br>
   [ENDPOINT] /v2/search<br>
   [GET] http://api-mobilespecs.azharimm.site/v2/search?query= iPhone 12 pro max<br>

   Query params table:
   | params | desc | required |
   |--------|--------------|----------|
   | query | search query | yes |

5. Latest<br>
   [ENDPOINT] /v2/latest<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/latest<br>

6. Top By Interest<br>
   [ENDPOINT] /v2/top-by-interest<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/top-by-interest<br>

7. Top By Fans<br>
   [ENDPOINT] /v2/top-by-fans<br>
   [GET] https://api-mobilespecs.azharimm.site/v2/top-by-fans<br>
