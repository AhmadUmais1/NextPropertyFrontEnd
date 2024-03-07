
import { spawn } from 'child_process';
import { promisify } from 'util';
import { writeFile } from 'fs';

const exec = promisify(require('child_process').exec);

export default async function handler(req, res) {
  try {
    const { stdout, stderr } = await exec('next-sitemap --config next-sitemap.config.js');
    
    if (stderr) {
      console.error(stderr);
      return res.status(500).json({ error: 'An error occurred while generating the sitemap.' });
    }
    
    res.status(200).json({ message: 'Sitemap generated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the sitemap.' });
  }
}

