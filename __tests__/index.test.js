const fs = require('fs');
const path = require('path');

describe('Flower Conservatory Main Page', () => {
  let htmlContent;

  beforeAll(() => {
    htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf8'
    );
  });

  test('Содержит кнопку перехода в магазин', () => {
    expect(htmlContent).toContain('В Магазин');
    expect(htmlContent).toContain('href="shop.html"');
  });

  test('Присутствует логотип', () => {
    expect(htmlContent).toContain('flower_icon.png');
    expect(htmlContent).toContain('alt="logo"');
  });
});