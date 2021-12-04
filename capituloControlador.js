
const Capitulo=require("./capitulo.js");

exports.get=("/",function(req,res){
	console.log("get capitulo ejecutado");
	var nombres=[];
	Capitulo.find({},"name numeroDePag",function(err,docs){
		
		for(var i=docs.length-1;i>=0;i--){
			nombres.push(docs[i]);
		}	
		res.status(200).send(nombres);
		res.end();
	});	
	//console.log(docs);
});

exports.post=("/",function(req,res){
	console.log("post capitulo ejecutado");
	
	var capitulo=new Capitulo({name:req.query.name,numeroDePag:req.query.total});
	capitulo.save(function(){
		//console.log(req.query);	
	});
	res.status(200).send("Subido");
	res.end();
});

exports.delete=("/",function(req,res){
	console.log("delete capitulo ejecutado");
	Capitulo.remove({name:req.query.name},function(err){});
	res.status(200).send("Echo");
});

exports.put=('/',function(req,res){
	const filter={name:req.query.name};
	const update={numeroDePag:req.query.total};
	Capitulo.findOneAndUpdate(filter,update,{new:true},function(){});
	
	res.status(200).send("actualizado");
	res.end();
	console.log(filter);
});