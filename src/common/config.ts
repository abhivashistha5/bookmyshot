import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const envJson: AppConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../..', `config/${process.env.NODE_ENV}.json`), 'utf-8')
);

export default envJson;
