import  Input  from "../models/inputModel.js";

export const uploadInputController = (req, res) => {
  debugger;
  let testInput = new Input({
    user: req.body.user,
    text: req.body.text,
  });

  testInput.save((err)=> {
    if(err){
      res.send(err);
      return err;
    }else{
      res.send("successed");
      return err;

    }})
   
};

export const test = (req, res) => {
  res.send("Hi, this is for the test");
};
