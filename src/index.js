import { createServer } from 'http'
import log4ym from './log4ym.js'
const dataBase = new Map()
console.time("开启耗时")


createServer((request, response) => {
    const url = decodeURI(request.url)
    log4ym(request)
    if(url === '/favicon.ico'){
        response.write(new Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADvMAAA7zARxTmToAAAAHdElNRQfnBQECKwYrXuW9AAAHHklEQVRYw3VXXW/jRhIslVrjMc0wiqJz1o5xt8lDEOQhuP//Jw4IDvdwCO6CJFg4jqLjcpnxaNwq3QNJWfLuUi/kUNPTH9XVxdkBAphQ4cW1K+ECACAAIARCADi+13Bn4yNf7le/u7D5bn+42GsfdppXgxnq3IThw9d+Wy4ft589SYtH6eD50u304OOZfPbyxTXb4/A0O+yxOOw1mx/4wtXxxiCAsJchHK7evp1/ot27cpjP5+FpYdO2YwAcDYCCzg2IOcXDIYc4ezvDVcHean7QTWC2B6EeDOF5MfWhYeqqmnIYIZVcxfc3i8DsAKAkpXB9XC+b9Xsh6WH94XwTQOltaX+WaSl314GApOf8iqu2vAxCkwEL3vtiOtPbxgCA5GmxQtP5s1sSULZZACWw4h/N3VTmrgofSpdC9GmzAEIZ/YODIMT6pppQIq/ehyUAouoHCyRBIPW1+eih+IwSlQ9tBwDGdPoYYtuvbWgQ6jk/bfiYAUQfgh8NrKoYABuycFz2fPux/TAeXQUANYPTOgvZSX3UwvmrqT4nGJXw8d2ARLzXeAZRkxen7X3i2HQrshBTucf8GzUxjnsRbOoyDkXFSdyuDelYERCnvw3dSAKdWzCgLxEA+vsN/h5BIf8QP/0yAKKjCcJDtxShk3YWAFj2NURg1b4SgZ+7dRNUnCF8120+WQuEagPYdCAweQADBZHIBhFCZI6AviUAZdfKmuZOItCXxkWG83rYlA4PINzJetNUNuCLzcijROoVQheK2QtqO2tyFQKp9k2I8bkVKeSOrCP6HADC7YTcbaoHHKKJ27CUp5Q9BhaZAakAMRjBpkv1+/AckWEZANGyySEYPOVeqLKDVpnZkPh6Q5zBGbApm7EHZancthUB2FIYfqQNwRBQwxGPJ0gERBDMJQDdOjMcYU5o6FUOBMpkhnLOjRytq1Qd2IWQqgH2Yi6Q3OEA5JCAkFH66qwdpvbosW6htMwwARK46wWQgabBAOSmwhLP2neIT8hrzttgzNXY4d498mL+6LuLvQ4h7aorCIy5qUqcmkmcksNsxF82vzUqYSCd/f8Ky9Zd7nmXd4fsIqkghDTkh1P8chEpAlXcBzeesOJBsBnDofiMB8AzDR7LeRJzESQFiLZCNsALgPnnwS+aJzvMML+ck3MSyADdeGbBXGIFNwEM8ACUAMJ19VTPdKkBy3VfDwPAHFbCM6XQGjm8DDkJgAElAHCv03zKlGWNgAAIG6s4dCSdIVR5IJyhSfLkXUGBgGnrURWN82U0WFxCzD4URQCehnXERB9YVhRsAKMTQROzDlVwAA6gjOFqkSCZqa7YkCQRKqwJ5ApQgJgGV7oMuREgMkwKtSgHrYiQNqCFCW1WNnUMBiexrbqU1xF9h0rBaBSfIkDkACuAUdhsyvXPb77+fpqd7Q/LcHljYg00ofppHpDKOoAwI6iLFUgIqDZAbelfEfkhfh81dZ4v0XW/ffFVjxqU30XvuToSCrs6iCRLCEpV4H/y61jRjlOIWl/3mff/eLw2oDA12WOQSGh2AHK/vl9GscUSfX9N9TVPhs8gcgmgTXH72rJclRH+yw1/fEUA/TJv4/BP1dyCDYq7jxpn4DDKi5rbFRJoTWgJ4CZqWVHqim0vj4KpfucoIkf6Vr+5//UeGEriWCVkRyhvHIyIt4F957FPjw5AyalqkWDkpDnyfZs29yNuaKgegQx7pV96Ij/8N1tNQLfbbs2UnnINrNrmRJ7lSmyWUywAF2AGyE9/p7WVtkYArGKbY16nrgYqf2iESeisNCLhqALcd21Dvv3kzQpFcdLQTcsl+TZVQGOlj2zrKMpJowjPIRIQCq3/ba9YR13XcNiEFFv2MfBqGymqV1CQe0CQukglC93gU18rf72cBmTAEWqwJinwabsG8u6GdvwECjIhe+lrgsljdxfHFicAzg7P7FTUPl7cih2a4+fAeEnIyZb+EFVXx0EDpDd2ooZCr88AIDfAGfcDJOrq/s3qmiIIf/j5m1XOVWAx6If13fE4C2DyeILjZyf4ahPGSfjP/HrVd+qr6jsD2wCJoKhdsZTefTk5IOo4u0iw6peDVv0mWNdFlm26m/1ylxGKGOiZIXUIazC1u8cSbpfD2QnVELMyIiXRxF+7yz0w/5s9KcJBQl1jaBpA8H/niAAHkofAnx7iFzcRAKuSKggSsLZARuPsMH4AhB41Bp0lKRC7Ehb8cdN8C3SbTb57TQps6yGsY4Im8UDk5XArAoHQu11c4npxpScs/nr9Z/vnlRtA2UTUJ4J04KWjbhKE/R/lcrd1frbQLj9mx80lJKLqffzgOKo1jf5MqoEgp+GD2fyAhfYHcj/IBqszyJMas73vhlRP34U0M2D+ecwXn5OYwy5jYJiPotlwLunNm99Zi31ZnqKX4NUiEJfj8yVEHwSZn0FM/wdc7P9+w554kAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNS0wMVQwMjo0MzowNiswMDowMP1kn2kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDUtMDFUMDI6NDM6MDYrMDA6MDCMOSfVAAAAAElFTkSuQmCC','base64'))
        return response.end()
    }
    
    console.log(url)
    response.setHeader("Content-Type", "text/html;charset=utf8")

	let  i = 1
    let s=url[i]
    while(s=url[++i]){
        if(s==='/')break 
        if(!s)break
    }
    
        // console.log(url[i],i)
    if(i<=1)return response.end()

    let key = url.slice(1,i)

    if(url[i]){
        dataBase.set(key,url.slice(i+1))
        response.write('写成功\u000a\u000a'+key+'\u000a\u000a'+url.slice(i+1))
        response.end()
    }
    else{
        


        dataBase.has(key)
        ?
        response.write('读成功\u000a\u000a'+key+'\u000a\u000a'+dataBase.get(key))
        :
        response.write('不存在这种东西')


        response.end()
    }

    // response.write('hello world')
    response.end()


}).listen(80, () => {
    console.timeEnd("开启耗时")
    console.log('server is running at 127.0.0.1')
})
