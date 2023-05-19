import 'module-alias/register';
import { addAliases  } from "module-alias"; 

addAliases({
    "@base": __dirname + "/structure/base",
	"@Client": __dirname + "/structure/client/client",
    "@clients": __dirname + "/structure/client",

});


process.on("uncaughtException", (error, origin)=>{
	setTimeout(()=>{
	 console.log(` ${error.stack.slice(0, 700)}`);
}, 3000)
  })

