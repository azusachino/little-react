import * as shelljs from 'shelljs'

// shelljs.cp('-R', 'public', 'dist');
// shelljs.cp('-R', 'views', 'dist');
shelljs.find('E:\\Projects\\project-github\\little-code\\python\\medium')
  .filter(file => file.match(/\d+.py/))
  .forEach(
    file => {
      let newFile = file.replace(/\d+.py/, '.py');
      console.log(newFile);
      shelljs.mv(file, newFile);
    }
  )
