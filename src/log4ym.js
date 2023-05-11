import { existsSync, mkdirSync, writeFileSync } from "fs";


const xboy = () =>{//初始化;
    ["./src/log/"+((new Date()).getMonth()+1)]
    .forEach(filePath=>{
        if(!existsSync(filePath))
            mkdirSync(filePath)
    });
    ["./src/log/"+((new Date()).getMonth()+1)+"/"+(new Date()).getDate()+".log"]
    .forEach(filePath=>{
        if(!existsSync(filePath))
            writeFileSync(filePath,"\n", { encoding:"utf8", flag:"w+" } )
    });
};

// ;

// log搅拌机
xboy()
setInterval(()=>xboy(),5000);

const log4ym = (request)=>{
    writeFileSync(
        "./src/log/"+((new Date()).getMonth()+1)+"/"+(new Date()).getDate()+".log",
        new Date()+ '#$#'
        + request.connection.remoteAddress+':'+request.connection.remotePort+" "
        +    request.method+" AT "
        +    request.url+"\n"
        +   String(request.rawHeaders)+"\n"

, { encoding:"utf8", flag:"a+" }
        );
}

export default  log4ym