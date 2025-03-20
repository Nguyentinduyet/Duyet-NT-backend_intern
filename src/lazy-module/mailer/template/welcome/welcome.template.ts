import * as fs from 'fs';
import { template } from 'lodash';
import * as path from 'path';

export default class WelcomeTemplate {
  private html: any;

  constructor() {
    this.init();
  }

  private async init() {
    const filePath = path.resolve(__dirname, 'welcome.template.hbs');

    if (!fs.existsSync(filePath)) {
      throw new Error(`Template file not found: ${filePath}`);
    }

    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    this.html = template(fileContent);
  }

  public render(context: any) {
    try {
      return this.html ? this.html(context) : 'Template not loaded';
    } catch (e) {
      console.error('Render error:', e);
      return '';
    }
  }
}
