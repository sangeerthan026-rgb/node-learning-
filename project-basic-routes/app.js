import { getOsPlatform,getCpuArch}from './modules/os.module.js'
import {getExtName} from './modules/path.module.js'

function osInformations(){
    const osplatform =getOsPlatform()
    const osArch =getCpuArch()

    console.log("osplatform ====>",osPlatform)
    console.log("osArch ====>",osArch)
}


function pathInformations(){
    const filepath =
    const extname = getExtName(filepath)
    switch(extname.toLowerCase()){
        case '.pdf':
            console.log("You have PDF format File")
            break;
        case '.png':
            console.log("You have PAINT  file")
            break;
        case '.jpeg':
            console.log("You have JPEG format image  file")
            break;
        case '.doc':
        case '.docx':
            console.log("You have document  file")
            break;
        case '.txt':
            console.log("You have text  file")
            break;
        case '.csv':
            console.log("You have excel  file")
            break;
        default:
            console.log("Something went wrong file format is virus")
            }
        }
        pathInformations()